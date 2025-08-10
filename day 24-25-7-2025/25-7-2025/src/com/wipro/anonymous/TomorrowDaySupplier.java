package com.wipro.anonymous;
import java.time.LocalDate;
import java.time.format.TextStyle;
import java.util.Locale;
import java.util.function.Supplier;
public class TomorrowDaySupplier  {
    public static void main(String[] args) {
        Supplier<String> tomorrowDay = () -> 
            LocalDate.now().plusDays(1)
                      .getDayOfWeek()
                      .getDisplayName(TextStyle.FULL, Locale.ENGLISH);
        System.out.println("Tomorrow is: " + tomorrowDay.get());
    }
}