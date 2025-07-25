/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DiscoveryEngineDataStoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * The content config of the data store. Possible values: ["NO_CONTENT", "CONTENT_REQUIRED", "PUBLIC_WEBSITE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#content_config DiscoveryEngineDataStore#content_config}
  */
  readonly contentConfig: string;
  /**
  * If true, an advanced data store for site search will be created. If the
  * data store is not configured as site search (GENERIC vertical and
  * PUBLIC_WEBSITE contentConfig), this flag will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#create_advanced_site_search DiscoveryEngineDataStore#create_advanced_site_search}
  */
  readonly createAdvancedSiteSearch?: boolean | cdktf.IResolvable;
  /**
  * The unique id of the data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#data_store_id DiscoveryEngineDataStore#data_store_id}
  */
  readonly dataStoreId: string;
  /**
  * The display name of the data store. This field must be a UTF-8 encoded
  * string with a length limit of 128 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#display_name DiscoveryEngineDataStore#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#id DiscoveryEngineDataStore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The industry vertical that the data store registers. Possible values: ["GENERIC", "MEDIA", "HEALTHCARE_FHIR"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#industry_vertical DiscoveryEngineDataStore#industry_vertical}
  */
  readonly industryVertical: string;
  /**
  * KMS key resource name which will be used to encrypt resources:
  * '/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{keyId}'
  * The KMS key to be used to protect this DataStore at creation time. Must be
  * set for requests that need to comply with CMEK Org Policy protections.
  * If this field is set and processed successfully, the DataStore will be
  * protected by the KMS key, as indicated in the cmek_config field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#kms_key_name DiscoveryEngineDataStore#kms_key_name}
  */
  readonly kmsKeyName?: string;
  /**
  * The geographic location where the data store should reside. The value can
  * only be one of "global", "us" and "eu".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#location DiscoveryEngineDataStore#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#project DiscoveryEngineDataStore#project}
  */
  readonly project?: string;
  /**
  * A boolean flag indicating whether to skip the default schema creation for
  * the data store. Only enable this flag if you are certain that the default
  * schema is incompatible with your use case.
  * If set to true, you must manually create a schema for the data store
  * before any documents can be ingested.
  * This flag cannot be specified if 'data_store.starting_schema' is
  * specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#skip_default_schema_creation DiscoveryEngineDataStore#skip_default_schema_creation}
  */
  readonly skipDefaultSchemaCreation?: boolean | cdktf.IResolvable;
  /**
  * The solutions that the data store enrolls. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT", "SOLUTION_TYPE_GENERATIVE_CHAT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#solution_types DiscoveryEngineDataStore#solution_types}
  */
  readonly solutionTypes?: string[];
  /**
  * advanced_site_search_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#advanced_site_search_config DiscoveryEngineDataStore#advanced_site_search_config}
  */
  readonly advancedSiteSearchConfig?: DiscoveryEngineDataStoreAdvancedSiteSearchConfig;
  /**
  * document_processing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#document_processing_config DiscoveryEngineDataStore#document_processing_config}
  */
  readonly documentProcessingConfig?: DiscoveryEngineDataStoreDocumentProcessingConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#timeouts DiscoveryEngineDataStore#timeouts}
  */
  readonly timeouts?: DiscoveryEngineDataStoreTimeouts;
}
export interface DiscoveryEngineDataStoreAdvancedSiteSearchConfig {
  /**
  * If set true, automatic refresh is disabled for the DataStore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#disable_automatic_refresh DiscoveryEngineDataStore#disable_automatic_refresh}
  */
  readonly disableAutomaticRefresh?: boolean | cdktf.IResolvable;
  /**
  * If set true, initial indexing is disabled for the DataStore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#disable_initial_index DiscoveryEngineDataStore#disable_initial_index}
  */
  readonly disableInitialIndex?: boolean | cdktf.IResolvable;
}

export function discoveryEngineDataStoreAdvancedSiteSearchConfigToTerraform(struct?: DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference | DiscoveryEngineDataStoreAdvancedSiteSearchConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_automatic_refresh: cdktf.booleanToTerraform(struct!.disableAutomaticRefresh),
    disable_initial_index: cdktf.booleanToTerraform(struct!.disableInitialIndex),
  }
}


