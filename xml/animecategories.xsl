<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">  
  
   <xsl:template match="animes">
Death note fue lanzado en: 
    <xsl:value-of select= "animes[2]/year"> </xsl:value-of>
  </xsl:template>

</xsl:stylesheet>
