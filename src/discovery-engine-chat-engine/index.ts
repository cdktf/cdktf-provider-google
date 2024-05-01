/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/discovery_engine_chat_engine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DiscoveryEngineChatEngineConfig extends cdktf.TerraformMetaArguments {
  /**
  * The collection ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/discovery_engine_chat_engine#collection_id DiscoveryEngineChatEngine#collection_id}
  */
  readonly collectionId: string;
  /**
  * The data stores associated with this engine. Multiple DataStores in the same Collection can be associated here. All listed DataStores must be 'SOLUTION_TYPE_CHAT'. Adding or removing data stores will force recreation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/discovery_engine_chat_engine#data_store_ids DiscoveryEngineChatEngine#data_store_ids}
  */
  readonly dataStoreIds: string[];
  /**
  * The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/discovery_engine_chat_engine#display_name DiscoveryEngineChatEngine#display_name}
  */
  readonly displayName: string;
  /**
  * The ID to use for chat engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/discovery_engine_chat_engine#engine_id DiscoveryEngineChatEngine#engine_id}
  */
  readonly engineId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/discovery_engine_chat_engine#id DiscoveryEngineChatEngine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The industry vertical that the chat engine registers. Vertical on Engine has to match vertical of the DataStore linked to the engine. Default value: "GENERIC" Possible values: ["GENERIC"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/discovery_engine_chat_engine#industry_vertical DiscoveryEngineChatEngine#industry_vertical}
  */
  readonly industryVertical?: string;
  /**
  * Location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/discovery_engine_chat_engine#location DiscoveryEngineChatEngine#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/discovery_engine_chat_engine#project DiscoveryEngineChatEngine#project}
  */
  readonly project?: string;
  /**
  * chat_engine_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/discovery_engine_chat_engine#chat_engine_config DiscoveryEngineChatEngine#chat_engine_config}
  */
  readonly chatEngineConfig: DiscoveryEngineChatEngineChatEngineConfig;
  /**
  * common_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/discovery_engine_chat_engine#common_config DiscoveryEngineChatEngine#common_config}
  */
  readonly commonConfig?: DiscoveryEngineChatEngineCommonConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/discovery_engine_chat_engine#timeouts DiscoveryEngineChatEngine#timeouts}
  */
  readonly timeouts?: DiscoveryEngineChatEngineTimeouts;
}
export interface DiscoveryEngineChatEngineChatEngineMetadata {
}