export function discoveryEngineDataStoreAdvancedSiteSearchConfigToHclTerraform(struct?: DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference | DiscoveryEngineDataStoreAdvancedSiteSearchConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_automatic_refresh: {
      value: cdktf.booleanToHclTerraform(struct!.disableAutomaticRefresh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_initial_index: {
      value: cdktf.booleanToHclTerraform(struct!.disableInitialIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineDataStoreAdvancedSiteSearchConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableAutomaticRefresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAutomaticRefresh = this._disableAutomaticRefresh;
    }
    if (this._disableInitialIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableInitialIndex = this._disableInitialIndex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineDataStoreAdvancedSiteSearchConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableAutomaticRefresh = undefined;
      this._disableInitialIndex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableAutomaticRefresh = value.disableAutomaticRefresh;
      this._disableInitialIndex = value.disableInitialIndex;
    }
  }

  // disable_automatic_refresh - computed: false, optional: true, required: false
  private _disableAutomaticRefresh?: boolean | cdktf.IResolvable; 
  public get disableAutomaticRefresh() {
    return this.getBooleanAttribute('disable_automatic_refresh');
  }
  public set disableAutomaticRefresh(value: boolean | cdktf.IResolvable) {
    this._disableAutomaticRefresh = value;
  }
  public resetDisableAutomaticRefresh() {
    this._disableAutomaticRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAutomaticRefreshInput() {
    return this._disableAutomaticRefresh;
  }

  // disable_initial_index - computed: false, optional: true, required: false
  private _disableInitialIndex?: boolean | cdktf.IResolvable; 
  public get disableInitialIndex() {
    return this.getBooleanAttribute('disable_initial_index');
  }
  public set disableInitialIndex(value: boolean | cdktf.IResolvable) {
    this._disableInitialIndex = value;
  }
  public resetDisableInitialIndex() {
    this._disableInitialIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInitialIndexInput() {
    return this._disableInitialIndex;
  }
}
export interface DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig {
  /**
  * The token size limit for each chunk.
  * Supported values: 100-500 (inclusive). Default value: 500.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#chunk_size DiscoveryEngineDataStore#chunk_size}
  */
  readonly chunkSize?: number;
  /**
  * Whether to include appending different levels of headings to chunks from the middle of the document to prevent context loss.
  * Default value: False.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#include_ancestor_headings DiscoveryEngineDataStore#include_ancestor_headings}
  */
  readonly includeAncestorHeadings?: boolean | cdktf.IResolvable;
}

export function discoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigToTerraform(struct?: DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference | DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chunk_size: cdktf.numberToTerraform(struct!.chunkSize),
    include_ancestor_headings: cdktf.booleanToTerraform(struct!.includeAncestorHeadings),
  }
}


export function discoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigToHclTerraform(struct?: DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference | DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chunk_size: {
      value: cdktf.numberToHclTerraform(struct!.chunkSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    include_ancestor_headings: {
      value: cdktf.booleanToHclTerraform(struct!.includeAncestorHeadings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chunkSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkSize = this._chunkSize;
    }
    if (this._includeAncestorHeadings !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAncestorHeadings = this._includeAncestorHeadings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._chunkSize = undefined;
      this._includeAncestorHeadings = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._chunkSize = value.chunkSize;
      this._includeAncestorHeadings = value.includeAncestorHeadings;
    }
  }

  // chunk_size - computed: false, optional: true, required: false
  private _chunkSize?: number; 
  public get chunkSize() {
    return this.getNumberAttribute('chunk_size');
  }
  public set chunkSize(value: number) {
    this._chunkSize = value;
  }
  public resetChunkSize() {
    this._chunkSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkSizeInput() {
    return this._chunkSize;
  }

  // include_ancestor_headings - computed: false, optional: true, required: false
  private _includeAncestorHeadings?: boolean | cdktf.IResolvable; 
  public get includeAncestorHeadings() {
    return this.getBooleanAttribute('include_ancestor_headings');
  }
  public set includeAncestorHeadings(value: boolean | cdktf.IResolvable) {
    this._includeAncestorHeadings = value;
  }
  public resetIncludeAncestorHeadings() {
    this._includeAncestorHeadings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAncestorHeadingsInput() {
    return this._includeAncestorHeadings;
  }
}
export interface DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig {
  /**
  * layout_based_chunking_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#layout_based_chunking_config DiscoveryEngineDataStore#layout_based_chunking_config}
  */
  readonly layoutBasedChunkingConfig?: DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig;
}

export function discoveryEngineDataStoreDocumentProcessingConfigChunkingConfigToTerraform(struct?: DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference | DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    layout_based_chunking_config: discoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigToTerraform(struct!.layoutBasedChunkingConfig),
  }
}


export function discoveryEngineDataStoreDocumentProcessingConfigChunkingConfigToHclTerraform(struct?: DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference | DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    layout_based_chunking_config: {
      value: discoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigToHclTerraform(struct!.layoutBasedChunkingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._layoutBasedChunkingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layoutBasedChunkingConfig = this._layoutBasedChunkingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._layoutBasedChunkingConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._layoutBasedChunkingConfig.internalValue = value.layoutBasedChunkingConfig;
    }
  }

  // layout_based_chunking_config - computed: false, optional: true, required: false
  private _layoutBasedChunkingConfig = new DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference(this, "layout_based_chunking_config");
  public get layoutBasedChunkingConfig() {
    return this._layoutBasedChunkingConfig;
  }
  public putLayoutBasedChunkingConfig(value: DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig) {
    this._layoutBasedChunkingConfig.internalValue = value;
  }
  public resetLayoutBasedChunkingConfig() {
    this._layoutBasedChunkingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutBasedChunkingConfigInput() {
    return this._layoutBasedChunkingConfig.internalValue;
  }
}
export interface DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig {
}

export function discoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigToTerraform(struct?: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference | DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function discoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigToHclTerraform(struct?: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference | DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig {
  /**
  * If true, the LLM based annotation is added to the image during parsing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#enable_image_annotation DiscoveryEngineDataStore#enable_image_annotation}
  */
  readonly enableImageAnnotation?: boolean | cdktf.IResolvable;
  /**
  * If true, the LLM based annotation is added to the table during parsing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#enable_table_annotation DiscoveryEngineDataStore#enable_table_annotation}
  */
  readonly enableTableAnnotation?: boolean | cdktf.IResolvable;
  /**
  * List of HTML classes to exclude from the parsed content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#exclude_html_classes DiscoveryEngineDataStore#exclude_html_classes}
  */
  readonly excludeHtmlClasses?: string[];
  /**
  * List of HTML elements to exclude from the parsed content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#exclude_html_elements DiscoveryEngineDataStore#exclude_html_elements}
  */
  readonly excludeHtmlElements?: string[];
  /**
  * List of HTML ids to exclude from the parsed content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#exclude_html_ids DiscoveryEngineDataStore#exclude_html_ids}
  */
  readonly excludeHtmlIds?: string[];
  /**
  * Contains the required structure types to extract from the document. Supported values: 'shareholder-structure'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#structured_content_types DiscoveryEngineDataStore#structured_content_types}
  */
  readonly structuredContentTypes?: string[];
}

export function discoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigToTerraform(struct?: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference | DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_image_annotation: cdktf.booleanToTerraform(struct!.enableImageAnnotation),
    enable_table_annotation: cdktf.booleanToTerraform(struct!.enableTableAnnotation),
    exclude_html_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeHtmlClasses),
    exclude_html_elements: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeHtmlElements),
    exclude_html_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeHtmlIds),
    structured_content_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.structuredContentTypes),
  }
}


export function discoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigToHclTerraform(struct?: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference | DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_image_annotation: {
      value: cdktf.booleanToHclTerraform(struct!.enableImageAnnotation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_table_annotation: {
      value: cdktf.booleanToHclTerraform(struct!.enableTableAnnotation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_html_classes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeHtmlClasses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exclude_html_elements: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeHtmlElements),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exclude_html_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeHtmlIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    structured_content_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.structuredContentTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableImageAnnotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableImageAnnotation = this._enableImageAnnotation;
    }
    if (this._enableTableAnnotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTableAnnotation = this._enableTableAnnotation;
    }
    if (this._excludeHtmlClasses !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeHtmlClasses = this._excludeHtmlClasses;
    }
    if (this._excludeHtmlElements !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeHtmlElements = this._excludeHtmlElements;
    }
    if (this._excludeHtmlIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeHtmlIds = this._excludeHtmlIds;
    }
    if (this._structuredContentTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.structuredContentTypes = this._structuredContentTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableImageAnnotation = undefined;
      this._enableTableAnnotation = undefined;
      this._excludeHtmlClasses = undefined;
      this._excludeHtmlElements = undefined;
      this._excludeHtmlIds = undefined;
      this._structuredContentTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableImageAnnotation = value.enableImageAnnotation;
      this._enableTableAnnotation = value.enableTableAnnotation;
      this._excludeHtmlClasses = value.excludeHtmlClasses;
      this._excludeHtmlElements = value.excludeHtmlElements;
      this._excludeHtmlIds = value.excludeHtmlIds;
      this._structuredContentTypes = value.structuredContentTypes;
    }
  }

  // enable_image_annotation - computed: false, optional: true, required: false
  private _enableImageAnnotation?: boolean | cdktf.IResolvable; 
  public get enableImageAnnotation() {
    return this.getBooleanAttribute('enable_image_annotation');
  }
  public set enableImageAnnotation(value: boolean | cdktf.IResolvable) {
    this._enableImageAnnotation = value;
  }
  public resetEnableImageAnnotation() {
    this._enableImageAnnotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableImageAnnotationInput() {
    return this._enableImageAnnotation;
  }

  // enable_table_annotation - computed: false, optional: true, required: false
  private _enableTableAnnotation?: boolean | cdktf.IResolvable; 
  public get enableTableAnnotation() {
    return this.getBooleanAttribute('enable_table_annotation');
  }
  public set enableTableAnnotation(value: boolean | cdktf.IResolvable) {
    this._enableTableAnnotation = value;
  }
  public resetEnableTableAnnotation() {
    this._enableTableAnnotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTableAnnotationInput() {
    return this._enableTableAnnotation;
  }

  // exclude_html_classes - computed: false, optional: true, required: false
  private _excludeHtmlClasses?: string[]; 
  public get excludeHtmlClasses() {
    return this.getListAttribute('exclude_html_classes');
  }
  public set excludeHtmlClasses(value: string[]) {
    this._excludeHtmlClasses = value;
  }
  public resetExcludeHtmlClasses() {
    this._excludeHtmlClasses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeHtmlClassesInput() {
    return this._excludeHtmlClasses;
  }

  // exclude_html_elements - computed: false, optional: true, required: false
  private _excludeHtmlElements?: string[]; 
  public get excludeHtmlElements() {
    return this.getListAttribute('exclude_html_elements');
  }
  public set excludeHtmlElements(value: string[]) {
    this._excludeHtmlElements = value;
  }
  public resetExcludeHtmlElements() {
    this._excludeHtmlElements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeHtmlElementsInput() {
    return this._excludeHtmlElements;
  }

  // exclude_html_ids - computed: false, optional: true, required: false
  private _excludeHtmlIds?: string[]; 
  public get excludeHtmlIds() {
    return this.getListAttribute('exclude_html_ids');
  }
  public set excludeHtmlIds(value: string[]) {
    this._excludeHtmlIds = value;
  }
  public resetExcludeHtmlIds() {
    this._excludeHtmlIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeHtmlIdsInput() {
    return this._excludeHtmlIds;
  }

  // structured_content_types - computed: false, optional: true, required: false
  private _structuredContentTypes?: string[]; 
  public get structuredContentTypes() {
    return this.getListAttribute('structured_content_types');
  }
  public set structuredContentTypes(value: string[]) {
    this._structuredContentTypes = value;
  }
  public resetStructuredContentTypes() {
    this._structuredContentTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get structuredContentTypesInput() {
    return this._structuredContentTypes;
  }
}
export interface DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig {
  /**
  * If true, will use native text instead of OCR text on pages containing native text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#use_native_text DiscoveryEngineDataStore#use_native_text}
  */
  readonly useNativeText?: boolean | cdktf.IResolvable;
}

export function discoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigToTerraform(struct?: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference | DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_native_text: cdktf.booleanToTerraform(struct!.useNativeText),
  }
}


export function discoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigToHclTerraform(struct?: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference | DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    use_native_text: {
      value: cdktf.booleanToHclTerraform(struct!.useNativeText),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._useNativeText !== undefined) {
      hasAnyValues = true;
      internalValueResult.useNativeText = this._useNativeText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._useNativeText = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._useNativeText = value.useNativeText;
    }
  }

  // use_native_text - computed: false, optional: true, required: false
  private _useNativeText?: boolean | cdktf.IResolvable; 
  public get useNativeText() {
    return this.getBooleanAttribute('use_native_text');
  }
  public set useNativeText(value: boolean | cdktf.IResolvable) {
    this._useNativeText = value;
  }
  public resetUseNativeText() {
    this._useNativeText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useNativeTextInput() {
    return this._useNativeText;
  }
}
export interface DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig {
  /**
  * digital_parsing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#digital_parsing_config DiscoveryEngineDataStore#digital_parsing_config}
  */
  readonly digitalParsingConfig?: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig;
  /**
  * layout_parsing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#layout_parsing_config DiscoveryEngineDataStore#layout_parsing_config}
  */
  readonly layoutParsingConfig?: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig;
  /**
  * ocr_parsing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#ocr_parsing_config DiscoveryEngineDataStore#ocr_parsing_config}
  */
  readonly ocrParsingConfig?: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig;
}

export function discoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigToTerraform(struct?: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference | DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digital_parsing_config: discoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigToTerraform(struct!.digitalParsingConfig),
    layout_parsing_config: discoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigToTerraform(struct!.layoutParsingConfig),
    ocr_parsing_config: discoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigToTerraform(struct!.ocrParsingConfig),
  }
}


export function discoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigToHclTerraform(struct?: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference | DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    digital_parsing_config: {
      value: discoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigToHclTerraform(struct!.digitalParsingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigList",
    },
    layout_parsing_config: {
      value: discoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigToHclTerraform(struct!.layoutParsingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigList",
    },
    ocr_parsing_config: {
      value: discoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigToHclTerraform(struct!.ocrParsingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digitalParsingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.digitalParsingConfig = this._digitalParsingConfig?.internalValue;
    }
    if (this._layoutParsingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layoutParsingConfig = this._layoutParsingConfig?.internalValue;
    }
    if (this._ocrParsingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocrParsingConfig = this._ocrParsingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._digitalParsingConfig.internalValue = undefined;
      this._layoutParsingConfig.internalValue = undefined;
      this._ocrParsingConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._digitalParsingConfig.internalValue = value.digitalParsingConfig;
      this._layoutParsingConfig.internalValue = value.layoutParsingConfig;
      this._ocrParsingConfig.internalValue = value.ocrParsingConfig;
    }
  }

  // digital_parsing_config - computed: false, optional: true, required: false
  private _digitalParsingConfig = new DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference(this, "digital_parsing_config");
  public get digitalParsingConfig() {
    return this._digitalParsingConfig;
  }
  public putDigitalParsingConfig(value: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig) {
    this._digitalParsingConfig.internalValue = value;
  }
  public resetDigitalParsingConfig() {
    this._digitalParsingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalParsingConfigInput() {
    return this._digitalParsingConfig.internalValue;
  }

  // layout_parsing_config - computed: false, optional: true, required: false
  private _layoutParsingConfig = new DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference(this, "layout_parsing_config");
  public get layoutParsingConfig() {
    return this._layoutParsingConfig;
  }
  public putLayoutParsingConfig(value: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig) {
    this._layoutParsingConfig.internalValue = value;
  }
  public resetLayoutParsingConfig() {
    this._layoutParsingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutParsingConfigInput() {
    return this._layoutParsingConfig.internalValue;
  }

  // ocr_parsing_config - computed: false, optional: true, required: false
  private _ocrParsingConfig = new DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference(this, "ocr_parsing_config");
  public get ocrParsingConfig() {
    return this._ocrParsingConfig;
  }
  public putOcrParsingConfig(value: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig) {
    this._ocrParsingConfig.internalValue = value;
  }
  public resetOcrParsingConfig() {
    this._ocrParsingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocrParsingConfigInput() {
    return this._ocrParsingConfig.internalValue;
  }
}
export interface DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig {
}

export function discoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigToTerraform(struct?: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference | DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function discoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigToHclTerraform(struct?: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference | DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig {
  /**
  * If true, the LLM based annotation is added to the image during parsing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#enable_image_annotation DiscoveryEngineDataStore#enable_image_annotation}
  */
  readonly enableImageAnnotation?: boolean | cdktf.IResolvable;
  /**
  * If true, the LLM based annotation is added to the table during parsing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#enable_table_annotation DiscoveryEngineDataStore#enable_table_annotation}
  */
  readonly enableTableAnnotation?: boolean | cdktf.IResolvable;
  /**
  * List of HTML classes to exclude from the parsed content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#exclude_html_classes DiscoveryEngineDataStore#exclude_html_classes}
  */
  readonly excludeHtmlClasses?: string[];
  /**
  * List of HTML elements to exclude from the parsed content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#exclude_html_elements DiscoveryEngineDataStore#exclude_html_elements}
  */
  readonly excludeHtmlElements?: string[];
  /**
  * List of HTML ids to exclude from the parsed content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#exclude_html_ids DiscoveryEngineDataStore#exclude_html_ids}
  */
  readonly excludeHtmlIds?: string[];
  /**
  * Contains the required structure types to extract from the document. Supported values: 'shareholder-structure'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#structured_content_types DiscoveryEngineDataStore#structured_content_types}
  */
  readonly structuredContentTypes?: string[];
}

export function discoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigToTerraform(struct?: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference | DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_image_annotation: cdktf.booleanToTerraform(struct!.enableImageAnnotation),
    enable_table_annotation: cdktf.booleanToTerraform(struct!.enableTableAnnotation),
    exclude_html_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeHtmlClasses),
    exclude_html_elements: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeHtmlElements),
    exclude_html_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeHtmlIds),
    structured_content_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.structuredContentTypes),
  }
}


export function discoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigToHclTerraform(struct?: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference | DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_image_annotation: {
      value: cdktf.booleanToHclTerraform(struct!.enableImageAnnotation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_table_annotation: {
      value: cdktf.booleanToHclTerraform(struct!.enableTableAnnotation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_html_classes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeHtmlClasses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exclude_html_elements: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeHtmlElements),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exclude_html_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeHtmlIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    structured_content_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.structuredContentTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableImageAnnotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableImageAnnotation = this._enableImageAnnotation;
    }
    if (this._enableTableAnnotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTableAnnotation = this._enableTableAnnotation;
    }
    if (this._excludeHtmlClasses !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeHtmlClasses = this._excludeHtmlClasses;
    }
    if (this._excludeHtmlElements !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeHtmlElements = this._excludeHtmlElements;
    }
    if (this._excludeHtmlIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeHtmlIds = this._excludeHtmlIds;
    }
    if (this._structuredContentTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.structuredContentTypes = this._structuredContentTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableImageAnnotation = undefined;
      this._enableTableAnnotation = undefined;
      this._excludeHtmlClasses = undefined;
      this._excludeHtmlElements = undefined;
      this._excludeHtmlIds = undefined;
      this._structuredContentTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableImageAnnotation = value.enableImageAnnotation;
      this._enableTableAnnotation = value.enableTableAnnotation;
      this._excludeHtmlClasses = value.excludeHtmlClasses;
      this._excludeHtmlElements = value.excludeHtmlElements;
      this._excludeHtmlIds = value.excludeHtmlIds;
      this._structuredContentTypes = value.structuredContentTypes;
    }
  }

  // enable_image_annotation - computed: false, optional: true, required: false
  private _enableImageAnnotation?: boolean | cdktf.IResolvable; 
  public get enableImageAnnotation() {
    return this.getBooleanAttribute('enable_image_annotation');
  }
  public set enableImageAnnotation(value: boolean | cdktf.IResolvable) {
    this._enableImageAnnotation = value;
  }
  public resetEnableImageAnnotation() {
    this._enableImageAnnotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableImageAnnotationInput() {
    return this._enableImageAnnotation;
  }

  // enable_table_annotation - computed: false, optional: true, required: false
  private _enableTableAnnotation?: boolean | cdktf.IResolvable; 
  public get enableTableAnnotation() {
    return this.getBooleanAttribute('enable_table_annotation');
  }
  public set enableTableAnnotation(value: boolean | cdktf.IResolvable) {
    this._enableTableAnnotation = value;
  }
  public resetEnableTableAnnotation() {
    this._enableTableAnnotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTableAnnotationInput() {
    return this._enableTableAnnotation;
  }

  // exclude_html_classes - computed: false, optional: true, required: false
  private _excludeHtmlClasses?: string[]; 
  public get excludeHtmlClasses() {
    return this.getListAttribute('exclude_html_classes');
  }
  public set excludeHtmlClasses(value: string[]) {
    this._excludeHtmlClasses = value;
  }
  public resetExcludeHtmlClasses() {
    this._excludeHtmlClasses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeHtmlClassesInput() {
    return this._excludeHtmlClasses;
  }

  // exclude_html_elements - computed: false, optional: true, required: false
  private _excludeHtmlElements?: string[]; 
  public get excludeHtmlElements() {
    return this.getListAttribute('exclude_html_elements');
  }
  public set excludeHtmlElements(value: string[]) {
    this._excludeHtmlElements = value;
  }
  public resetExcludeHtmlElements() {
    this._excludeHtmlElements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeHtmlElementsInput() {
    return this._excludeHtmlElements;
  }

  // exclude_html_ids - computed: false, optional: true, required: false
  private _excludeHtmlIds?: string[]; 
  public get excludeHtmlIds() {
    return this.getListAttribute('exclude_html_ids');
  }
  public set excludeHtmlIds(value: string[]) {
    this._excludeHtmlIds = value;
  }
  public resetExcludeHtmlIds() {
    this._excludeHtmlIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeHtmlIdsInput() {
    return this._excludeHtmlIds;
  }

  // structured_content_types - computed: false, optional: true, required: false
  private _structuredContentTypes?: string[]; 
  public get structuredContentTypes() {
    return this.getListAttribute('structured_content_types');
  }
  public set structuredContentTypes(value: string[]) {
    this._structuredContentTypes = value;
  }
  public resetStructuredContentTypes() {
    this._structuredContentTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get structuredContentTypesInput() {
    return this._structuredContentTypes;
  }
}
export interface DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig {
  /**
  * If true, will use native text instead of OCR text on pages containing native text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#use_native_text DiscoveryEngineDataStore#use_native_text}
  */
  readonly useNativeText?: boolean | cdktf.IResolvable;
}

export function discoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigToTerraform(struct?: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference | DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_native_text: cdktf.booleanToTerraform(struct!.useNativeText),
  }
}


export function discoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigToHclTerraform(struct?: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference | DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    use_native_text: {
      value: cdktf.booleanToHclTerraform(struct!.useNativeText),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._useNativeText !== undefined) {
      hasAnyValues = true;
      internalValueResult.useNativeText = this._useNativeText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._useNativeText = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._useNativeText = value.useNativeText;
    }
  }

  // use_native_text - computed: false, optional: true, required: false
  private _useNativeText?: boolean | cdktf.IResolvable; 
  public get useNativeText() {
    return this.getBooleanAttribute('use_native_text');
  }
  public set useNativeText(value: boolean | cdktf.IResolvable) {
    this._useNativeText = value;
  }
  public resetUseNativeText() {
    this._useNativeText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useNativeTextInput() {
    return this._useNativeText;
  }
}
export interface DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#file_type DiscoveryEngineDataStore#file_type}
  */
  readonly fileType: string;
  /**
  * digital_parsing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#digital_parsing_config DiscoveryEngineDataStore#digital_parsing_config}
  */
  readonly digitalParsingConfig?: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig;
  /**
  * layout_parsing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#layout_parsing_config DiscoveryEngineDataStore#layout_parsing_config}
  */
  readonly layoutParsingConfig?: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig;
  /**
  * ocr_parsing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#ocr_parsing_config DiscoveryEngineDataStore#ocr_parsing_config}
  */
  readonly ocrParsingConfig?: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig;
}

export function discoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesToTerraform(struct?: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_type: cdktf.stringToTerraform(struct!.fileType),
    digital_parsing_config: discoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigToTerraform(struct!.digitalParsingConfig),
    layout_parsing_config: discoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigToTerraform(struct!.layoutParsingConfig),
    ocr_parsing_config: discoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigToTerraform(struct!.ocrParsingConfig),
  }
}


export function discoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesToHclTerraform(struct?: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_type: {
      value: cdktf.stringToHclTerraform(struct!.fileType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    digital_parsing_config: {
      value: discoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigToHclTerraform(struct!.digitalParsingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigList",
    },
    layout_parsing_config: {
      value: discoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigToHclTerraform(struct!.layoutParsingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigList",
    },
    ocr_parsing_config: {
      value: discoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigToHclTerraform(struct!.ocrParsingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileType = this._fileType;
    }
    if (this._digitalParsingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.digitalParsingConfig = this._digitalParsingConfig?.internalValue;
    }
    if (this._layoutParsingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layoutParsingConfig = this._layoutParsingConfig?.internalValue;
    }
    if (this._ocrParsingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocrParsingConfig = this._ocrParsingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileType = undefined;
      this._digitalParsingConfig.internalValue = undefined;
      this._layoutParsingConfig.internalValue = undefined;
      this._ocrParsingConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileType = value.fileType;
      this._digitalParsingConfig.internalValue = value.digitalParsingConfig;
      this._layoutParsingConfig.internalValue = value.layoutParsingConfig;
      this._ocrParsingConfig.internalValue = value.ocrParsingConfig;
    }
  }

  // file_type - computed: false, optional: false, required: true
  private _fileType?: string; 
  public get fileType() {
    return this.getStringAttribute('file_type');
  }
  public set fileType(value: string) {
    this._fileType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypeInput() {
    return this._fileType;
  }

  // digital_parsing_config - computed: false, optional: true, required: false
  private _digitalParsingConfig = new DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference(this, "digital_parsing_config");
  public get digitalParsingConfig() {
    return this._digitalParsingConfig;
  }
  public putDigitalParsingConfig(value: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig) {
    this._digitalParsingConfig.internalValue = value;
  }
  public resetDigitalParsingConfig() {
    this._digitalParsingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalParsingConfigInput() {
    return this._digitalParsingConfig.internalValue;
  }

  // layout_parsing_config - computed: false, optional: true, required: false
  private _layoutParsingConfig = new DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference(this, "layout_parsing_config");
  public get layoutParsingConfig() {
    return this._layoutParsingConfig;
  }
  public putLayoutParsingConfig(value: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig) {
    this._layoutParsingConfig.internalValue = value;
  }
  public resetLayoutParsingConfig() {
    this._layoutParsingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutParsingConfigInput() {
    return this._layoutParsingConfig.internalValue;
  }

  // ocr_parsing_config - computed: false, optional: true, required: false
  private _ocrParsingConfig = new DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference(this, "ocr_parsing_config");
  public get ocrParsingConfig() {
    return this._ocrParsingConfig;
  }
  public putOcrParsingConfig(value: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig) {
    this._ocrParsingConfig.internalValue = value;
  }
  public resetOcrParsingConfig() {
    this._ocrParsingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocrParsingConfigInput() {
    return this._ocrParsingConfig.internalValue;
  }
}

export class DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList extends cdktf.ComplexList {
  public internalValue? : DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference {
    return new DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DiscoveryEngineDataStoreDocumentProcessingConfig {
  /**
  * chunking_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#chunking_config DiscoveryEngineDataStore#chunking_config}
  */
  readonly chunkingConfig?: DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig;
  /**
  * default_parsing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#default_parsing_config DiscoveryEngineDataStore#default_parsing_config}
  */
  readonly defaultParsingConfig?: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig;
  /**
  * parsing_config_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#parsing_config_overrides DiscoveryEngineDataStore#parsing_config_overrides}
  */
  readonly parsingConfigOverrides?: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides[] | cdktf.IResolvable;
}

export function discoveryEngineDataStoreDocumentProcessingConfigToTerraform(struct?: DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference | DiscoveryEngineDataStoreDocumentProcessingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chunking_config: discoveryEngineDataStoreDocumentProcessingConfigChunkingConfigToTerraform(struct!.chunkingConfig),
    default_parsing_config: discoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigToTerraform(struct!.defaultParsingConfig),
    parsing_config_overrides: cdktf.listMapper(discoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesToTerraform, true)(struct!.parsingConfigOverrides),
  }
}


export function discoveryEngineDataStoreDocumentProcessingConfigToHclTerraform(struct?: DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference | DiscoveryEngineDataStoreDocumentProcessingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chunking_config: {
      value: discoveryEngineDataStoreDocumentProcessingConfigChunkingConfigToHclTerraform(struct!.chunkingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigList",
    },
    default_parsing_config: {
      value: discoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigToHclTerraform(struct!.defaultParsingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigList",
    },
    parsing_config_overrides: {
      value: cdktf.listMapperHcl(discoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesToHclTerraform, true)(struct!.parsingConfigOverrides),
      isBlock: true,
      type: "set",
      storageClassType: "DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineDataStoreDocumentProcessingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chunkingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkingConfig = this._chunkingConfig?.internalValue;
    }
    if (this._defaultParsingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultParsingConfig = this._defaultParsingConfig?.internalValue;
    }
    if (this._parsingConfigOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parsingConfigOverrides = this._parsingConfigOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineDataStoreDocumentProcessingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._chunkingConfig.internalValue = undefined;
      this._defaultParsingConfig.internalValue = undefined;
      this._parsingConfigOverrides.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._chunkingConfig.internalValue = value.chunkingConfig;
      this._defaultParsingConfig.internalValue = value.defaultParsingConfig;
      this._parsingConfigOverrides.internalValue = value.parsingConfigOverrides;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // chunking_config - computed: false, optional: true, required: false
  private _chunkingConfig = new DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference(this, "chunking_config");
  public get chunkingConfig() {
    return this._chunkingConfig;
  }
  public putChunkingConfig(value: DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig) {
    this._chunkingConfig.internalValue = value;
  }
  public resetChunkingConfig() {
    this._chunkingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkingConfigInput() {
    return this._chunkingConfig.internalValue;
  }

  // default_parsing_config - computed: false, optional: true, required: false
  private _defaultParsingConfig = new DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference(this, "default_parsing_config");
  public get defaultParsingConfig() {
    return this._defaultParsingConfig;
  }
  public putDefaultParsingConfig(value: DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig) {
    this._defaultParsingConfig.internalValue = value;
  }
  public resetDefaultParsingConfig() {
    this._defaultParsingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultParsingConfigInput() {
    return this._defaultParsingConfig.internalValue;
  }

  // parsing_config_overrides - computed: false, optional: true, required: false
  private _parsingConfigOverrides = new DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList(this, "parsing_config_overrides", true);
  public get parsingConfigOverrides() {
    return this._parsingConfigOverrides;
  }
  public putParsingConfigOverrides(value: DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides[] | cdktf.IResolvable) {
    this._parsingConfigOverrides.internalValue = value;
  }
  public resetParsingConfigOverrides() {
    this._parsingConfigOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parsingConfigOverridesInput() {
    return this._parsingConfigOverrides.internalValue;
  }
}
export interface DiscoveryEngineDataStoreTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#create DiscoveryEngineDataStore#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#delete DiscoveryEngineDataStore#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#update DiscoveryEngineDataStore#update}
  */
  readonly update?: string;
}

export function discoveryEngineDataStoreTimeoutsToTerraform(struct?: DiscoveryEngineDataStoreTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function discoveryEngineDataStoreTimeoutsToHclTerraform(struct?: DiscoveryEngineDataStoreTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineDataStoreTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DiscoveryEngineDataStoreTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineDataStoreTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store google_discovery_engine_data_store}
*/
export class DiscoveryEngineDataStore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_discovery_engine_data_store";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DiscoveryEngineDataStore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DiscoveryEngineDataStore to import
  * @param importFromId The id of the existing DiscoveryEngineDataStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DiscoveryEngineDataStore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_discovery_engine_data_store", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/discovery_engine_data_store google_discovery_engine_data_store} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DiscoveryEngineDataStoreConfig
  */
  public constructor(scope: Construct, id: string, config: DiscoveryEngineDataStoreConfig) {
    super(scope, id, {
      terraformResourceType: 'google_discovery_engine_data_store',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.45.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contentConfig = config.contentConfig;
    this._createAdvancedSiteSearch = config.createAdvancedSiteSearch;
    this._dataStoreId = config.dataStoreId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._industryVertical = config.industryVertical;
    this._kmsKeyName = config.kmsKeyName;
    this._location = config.location;
    this._project = config.project;
    this._skipDefaultSchemaCreation = config.skipDefaultSchemaCreation;
    this._solutionTypes = config.solutionTypes;
    this._advancedSiteSearchConfig.internalValue = config.advancedSiteSearchConfig;
    this._documentProcessingConfig.internalValue = config.documentProcessingConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content_config - computed: false, optional: false, required: true
  private _contentConfig?: string; 
  public get contentConfig() {
    return this.getStringAttribute('content_config');
  }
  public set contentConfig(value: string) {
    this._contentConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentConfigInput() {
    return this._contentConfig;
  }

  // create_advanced_site_search - computed: false, optional: true, required: false
  private _createAdvancedSiteSearch?: boolean | cdktf.IResolvable; 
  public get createAdvancedSiteSearch() {
    return this.getBooleanAttribute('create_advanced_site_search');
  }
  public set createAdvancedSiteSearch(value: boolean | cdktf.IResolvable) {
    this._createAdvancedSiteSearch = value;
  }
  public resetCreateAdvancedSiteSearch() {
    this._createAdvancedSiteSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createAdvancedSiteSearchInput() {
    return this._createAdvancedSiteSearch;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data_store_id - computed: false, optional: false, required: true
  private _dataStoreId?: string; 
  public get dataStoreId() {
    return this.getStringAttribute('data_store_id');
  }
  public set dataStoreId(value: string) {
    this._dataStoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreIdInput() {
    return this._dataStoreId;
  }

  // default_schema_id - computed: true, optional: false, required: false
  public get defaultSchemaId() {
    return this.getStringAttribute('default_schema_id');
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // industry_vertical - computed: false, optional: false, required: true
  private _industryVertical?: string; 
  public get industryVertical() {
    return this.getStringAttribute('industry_vertical');
  }
  public set industryVertical(value: string) {
    this._industryVertical = value;
  }
  // Temporarily expose input value. Use with caution.
  public get industryVerticalInput() {
    return this._industryVertical;
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // skip_default_schema_creation - computed: false, optional: true, required: false
  private _skipDefaultSchemaCreation?: boolean | cdktf.IResolvable; 
  public get skipDefaultSchemaCreation() {
    return this.getBooleanAttribute('skip_default_schema_creation');
  }
  public set skipDefaultSchemaCreation(value: boolean | cdktf.IResolvable) {
    this._skipDefaultSchemaCreation = value;
  }
  public resetSkipDefaultSchemaCreation() {
    this._skipDefaultSchemaCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipDefaultSchemaCreationInput() {
    return this._skipDefaultSchemaCreation;
  }

  // solution_types - computed: false, optional: true, required: false
  private _solutionTypes?: string[]; 
  public get solutionTypes() {
    return this.getListAttribute('solution_types');
  }
  public set solutionTypes(value: string[]) {
    this._solutionTypes = value;
  }
  public resetSolutionTypes() {
    this._solutionTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get solutionTypesInput() {
    return this._solutionTypes;
  }

  // advanced_site_search_config - computed: false, optional: true, required: false
  private _advancedSiteSearchConfig = new DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference(this, "advanced_site_search_config");
  public get advancedSiteSearchConfig() {
    return this._advancedSiteSearchConfig;
  }
  public putAdvancedSiteSearchConfig(value: DiscoveryEngineDataStoreAdvancedSiteSearchConfig) {
    this._advancedSiteSearchConfig.internalValue = value;
  }
  public resetAdvancedSiteSearchConfig() {
    this._advancedSiteSearchConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedSiteSearchConfigInput() {
    return this._advancedSiteSearchConfig.internalValue;
  }

  // document_processing_config - computed: false, optional: true, required: false
  private _documentProcessingConfig = new DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference(this, "document_processing_config");
  public get documentProcessingConfig() {
    return this._documentProcessingConfig;
  }
  public putDocumentProcessingConfig(value: DiscoveryEngineDataStoreDocumentProcessingConfig) {
    this._documentProcessingConfig.internalValue = value;
  }
  public resetDocumentProcessingConfig() {
    this._documentProcessingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentProcessingConfigInput() {
    return this._documentProcessingConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DiscoveryEngineDataStoreTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DiscoveryEngineDataStoreTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content_config: cdktf.stringToTerraform(this._contentConfig),
      create_advanced_site_search: cdktf.booleanToTerraform(this._createAdvancedSiteSearch),
      data_store_id: cdktf.stringToTerraform(this._dataStoreId),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      industry_vertical: cdktf.stringToTerraform(this._industryVertical),
      kms_key_name: cdktf.stringToTerraform(this._kmsKeyName),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      skip_default_schema_creation: cdktf.booleanToTerraform(this._skipDefaultSchemaCreation),
      solution_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._solutionTypes),
      advanced_site_search_config: discoveryEngineDataStoreAdvancedSiteSearchConfigToTerraform(this._advancedSiteSearchConfig.internalValue),
      document_processing_config: discoveryEngineDataStoreDocumentProcessingConfigToTerraform(this._documentProcessingConfig.internalValue),
      timeouts: discoveryEngineDataStoreTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content_config: {
        value: cdktf.stringToHclTerraform(this._contentConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_advanced_site_search: {
        value: cdktf.booleanToHclTerraform(this._createAdvancedSiteSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      data_store_id: {
        value: cdktf.stringToHclTerraform(this._dataStoreId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      industry_vertical: {
        value: cdktf.stringToHclTerraform(this._industryVertical),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_name: {
        value: cdktf.stringToHclTerraform(this._kmsKeyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_default_schema_creation: {
        value: cdktf.booleanToHclTerraform(this._skipDefaultSchemaCreation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      solution_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._solutionTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      advanced_site_search_config: {
        value: discoveryEngineDataStoreAdvancedSiteSearchConfigToHclTerraform(this._advancedSiteSearchConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiscoveryEngineDataStoreAdvancedSiteSearchConfigList",
      },
      document_processing_config: {
        value: discoveryEngineDataStoreDocumentProcessingConfigToHclTerraform(this._documentProcessingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiscoveryEngineDataStoreDocumentProcessingConfigList",
      },
      timeouts: {
        value: discoveryEngineDataStoreTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DiscoveryEngineDataStoreTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
