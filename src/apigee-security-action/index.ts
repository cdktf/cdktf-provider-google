/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApigeeSecurityActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * If unset, this would apply to all proxies in the environment.
  * If set, this action is enforced only if at least one proxy in the repeated
  * list is deployed at the time of enforcement. If set, several restrictions are enforced on SecurityActions.
  * There can be at most 100 enabled actions with proxies set in an env.
  * Several other restrictions apply on conditions and are detailed later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#api_proxies ApigeeSecurityAction#api_proxies}
  */
  readonly apiProxies?: string[];
  /**
  * An optional user provided description of the SecurityAction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#description ApigeeSecurityAction#description}
  */
  readonly description?: string;
  /**
  * The Apigee environment that this security action applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#env_id ApigeeSecurityAction#env_id}
  */
  readonly envId: string;
  /**
  * The expiration for this SecurityAction.
  * Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9
  * fractional digits. Offsets other than "Z" are also accepted.
  * Examples: "2014-10-02T15:01:23Z", "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#expire_time ApigeeSecurityAction#expire_time}
  */
  readonly expireTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#id ApigeeSecurityAction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The organization that this security action applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#org_id ApigeeSecurityAction#org_id}
  */
  readonly orgId: string;
  /**
  * The ID to use for the SecurityAction, which will become the final component of the action's resource name.
  * This value should be 0-61 characters, and valid format is (^a-z?$).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#security_action_id ApigeeSecurityAction#security_action_id}
  */
  readonly securityActionId: string;
  /**
  * Only an ENABLED SecurityAction is enforced. An ENABLED SecurityAction past its expiration time will not be enforced. Possible values: ["ENABLED", "DISABLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#state ApigeeSecurityAction#state}
  */
  readonly state: string;
  /**
  * The TTL for this SecurityAction.
  * A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#ttl ApigeeSecurityAction#ttl}
  */
  readonly ttl?: string;
  /**
  * allow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#allow ApigeeSecurityAction#allow}
  */
  readonly allow?: ApigeeSecurityActionAllow;
  /**
  * condition_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#condition_config ApigeeSecurityAction#condition_config}
  */
  readonly conditionConfig: ApigeeSecurityActionConditionConfig;
  /**
  * deny block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#deny ApigeeSecurityAction#deny}
  */
  readonly deny?: ApigeeSecurityActionDeny;
  /**
  * flag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#flag ApigeeSecurityAction#flag}
  */
  readonly flag?: ApigeeSecurityActionFlag;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#timeouts ApigeeSecurityAction#timeouts}
  */
  readonly timeouts?: ApigeeSecurityActionTimeouts;
}
export interface ApigeeSecurityActionAllow {
}

