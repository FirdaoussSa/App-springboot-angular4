package com.example.shop.models;

import java.util.Comparator;

public class SortShops implements Comparator<Shop> {

	 Location currentLoc;

	    public SortShops(Location current){
	        currentLoc = current;
	    }
	    @Override
	    public int compare(final Shop shop1, final Shop shop2) {
	    	
	    		double[] currentCordinate=new double[2];
	    		currentCordinate=currentLoc.getCoordinates();
	    		double[] cordinate1=new double[2];
	    		double[] cordinate2=new double[2];
	    		cordinate1=shop1.getLocation().getCoordinates();
	    		cordinate2=shop2.getLocation().getCoordinates();
	    		
	        double lat1 = cordinate1[0];
	        double lon1 = cordinate1[1];
	        double lat2 =cordinate2[0];
	        double lon2 =cordinate2[1];
	        
	        
	        double distanceToPlace1 = distance(currentCordinate[0],currentCordinate[1], lat1, lon1);
	        double distanceToPlace2 = distance(currentCordinate[0],currentCordinate[1], lat2, lon2);
	        
	        return (int) (distanceToPlace1 - distanceToPlace2);
	    }

	    public double distance(double fromLat, double fromLon, double toLat, double toLon) {
	        double radius = 6378137;   // approximate Earth radius, *in meters*
	        double deltaLat = toLat - fromLat;
	        double deltaLon = toLon - fromLon;
	        double angle = 2 * Math.asin( Math.sqrt(
	                Math.pow(Math.sin(deltaLat/2), 2) +
	                        Math.cos(fromLat) * Math.cos(toLat) *
	                                Math.pow(Math.sin(deltaLon/2), 2) ) );
	        return radius * angle;
	    }
}