export function discoveryEngineChatEngineChatEngineMetadataToTerraform(struct?: DiscoveryEngineChatEngineChatEngineMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function discoveryEngineChatEngineChatEngineMetadataToHclTerraform(struct?: DiscoveryEngineChatEngineChatEngineMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DiscoveryEngineChatEngineChatEngineMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DiscoveryEngineChatEngineChatEngineMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineChatEngineChatEngineMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dialogflow_agent - computed: true, optional: false, required: false
  public get dialogflowAgent() {
    return this.getStringAttribute('dialogflow_agent');
  }
}

export class DiscoveryEngineChatEngineChatEngineMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DiscoveryEngineChatEngineChatEngineMetadataOutputReference {
    return new DiscoveryEngineChatEngineChatEngineMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig {
  /**
  * Name of the company, organization or other entity that the agent represents. Used for knowledge connector LLM prompt and for knowledge search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/discovery_engine_chat_engine#business DiscoveryEngineChatEngine#business}
  */
  readonly business?: string;
  /**
  * The default language of the agent as a language tag. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/discovery_engine_chat_engine#default_language_code DiscoveryEngineChatEngine#default_language_code}
  */
  readonly defaultLanguageCode: string;
  /**
  * Agent location for Agent creation, currently supported values: global/us/eu, it needs to be the same region as the Chat Engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/discovery_engine_chat_engine#location DiscoveryEngineChatEngine#location}
  */
  readonly location?: string;
  /**
  * The time zone of the agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/discovery_engine_chat_engine#time_zone DiscoveryEngineChatEngine#time_zone}
  */
  readonly timeZone: string;
}

export function discoveryEngineChatEngineChatEngineConfigAgentCreationConfigToTerraform(struct?: DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference | DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    business: cdktf.stringToTerraform(struct!.business),
    default_language_code: cdktf.stringToTerraform(struct!.defaultLanguageCode),
    location: cdktf.stringToTerraform(struct!.location),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}


export function discoveryEngineChatEngineChatEngineConfigAgentCreationConfigToHclTerraform(struct?: DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference | DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    business: {
      value: cdktf.stringToHclTerraform(struct!.business),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_language_code: {
      value: cdktf.stringToHclTerraform(struct!.defaultLanguageCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._business !== undefined) {
      hasAnyValues = true;
      internalValueResult.business = this._business;
    }
    if (this._defaultLanguageCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultLanguageCode = this._defaultLanguageCode;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._business = undefined;
      this._defaultLanguageCode = undefined;
      this._location = undefined;
      this._timeZone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._business = value.business;
      this._defaultLanguageCode = value.defaultLanguageCode;
      this._location = value.location;
      this._timeZone = value.timeZone;
    }
  }

  // business - computed: false, optional: true, required: false
  private _business?: string; 
  public get business() {
    return this.getStringAttribute('business');
  }
  public set business(value: string) {
    this._business = value;
  }
  public resetBusiness() {
    this._business = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessInput() {
    return this._business;
  }

  // default_language_code - computed: false, optional: false, required: true
  private _defaultLanguageCode?: string; 
  public get defaultLanguageCode() {
    return this.getStringAttribute('default_language_code');
  }
  public set defaultLanguageCode(value: string) {
    this._defaultLanguageCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLanguageCodeInput() {
    return this._defaultLanguageCode;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}
export interface DiscoveryEngineChatEngineChatEngineConfig {
  /**
  * agent_creation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/discovery_engine_chat_engine#agent_creation_config DiscoveryEngineChatEngine#agent_creation_config}
  */
  readonly agentCreationConfig: DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig;
}

export function discoveryEngineChatEngineChatEngineConfigToTerraform(struct?: DiscoveryEngineChatEngineChatEngineConfigOutputReference | DiscoveryEngineChatEngineChatEngineConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_creation_config: discoveryEngineChatEngineChatEngineConfigAgentCreationConfigToTerraform(struct!.agentCreationConfig),
  }
}


export function discoveryEngineChatEngineChatEngineConfigToHclTerraform(struct?: DiscoveryEngineChatEngineChatEngineConfigOutputReference | DiscoveryEngineChatEngineChatEngineConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_creation_config: {
      value: discoveryEngineChatEngineChatEngineConfigAgentCreationConfigToHclTerraform(struct!.agentCreationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineChatEngineChatEngineConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineChatEngineChatEngineConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentCreationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentCreationConfig = this._agentCreationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineChatEngineChatEngineConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agentCreationConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agentCreationConfig.internalValue = value.agentCreationConfig;
    }
  }

  // agent_creation_config - computed: false, optional: false, required: true
  private _agentCreationConfig = new DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference(this, "agent_creation_config");
  public get agentCreationConfig() {
    return this._agentCreationConfig;
  }
  public putAgentCreationConfig(value: DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig) {
    this._agentCreationConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentCreationConfigInput() {
    return this._agentCreationConfig.internalValue;
  }
}
export interface DiscoveryEngineChatEngineCommonConfig {
  /**
  * The name of the company, business or entity that is associated with the engine. Setting this may help improve LLM related features.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/discovery_engine_chat_engine#company_name DiscoveryEngineChatEngine#company_name}
  */
  readonly companyName?: string;
}

export function discoveryEngineChatEngineCommonConfigToTerraform(struct?: DiscoveryEngineChatEngineCommonConfigOutputReference | DiscoveryEngineChatEngineCommonConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    company_name: cdktf.stringToTerraform(struct!.companyName),
  }
}


export function discoveryEngineChatEngineCommonConfigToHclTerraform(struct?: DiscoveryEngineChatEngineCommonConfigOutputReference | DiscoveryEngineChatEngineCommonConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    company_name: {
      value: cdktf.stringToHclTerraform(struct!.companyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineChatEngineCommonConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineChatEngineCommonConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._companyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.companyName = this._companyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineChatEngineCommonConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._companyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._companyName = value.companyName;
    }
  }

  // company_name - computed: false, optional: true, required: false
  private _companyName?: string; 
  public get companyName() {
    return this.getStringAttribute('company_name');
  }
  public set companyName(value: string) {
    this._companyName = value;
  }
  public resetCompanyName() {
    this._companyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyNameInput() {
    return this._companyName;
  }
}
export interface DiscoveryEngineChatEngineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/discovery_engine_chat_engine#create DiscoveryEngineChatEngine#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/discovery_engine_chat_engine#delete DiscoveryEngineChatEngine#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/discovery_engine_chat_engine#update DiscoveryEngineChatEngine#update}
  */
  readonly update?: string;
}

export function discoveryEngineChatEngineTimeoutsToTerraform(struct?: DiscoveryEngineChatEngineTimeouts | cdktf.IResolvable): any {
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


export function discoveryEngineChatEngineTimeoutsToHclTerraform(struct?: DiscoveryEngineChatEngineTimeouts | cdktf.IResolvable): any {
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

export class DiscoveryEngineChatEngineTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DiscoveryEngineChatEngineTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DiscoveryEngineChatEngineTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/discovery_engine_chat_engine google_discovery_engine_chat_engine}
*/
export class DiscoveryEngineChatEngine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_discovery_engine_chat_engine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DiscoveryEngineChatEngine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DiscoveryEngineChatEngine to import
  * @param importFromId The id of the existing DiscoveryEngineChatEngine that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/discovery_engine_chat_engine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DiscoveryEngineChatEngine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_discovery_engine_chat_engine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/discovery_engine_chat_engine google_discovery_engine_chat_engine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DiscoveryEngineChatEngineConfig
  */
  public constructor(scope: Construct, id: string, config: DiscoveryEngineChatEngineConfig) {
    super(scope, id, {
      terraformResourceType: 'google_discovery_engine_chat_engine',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.27.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._collectionId = config.collectionId;
    this._dataStoreIds = config.dataStoreIds;
    this._displayName = config.displayName;
    this._engineId = config.engineId;
    this._id = config.id;
    this._industryVertical = config.industryVertical;
    this._location = config.location;
    this._project = config.project;
    this._chatEngineConfig.internalValue = config.chatEngineConfig;
    this._commonConfig.internalValue = config.commonConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // chat_engine_metadata - computed: true, optional: false, required: false
  private _chatEngineMetadata = new DiscoveryEngineChatEngineChatEngineMetadataList(this, "chat_engine_metadata", false);
  public get chatEngineMetadata() {
    return this._chatEngineMetadata;
  }

  // collection_id - computed: false, optional: false, required: true
  private _collectionId?: string; 
  public get collectionId() {
    return this.getStringAttribute('collection_id');
  }
  public set collectionId(value: string) {
    this._collectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionIdInput() {
    return this._collectionId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data_store_ids - computed: false, optional: false, required: true
  private _dataStoreIds?: string[]; 
  public get dataStoreIds() {
    return this.getListAttribute('data_store_ids');
  }
  public set dataStoreIds(value: string[]) {
    this._dataStoreIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreIdsInput() {
    return this._dataStoreIds;
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

  // engine_id - computed: false, optional: false, required: true
  private _engineId?: string; 
  public get engineId() {
    return this.getStringAttribute('engine_id');
  }
  public set engineId(value: string) {
    this._engineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineIdInput() {
    return this._engineId;
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

  // industry_vertical - computed: false, optional: true, required: false
  private _industryVertical?: string; 
  public get industryVertical() {
    return this.getStringAttribute('industry_vertical');
  }
  public set industryVertical(value: string) {
    this._industryVertical = value;
  }
  public resetIndustryVertical() {
    this._industryVertical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get industryVerticalInput() {
    return this._industryVertical;
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // chat_engine_config - computed: false, optional: false, required: true
  private _chatEngineConfig = new DiscoveryEngineChatEngineChatEngineConfigOutputReference(this, "chat_engine_config");
  public get chatEngineConfig() {
    return this._chatEngineConfig;
  }
  public putChatEngineConfig(value: DiscoveryEngineChatEngineChatEngineConfig) {
    this._chatEngineConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chatEngineConfigInput() {
    return this._chatEngineConfig.internalValue;
  }

  // common_config - computed: false, optional: true, required: false
  private _commonConfig = new DiscoveryEngineChatEngineCommonConfigOutputReference(this, "common_config");
  public get commonConfig() {
    return this._commonConfig;
  }
  public putCommonConfig(value: DiscoveryEngineChatEngineCommonConfig) {
    this._commonConfig.internalValue = value;
  }
  public resetCommonConfig() {
    this._commonConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonConfigInput() {
    return this._commonConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DiscoveryEngineChatEngineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DiscoveryEngineChatEngineTimeouts) {
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
      collection_id: cdktf.stringToTerraform(this._collectionId),
      data_store_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dataStoreIds),
      display_name: cdktf.stringToTerraform(this._displayName),
      engine_id: cdktf.stringToTerraform(this._engineId),
      id: cdktf.stringToTerraform(this._id),
      industry_vertical: cdktf.stringToTerraform(this._industryVertical),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      chat_engine_config: discoveryEngineChatEngineChatEngineConfigToTerraform(this._chatEngineConfig.internalValue),
      common_config: discoveryEngineChatEngineCommonConfigToTerraform(this._commonConfig.internalValue),
      timeouts: discoveryEngineChatEngineTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      collection_id: {
        value: cdktf.stringToHclTerraform(this._collectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_store_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dataStoreIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_id: {
        value: cdktf.stringToHclTerraform(this._engineId),
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
      chat_engine_config: {
        value: discoveryEngineChatEngineChatEngineConfigToHclTerraform(this._chatEngineConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiscoveryEngineChatEngineChatEngineConfigList",
      },
      common_config: {
        value: discoveryEngineChatEngineCommonConfigToHclTerraform(this._commonConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiscoveryEngineChatEngineCommonConfigList",
      },
      timeouts: {
        value: discoveryEngineChatEngineTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DiscoveryEngineChatEngineTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