export function apigeeSecurityActionAllowToTerraform(struct?: ApigeeSecurityActionAllowOutputReference | ApigeeSecurityActionAllow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apigeeSecurityActionAllowToHclTerraform(struct?: ApigeeSecurityActionAllowOutputReference | ApigeeSecurityActionAllow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApigeeSecurityActionAllowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigeeSecurityActionAllow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigeeSecurityActionAllow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ApigeeSecurityActionConditionConfig {
  /**
  * A list of accessTokens. Limit 1000 per action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#access_tokens ApigeeSecurityAction#access_tokens}
  */
  readonly accessTokens?: string[];
  /**
  * A list of API keys. Limit 1000 per action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#api_keys ApigeeSecurityAction#api_keys}
  */
  readonly apiKeys?: string[];
  /**
  * A list of API Products. Limit 1000 per action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#api_products ApigeeSecurityAction#api_products}
  */
  readonly apiProducts?: string[];
  /**
  * A list of ASN numbers to act on, e.g. 23. https://en.wikipedia.org/wiki/Autonomous_system_(Internet)
  * This uses int64 instead of uint32 because of https://linter.aip.dev/141/forbidden-types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#asns ApigeeSecurityAction#asns}
  */
  readonly asns?: string[];
  /**
  * A list of Bot Reasons. Current options: Flooder, Brute Guessor, Static Content Scraper,
  * OAuth Abuser, Robot Abuser, TorListRule, Advanced Anomaly Detection, Advanced API Scraper,
  * Search Engine Crawlers, Public Clouds, Public Cloud AWS, Public Cloud Azure, and Public Cloud Google.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#bot_reasons ApigeeSecurityAction#bot_reasons}
  */
  readonly botReasons?: string[];
  /**
  * A list of developer apps. Limit 1000 per action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#developer_apps ApigeeSecurityAction#developer_apps}
  */
  readonly developerApps?: string[];
  /**
  * A list of developers. Limit 1000 per action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#developers ApigeeSecurityAction#developers}
  */
  readonly developers?: string[];
  /**
  * Act only on particular HTTP methods. E.g. A read-only API can block POST/PUT/DELETE methods.
  * Accepted values are: GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE and PATCH.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#http_methods ApigeeSecurityAction#http_methods}
  */
  readonly httpMethods?: string[];
  /**
  * A list of IP addresses. This could be either IPv4 or IPv6. Limited to 100 per action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#ip_address_ranges ApigeeSecurityAction#ip_address_ranges}
  */
  readonly ipAddressRanges?: string[];
  /**
  * A list of countries/region codes to act on, e.g. US. This follows https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#region_codes ApigeeSecurityAction#region_codes}
  */
  readonly regionCodes?: string[];
  /**
  * A list of user agents to deny. We look for exact matches. Limit 50 per action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#user_agents ApigeeSecurityAction#user_agents}
  */
  readonly userAgents?: string[];
}

export function apigeeSecurityActionConditionConfigToTerraform(struct?: ApigeeSecurityActionConditionConfigOutputReference | ApigeeSecurityActionConditionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_tokens: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessTokens),
    api_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiKeys),
    api_products: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiProducts),
    asns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.asns),
    bot_reasons: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.botReasons),
    developer_apps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.developerApps),
    developers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.developers),
    http_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.httpMethods),
    ip_address_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddressRanges),
    region_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regionCodes),
    user_agents: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userAgents),
  }
}


export function apigeeSecurityActionConditionConfigToHclTerraform(struct?: ApigeeSecurityActionConditionConfigOutputReference | ApigeeSecurityActionConditionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_tokens: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessTokens),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    api_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apiKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    api_products: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apiProducts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    asns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.asns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    bot_reasons: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.botReasons),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    developer_apps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.developerApps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    developers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.developers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    http_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.httpMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip_address_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddressRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    region_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regionCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    user_agents: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userAgents),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigeeSecurityActionConditionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigeeSecurityActionConditionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokens = this._accessTokens;
    }
    if (this._apiKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeys = this._apiKeys;
    }
    if (this._apiProducts !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiProducts = this._apiProducts;
    }
    if (this._asns !== undefined) {
      hasAnyValues = true;
      internalValueResult.asns = this._asns;
    }
    if (this._botReasons !== undefined) {
      hasAnyValues = true;
      internalValueResult.botReasons = this._botReasons;
    }
    if (this._developerApps !== undefined) {
      hasAnyValues = true;
      internalValueResult.developerApps = this._developerApps;
    }
    if (this._developers !== undefined) {
      hasAnyValues = true;
      internalValueResult.developers = this._developers;
    }
    if (this._httpMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethods = this._httpMethods;
    }
    if (this._ipAddressRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressRanges = this._ipAddressRanges;
    }
    if (this._regionCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionCodes = this._regionCodes;
    }
    if (this._userAgents !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAgents = this._userAgents;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigeeSecurityActionConditionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessTokens = undefined;
      this._apiKeys = undefined;
      this._apiProducts = undefined;
      this._asns = undefined;
      this._botReasons = undefined;
      this._developerApps = undefined;
      this._developers = undefined;
      this._httpMethods = undefined;
      this._ipAddressRanges = undefined;
      this._regionCodes = undefined;
      this._userAgents = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessTokens = value.accessTokens;
      this._apiKeys = value.apiKeys;
      this._apiProducts = value.apiProducts;
      this._asns = value.asns;
      this._botReasons = value.botReasons;
      this._developerApps = value.developerApps;
      this._developers = value.developers;
      this._httpMethods = value.httpMethods;
      this._ipAddressRanges = value.ipAddressRanges;
      this._regionCodes = value.regionCodes;
      this._userAgents = value.userAgents;
    }
  }

  // access_tokens - computed: false, optional: true, required: false
  private _accessTokens?: string[]; 
  public get accessTokens() {
    return this.getListAttribute('access_tokens');
  }
  public set accessTokens(value: string[]) {
    this._accessTokens = value;
  }
  public resetAccessTokens() {
    this._accessTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokensInput() {
    return this._accessTokens;
  }

  // api_keys - computed: false, optional: true, required: false
  private _apiKeys?: string[]; 
  public get apiKeys() {
    return this.getListAttribute('api_keys');
  }
  public set apiKeys(value: string[]) {
    this._apiKeys = value;
  }
  public resetApiKeys() {
    this._apiKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeysInput() {
    return this._apiKeys;
  }

  // api_products - computed: false, optional: true, required: false
  private _apiProducts?: string[]; 
  public get apiProducts() {
    return this.getListAttribute('api_products');
  }
  public set apiProducts(value: string[]) {
    this._apiProducts = value;
  }
  public resetApiProducts() {
    this._apiProducts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiProductsInput() {
    return this._apiProducts;
  }

  // asns - computed: false, optional: true, required: false
  private _asns?: string[]; 
  public get asns() {
    return this.getListAttribute('asns');
  }
  public set asns(value: string[]) {
    this._asns = value;
  }
  public resetAsns() {
    this._asns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnsInput() {
    return this._asns;
  }

  // bot_reasons - computed: false, optional: true, required: false
  private _botReasons?: string[]; 
  public get botReasons() {
    return this.getListAttribute('bot_reasons');
  }
  public set botReasons(value: string[]) {
    this._botReasons = value;
  }
  public resetBotReasons() {
    this._botReasons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botReasonsInput() {
    return this._botReasons;
  }

  // developer_apps - computed: false, optional: true, required: false
  private _developerApps?: string[]; 
  public get developerApps() {
    return this.getListAttribute('developer_apps');
  }
  public set developerApps(value: string[]) {
    this._developerApps = value;
  }
  public resetDeveloperApps() {
    this._developerApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get developerAppsInput() {
    return this._developerApps;
  }

  // developers - computed: false, optional: true, required: false
  private _developers?: string[]; 
  public get developers() {
    return this.getListAttribute('developers');
  }
  public set developers(value: string[]) {
    this._developers = value;
  }
  public resetDevelopers() {
    this._developers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get developersInput() {
    return this._developers;
  }

  // http_methods - computed: false, optional: true, required: false
  private _httpMethods?: string[]; 
  public get httpMethods() {
    return this.getListAttribute('http_methods');
  }
  public set httpMethods(value: string[]) {
    this._httpMethods = value;
  }
  public resetHttpMethods() {
    this._httpMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodsInput() {
    return this._httpMethods;
  }

  // ip_address_ranges - computed: false, optional: true, required: false
  private _ipAddressRanges?: string[]; 
  public get ipAddressRanges() {
    return this.getListAttribute('ip_address_ranges');
  }
  public set ipAddressRanges(value: string[]) {
    this._ipAddressRanges = value;
  }
  public resetIpAddressRanges() {
    this._ipAddressRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressRangesInput() {
    return this._ipAddressRanges;
  }

  // region_codes - computed: false, optional: true, required: false
  private _regionCodes?: string[]; 
  public get regionCodes() {
    return this.getListAttribute('region_codes');
  }
  public set regionCodes(value: string[]) {
    this._regionCodes = value;
  }
  public resetRegionCodes() {
    this._regionCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionCodesInput() {
    return this._regionCodes;
  }

  // user_agents - computed: false, optional: true, required: false
  private _userAgents?: string[]; 
  public get userAgents() {
    return this.getListAttribute('user_agents');
  }
  public set userAgents(value: string[]) {
    this._userAgents = value;
  }
  public resetUserAgents() {
    this._userAgents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentsInput() {
    return this._userAgents;
  }
}
export interface ApigeeSecurityActionDeny {
  /**
  * The HTTP response code if the Action = DENY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#response_code ApigeeSecurityAction#response_code}
  */
  readonly responseCode?: number;
}

export function apigeeSecurityActionDenyToTerraform(struct?: ApigeeSecurityActionDenyOutputReference | ApigeeSecurityActionDeny): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    response_code: cdktf.numberToTerraform(struct!.responseCode),
  }
}


export function apigeeSecurityActionDenyToHclTerraform(struct?: ApigeeSecurityActionDenyOutputReference | ApigeeSecurityActionDeny): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    response_code: {
      value: cdktf.numberToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigeeSecurityActionDenyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigeeSecurityActionDeny | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigeeSecurityActionDeny | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._responseCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._responseCode = value.responseCode;
    }
  }

  // response_code - computed: false, optional: true, required: false
  private _responseCode?: number; 
  public get responseCode() {
    return this.getNumberAttribute('response_code');
  }
  public set responseCode(value: number) {
    this._responseCode = value;
  }
  public resetResponseCode() {
    this._responseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }
}
export interface ApigeeSecurityActionFlagHeaders {
  /**
  * The header name to be sent to the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#name ApigeeSecurityAction#name}
  */
  readonly name?: string;
  /**
  * The header value to be sent to the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#value ApigeeSecurityAction#value}
  */
  readonly value?: string;
}

export function apigeeSecurityActionFlagHeadersToTerraform(struct?: ApigeeSecurityActionFlagHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apigeeSecurityActionFlagHeadersToHclTerraform(struct?: ApigeeSecurityActionFlagHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigeeSecurityActionFlagHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigeeSecurityActionFlagHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigeeSecurityActionFlagHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApigeeSecurityActionFlagHeadersList extends cdktf.ComplexList {
  public internalValue? : ApigeeSecurityActionFlagHeaders[] | cdktf.IResolvable

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
  public get(index: number): ApigeeSecurityActionFlagHeadersOutputReference {
    return new ApigeeSecurityActionFlagHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigeeSecurityActionFlag {
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#headers ApigeeSecurityAction#headers}
  */
  readonly headers?: ApigeeSecurityActionFlagHeaders[] | cdktf.IResolvable;
}

export function apigeeSecurityActionFlagToTerraform(struct?: ApigeeSecurityActionFlagOutputReference | ApigeeSecurityActionFlag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(apigeeSecurityActionFlagHeadersToTerraform, true)(struct!.headers),
  }
}


export function apigeeSecurityActionFlagToHclTerraform(struct?: ApigeeSecurityActionFlagOutputReference | ApigeeSecurityActionFlag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(apigeeSecurityActionFlagHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "ApigeeSecurityActionFlagHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigeeSecurityActionFlagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigeeSecurityActionFlag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigeeSecurityActionFlag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers.internalValue = value.headers;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new ApigeeSecurityActionFlagHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: ApigeeSecurityActionFlagHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }
}
export interface ApigeeSecurityActionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#create ApigeeSecurityAction#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#delete ApigeeSecurityAction#delete}
  */
  readonly delete?: string;
}

export function apigeeSecurityActionTimeoutsToTerraform(struct?: ApigeeSecurityActionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function apigeeSecurityActionTimeoutsToHclTerraform(struct?: ApigeeSecurityActionTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigeeSecurityActionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApigeeSecurityActionTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigeeSecurityActionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action google_apigee_security_action}
*/
export class ApigeeSecurityAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_apigee_security_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApigeeSecurityAction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApigeeSecurityAction to import
  * @param importFromId The id of the existing ApigeeSecurityAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApigeeSecurityAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_apigee_security_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action google_apigee_security_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApigeeSecurityActionConfig
  */
  public constructor(scope: Construct, id: string, config: ApigeeSecurityActionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_apigee_security_action',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.49.0',
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
    this._apiProxies = config.apiProxies;
    this._description = config.description;
    this._envId = config.envId;
    this._expireTime = config.expireTime;
    this._id = config.id;
    this._orgId = config.orgId;
    this._securityActionId = config.securityActionId;
    this._state = config.state;
    this._ttl = config.ttl;
    this._allow.internalValue = config.allow;
    this._conditionConfig.internalValue = config.conditionConfig;
    this._deny.internalValue = config.deny;
    this._flag.internalValue = config.flag;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_proxies - computed: false, optional: true, required: false
  private _apiProxies?: string[]; 
  public get apiProxies() {
    return this.getListAttribute('api_proxies');
  }
  public set apiProxies(value: string[]) {
    this._apiProxies = value;
  }
  public resetApiProxies() {
    this._apiProxies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiProxiesInput() {
    return this._apiProxies;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // env_id - computed: false, optional: false, required: true
  private _envId?: string; 
  public get envId() {
    return this.getStringAttribute('env_id');
  }
  public set envId(value: string) {
    this._envId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envIdInput() {
    return this._envId;
  }

  // expire_time - computed: false, optional: true, required: false
  private _expireTime?: string; 
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }
  public set expireTime(value: string) {
    this._expireTime = value;
  }
  public resetExpireTime() {
    this._expireTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireTimeInput() {
    return this._expireTime;
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

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // security_action_id - computed: false, optional: false, required: true
  private _securityActionId?: string; 
  public get securityActionId() {
    return this.getStringAttribute('security_action_id');
  }
  public set securityActionId(value: string) {
    this._securityActionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityActionIdInput() {
    return this._securityActionId;
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // allow - computed: false, optional: true, required: false
  private _allow = new ApigeeSecurityActionAllowOutputReference(this, "allow");
  public get allow() {
    return this._allow;
  }
  public putAllow(value: ApigeeSecurityActionAllow) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }

  // condition_config - computed: false, optional: false, required: true
  private _conditionConfig = new ApigeeSecurityActionConditionConfigOutputReference(this, "condition_config");
  public get conditionConfig() {
    return this._conditionConfig;
  }
  public putConditionConfig(value: ApigeeSecurityActionConditionConfig) {
    this._conditionConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionConfigInput() {
    return this._conditionConfig.internalValue;
  }

  // deny - computed: false, optional: true, required: false
  private _deny = new ApigeeSecurityActionDenyOutputReference(this, "deny");
  public get deny() {
    return this._deny;
  }
  public putDeny(value: ApigeeSecurityActionDeny) {
    this._deny.internalValue = value;
  }
  public resetDeny() {
    this._deny.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny.internalValue;
  }

  // flag - computed: false, optional: true, required: false
  private _flag = new ApigeeSecurityActionFlagOutputReference(this, "flag");
  public get flag() {
    return this._flag;
  }
  public putFlag(value: ApigeeSecurityActionFlag) {
    this._flag.internalValue = value;
  }
  public resetFlag() {
    this._flag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagInput() {
    return this._flag.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApigeeSecurityActionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApigeeSecurityActionTimeouts) {
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
      api_proxies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._apiProxies),
      description: cdktf.stringToTerraform(this._description),
      env_id: cdktf.stringToTerraform(this._envId),
      expire_time: cdktf.stringToTerraform(this._expireTime),
      id: cdktf.stringToTerraform(this._id),
      org_id: cdktf.stringToTerraform(this._orgId),
      security_action_id: cdktf.stringToTerraform(this._securityActionId),
      state: cdktf.stringToTerraform(this._state),
      ttl: cdktf.stringToTerraform(this._ttl),
      allow: apigeeSecurityActionAllowToTerraform(this._allow.internalValue),
      condition_config: apigeeSecurityActionConditionConfigToTerraform(this._conditionConfig.internalValue),
      deny: apigeeSecurityActionDenyToTerraform(this._deny.internalValue),
      flag: apigeeSecurityActionFlagToTerraform(this._flag.internalValue),
      timeouts: apigeeSecurityActionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_proxies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._apiProxies),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      env_id: {
        value: cdktf.stringToHclTerraform(this._envId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expire_time: {
        value: cdktf.stringToHclTerraform(this._expireTime),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_action_id: {
        value: cdktf.stringToHclTerraform(this._securityActionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.stringToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow: {
        value: apigeeSecurityActionAllowToHclTerraform(this._allow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApigeeSecurityActionAllowList",
      },
      condition_config: {
        value: apigeeSecurityActionConditionConfigToHclTerraform(this._conditionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApigeeSecurityActionConditionConfigList",
      },
      deny: {
        value: apigeeSecurityActionDenyToHclTerraform(this._deny.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApigeeSecurityActionDenyList",
      },
      flag: {
        value: apigeeSecurityActionFlagToHclTerraform(this._flag.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApigeeSecurityActionFlagList",
      },
      timeouts: {
        value: apigeeSecurityActionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApigeeSecurityActionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
