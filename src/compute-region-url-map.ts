// https://www.terraform.io/docs/providers/google/r/compute_region_url_map
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeRegionUrlMapConfig extends cdktf.TerraformMetaArguments {
  /**
  * The full or partial URL of the defaultService resource to which traffic is directed if
none of the hostRules match. If defaultRouteAction is additionally specified, advanced
routing actions like URL Rewrites, etc. take effect prior to sending the request to the
backend. However, if defaultService is specified, defaultRouteAction cannot contain any
weightedBackendServices. Conversely, if routeAction specifies any
weightedBackendServices, service must not be specified.  Only one of defaultService,
defaultUrlRedirect or defaultRouteAction.weightedBackendService must be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#default_service ComputeRegionUrlMap#default_service}
  */
  readonly defaultService?: string;
  /**
  * An optional description of this resource. Provide this property when
you create the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#description ComputeRegionUrlMap#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#id ComputeRegionUrlMap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#name ComputeRegionUrlMap#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#project ComputeRegionUrlMap#project}
  */
  readonly project?: string;
  /**
  * The Region in which the url map should reside.
If it is not provided, the provider region is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#region ComputeRegionUrlMap#region}
  */
  readonly region?: string;
  /**
  * default_url_redirect block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#default_url_redirect ComputeRegionUrlMap#default_url_redirect}
  */
  readonly defaultUrlRedirect?: ComputeRegionUrlMapDefaultUrlRedirect;
  /**
  * host_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#host_rule ComputeRegionUrlMap#host_rule}
  */
  readonly hostRule?: ComputeRegionUrlMapHostRule[] | cdktf.IResolvable;
  /**
  * path_matcher block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#path_matcher ComputeRegionUrlMap#path_matcher}
  */
  readonly pathMatcher?: ComputeRegionUrlMapPathMatcher[] | cdktf.IResolvable;
  /**
  * test block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#test ComputeRegionUrlMap#test}
  */
  readonly test?: ComputeRegionUrlMapTest[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#timeouts ComputeRegionUrlMap#timeouts}
  */
  readonly timeouts?: ComputeRegionUrlMapTimeouts;
}
export interface ComputeRegionUrlMapDefaultUrlRedirect {
  /**
  * The host that will be used in the redirect response instead of the one that was
supplied in the request. The value must be between 1 and 255 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#host_redirect ComputeRegionUrlMap#host_redirect}
  */
  readonly hostRedirect?: string;
  /**
  * If set to true, the URL scheme in the redirected request is set to https. If set to
false, the URL scheme of the redirected request will remain the same as that of the
request. This must only be set for UrlMaps used in TargetHttpProxys. Setting this
true for TargetHttpsProxy is not permitted. The default is set to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#https_redirect ComputeRegionUrlMap#https_redirect}
  */
  readonly httpsRedirect?: boolean | cdktf.IResolvable;
  /**
  * The path that will be used in the redirect response instead of the one that was
supplied in the request. pathRedirect cannot be supplied together with
prefixRedirect. Supply one alone or neither. If neither is supplied, the path of the
original request will be used for the redirect. The value must be between 1 and 1024
characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#path_redirect ComputeRegionUrlMap#path_redirect}
  */
  readonly pathRedirect?: string;
  /**
  * The prefix that replaces the prefixMatch specified in the HttpRouteRuleMatch,
retaining the remaining portion of the URL before redirecting the request.
prefixRedirect cannot be supplied together with pathRedirect. Supply one alone or
neither. If neither is supplied, the path of the original request will be used for
the redirect. The value must be between 1 and 1024 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#prefix_redirect ComputeRegionUrlMap#prefix_redirect}
  */
  readonly prefixRedirect?: string;
  /**
  * The HTTP Status code to use for this RedirectAction. Supported values are:

* MOVED_PERMANENTLY_DEFAULT, which is the default value and corresponds to 301.

* FOUND, which corresponds to 302.

* SEE_OTHER which corresponds to 303.

* TEMPORARY_REDIRECT, which corresponds to 307. In this case, the request method
will be retained.

* PERMANENT_REDIRECT, which corresponds to 308. In this case,
the request method will be retained. Possible values: ["FOUND", "MOVED_PERMANENTLY_DEFAULT", "PERMANENT_REDIRECT", "SEE_OTHER", "TEMPORARY_REDIRECT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#redirect_response_code ComputeRegionUrlMap#redirect_response_code}
  */
  readonly redirectResponseCode?: string;
  /**
  * If set to true, any accompanying query portion of the original URL is removed prior
to redirecting the request. If set to false, the query portion of the original URL is
retained.
 This field is required to ensure an empty block is not set. The normal default value is false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#strip_query ComputeRegionUrlMap#strip_query}
  */
  readonly stripQuery: boolean | cdktf.IResolvable;
}

export function computeRegionUrlMapDefaultUrlRedirectToTerraform(struct?: ComputeRegionUrlMapDefaultUrlRedirectOutputReference | ComputeRegionUrlMapDefaultUrlRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_redirect: cdktf.stringToTerraform(struct!.hostRedirect),
    https_redirect: cdktf.booleanToTerraform(struct!.httpsRedirect),
    path_redirect: cdktf.stringToTerraform(struct!.pathRedirect),
    prefix_redirect: cdktf.stringToTerraform(struct!.prefixRedirect),
    redirect_response_code: cdktf.stringToTerraform(struct!.redirectResponseCode),
    strip_query: cdktf.booleanToTerraform(struct!.stripQuery),
  }
}

export class ComputeRegionUrlMapDefaultUrlRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionUrlMapDefaultUrlRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRedirect = this._hostRedirect;
    }
    if (this._httpsRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsRedirect = this._httpsRedirect;
    }
    if (this._pathRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathRedirect = this._pathRedirect;
    }
    if (this._prefixRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixRedirect = this._prefixRedirect;
    }
    if (this._redirectResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectResponseCode = this._redirectResponseCode;
    }
    if (this._stripQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripQuery = this._stripQuery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapDefaultUrlRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostRedirect = undefined;
      this._httpsRedirect = undefined;
      this._pathRedirect = undefined;
      this._prefixRedirect = undefined;
      this._redirectResponseCode = undefined;
      this._stripQuery = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostRedirect = value.hostRedirect;
      this._httpsRedirect = value.httpsRedirect;
      this._pathRedirect = value.pathRedirect;
      this._prefixRedirect = value.prefixRedirect;
      this._redirectResponseCode = value.redirectResponseCode;
      this._stripQuery = value.stripQuery;
    }
  }

  // host_redirect - computed: false, optional: true, required: false
  private _hostRedirect?: string; 
  public get hostRedirect() {
    return this.getStringAttribute('host_redirect');
  }
  public set hostRedirect(value: string) {
    this._hostRedirect = value;
  }
  public resetHostRedirect() {
    this._hostRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRedirectInput() {
    return this._hostRedirect;
  }

  // https_redirect - computed: false, optional: true, required: false
  private _httpsRedirect?: boolean | cdktf.IResolvable; 
  public get httpsRedirect() {
    return this.getBooleanAttribute('https_redirect');
  }
  public set httpsRedirect(value: boolean | cdktf.IResolvable) {
    this._httpsRedirect = value;
  }
  public resetHttpsRedirect() {
    this._httpsRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsRedirectInput() {
    return this._httpsRedirect;
  }

  // path_redirect - computed: false, optional: true, required: false
  private _pathRedirect?: string; 
  public get pathRedirect() {
    return this.getStringAttribute('path_redirect');
  }
  public set pathRedirect(value: string) {
    this._pathRedirect = value;
  }
  public resetPathRedirect() {
    this._pathRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRedirectInput() {
    return this._pathRedirect;
  }

  // prefix_redirect - computed: false, optional: true, required: false
  private _prefixRedirect?: string; 
  public get prefixRedirect() {
    return this.getStringAttribute('prefix_redirect');
  }
  public set prefixRedirect(value: string) {
    this._prefixRedirect = value;
  }
  public resetPrefixRedirect() {
    this._prefixRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixRedirectInput() {
    return this._prefixRedirect;
  }

  // redirect_response_code - computed: false, optional: true, required: false
  private _redirectResponseCode?: string; 
  public get redirectResponseCode() {
    return this.getStringAttribute('redirect_response_code');
  }
  public set redirectResponseCode(value: string) {
    this._redirectResponseCode = value;
  }
  public resetRedirectResponseCode() {
    this._redirectResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectResponseCodeInput() {
    return this._redirectResponseCode;
  }

  // strip_query - computed: false, optional: false, required: true
  private _stripQuery?: boolean | cdktf.IResolvable; 
  public get stripQuery() {
    return this.getBooleanAttribute('strip_query');
  }
  public set stripQuery(value: boolean | cdktf.IResolvable) {
    this._stripQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stripQueryInput() {
    return this._stripQuery;
  }
}
export interface ComputeRegionUrlMapHostRule {
  /**
  * An optional description of this HostRule. Provide this property
when you create the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#description ComputeRegionUrlMap#description}
  */
  readonly description?: string;
  /**
  * The list of host patterns to match. They must be valid
hostnames, except * will match any string of ([a-z0-9-.]*). In
that case, * must be the first character and must be followed in
the pattern by either - or ..
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#hosts ComputeRegionUrlMap#hosts}
  */
  readonly hosts: string[];
  /**
  * The name of the PathMatcher to use to match the path portion of
the URL if the hostRule matches the URL's host portion.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#path_matcher ComputeRegionUrlMap#path_matcher}
  */
  readonly pathMatcher: string;
}

export function computeRegionUrlMapHostRuleToTerraform(struct?: ComputeRegionUrlMapHostRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    path_matcher: cdktf.stringToTerraform(struct!.pathMatcher),
  }
}

export class ComputeRegionUrlMapHostRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeRegionUrlMapHostRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._pathMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathMatcher = this._pathMatcher;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapHostRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._hosts = undefined;
      this._pathMatcher = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._hosts = value.hosts;
      this._pathMatcher = value.pathMatcher;
    }
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

  // hosts - computed: false, optional: false, required: true
  private _hosts?: string[]; 
  public get hosts() {
    return cdktf.Fn.tolist(this.getListAttribute('hosts'));
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // path_matcher - computed: false, optional: false, required: true
  private _pathMatcher?: string; 
  public get pathMatcher() {
    return this.getStringAttribute('path_matcher');
  }
  public set pathMatcher(value: string) {
    this._pathMatcher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathMatcherInput() {
    return this._pathMatcher;
  }
}

export class ComputeRegionUrlMapHostRuleList extends cdktf.ComplexList {
  public internalValue? : ComputeRegionUrlMapHostRule[] | cdktf.IResolvable

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
  public get(index: number): ComputeRegionUrlMapHostRuleOutputReference {
    return new ComputeRegionUrlMapHostRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeRegionUrlMapPathMatcherDefaultUrlRedirect {
  /**
  * The host that will be used in the redirect response instead of the one that was
supplied in the request. The value must be between 1 and 255 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#host_redirect ComputeRegionUrlMap#host_redirect}
  */
  readonly hostRedirect?: string;
  /**
  * If set to true, the URL scheme in the redirected request is set to https. If set to
false, the URL scheme of the redirected request will remain the same as that of the
request. This must only be set for UrlMaps used in TargetHttpProxys. Setting this
true for TargetHttpsProxy is not permitted. The default is set to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#https_redirect ComputeRegionUrlMap#https_redirect}
  */
  readonly httpsRedirect?: boolean | cdktf.IResolvable;
  /**
  * The path that will be used in the redirect response instead of the one that was
supplied in the request. pathRedirect cannot be supplied together with
prefixRedirect. Supply one alone or neither. If neither is supplied, the path of the
original request will be used for the redirect. The value must be between 1 and 1024
characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#path_redirect ComputeRegionUrlMap#path_redirect}
  */
  readonly pathRedirect?: string;
  /**
  * The prefix that replaces the prefixMatch specified in the HttpRouteRuleMatch,
retaining the remaining portion of the URL before redirecting the request.
prefixRedirect cannot be supplied together with pathRedirect. Supply one alone or
neither. If neither is supplied, the path of the original request will be used for
the redirect. The value must be between 1 and 1024 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#prefix_redirect ComputeRegionUrlMap#prefix_redirect}
  */
  readonly prefixRedirect?: string;
  /**
  * The HTTP Status code to use for this RedirectAction. Supported values are:

* MOVED_PERMANENTLY_DEFAULT, which is the default value and corresponds to 301.

* FOUND, which corresponds to 302.

* SEE_OTHER which corresponds to 303.

* TEMPORARY_REDIRECT, which corresponds to 307. In this case, the request method
will be retained.

* PERMANENT_REDIRECT, which corresponds to 308. In this case,
the request method will be retained. Possible values: ["FOUND", "MOVED_PERMANENTLY_DEFAULT", "PERMANENT_REDIRECT", "SEE_OTHER", "TEMPORARY_REDIRECT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#redirect_response_code ComputeRegionUrlMap#redirect_response_code}
  */
  readonly redirectResponseCode?: string;
  /**
  * If set to true, any accompanying query portion of the original URL is removed prior
to redirecting the request. If set to false, the query portion of the original URL is
retained.
 This field is required to ensure an empty block is not set. The normal default value is false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#strip_query ComputeRegionUrlMap#strip_query}
  */
  readonly stripQuery: boolean | cdktf.IResolvable;
}

export function computeRegionUrlMapPathMatcherDefaultUrlRedirectToTerraform(struct?: ComputeRegionUrlMapPathMatcherDefaultUrlRedirectOutputReference | ComputeRegionUrlMapPathMatcherDefaultUrlRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_redirect: cdktf.stringToTerraform(struct!.hostRedirect),
    https_redirect: cdktf.booleanToTerraform(struct!.httpsRedirect),
    path_redirect: cdktf.stringToTerraform(struct!.pathRedirect),
    prefix_redirect: cdktf.stringToTerraform(struct!.prefixRedirect),
    redirect_response_code: cdktf.stringToTerraform(struct!.redirectResponseCode),
    strip_query: cdktf.booleanToTerraform(struct!.stripQuery),
  }
}

export class ComputeRegionUrlMapPathMatcherDefaultUrlRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionUrlMapPathMatcherDefaultUrlRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRedirect = this._hostRedirect;
    }
    if (this._httpsRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsRedirect = this._httpsRedirect;
    }
    if (this._pathRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathRedirect = this._pathRedirect;
    }
    if (this._prefixRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixRedirect = this._prefixRedirect;
    }
    if (this._redirectResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectResponseCode = this._redirectResponseCode;
    }
    if (this._stripQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripQuery = this._stripQuery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherDefaultUrlRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostRedirect = undefined;
      this._httpsRedirect = undefined;
      this._pathRedirect = undefined;
      this._prefixRedirect = undefined;
      this._redirectResponseCode = undefined;
      this._stripQuery = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostRedirect = value.hostRedirect;
      this._httpsRedirect = value.httpsRedirect;
      this._pathRedirect = value.pathRedirect;
      this._prefixRedirect = value.prefixRedirect;
      this._redirectResponseCode = value.redirectResponseCode;
      this._stripQuery = value.stripQuery;
    }
  }

  // host_redirect - computed: false, optional: true, required: false
  private _hostRedirect?: string; 
  public get hostRedirect() {
    return this.getStringAttribute('host_redirect');
  }
  public set hostRedirect(value: string) {
    this._hostRedirect = value;
  }
  public resetHostRedirect() {
    this._hostRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRedirectInput() {
    return this._hostRedirect;
  }

  // https_redirect - computed: false, optional: true, required: false
  private _httpsRedirect?: boolean | cdktf.IResolvable; 
  public get httpsRedirect() {
    return this.getBooleanAttribute('https_redirect');
  }
  public set httpsRedirect(value: boolean | cdktf.IResolvable) {
    this._httpsRedirect = value;
  }
  public resetHttpsRedirect() {
    this._httpsRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsRedirectInput() {
    return this._httpsRedirect;
  }

  // path_redirect - computed: false, optional: true, required: false
  private _pathRedirect?: string; 
  public get pathRedirect() {
    return this.getStringAttribute('path_redirect');
  }
  public set pathRedirect(value: string) {
    this._pathRedirect = value;
  }
  public resetPathRedirect() {
    this._pathRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRedirectInput() {
    return this._pathRedirect;
  }

  // prefix_redirect - computed: false, optional: true, required: false
  private _prefixRedirect?: string; 
  public get prefixRedirect() {
    return this.getStringAttribute('prefix_redirect');
  }
  public set prefixRedirect(value: string) {
    this._prefixRedirect = value;
  }
  public resetPrefixRedirect() {
    this._prefixRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixRedirectInput() {
    return this._prefixRedirect;
  }

  // redirect_response_code - computed: false, optional: true, required: false
  private _redirectResponseCode?: string; 
  public get redirectResponseCode() {
    return this.getStringAttribute('redirect_response_code');
  }
  public set redirectResponseCode(value: string) {
    this._redirectResponseCode = value;
  }
  public resetRedirectResponseCode() {
    this._redirectResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectResponseCodeInput() {
    return this._redirectResponseCode;
  }

  // strip_query - computed: false, optional: false, required: true
  private _stripQuery?: boolean | cdktf.IResolvable; 
  public get stripQuery() {
    return this.getBooleanAttribute('strip_query');
  }
  public set stripQuery(value: boolean | cdktf.IResolvable) {
    this._stripQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stripQueryInput() {
    return this._stripQuery;
  }
}
export interface ComputeRegionUrlMapPathMatcherPathRuleRouteActionCorsPolicy {
  /**
  * In response to a preflight request, setting this to true indicates that the
actual request can include user credentials. This translates to the Access-
Control-Allow-Credentials header. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#allow_credentials ComputeRegionUrlMap#allow_credentials}
  */
  readonly allowCredentials?: boolean | cdktf.IResolvable;
  /**
  * Specifies the content for the Access-Control-Allow-Headers header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#allow_headers ComputeRegionUrlMap#allow_headers}
  */
  readonly allowHeaders?: string[];
  /**
  * Specifies the content for the Access-Control-Allow-Methods header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#allow_methods ComputeRegionUrlMap#allow_methods}
  */
  readonly allowMethods?: string[];
  /**
  * Specifies the regular expression patterns that match allowed origins. For
regular expression grammar please see en.cppreference.com/w/cpp/regex/ecmascript
An origin is allowed if it matches either allow_origins or allow_origin_regex.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#allow_origin_regexes ComputeRegionUrlMap#allow_origin_regexes}
  */
  readonly allowOriginRegexes?: string[];
  /**
  * Specifies the list of origins that will be allowed to do CORS requests. An
origin is allowed if it matches either allow_origins or allow_origin_regex.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#allow_origins ComputeRegionUrlMap#allow_origins}
  */
  readonly allowOrigins?: string[];
  /**
  * If true, specifies the CORS policy is disabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#disabled ComputeRegionUrlMap#disabled}
  */
  readonly disabled: boolean | cdktf.IResolvable;
  /**
  * Specifies the content for the Access-Control-Expose-Headers header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#expose_headers ComputeRegionUrlMap#expose_headers}
  */
  readonly exposeHeaders?: string[];
  /**
  * Specifies how long the results of a preflight request can be cached. This
translates to the content for the Access-Control-Max-Age header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#max_age ComputeRegionUrlMap#max_age}
  */
  readonly maxAge?: number;
}

export function computeRegionUrlMapPathMatcherPathRuleRouteActionCorsPolicyToTerraform(struct?: ComputeRegionUrlMapPathMatcherPathRuleRouteActionCorsPolicyOutputReference | ComputeRegionUrlMapPathMatcherPathRuleRouteActionCorsPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_credentials: cdktf.booleanToTerraform(struct!.allowCredentials),
    allow_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowHeaders),
    allow_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowMethods),
    allow_origin_regexes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowOriginRegexes),
    allow_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowOrigins),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    expose_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exposeHeaders),
    max_age: cdktf.numberToTerraform(struct!.maxAge),
  }
}

export class ComputeRegionUrlMapPathMatcherPathRuleRouteActionCorsPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionUrlMapPathMatcherPathRuleRouteActionCorsPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCredentials = this._allowCredentials;
    }
    if (this._allowHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowHeaders = this._allowHeaders;
    }
    if (this._allowMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMethods = this._allowMethods;
    }
    if (this._allowOriginRegexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOriginRegexes = this._allowOriginRegexes;
    }
    if (this._allowOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOrigins = this._allowOrigins;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._exposeHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposeHeaders = this._exposeHeaders;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherPathRuleRouteActionCorsPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowCredentials = undefined;
      this._allowHeaders = undefined;
      this._allowMethods = undefined;
      this._allowOriginRegexes = undefined;
      this._allowOrigins = undefined;
      this._disabled = undefined;
      this._exposeHeaders = undefined;
      this._maxAge = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowCredentials = value.allowCredentials;
      this._allowHeaders = value.allowHeaders;
      this._allowMethods = value.allowMethods;
      this._allowOriginRegexes = value.allowOriginRegexes;
      this._allowOrigins = value.allowOrigins;
      this._disabled = value.disabled;
      this._exposeHeaders = value.exposeHeaders;
      this._maxAge = value.maxAge;
    }
  }

  // allow_credentials - computed: false, optional: true, required: false
  private _allowCredentials?: boolean | cdktf.IResolvable; 
  public get allowCredentials() {
    return this.getBooleanAttribute('allow_credentials');
  }
  public set allowCredentials(value: boolean | cdktf.IResolvable) {
    this._allowCredentials = value;
  }
  public resetAllowCredentials() {
    this._allowCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCredentialsInput() {
    return this._allowCredentials;
  }

  // allow_headers - computed: false, optional: true, required: false
  private _allowHeaders?: string[]; 
  public get allowHeaders() {
    return this.getListAttribute('allow_headers');
  }
  public set allowHeaders(value: string[]) {
    this._allowHeaders = value;
  }
  public resetAllowHeaders() {
    this._allowHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHeadersInput() {
    return this._allowHeaders;
  }

  // allow_methods - computed: false, optional: true, required: false
  private _allowMethods?: string[]; 
  public get allowMethods() {
    return this.getListAttribute('allow_methods');
  }
  public set allowMethods(value: string[]) {
    this._allowMethods = value;
  }
  public resetAllowMethods() {
    this._allowMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMethodsInput() {
    return this._allowMethods;
  }

  // allow_origin_regexes - computed: false, optional: true, required: false
  private _allowOriginRegexes?: string[]; 
  public get allowOriginRegexes() {
    return this.getListAttribute('allow_origin_regexes');
  }
  public set allowOriginRegexes(value: string[]) {
    this._allowOriginRegexes = value;
  }
  public resetAllowOriginRegexes() {
    this._allowOriginRegexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginRegexesInput() {
    return this._allowOriginRegexes;
  }

  // allow_origins - computed: false, optional: true, required: false
  private _allowOrigins?: string[]; 
  public get allowOrigins() {
    return this.getListAttribute('allow_origins');
  }
  public set allowOrigins(value: string[]) {
    this._allowOrigins = value;
  }
  public resetAllowOrigins() {
    this._allowOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginsInput() {
    return this._allowOrigins;
  }

  // disabled - computed: false, optional: false, required: true
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // expose_headers - computed: false, optional: true, required: false
  private _exposeHeaders?: string[]; 
  public get exposeHeaders() {
    return this.getListAttribute('expose_headers');
  }
  public set exposeHeaders(value: string[]) {
    this._exposeHeaders = value;
  }
  public resetExposeHeaders() {
    this._exposeHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeHeadersInput() {
    return this._exposeHeaders;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }
}
export interface ComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort {
  /**
  * The HTTP status code used to abort the request. The value must be between 200
and 599 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#http_status ComputeRegionUrlMap#http_status}
  */
  readonly httpStatus: number;
  /**
  * The percentage of traffic (connections/operations/requests) which will be
aborted as part of fault injection. The value must be between 0.0 and 100.0
inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#percentage ComputeRegionUrlMap#percentage}
  */
  readonly percentage: number;
}

export function computeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbortToTerraform(struct?: ComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbortOutputReference | ComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_status: cdktf.numberToTerraform(struct!.httpStatus),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}

export class ComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpStatus = this._httpStatus;
    }
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpStatus = undefined;
      this._percentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpStatus = value.httpStatus;
      this._percentage = value.percentage;
    }
  }

  // http_status - computed: false, optional: false, required: true
  private _httpStatus?: number; 
  public get httpStatus() {
    return this.getNumberAttribute('http_status');
  }
  public set httpStatus(value: number) {
    this._httpStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpStatusInput() {
    return this._httpStatus;
  }

  // percentage - computed: false, optional: false, required: true
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }
}
export interface ComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#nanos ComputeRegionUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#seconds ComputeRegionUrlMap#seconds}
  */
  readonly seconds: string;
}

export function computeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelayToTerraform(struct?: ComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference | ComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}

export class ComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay {
  /**
  * The percentage of traffic (connections/operations/requests) on which delay will
be introduced as part of fault injection. The value must be between 0.0 and
100.0 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#percentage ComputeRegionUrlMap#percentage}
  */
  readonly percentage: number;
  /**
  * fixed_delay block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#fixed_delay ComputeRegionUrlMap#fixed_delay}
  */
  readonly fixedDelay: ComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay;
}

export function computeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayToTerraform(struct?: ComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayOutputReference | ComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentage: cdktf.numberToTerraform(struct!.percentage),
    fixed_delay: computeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelayToTerraform(struct!.fixedDelay),
  }
}

export class ComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    if (this._fixedDelay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedDelay = this._fixedDelay?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._percentage = undefined;
      this._fixedDelay.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._percentage = value.percentage;
      this._fixedDelay.internalValue = value.fixedDelay;
    }
  }

  // percentage - computed: false, optional: false, required: true
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }

  // fixed_delay - computed: false, optional: false, required: true
  private _fixedDelay = new ComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference(this, "fixed_delay");
  public get fixedDelay() {
    return this._fixedDelay;
  }
  public putFixedDelay(value: ComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay) {
    this._fixedDelay.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedDelayInput() {
    return this._fixedDelay.internalValue;
  }
}
export interface ComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicy {
  /**
  * abort block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#abort ComputeRegionUrlMap#abort}
  */
  readonly abort?: ComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort;
  /**
  * delay block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#delay ComputeRegionUrlMap#delay}
  */
  readonly delay?: ComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay;
}

export function computeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyToTerraform(struct?: ComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyOutputReference | ComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abort: computeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbortToTerraform(struct!.abort),
    delay: computeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayToTerraform(struct!.delay),
  }
}

export class ComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abort = this._abort?.internalValue;
    }
    if (this._delay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._abort.internalValue = undefined;
      this._delay.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._abort.internalValue = value.abort;
      this._delay.internalValue = value.delay;
    }
  }

  // abort - computed: false, optional: true, required: false
  private _abort = new ComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbortOutputReference(this, "abort");
  public get abort() {
    return this._abort;
  }
  public putAbort(value: ComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort) {
    this._abort.internalValue = value;
  }
  public resetAbort() {
    this._abort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abortInput() {
    return this._abort.internalValue;
  }

  // delay - computed: false, optional: true, required: false
  private _delay = new ComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayOutputReference(this, "delay");
  public get delay() {
    return this._delay;
  }
  public putDelay(value: ComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay) {
    this._delay.internalValue = value;
  }
  public resetDelay() {
    this._delay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay.internalValue;
  }
}
export interface ComputeRegionUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicy {
  /**
  * The RegionBackendService resource being mirrored to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#backend_service ComputeRegionUrlMap#backend_service}
  */
  readonly backendService: string;
}

export function computeRegionUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicyToTerraform(struct?: ComputeRegionUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicyOutputReference | ComputeRegionUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_service: cdktf.stringToTerraform(struct!.backendService),
  }
}

export class ComputeRegionUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendService !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendService = this._backendService;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backendService = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backendService = value.backendService;
    }
  }

  // backend_service - computed: false, optional: false, required: true
  private _backendService?: string; 
  public get backendService() {
    return this.getStringAttribute('backend_service');
  }
  public set backendService(value: string) {
    this._backendService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendServiceInput() {
    return this._backendService;
  }
}
export interface ComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeout {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#nanos ComputeRegionUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#seconds ComputeRegionUrlMap#seconds}
  */
  readonly seconds: string;
}

export function computeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeoutToTerraform(struct?: ComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeoutOutputReference | ComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}

export class ComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicy {
  /**
  * Specifies the allowed number retries. This number must be > 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#num_retries ComputeRegionUrlMap#num_retries}
  */
  readonly numRetries?: number;
  /**
  * Specifies one or more conditions when this retry rule applies. Valid values are:

- 5xx: Loadbalancer will attempt a retry if the backend service responds with
any 5xx response code, or if the backend service does not respond at all,
example: disconnects, reset, read timeout, connection failure, and refused
streams.
- gateway-error: Similar to 5xx, but only applies to response codes
502, 503 or 504.
- connect-failure: Loadbalancer will retry on failures
connecting to backend services, for example due to connection timeouts.
- retriable-4xx: Loadbalancer will retry for retriable 4xx response codes.
Currently the only retriable error supported is 409.
- refused-stream: Loadbalancer will retry if the backend service resets the stream with a
REFUSED_STREAM error code. This reset type indicates that it is safe to retry.
- cancelled: Loadbalancer will retry if the gRPC status code in the response
header is set to cancelled
- deadline-exceeded: Loadbalancer will retry if the
gRPC status code in the response header is set to deadline-exceeded
- resource-exhausted: Loadbalancer will retry if the gRPC status code in the response
header is set to resource-exhausted
- unavailable: Loadbalancer will retry if
the gRPC status code in the response header is set to unavailable
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#retry_conditions ComputeRegionUrlMap#retry_conditions}
  */
  readonly retryConditions?: string[];
  /**
  * per_try_timeout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#per_try_timeout ComputeRegionUrlMap#per_try_timeout}
  */
  readonly perTryTimeout?: ComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeout;
}

export function computeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicyToTerraform(struct?: ComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicyOutputReference | ComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_retries: cdktf.numberToTerraform(struct!.numRetries),
    retry_conditions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.retryConditions),
    per_try_timeout: computeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeoutToTerraform(struct!.perTryTimeout),
  }
}

export class ComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRetries = this._numRetries;
    }
    if (this._retryConditions !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryConditions = this._retryConditions;
    }
    if (this._perTryTimeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perTryTimeout = this._perTryTimeout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numRetries = undefined;
      this._retryConditions = undefined;
      this._perTryTimeout.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numRetries = value.numRetries;
      this._retryConditions = value.retryConditions;
      this._perTryTimeout.internalValue = value.perTryTimeout;
    }
  }

  // num_retries - computed: false, optional: true, required: false
  private _numRetries?: number; 
  public get numRetries() {
    return this.getNumberAttribute('num_retries');
  }
  public set numRetries(value: number) {
    this._numRetries = value;
  }
  public resetNumRetries() {
    this._numRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRetriesInput() {
    return this._numRetries;
  }

  // retry_conditions - computed: false, optional: true, required: false
  private _retryConditions?: string[]; 
  public get retryConditions() {
    return this.getListAttribute('retry_conditions');
  }
  public set retryConditions(value: string[]) {
    this._retryConditions = value;
  }
  public resetRetryConditions() {
    this._retryConditions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryConditionsInput() {
    return this._retryConditions;
  }

  // per_try_timeout - computed: false, optional: true, required: false
  private _perTryTimeout = new ComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeoutOutputReference(this, "per_try_timeout");
  public get perTryTimeout() {
    return this._perTryTimeout;
  }
  public putPerTryTimeout(value: ComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeout) {
    this._perTryTimeout.internalValue = value;
  }
  public resetPerTryTimeout() {
    this._perTryTimeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perTryTimeoutInput() {
    return this._perTryTimeout.internalValue;
  }
}
export interface ComputeRegionUrlMapPathMatcherPathRuleRouteActionTimeout {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#nanos ComputeRegionUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#seconds ComputeRegionUrlMap#seconds}
  */
  readonly seconds: string;
}

export function computeRegionUrlMapPathMatcherPathRuleRouteActionTimeoutToTerraform(struct?: ComputeRegionUrlMapPathMatcherPathRuleRouteActionTimeoutOutputReference | ComputeRegionUrlMapPathMatcherPathRuleRouteActionTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}

export class ComputeRegionUrlMapPathMatcherPathRuleRouteActionTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionUrlMapPathMatcherPathRuleRouteActionTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherPathRuleRouteActionTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeRegionUrlMapPathMatcherPathRuleRouteActionUrlRewrite {
  /**
  * Prior to forwarding the request to the selected service, the request's host
header is replaced with contents of hostRewrite. The value must be between 1 and
255 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#host_rewrite ComputeRegionUrlMap#host_rewrite}
  */
  readonly hostRewrite?: string;
  /**
  * Prior to forwarding the request to the selected backend service, the matching
portion of the request's path is replaced by pathPrefixRewrite. The value must
be between 1 and 1024 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#path_prefix_rewrite ComputeRegionUrlMap#path_prefix_rewrite}
  */
  readonly pathPrefixRewrite?: string;
}

export function computeRegionUrlMapPathMatcherPathRuleRouteActionUrlRewriteToTerraform(struct?: ComputeRegionUrlMapPathMatcherPathRuleRouteActionUrlRewriteOutputReference | ComputeRegionUrlMapPathMatcherPathRuleRouteActionUrlRewrite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_rewrite: cdktf.stringToTerraform(struct!.hostRewrite),
    path_prefix_rewrite: cdktf.stringToTerraform(struct!.pathPrefixRewrite),
  }
}

export class ComputeRegionUrlMapPathMatcherPathRuleRouteActionUrlRewriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionUrlMapPathMatcherPathRuleRouteActionUrlRewrite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRewrite = this._hostRewrite;
    }
    if (this._pathPrefixRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPrefixRewrite = this._pathPrefixRewrite;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherPathRuleRouteActionUrlRewrite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostRewrite = undefined;
      this._pathPrefixRewrite = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostRewrite = value.hostRewrite;
      this._pathPrefixRewrite = value.pathPrefixRewrite;
    }
  }

  // host_rewrite - computed: false, optional: true, required: false
  private _hostRewrite?: string; 
  public get hostRewrite() {
    return this.getStringAttribute('host_rewrite');
  }
  public set hostRewrite(value: string) {
    this._hostRewrite = value;
  }
  public resetHostRewrite() {
    this._hostRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRewriteInput() {
    return this._hostRewrite;
  }

  // path_prefix_rewrite - computed: false, optional: true, required: false
  private _pathPrefixRewrite?: string; 
  public get pathPrefixRewrite() {
    return this.getStringAttribute('path_prefix_rewrite');
  }
  public set pathPrefixRewrite(value: string) {
    this._pathPrefixRewrite = value;
  }
  public resetPathPrefixRewrite() {
    this._pathPrefixRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixRewriteInput() {
    return this._pathPrefixRewrite;
  }
}
export interface ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd {
  /**
  * The name of the header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#header_name ComputeRegionUrlMap#header_name}
  */
  readonly headerName: string;
  /**
  * The value of the header to add.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#header_value ComputeRegionUrlMap#header_value}
  */
  readonly headerValue: string;
  /**
  * If false, headerValue is appended to any values that already exist for the
header. If true, headerValue is set for the header, discarding any values that
were set for that header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#replace ComputeRegionUrlMap#replace}
  */
  readonly replace: boolean | cdktf.IResolvable;
}

export function computeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToTerraform(struct?: ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}

export class ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
      this._replace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
      this._replace = value.replace;
    }
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: false, required: true
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }

  // replace - computed: false, optional: false, required: true
  private _replace?: boolean | cdktf.IResolvable; 
  public get replace() {
    return this.getBooleanAttribute('replace');
  }
  public set replace(value: boolean | cdktf.IResolvable) {
    this._replace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }
}

export class ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddList extends cdktf.ComplexList {
  public internalValue? : ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[] | cdktf.IResolvable

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
  public get(index: number): ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddOutputReference {
    return new ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd {
  /**
  * The name of the header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#header_name ComputeRegionUrlMap#header_name}
  */
  readonly headerName: string;
  /**
  * The value of the header to add.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#header_value ComputeRegionUrlMap#header_value}
  */
  readonly headerValue: string;
  /**
  * If false, headerValue is appended to any values that already exist for the
header. If true, headerValue is set for the header, discarding any values that
were set for that header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#replace ComputeRegionUrlMap#replace}
  */
  readonly replace: boolean | cdktf.IResolvable;
}

export function computeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToTerraform(struct?: ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}

export class ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
      this._replace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
      this._replace = value.replace;
    }
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: false, required: true
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }

  // replace - computed: false, optional: false, required: true
  private _replace?: boolean | cdktf.IResolvable; 
  public get replace() {
    return this.getBooleanAttribute('replace');
  }
  public set replace(value: boolean | cdktf.IResolvable) {
    this._replace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }
}

export class ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddList extends cdktf.ComplexList {
  public internalValue? : ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[] | cdktf.IResolvable

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
  public get(index: number): ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddOutputReference {
    return new ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderAction {
  /**
  * A list of header names for headers that need to be removed from the request
prior to forwarding the request to the backendService.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#request_headers_to_remove ComputeRegionUrlMap#request_headers_to_remove}
  */
  readonly requestHeadersToRemove?: string[];
  /**
  * A list of header names for headers that need to be removed from the response
prior to sending the response back to the client.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#response_headers_to_remove ComputeRegionUrlMap#response_headers_to_remove}
  */
  readonly responseHeadersToRemove?: string[];
  /**
  * request_headers_to_add block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#request_headers_to_add ComputeRegionUrlMap#request_headers_to_add}
  */
  readonly requestHeadersToAdd?: ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[] | cdktf.IResolvable;
  /**
  * response_headers_to_add block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#response_headers_to_add ComputeRegionUrlMap#response_headers_to_add}
  */
  readonly responseHeadersToAdd?: ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[] | cdktf.IResolvable;
}

export function computeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionToTerraform(struct?: ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionOutputReference | ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requestHeadersToRemove),
    response_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.responseHeadersToRemove),
    request_headers_to_add: cdktf.listMapper(computeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToTerraform, true)(struct!.requestHeadersToAdd),
    response_headers_to_add: cdktf.listMapper(computeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToTerraform, true)(struct!.responseHeadersToAdd),
  }
}

export class ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestHeadersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToRemove = this._requestHeadersToRemove;
    }
    if (this._responseHeadersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToRemove = this._responseHeadersToRemove;
    }
    if (this._requestHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToAdd = this._requestHeadersToAdd?.internalValue;
    }
    if (this._responseHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToAdd = this._responseHeadersToAdd?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestHeadersToRemove = undefined;
      this._responseHeadersToRemove = undefined;
      this._requestHeadersToAdd.internalValue = undefined;
      this._responseHeadersToAdd.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestHeadersToRemove = value.requestHeadersToRemove;
      this._responseHeadersToRemove = value.responseHeadersToRemove;
      this._requestHeadersToAdd.internalValue = value.requestHeadersToAdd;
      this._responseHeadersToAdd.internalValue = value.responseHeadersToAdd;
    }
  }

  // request_headers_to_remove - computed: false, optional: true, required: false
  private _requestHeadersToRemove?: string[]; 
  public get requestHeadersToRemove() {
    return this.getListAttribute('request_headers_to_remove');
  }
  public set requestHeadersToRemove(value: string[]) {
    this._requestHeadersToRemove = value;
  }
  public resetRequestHeadersToRemove() {
    this._requestHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToRemoveInput() {
    return this._requestHeadersToRemove;
  }

  // response_headers_to_remove - computed: false, optional: true, required: false
  private _responseHeadersToRemove?: string[]; 
  public get responseHeadersToRemove() {
    return this.getListAttribute('response_headers_to_remove');
  }
  public set responseHeadersToRemove(value: string[]) {
    this._responseHeadersToRemove = value;
  }
  public resetResponseHeadersToRemove() {
    this._responseHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToRemoveInput() {
    return this._responseHeadersToRemove;
  }

  // request_headers_to_add - computed: false, optional: true, required: false
  private _requestHeadersToAdd = new ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddList(this, "request_headers_to_add", false);
  public get requestHeadersToAdd() {
    return this._requestHeadersToAdd;
  }
  public putRequestHeadersToAdd(value: ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[] | cdktf.IResolvable) {
    this._requestHeadersToAdd.internalValue = value;
  }
  public resetRequestHeadersToAdd() {
    this._requestHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToAddInput() {
    return this._requestHeadersToAdd.internalValue;
  }

  // response_headers_to_add - computed: false, optional: true, required: false
  private _responseHeadersToAdd = new ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddList(this, "response_headers_to_add", false);
  public get responseHeadersToAdd() {
    return this._responseHeadersToAdd;
  }
  public putResponseHeadersToAdd(value: ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[] | cdktf.IResolvable) {
    this._responseHeadersToAdd.internalValue = value;
  }
  public resetResponseHeadersToAdd() {
    this._responseHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToAddInput() {
    return this._responseHeadersToAdd.internalValue;
  }
}
export interface ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServices {
  /**
  * The default RegionBackendService resource. Before
forwarding the request to backendService, the loadbalancer applies any relevant
headerActions specified as part of this backendServiceWeight.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#backend_service ComputeRegionUrlMap#backend_service}
  */
  readonly backendService: string;
  /**
  * Specifies the fraction of traffic sent to backendService, computed as weight /
(sum of all weightedBackendService weights in routeAction) . The selection of a
backend service is determined only for new traffic. Once a user's request has
been directed to a backendService, subsequent requests will be sent to the same
backendService as determined by the BackendService's session affinity policy.
The value must be between 0 and 1000
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#weight ComputeRegionUrlMap#weight}
  */
  readonly weight: number;
  /**
  * header_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#header_action ComputeRegionUrlMap#header_action}
  */
  readonly headerAction?: ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderAction;
}

export function computeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesToTerraform(struct?: ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_service: cdktf.stringToTerraform(struct!.backendService),
    weight: cdktf.numberToTerraform(struct!.weight),
    header_action: computeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionToTerraform(struct!.headerAction),
  }
}

export class ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendService !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendService = this._backendService;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._headerAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerAction = this._headerAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendService = undefined;
      this._weight = undefined;
      this._headerAction.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backendService = value.backendService;
      this._weight = value.weight;
      this._headerAction.internalValue = value.headerAction;
    }
  }

  // backend_service - computed: false, optional: false, required: true
  private _backendService?: string; 
  public get backendService() {
    return this.getStringAttribute('backend_service');
  }
  public set backendService(value: string) {
    this._backendService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendServiceInput() {
    return this._backendService;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // header_action - computed: false, optional: true, required: false
  private _headerAction = new ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionOutputReference(this, "header_action");
  public get headerAction() {
    return this._headerAction;
  }
  public putHeaderAction(value: ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderAction) {
    this._headerAction.internalValue = value;
  }
  public resetHeaderAction() {
    this._headerAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerActionInput() {
    return this._headerAction.internalValue;
  }
}

export class ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesList extends cdktf.ComplexList {
  public internalValue? : ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServices[] | cdktf.IResolvable

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
  public get(index: number): ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesOutputReference {
    return new ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeRegionUrlMapPathMatcherPathRuleRouteAction {
  /**
  * cors_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#cors_policy ComputeRegionUrlMap#cors_policy}
  */
  readonly corsPolicy?: ComputeRegionUrlMapPathMatcherPathRuleRouteActionCorsPolicy;
  /**
  * fault_injection_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#fault_injection_policy ComputeRegionUrlMap#fault_injection_policy}
  */
  readonly faultInjectionPolicy?: ComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicy;
  /**
  * request_mirror_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#request_mirror_policy ComputeRegionUrlMap#request_mirror_policy}
  */
  readonly requestMirrorPolicy?: ComputeRegionUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicy;
  /**
  * retry_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#retry_policy ComputeRegionUrlMap#retry_policy}
  */
  readonly retryPolicy?: ComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicy;
  /**
  * timeout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#timeout ComputeRegionUrlMap#timeout}
  */
  readonly timeout?: ComputeRegionUrlMapPathMatcherPathRuleRouteActionTimeout;
  /**
  * url_rewrite block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#url_rewrite ComputeRegionUrlMap#url_rewrite}
  */
  readonly urlRewrite?: ComputeRegionUrlMapPathMatcherPathRuleRouteActionUrlRewrite;
  /**
  * weighted_backend_services block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#weighted_backend_services ComputeRegionUrlMap#weighted_backend_services}
  */
  readonly weightedBackendServices?: ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServices[] | cdktf.IResolvable;
}

export function computeRegionUrlMapPathMatcherPathRuleRouteActionToTerraform(struct?: ComputeRegionUrlMapPathMatcherPathRuleRouteActionOutputReference | ComputeRegionUrlMapPathMatcherPathRuleRouteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cors_policy: computeRegionUrlMapPathMatcherPathRuleRouteActionCorsPolicyToTerraform(struct!.corsPolicy),
    fault_injection_policy: computeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyToTerraform(struct!.faultInjectionPolicy),
    request_mirror_policy: computeRegionUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicyToTerraform(struct!.requestMirrorPolicy),
    retry_policy: computeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicyToTerraform(struct!.retryPolicy),
    timeout: computeRegionUrlMapPathMatcherPathRuleRouteActionTimeoutToTerraform(struct!.timeout),
    url_rewrite: computeRegionUrlMapPathMatcherPathRuleRouteActionUrlRewriteToTerraform(struct!.urlRewrite),
    weighted_backend_services: cdktf.listMapper(computeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesToTerraform, true)(struct!.weightedBackendServices),
  }
}

export class ComputeRegionUrlMapPathMatcherPathRuleRouteActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionUrlMapPathMatcherPathRuleRouteAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._corsPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.corsPolicy = this._corsPolicy?.internalValue;
    }
    if (this._faultInjectionPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.faultInjectionPolicy = this._faultInjectionPolicy?.internalValue;
    }
    if (this._requestMirrorPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMirrorPolicy = this._requestMirrorPolicy?.internalValue;
    }
    if (this._retryPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryPolicy = this._retryPolicy?.internalValue;
    }
    if (this._timeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout?.internalValue;
    }
    if (this._urlRewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlRewrite = this._urlRewrite?.internalValue;
    }
    if (this._weightedBackendServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightedBackendServices = this._weightedBackendServices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherPathRuleRouteAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._corsPolicy.internalValue = undefined;
      this._faultInjectionPolicy.internalValue = undefined;
      this._requestMirrorPolicy.internalValue = undefined;
      this._retryPolicy.internalValue = undefined;
      this._timeout.internalValue = undefined;
      this._urlRewrite.internalValue = undefined;
      this._weightedBackendServices.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._corsPolicy.internalValue = value.corsPolicy;
      this._faultInjectionPolicy.internalValue = value.faultInjectionPolicy;
      this._requestMirrorPolicy.internalValue = value.requestMirrorPolicy;
      this._retryPolicy.internalValue = value.retryPolicy;
      this._timeout.internalValue = value.timeout;
      this._urlRewrite.internalValue = value.urlRewrite;
      this._weightedBackendServices.internalValue = value.weightedBackendServices;
    }
  }

  // cors_policy - computed: false, optional: true, required: false
  private _corsPolicy = new ComputeRegionUrlMapPathMatcherPathRuleRouteActionCorsPolicyOutputReference(this, "cors_policy");
  public get corsPolicy() {
    return this._corsPolicy;
  }
  public putCorsPolicy(value: ComputeRegionUrlMapPathMatcherPathRuleRouteActionCorsPolicy) {
    this._corsPolicy.internalValue = value;
  }
  public resetCorsPolicy() {
    this._corsPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsPolicyInput() {
    return this._corsPolicy.internalValue;
  }

  // fault_injection_policy - computed: false, optional: true, required: false
  private _faultInjectionPolicy = new ComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyOutputReference(this, "fault_injection_policy");
  public get faultInjectionPolicy() {
    return this._faultInjectionPolicy;
  }
  public putFaultInjectionPolicy(value: ComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicy) {
    this._faultInjectionPolicy.internalValue = value;
  }
  public resetFaultInjectionPolicy() {
    this._faultInjectionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultInjectionPolicyInput() {
    return this._faultInjectionPolicy.internalValue;
  }

  // request_mirror_policy - computed: false, optional: true, required: false
  private _requestMirrorPolicy = new ComputeRegionUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicyOutputReference(this, "request_mirror_policy");
  public get requestMirrorPolicy() {
    return this._requestMirrorPolicy;
  }
  public putRequestMirrorPolicy(value: ComputeRegionUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicy) {
    this._requestMirrorPolicy.internalValue = value;
  }
  public resetRequestMirrorPolicy() {
    this._requestMirrorPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMirrorPolicyInput() {
    return this._requestMirrorPolicy.internalValue;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy = new ComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicyOutputReference(this, "retry_policy");
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public putRetryPolicy(value: ComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicy) {
    this._retryPolicy.internalValue = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout = new ComputeRegionUrlMapPathMatcherPathRuleRouteActionTimeoutOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: ComputeRegionUrlMapPathMatcherPathRuleRouteActionTimeout) {
    this._timeout.internalValue = value;
  }
  public resetTimeout() {
    this._timeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout.internalValue;
  }

  // url_rewrite - computed: false, optional: true, required: false
  private _urlRewrite = new ComputeRegionUrlMapPathMatcherPathRuleRouteActionUrlRewriteOutputReference(this, "url_rewrite");
  public get urlRewrite() {
    return this._urlRewrite;
  }
  public putUrlRewrite(value: ComputeRegionUrlMapPathMatcherPathRuleRouteActionUrlRewrite) {
    this._urlRewrite.internalValue = value;
  }
  public resetUrlRewrite() {
    this._urlRewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlRewriteInput() {
    return this._urlRewrite.internalValue;
  }

  // weighted_backend_services - computed: false, optional: true, required: false
  private _weightedBackendServices = new ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesList(this, "weighted_backend_services", false);
  public get weightedBackendServices() {
    return this._weightedBackendServices;
  }
  public putWeightedBackendServices(value: ComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServices[] | cdktf.IResolvable) {
    this._weightedBackendServices.internalValue = value;
  }
  public resetWeightedBackendServices() {
    this._weightedBackendServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedBackendServicesInput() {
    return this._weightedBackendServices.internalValue;
  }
}
export interface ComputeRegionUrlMapPathMatcherPathRuleUrlRedirect {
  /**
  * The host that will be used in the redirect response instead of the one
that was supplied in the request. The value must be between 1 and 255
characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#host_redirect ComputeRegionUrlMap#host_redirect}
  */
  readonly hostRedirect?: string;
  /**
  * If set to true, the URL scheme in the redirected request is set to https.
If set to false, the URL scheme of the redirected request will remain the
same as that of the request. This must only be set for UrlMaps used in
TargetHttpProxys. Setting this true for TargetHttpsProxy is not
permitted. The default is set to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#https_redirect ComputeRegionUrlMap#https_redirect}
  */
  readonly httpsRedirect?: boolean | cdktf.IResolvable;
  /**
  * The path that will be used in the redirect response instead of the one
that was supplied in the request. pathRedirect cannot be supplied
together with prefixRedirect. Supply one alone or neither. If neither is
supplied, the path of the original request will be used for the redirect.
The value must be between 1 and 1024 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#path_redirect ComputeRegionUrlMap#path_redirect}
  */
  readonly pathRedirect?: string;
  /**
  * The prefix that replaces the prefixMatch specified in the
HttpRouteRuleMatch, retaining the remaining portion of the URL before
redirecting the request. prefixRedirect cannot be supplied together with
pathRedirect. Supply one alone or neither. If neither is supplied, the
path of the original request will be used for the redirect. The value
must be between 1 and 1024 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#prefix_redirect ComputeRegionUrlMap#prefix_redirect}
  */
  readonly prefixRedirect?: string;
  /**
  * The HTTP Status code to use for this RedirectAction. Supported values are:

* MOVED_PERMANENTLY_DEFAULT, which is the default value and corresponds to 301.

* FOUND, which corresponds to 302.

* SEE_OTHER which corresponds to 303.

* TEMPORARY_REDIRECT, which corresponds to 307. In this case, the request method
will be retained.

* PERMANENT_REDIRECT, which corresponds to 308. In this case,
the request method will be retained. Possible values: ["FOUND", "MOVED_PERMANENTLY_DEFAULT", "PERMANENT_REDIRECT", "SEE_OTHER", "TEMPORARY_REDIRECT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#redirect_response_code ComputeRegionUrlMap#redirect_response_code}
  */
  readonly redirectResponseCode?: string;
  /**
  * If set to true, any accompanying query portion of the original URL is removed
prior to redirecting the request. If set to false, the query portion of the
original URL is retained.
 This field is required to ensure an empty block is not set. The normal default value is false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#strip_query ComputeRegionUrlMap#strip_query}
  */
  readonly stripQuery: boolean | cdktf.IResolvable;
}

export function computeRegionUrlMapPathMatcherPathRuleUrlRedirectToTerraform(struct?: ComputeRegionUrlMapPathMatcherPathRuleUrlRedirectOutputReference | ComputeRegionUrlMapPathMatcherPathRuleUrlRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_redirect: cdktf.stringToTerraform(struct!.hostRedirect),
    https_redirect: cdktf.booleanToTerraform(struct!.httpsRedirect),
    path_redirect: cdktf.stringToTerraform(struct!.pathRedirect),
    prefix_redirect: cdktf.stringToTerraform(struct!.prefixRedirect),
    redirect_response_code: cdktf.stringToTerraform(struct!.redirectResponseCode),
    strip_query: cdktf.booleanToTerraform(struct!.stripQuery),
  }
}

export class ComputeRegionUrlMapPathMatcherPathRuleUrlRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionUrlMapPathMatcherPathRuleUrlRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRedirect = this._hostRedirect;
    }
    if (this._httpsRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsRedirect = this._httpsRedirect;
    }
    if (this._pathRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathRedirect = this._pathRedirect;
    }
    if (this._prefixRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixRedirect = this._prefixRedirect;
    }
    if (this._redirectResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectResponseCode = this._redirectResponseCode;
    }
    if (this._stripQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripQuery = this._stripQuery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherPathRuleUrlRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostRedirect = undefined;
      this._httpsRedirect = undefined;
      this._pathRedirect = undefined;
      this._prefixRedirect = undefined;
      this._redirectResponseCode = undefined;
      this._stripQuery = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostRedirect = value.hostRedirect;
      this._httpsRedirect = value.httpsRedirect;
      this._pathRedirect = value.pathRedirect;
      this._prefixRedirect = value.prefixRedirect;
      this._redirectResponseCode = value.redirectResponseCode;
      this._stripQuery = value.stripQuery;
    }
  }

  // host_redirect - computed: false, optional: true, required: false
  private _hostRedirect?: string; 
  public get hostRedirect() {
    return this.getStringAttribute('host_redirect');
  }
  public set hostRedirect(value: string) {
    this._hostRedirect = value;
  }
  public resetHostRedirect() {
    this._hostRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRedirectInput() {
    return this._hostRedirect;
  }

  // https_redirect - computed: false, optional: true, required: false
  private _httpsRedirect?: boolean | cdktf.IResolvable; 
  public get httpsRedirect() {
    return this.getBooleanAttribute('https_redirect');
  }
  public set httpsRedirect(value: boolean | cdktf.IResolvable) {
    this._httpsRedirect = value;
  }
  public resetHttpsRedirect() {
    this._httpsRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsRedirectInput() {
    return this._httpsRedirect;
  }

  // path_redirect - computed: false, optional: true, required: false
  private _pathRedirect?: string; 
  public get pathRedirect() {
    return this.getStringAttribute('path_redirect');
  }
  public set pathRedirect(value: string) {
    this._pathRedirect = value;
  }
  public resetPathRedirect() {
    this._pathRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRedirectInput() {
    return this._pathRedirect;
  }

  // prefix_redirect - computed: false, optional: true, required: false
  private _prefixRedirect?: string; 
  public get prefixRedirect() {
    return this.getStringAttribute('prefix_redirect');
  }
  public set prefixRedirect(value: string) {
    this._prefixRedirect = value;
  }
  public resetPrefixRedirect() {
    this._prefixRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixRedirectInput() {
    return this._prefixRedirect;
  }

  // redirect_response_code - computed: false, optional: true, required: false
  private _redirectResponseCode?: string; 
  public get redirectResponseCode() {
    return this.getStringAttribute('redirect_response_code');
  }
  public set redirectResponseCode(value: string) {
    this._redirectResponseCode = value;
  }
  public resetRedirectResponseCode() {
    this._redirectResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectResponseCodeInput() {
    return this._redirectResponseCode;
  }

  // strip_query - computed: false, optional: false, required: true
  private _stripQuery?: boolean | cdktf.IResolvable; 
  public get stripQuery() {
    return this.getBooleanAttribute('strip_query');
  }
  public set stripQuery(value: boolean | cdktf.IResolvable) {
    this._stripQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stripQueryInput() {
    return this._stripQuery;
  }
}
export interface ComputeRegionUrlMapPathMatcherPathRule {
  /**
  * The list of path patterns to match. Each must start with / and the only place a
\* is allowed is at the end following a /. The string fed to the path matcher
does not include any text after the first ? or #, and those chars are not
allowed here.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#paths ComputeRegionUrlMap#paths}
  */
  readonly paths: string[];
  /**
  * The region backend service resource to which traffic is
directed if this rule is matched. If routeAction is additionally specified,
advanced routing actions like URL Rewrites, etc. take effect prior to sending
the request to the backend. However, if service is specified, routeAction cannot
contain any weightedBackendService s. Conversely, if routeAction specifies any
weightedBackendServices, service must not be specified. Only one of urlRedirect,
service or routeAction.weightedBackendService must be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#service ComputeRegionUrlMap#service}
  */
  readonly service?: string;
  /**
  * route_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#route_action ComputeRegionUrlMap#route_action}
  */
  readonly routeAction?: ComputeRegionUrlMapPathMatcherPathRuleRouteAction;
  /**
  * url_redirect block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#url_redirect ComputeRegionUrlMap#url_redirect}
  */
  readonly urlRedirect?: ComputeRegionUrlMapPathMatcherPathRuleUrlRedirect;
}

export function computeRegionUrlMapPathMatcherPathRuleToTerraform(struct?: ComputeRegionUrlMapPathMatcherPathRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.paths),
    service: cdktf.stringToTerraform(struct!.service),
    route_action: computeRegionUrlMapPathMatcherPathRuleRouteActionToTerraform(struct!.routeAction),
    url_redirect: computeRegionUrlMapPathMatcherPathRuleUrlRedirectToTerraform(struct!.urlRedirect),
  }
}

export class ComputeRegionUrlMapPathMatcherPathRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeRegionUrlMapPathMatcherPathRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._routeAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeAction = this._routeAction?.internalValue;
    }
    if (this._urlRedirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlRedirect = this._urlRedirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherPathRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._paths = undefined;
      this._service = undefined;
      this._routeAction.internalValue = undefined;
      this._urlRedirect.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._paths = value.paths;
      this._service = value.service;
      this._routeAction.internalValue = value.routeAction;
      this._urlRedirect.internalValue = value.urlRedirect;
    }
  }

  // paths - computed: false, optional: false, required: true
  private _paths?: string[]; 
  public get paths() {
    return cdktf.Fn.tolist(this.getListAttribute('paths'));
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // route_action - computed: false, optional: true, required: false
  private _routeAction = new ComputeRegionUrlMapPathMatcherPathRuleRouteActionOutputReference(this, "route_action");
  public get routeAction() {
    return this._routeAction;
  }
  public putRouteAction(value: ComputeRegionUrlMapPathMatcherPathRuleRouteAction) {
    this._routeAction.internalValue = value;
  }
  public resetRouteAction() {
    this._routeAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeActionInput() {
    return this._routeAction.internalValue;
  }

  // url_redirect - computed: false, optional: true, required: false
  private _urlRedirect = new ComputeRegionUrlMapPathMatcherPathRuleUrlRedirectOutputReference(this, "url_redirect");
  public get urlRedirect() {
    return this._urlRedirect;
  }
  public putUrlRedirect(value: ComputeRegionUrlMapPathMatcherPathRuleUrlRedirect) {
    this._urlRedirect.internalValue = value;
  }
  public resetUrlRedirect() {
    this._urlRedirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlRedirectInput() {
    return this._urlRedirect.internalValue;
  }
}

export class ComputeRegionUrlMapPathMatcherPathRuleList extends cdktf.ComplexList {
  public internalValue? : ComputeRegionUrlMapPathMatcherPathRule[] | cdktf.IResolvable

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
  public get(index: number): ComputeRegionUrlMapPathMatcherPathRuleOutputReference {
    return new ComputeRegionUrlMapPathMatcherPathRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeRegionUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAdd {
  /**
  * The name of the header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#header_name ComputeRegionUrlMap#header_name}
  */
  readonly headerName: string;
  /**
  * The value of the header to add.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#header_value ComputeRegionUrlMap#header_value}
  */
  readonly headerValue: string;
  /**
  * If false, headerValue is appended to any values that already exist for the
header. If true, headerValue is set for the header, discarding any values that
were set for that header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#replace ComputeRegionUrlMap#replace}
  */
  readonly replace: boolean | cdktf.IResolvable;
}

export function computeRegionUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAddToTerraform(struct?: ComputeRegionUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}

export class ComputeRegionUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeRegionUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
      this._replace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
      this._replace = value.replace;
    }
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: false, required: true
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }

  // replace - computed: false, optional: false, required: true
  private _replace?: boolean | cdktf.IResolvable; 
  public get replace() {
    return this.getBooleanAttribute('replace');
  }
  public set replace(value: boolean | cdktf.IResolvable) {
    this._replace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }
}

export class ComputeRegionUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAddList extends cdktf.ComplexList {
  public internalValue? : ComputeRegionUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAdd[] | cdktf.IResolvable

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
  public get(index: number): ComputeRegionUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAddOutputReference {
    return new ComputeRegionUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeRegionUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAdd {
  /**
  * The name of the header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#header_name ComputeRegionUrlMap#header_name}
  */
  readonly headerName: string;
  /**
  * The value of the header to add.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#header_value ComputeRegionUrlMap#header_value}
  */
  readonly headerValue: string;
  /**
  * If false, headerValue is appended to any values that already exist for the
header. If true, headerValue is set for the header, discarding any values that
were set for that header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#replace ComputeRegionUrlMap#replace}
  */
  readonly replace: boolean | cdktf.IResolvable;
}

export function computeRegionUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAddToTerraform(struct?: ComputeRegionUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}

export class ComputeRegionUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeRegionUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
      this._replace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
      this._replace = value.replace;
    }
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: false, required: true
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }

  // replace - computed: false, optional: false, required: true
  private _replace?: boolean | cdktf.IResolvable; 
  public get replace() {
    return this.getBooleanAttribute('replace');
  }
  public set replace(value: boolean | cdktf.IResolvable) {
    this._replace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }
}

export class ComputeRegionUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAddList extends cdktf.ComplexList {
  public internalValue? : ComputeRegionUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAdd[] | cdktf.IResolvable

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
  public get(index: number): ComputeRegionUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAddOutputReference {
    return new ComputeRegionUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeRegionUrlMapPathMatcherRouteRulesHeaderAction {
  /**
  * A list of header names for headers that need to be removed from the request
prior to forwarding the request to the backendService.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#request_headers_to_remove ComputeRegionUrlMap#request_headers_to_remove}
  */
  readonly requestHeadersToRemove?: string[];
  /**
  * A list of header names for headers that need to be removed from the response
prior to sending the response back to the client.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#response_headers_to_remove ComputeRegionUrlMap#response_headers_to_remove}
  */
  readonly responseHeadersToRemove?: string[];
  /**
  * request_headers_to_add block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#request_headers_to_add ComputeRegionUrlMap#request_headers_to_add}
  */
  readonly requestHeadersToAdd?: ComputeRegionUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAdd[] | cdktf.IResolvable;
  /**
  * response_headers_to_add block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#response_headers_to_add ComputeRegionUrlMap#response_headers_to_add}
  */
  readonly responseHeadersToAdd?: ComputeRegionUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAdd[] | cdktf.IResolvable;
}

export function computeRegionUrlMapPathMatcherRouteRulesHeaderActionToTerraform(struct?: ComputeRegionUrlMapPathMatcherRouteRulesHeaderActionOutputReference | ComputeRegionUrlMapPathMatcherRouteRulesHeaderAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requestHeadersToRemove),
    response_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.responseHeadersToRemove),
    request_headers_to_add: cdktf.listMapper(computeRegionUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAddToTerraform, true)(struct!.requestHeadersToAdd),
    response_headers_to_add: cdktf.listMapper(computeRegionUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAddToTerraform, true)(struct!.responseHeadersToAdd),
  }
}

export class ComputeRegionUrlMapPathMatcherRouteRulesHeaderActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionUrlMapPathMatcherRouteRulesHeaderAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestHeadersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToRemove = this._requestHeadersToRemove;
    }
    if (this._responseHeadersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToRemove = this._responseHeadersToRemove;
    }
    if (this._requestHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToAdd = this._requestHeadersToAdd?.internalValue;
    }
    if (this._responseHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToAdd = this._responseHeadersToAdd?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherRouteRulesHeaderAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestHeadersToRemove = undefined;
      this._responseHeadersToRemove = undefined;
      this._requestHeadersToAdd.internalValue = undefined;
      this._responseHeadersToAdd.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestHeadersToRemove = value.requestHeadersToRemove;
      this._responseHeadersToRemove = value.responseHeadersToRemove;
      this._requestHeadersToAdd.internalValue = value.requestHeadersToAdd;
      this._responseHeadersToAdd.internalValue = value.responseHeadersToAdd;
    }
  }

  // request_headers_to_remove - computed: false, optional: true, required: false
  private _requestHeadersToRemove?: string[]; 
  public get requestHeadersToRemove() {
    return this.getListAttribute('request_headers_to_remove');
  }
  public set requestHeadersToRemove(value: string[]) {
    this._requestHeadersToRemove = value;
  }
  public resetRequestHeadersToRemove() {
    this._requestHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToRemoveInput() {
    return this._requestHeadersToRemove;
  }

  // response_headers_to_remove - computed: false, optional: true, required: false
  private _responseHeadersToRemove?: string[]; 
  public get responseHeadersToRemove() {
    return this.getListAttribute('response_headers_to_remove');
  }
  public set responseHeadersToRemove(value: string[]) {
    this._responseHeadersToRemove = value;
  }
  public resetResponseHeadersToRemove() {
    this._responseHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToRemoveInput() {
    return this._responseHeadersToRemove;
  }

  // request_headers_to_add - computed: false, optional: true, required: false
  private _requestHeadersToAdd = new ComputeRegionUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAddList(this, "request_headers_to_add", false);
  public get requestHeadersToAdd() {
    return this._requestHeadersToAdd;
  }
  public putRequestHeadersToAdd(value: ComputeRegionUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAdd[] | cdktf.IResolvable) {
    this._requestHeadersToAdd.internalValue = value;
  }
  public resetRequestHeadersToAdd() {
    this._requestHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToAddInput() {
    return this._requestHeadersToAdd.internalValue;
  }

  // response_headers_to_add - computed: false, optional: true, required: false
  private _responseHeadersToAdd = new ComputeRegionUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAddList(this, "response_headers_to_add", false);
  public get responseHeadersToAdd() {
    return this._responseHeadersToAdd;
  }
  public putResponseHeadersToAdd(value: ComputeRegionUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAdd[] | cdktf.IResolvable) {
    this._responseHeadersToAdd.internalValue = value;
  }
  public resetResponseHeadersToAdd() {
    this._responseHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToAddInput() {
    return this._responseHeadersToAdd.internalValue;
  }
}
export interface ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatch {
  /**
  * The end of the range (exclusive).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#range_end ComputeRegionUrlMap#range_end}
  */
  readonly rangeEnd: number;
  /**
  * The start of the range (inclusive).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#range_start ComputeRegionUrlMap#range_start}
  */
  readonly rangeStart: number;
}

export function computeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatchToTerraform(struct?: ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatchOutputReference | ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range_end: cdktf.numberToTerraform(struct!.rangeEnd),
    range_start: cdktf.numberToTerraform(struct!.rangeStart),
  }
}

export class ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeEnd = this._rangeEnd;
    }
    if (this._rangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeStart = this._rangeStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rangeEnd = undefined;
      this._rangeStart = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rangeEnd = value.rangeEnd;
      this._rangeStart = value.rangeStart;
    }
  }

  // range_end - computed: false, optional: false, required: true
  private _rangeEnd?: number; 
  public get rangeEnd() {
    return this.getNumberAttribute('range_end');
  }
  public set rangeEnd(value: number) {
    this._rangeEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeEndInput() {
    return this._rangeEnd;
  }

  // range_start - computed: false, optional: false, required: true
  private _rangeStart?: number; 
  public get rangeStart() {
    return this.getNumberAttribute('range_start');
  }
  public set rangeStart(value: number) {
    this._rangeStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeStartInput() {
    return this._rangeStart;
  }
}
export interface ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatches {
  /**
  * The value should exactly match contents of exactMatch. Only one of exactMatch,
prefixMatch, suffixMatch, regexMatch, presentMatch or rangeMatch must be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#exact_match ComputeRegionUrlMap#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * The name of the HTTP header to match. For matching against the HTTP request's
authority, use a headerMatch with the header name ":authority". For matching a
request's method, use the headerName ":method".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#header_name ComputeRegionUrlMap#header_name}
  */
  readonly headerName: string;
  /**
  * If set to false, the headerMatch is considered a match if the match criteria
above are met. If set to true, the headerMatch is considered a match if the
match criteria above are NOT met. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#invert_match ComputeRegionUrlMap#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * The value of the header must start with the contents of prefixMatch. Only one of
exactMatch, prefixMatch, suffixMatch, regexMatch, presentMatch or rangeMatch
must be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#prefix_match ComputeRegionUrlMap#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * A header with the contents of headerName must exist. The match takes place
whether or not the request's header has a value or not. Only one of exactMatch,
prefixMatch, suffixMatch, regexMatch, presentMatch or rangeMatch must be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#present_match ComputeRegionUrlMap#present_match}
  */
  readonly presentMatch?: boolean | cdktf.IResolvable;
  /**
  * The value of the header must match the regular expression specified in
regexMatch. For regular expression grammar, please see:
en.cppreference.com/w/cpp/regex/ecmascript  For matching against a port
specified in the HTTP request, use a headerMatch with headerName set to PORT and
a regular expression that satisfies the RFC2616 Host header's port specifier.
Only one of exactMatch, prefixMatch, suffixMatch, regexMatch, presentMatch or
rangeMatch must be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#regex_match ComputeRegionUrlMap#regex_match}
  */
  readonly regexMatch?: string;
  /**
  * The value of the header must end with the contents of suffixMatch. Only one of
exactMatch, prefixMatch, suffixMatch, regexMatch, presentMatch or rangeMatch
must be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#suffix_match ComputeRegionUrlMap#suffix_match}
  */
  readonly suffixMatch?: string;
  /**
  * range_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#range_match ComputeRegionUrlMap#range_match}
  */
  readonly rangeMatch?: ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatch;
}

export function computeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesToTerraform(struct?: ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_match: cdktf.stringToTerraform(struct!.exactMatch),
    header_name: cdktf.stringToTerraform(struct!.headerName),
    invert_match: cdktf.booleanToTerraform(struct!.invertMatch),
    prefix_match: cdktf.stringToTerraform(struct!.prefixMatch),
    present_match: cdktf.booleanToTerraform(struct!.presentMatch),
    regex_match: cdktf.stringToTerraform(struct!.regexMatch),
    suffix_match: cdktf.stringToTerraform(struct!.suffixMatch),
    range_match: computeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatchToTerraform(struct!.rangeMatch),
  }
}

export class ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactMatch = this._exactMatch;
    }
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._invertMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatch = this._invertMatch;
    }
    if (this._prefixMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixMatch = this._prefixMatch;
    }
    if (this._presentMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.presentMatch = this._presentMatch;
    }
    if (this._regexMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexMatch = this._regexMatch;
    }
    if (this._suffixMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixMatch = this._suffixMatch;
    }
    if (this._rangeMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeMatch = this._rangeMatch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exactMatch = undefined;
      this._headerName = undefined;
      this._invertMatch = undefined;
      this._prefixMatch = undefined;
      this._presentMatch = undefined;
      this._regexMatch = undefined;
      this._suffixMatch = undefined;
      this._rangeMatch.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exactMatch = value.exactMatch;
      this._headerName = value.headerName;
      this._invertMatch = value.invertMatch;
      this._prefixMatch = value.prefixMatch;
      this._presentMatch = value.presentMatch;
      this._regexMatch = value.regexMatch;
      this._suffixMatch = value.suffixMatch;
      this._rangeMatch.internalValue = value.rangeMatch;
    }
  }

  // exact_match - computed: false, optional: true, required: false
  private _exactMatch?: string; 
  public get exactMatch() {
    return this.getStringAttribute('exact_match');
  }
  public set exactMatch(value: string) {
    this._exactMatch = value;
  }
  public resetExactMatch() {
    this._exactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactMatchInput() {
    return this._exactMatch;
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // invert_match - computed: false, optional: true, required: false
  private _invertMatch?: boolean | cdktf.IResolvable; 
  public get invertMatch() {
    return this.getBooleanAttribute('invert_match');
  }
  public set invertMatch(value: boolean | cdktf.IResolvable) {
    this._invertMatch = value;
  }
  public resetInvertMatch() {
    this._invertMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatchInput() {
    return this._invertMatch;
  }

  // prefix_match - computed: false, optional: true, required: false
  private _prefixMatch?: string; 
  public get prefixMatch() {
    return this.getStringAttribute('prefix_match');
  }
  public set prefixMatch(value: string) {
    this._prefixMatch = value;
  }
  public resetPrefixMatch() {
    this._prefixMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixMatchInput() {
    return this._prefixMatch;
  }

  // present_match - computed: false, optional: true, required: false
  private _presentMatch?: boolean | cdktf.IResolvable; 
  public get presentMatch() {
    return this.getBooleanAttribute('present_match');
  }
  public set presentMatch(value: boolean | cdktf.IResolvable) {
    this._presentMatch = value;
  }
  public resetPresentMatch() {
    this._presentMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presentMatchInput() {
    return this._presentMatch;
  }

  // regex_match - computed: false, optional: true, required: false
  private _regexMatch?: string; 
  public get regexMatch() {
    return this.getStringAttribute('regex_match');
  }
  public set regexMatch(value: string) {
    this._regexMatch = value;
  }
  public resetRegexMatch() {
    this._regexMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexMatchInput() {
    return this._regexMatch;
  }

  // suffix_match - computed: false, optional: true, required: false
  private _suffixMatch?: string; 
  public get suffixMatch() {
    return this.getStringAttribute('suffix_match');
  }
  public set suffixMatch(value: string) {
    this._suffixMatch = value;
  }
  public resetSuffixMatch() {
    this._suffixMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixMatchInput() {
    return this._suffixMatch;
  }

  // range_match - computed: false, optional: true, required: false
  private _rangeMatch = new ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatchOutputReference(this, "range_match");
  public get rangeMatch() {
    return this._rangeMatch;
  }
  public putRangeMatch(value: ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatch) {
    this._rangeMatch.internalValue = value;
  }
  public resetRangeMatch() {
    this._rangeMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeMatchInput() {
    return this._rangeMatch.internalValue;
  }
}

export class ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesList extends cdktf.ComplexList {
  public internalValue? : ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatches[] | cdktf.IResolvable

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
  public get(index: number): ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesOutputReference {
    return new ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabels {
  /**
  * Name of metadata label. The name can have a maximum length of 1024 characters
and must be at least 1 character long.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#name ComputeRegionUrlMap#name}
  */
  readonly name: string;
  /**
  * The value of the label must match the specified value. value can have a maximum
length of 1024 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#value ComputeRegionUrlMap#value}
  */
  readonly value: string;
}

export function computeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabelsToTerraform(struct?: ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabels | cdktf.IResolvable | undefined) {
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabelsList extends cdktf.ComplexList {
  public internalValue? : ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabels[] | cdktf.IResolvable

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
  public get(index: number): ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabelsOutputReference {
    return new ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFilters {
  /**
  * Specifies how individual filterLabel matches within the list of filterLabels
contribute towards the overall metadataFilter match. Supported values are:

* MATCH_ANY: At least one of the filterLabels must have a matching label in the
provided metadata.
* MATCH_ALL: All filterLabels must have matching labels in
the provided metadata. Possible values: ["MATCH_ALL", "MATCH_ANY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#filter_match_criteria ComputeRegionUrlMap#filter_match_criteria}
  */
  readonly filterMatchCriteria: string;
  /**
  * filter_labels block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#filter_labels ComputeRegionUrlMap#filter_labels}
  */
  readonly filterLabels: ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabels[] | cdktf.IResolvable;
}

export function computeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersToTerraform(struct?: ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_match_criteria: cdktf.stringToTerraform(struct!.filterMatchCriteria),
    filter_labels: cdktf.listMapper(computeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabelsToTerraform, true)(struct!.filterLabels),
  }
}

export class ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterMatchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterMatchCriteria = this._filterMatchCriteria;
    }
    if (this._filterLabels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterLabels = this._filterLabels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterMatchCriteria = undefined;
      this._filterLabels.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterMatchCriteria = value.filterMatchCriteria;
      this._filterLabels.internalValue = value.filterLabels;
    }
  }

  // filter_match_criteria - computed: false, optional: false, required: true
  private _filterMatchCriteria?: string; 
  public get filterMatchCriteria() {
    return this.getStringAttribute('filter_match_criteria');
  }
  public set filterMatchCriteria(value: string) {
    this._filterMatchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterMatchCriteriaInput() {
    return this._filterMatchCriteria;
  }

  // filter_labels - computed: false, optional: false, required: true
  private _filterLabels = new ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabelsList(this, "filter_labels", false);
  public get filterLabels() {
    return this._filterLabels;
  }
  public putFilterLabels(value: ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabels[] | cdktf.IResolvable) {
    this._filterLabels.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterLabelsInput() {
    return this._filterLabels.internalValue;
  }
}

export class ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersList extends cdktf.ComplexList {
  public internalValue? : ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFilters[] | cdktf.IResolvable

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
  public get(index: number): ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersOutputReference {
    return new ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatches {
  /**
  * The queryParameterMatch matches if the value of the parameter exactly matches
the contents of exactMatch. Only one of presentMatch, exactMatch and regexMatch
must be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#exact_match ComputeRegionUrlMap#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * The name of the query parameter to match. The query parameter must exist in the
request, in the absence of which the request match fails.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#name ComputeRegionUrlMap#name}
  */
  readonly name: string;
  /**
  * Specifies that the queryParameterMatch matches if the request contains the query
parameter, irrespective of whether the parameter has a value or not. Only one of
presentMatch, exactMatch and regexMatch must be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#present_match ComputeRegionUrlMap#present_match}
  */
  readonly presentMatch?: boolean | cdktf.IResolvable;
  /**
  * The queryParameterMatch matches if the value of the parameter matches the
regular expression specified by regexMatch. For the regular expression grammar,
please see en.cppreference.com/w/cpp/regex/ecmascript  Only one of presentMatch,
exactMatch and regexMatch must be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#regex_match ComputeRegionUrlMap#regex_match}
  */
  readonly regexMatch?: string;
}

export function computeRegionUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatchesToTerraform(struct?: ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_match: cdktf.stringToTerraform(struct!.exactMatch),
    name: cdktf.stringToTerraform(struct!.name),
    present_match: cdktf.booleanToTerraform(struct!.presentMatch),
    regex_match: cdktf.stringToTerraform(struct!.regexMatch),
  }
}

export class ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactMatch = this._exactMatch;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._presentMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.presentMatch = this._presentMatch;
    }
    if (this._regexMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexMatch = this._regexMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exactMatch = undefined;
      this._name = undefined;
      this._presentMatch = undefined;
      this._regexMatch = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exactMatch = value.exactMatch;
      this._name = value.name;
      this._presentMatch = value.presentMatch;
      this._regexMatch = value.regexMatch;
    }
  }

  // exact_match - computed: false, optional: true, required: false
  private _exactMatch?: string; 
  public get exactMatch() {
    return this.getStringAttribute('exact_match');
  }
  public set exactMatch(value: string) {
    this._exactMatch = value;
  }
  public resetExactMatch() {
    this._exactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactMatchInput() {
    return this._exactMatch;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // present_match - computed: false, optional: true, required: false
  private _presentMatch?: boolean | cdktf.IResolvable; 
  public get presentMatch() {
    return this.getBooleanAttribute('present_match');
  }
  public set presentMatch(value: boolean | cdktf.IResolvable) {
    this._presentMatch = value;
  }
  public resetPresentMatch() {
    this._presentMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presentMatchInput() {
    return this._presentMatch;
  }

  // regex_match - computed: false, optional: true, required: false
  private _regexMatch?: string; 
  public get regexMatch() {
    return this.getStringAttribute('regex_match');
  }
  public set regexMatch(value: string) {
    this._regexMatch = value;
  }
  public resetRegexMatch() {
    this._regexMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexMatchInput() {
    return this._regexMatch;
  }
}

export class ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatchesList extends cdktf.ComplexList {
  public internalValue? : ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatches[] | cdktf.IResolvable

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
  public get(index: number): ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatchesOutputReference {
    return new ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeRegionUrlMapPathMatcherRouteRulesMatchRules {
  /**
  * For satisfying the matchRule condition, the path of the request must exactly
match the value specified in fullPathMatch after removing any query parameters
and anchor that may be part of the original URL. FullPathMatch must be between 1
and 1024 characters. Only one of prefixMatch, fullPathMatch or regexMatch must
be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#full_path_match ComputeRegionUrlMap#full_path_match}
  */
  readonly fullPathMatch?: string;
  /**
  * Specifies that prefixMatch and fullPathMatch matches are case sensitive.
Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#ignore_case ComputeRegionUrlMap#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * For satisfying the matchRule condition, the request's path must begin with the
specified prefixMatch. prefixMatch must begin with a /. The value must be
between 1 and 1024 characters. Only one of prefixMatch, fullPathMatch or
regexMatch must be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#prefix_match ComputeRegionUrlMap#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * For satisfying the matchRule condition, the path of the request must satisfy the
regular expression specified in regexMatch after removing any query parameters
and anchor supplied with the original URL. For regular expression grammar please
see en.cppreference.com/w/cpp/regex/ecmascript  Only one of prefixMatch,
fullPathMatch or regexMatch must be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#regex_match ComputeRegionUrlMap#regex_match}
  */
  readonly regexMatch?: string;
  /**
  * header_matches block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#header_matches ComputeRegionUrlMap#header_matches}
  */
  readonly headerMatches?: ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatches[] | cdktf.IResolvable;
  /**
  * metadata_filters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#metadata_filters ComputeRegionUrlMap#metadata_filters}
  */
  readonly metadataFilters?: ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFilters[] | cdktf.IResolvable;
  /**
  * query_parameter_matches block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#query_parameter_matches ComputeRegionUrlMap#query_parameter_matches}
  */
  readonly queryParameterMatches?: ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatches[] | cdktf.IResolvable;
}

export function computeRegionUrlMapPathMatcherRouteRulesMatchRulesToTerraform(struct?: ComputeRegionUrlMapPathMatcherRouteRulesMatchRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full_path_match: cdktf.stringToTerraform(struct!.fullPathMatch),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    prefix_match: cdktf.stringToTerraform(struct!.prefixMatch),
    regex_match: cdktf.stringToTerraform(struct!.regexMatch),
    header_matches: cdktf.listMapper(computeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesToTerraform, true)(struct!.headerMatches),
    metadata_filters: cdktf.listMapper(computeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersToTerraform, true)(struct!.metadataFilters),
    query_parameter_matches: cdktf.listMapper(computeRegionUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatchesToTerraform, true)(struct!.queryParameterMatches),
  }
}

export class ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeRegionUrlMapPathMatcherRouteRulesMatchRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fullPathMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullPathMatch = this._fullPathMatch;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._prefixMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixMatch = this._prefixMatch;
    }
    if (this._regexMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexMatch = this._regexMatch;
    }
    if (this._headerMatches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerMatches = this._headerMatches?.internalValue;
    }
    if (this._metadataFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataFilters = this._metadataFilters?.internalValue;
    }
    if (this._queryParameterMatches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParameterMatches = this._queryParameterMatches?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherRouteRulesMatchRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fullPathMatch = undefined;
      this._ignoreCase = undefined;
      this._prefixMatch = undefined;
      this._regexMatch = undefined;
      this._headerMatches.internalValue = undefined;
      this._metadataFilters.internalValue = undefined;
      this._queryParameterMatches.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fullPathMatch = value.fullPathMatch;
      this._ignoreCase = value.ignoreCase;
      this._prefixMatch = value.prefixMatch;
      this._regexMatch = value.regexMatch;
      this._headerMatches.internalValue = value.headerMatches;
      this._metadataFilters.internalValue = value.metadataFilters;
      this._queryParameterMatches.internalValue = value.queryParameterMatches;
    }
  }

  // full_path_match - computed: false, optional: true, required: false
  private _fullPathMatch?: string; 
  public get fullPathMatch() {
    return this.getStringAttribute('full_path_match');
  }
  public set fullPathMatch(value: string) {
    this._fullPathMatch = value;
  }
  public resetFullPathMatch() {
    this._fullPathMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullPathMatchInput() {
    return this._fullPathMatch;
  }

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // prefix_match - computed: false, optional: true, required: false
  private _prefixMatch?: string; 
  public get prefixMatch() {
    return this.getStringAttribute('prefix_match');
  }
  public set prefixMatch(value: string) {
    this._prefixMatch = value;
  }
  public resetPrefixMatch() {
    this._prefixMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixMatchInput() {
    return this._prefixMatch;
  }

  // regex_match - computed: false, optional: true, required: false
  private _regexMatch?: string; 
  public get regexMatch() {
    return this.getStringAttribute('regex_match');
  }
  public set regexMatch(value: string) {
    this._regexMatch = value;
  }
  public resetRegexMatch() {
    this._regexMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexMatchInput() {
    return this._regexMatch;
  }

  // header_matches - computed: false, optional: true, required: false
  private _headerMatches = new ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesList(this, "header_matches", false);
  public get headerMatches() {
    return this._headerMatches;
  }
  public putHeaderMatches(value: ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatches[] | cdktf.IResolvable) {
    this._headerMatches.internalValue = value;
  }
  public resetHeaderMatches() {
    this._headerMatches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerMatchesInput() {
    return this._headerMatches.internalValue;
  }

  // metadata_filters - computed: false, optional: true, required: false
  private _metadataFilters = new ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersList(this, "metadata_filters", false);
  public get metadataFilters() {
    return this._metadataFilters;
  }
  public putMetadataFilters(value: ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFilters[] | cdktf.IResolvable) {
    this._metadataFilters.internalValue = value;
  }
  public resetMetadataFilters() {
    this._metadataFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataFiltersInput() {
    return this._metadataFilters.internalValue;
  }

  // query_parameter_matches - computed: false, optional: true, required: false
  private _queryParameterMatches = new ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatchesList(this, "query_parameter_matches", false);
  public get queryParameterMatches() {
    return this._queryParameterMatches;
  }
  public putQueryParameterMatches(value: ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatches[] | cdktf.IResolvable) {
    this._queryParameterMatches.internalValue = value;
  }
  public resetQueryParameterMatches() {
    this._queryParameterMatches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParameterMatchesInput() {
    return this._queryParameterMatches.internalValue;
  }
}

export class ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesList extends cdktf.ComplexList {
  public internalValue? : ComputeRegionUrlMapPathMatcherRouteRulesMatchRules[] | cdktf.IResolvable

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
  public get(index: number): ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesOutputReference {
    return new ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeRegionUrlMapPathMatcherRouteRulesRouteActionCorsPolicy {
  /**
  * In response to a preflight request, setting this to true indicates that the
actual request can include user credentials. This translates to the Access-
Control-Allow-Credentials header. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#allow_credentials ComputeRegionUrlMap#allow_credentials}
  */
  readonly allowCredentials?: boolean | cdktf.IResolvable;
  /**
  * Specifies the content for the Access-Control-Allow-Headers header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#allow_headers ComputeRegionUrlMap#allow_headers}
  */
  readonly allowHeaders?: string[];
  /**
  * Specifies the content for the Access-Control-Allow-Methods header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#allow_methods ComputeRegionUrlMap#allow_methods}
  */
  readonly allowMethods?: string[];
  /**
  * Specifies the regular expression patterns that match allowed origins. For
regular expression grammar please see en.cppreference.com/w/cpp/regex/ecmascript
An origin is allowed if it matches either allow_origins or allow_origin_regex.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#allow_origin_regexes ComputeRegionUrlMap#allow_origin_regexes}
  */
  readonly allowOriginRegexes?: string[];
  /**
  * Specifies the list of origins that will be allowed to do CORS requests. An
origin is allowed if it matches either allow_origins or allow_origin_regex.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#allow_origins ComputeRegionUrlMap#allow_origins}
  */
  readonly allowOrigins?: string[];
  /**
  * If true, specifies the CORS policy is disabled.
which indicates that the CORS policy is in effect. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#disabled ComputeRegionUrlMap#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the content for the Access-Control-Expose-Headers header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#expose_headers ComputeRegionUrlMap#expose_headers}
  */
  readonly exposeHeaders?: string[];
  /**
  * Specifies how long the results of a preflight request can be cached. This
translates to the content for the Access-Control-Max-Age header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#max_age ComputeRegionUrlMap#max_age}
  */
  readonly maxAge?: number;
}

export function computeRegionUrlMapPathMatcherRouteRulesRouteActionCorsPolicyToTerraform(struct?: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionCorsPolicyOutputReference | ComputeRegionUrlMapPathMatcherRouteRulesRouteActionCorsPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_credentials: cdktf.booleanToTerraform(struct!.allowCredentials),
    allow_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowHeaders),
    allow_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowMethods),
    allow_origin_regexes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowOriginRegexes),
    allow_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowOrigins),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    expose_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exposeHeaders),
    max_age: cdktf.numberToTerraform(struct!.maxAge),
  }
}

export class ComputeRegionUrlMapPathMatcherRouteRulesRouteActionCorsPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionUrlMapPathMatcherRouteRulesRouteActionCorsPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCredentials = this._allowCredentials;
    }
    if (this._allowHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowHeaders = this._allowHeaders;
    }
    if (this._allowMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMethods = this._allowMethods;
    }
    if (this._allowOriginRegexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOriginRegexes = this._allowOriginRegexes;
    }
    if (this._allowOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOrigins = this._allowOrigins;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._exposeHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposeHeaders = this._exposeHeaders;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionCorsPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowCredentials = undefined;
      this._allowHeaders = undefined;
      this._allowMethods = undefined;
      this._allowOriginRegexes = undefined;
      this._allowOrigins = undefined;
      this._disabled = undefined;
      this._exposeHeaders = undefined;
      this._maxAge = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowCredentials = value.allowCredentials;
      this._allowHeaders = value.allowHeaders;
      this._allowMethods = value.allowMethods;
      this._allowOriginRegexes = value.allowOriginRegexes;
      this._allowOrigins = value.allowOrigins;
      this._disabled = value.disabled;
      this._exposeHeaders = value.exposeHeaders;
      this._maxAge = value.maxAge;
    }
  }

  // allow_credentials - computed: false, optional: true, required: false
  private _allowCredentials?: boolean | cdktf.IResolvable; 
  public get allowCredentials() {
    return this.getBooleanAttribute('allow_credentials');
  }
  public set allowCredentials(value: boolean | cdktf.IResolvable) {
    this._allowCredentials = value;
  }
  public resetAllowCredentials() {
    this._allowCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCredentialsInput() {
    return this._allowCredentials;
  }

  // allow_headers - computed: false, optional: true, required: false
  private _allowHeaders?: string[]; 
  public get allowHeaders() {
    return this.getListAttribute('allow_headers');
  }
  public set allowHeaders(value: string[]) {
    this._allowHeaders = value;
  }
  public resetAllowHeaders() {
    this._allowHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHeadersInput() {
    return this._allowHeaders;
  }

  // allow_methods - computed: false, optional: true, required: false
  private _allowMethods?: string[]; 
  public get allowMethods() {
    return this.getListAttribute('allow_methods');
  }
  public set allowMethods(value: string[]) {
    this._allowMethods = value;
  }
  public resetAllowMethods() {
    this._allowMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMethodsInput() {
    return this._allowMethods;
  }

  // allow_origin_regexes - computed: false, optional: true, required: false
  private _allowOriginRegexes?: string[]; 
  public get allowOriginRegexes() {
    return this.getListAttribute('allow_origin_regexes');
  }
  public set allowOriginRegexes(value: string[]) {
    this._allowOriginRegexes = value;
  }
  public resetAllowOriginRegexes() {
    this._allowOriginRegexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginRegexesInput() {
    return this._allowOriginRegexes;
  }

  // allow_origins - computed: false, optional: true, required: false
  private _allowOrigins?: string[]; 
  public get allowOrigins() {
    return this.getListAttribute('allow_origins');
  }
  public set allowOrigins(value: string[]) {
    this._allowOrigins = value;
  }
  public resetAllowOrigins() {
    this._allowOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginsInput() {
    return this._allowOrigins;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // expose_headers - computed: false, optional: true, required: false
  private _exposeHeaders?: string[]; 
  public get exposeHeaders() {
    return this.getListAttribute('expose_headers');
  }
  public set exposeHeaders(value: string[]) {
    this._exposeHeaders = value;
  }
  public resetExposeHeaders() {
    this._exposeHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeHeadersInput() {
    return this._exposeHeaders;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }
}
export interface ComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbort {
  /**
  * The HTTP status code used to abort the request. The value must be between 200
and 599 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#http_status ComputeRegionUrlMap#http_status}
  */
  readonly httpStatus?: number;
  /**
  * The percentage of traffic (connections/operations/requests) which will be
aborted as part of fault injection. The value must be between 0.0 and 100.0
inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#percentage ComputeRegionUrlMap#percentage}
  */
  readonly percentage?: number;
}

export function computeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbortToTerraform(struct?: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbortOutputReference | ComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_status: cdktf.numberToTerraform(struct!.httpStatus),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}

export class ComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpStatus = this._httpStatus;
    }
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpStatus = undefined;
      this._percentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpStatus = value.httpStatus;
      this._percentage = value.percentage;
    }
  }

  // http_status - computed: false, optional: true, required: false
  private _httpStatus?: number; 
  public get httpStatus() {
    return this.getNumberAttribute('http_status');
  }
  public set httpStatus(value: number) {
    this._httpStatus = value;
  }
  public resetHttpStatus() {
    this._httpStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpStatusInput() {
    return this._httpStatus;
  }

  // percentage - computed: false, optional: true, required: false
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }
}
export interface ComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelay {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#nanos ComputeRegionUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#seconds ComputeRegionUrlMap#seconds}
  */
  readonly seconds: string;
}

export function computeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelayToTerraform(struct?: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference | ComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}

export class ComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelay {
  /**
  * The percentage of traffic (connections/operations/requests) on which delay will
be introduced as part of fault injection. The value must be between 0.0 and
100.0 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#percentage ComputeRegionUrlMap#percentage}
  */
  readonly percentage?: number;
  /**
  * fixed_delay block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#fixed_delay ComputeRegionUrlMap#fixed_delay}
  */
  readonly fixedDelay?: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelay;
}

export function computeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayToTerraform(struct?: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayOutputReference | ComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentage: cdktf.numberToTerraform(struct!.percentage),
    fixed_delay: computeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelayToTerraform(struct!.fixedDelay),
  }
}

export class ComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    if (this._fixedDelay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedDelay = this._fixedDelay?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._percentage = undefined;
      this._fixedDelay.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._percentage = value.percentage;
      this._fixedDelay.internalValue = value.fixedDelay;
    }
  }

  // percentage - computed: false, optional: true, required: false
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }

  // fixed_delay - computed: false, optional: true, required: false
  private _fixedDelay = new ComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference(this, "fixed_delay");
  public get fixedDelay() {
    return this._fixedDelay;
  }
  public putFixedDelay(value: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelay) {
    this._fixedDelay.internalValue = value;
  }
  public resetFixedDelay() {
    this._fixedDelay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedDelayInput() {
    return this._fixedDelay.internalValue;
  }
}
export interface ComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicy {
  /**
  * abort block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#abort ComputeRegionUrlMap#abort}
  */
  readonly abort?: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbort;
  /**
  * delay block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#delay ComputeRegionUrlMap#delay}
  */
  readonly delay?: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelay;
}

export function computeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyToTerraform(struct?: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyOutputReference | ComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abort: computeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbortToTerraform(struct!.abort),
    delay: computeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayToTerraform(struct!.delay),
  }
}

export class ComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abort = this._abort?.internalValue;
    }
    if (this._delay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._abort.internalValue = undefined;
      this._delay.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._abort.internalValue = value.abort;
      this._delay.internalValue = value.delay;
    }
  }

  // abort - computed: false, optional: true, required: false
  private _abort = new ComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbortOutputReference(this, "abort");
  public get abort() {
    return this._abort;
  }
  public putAbort(value: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbort) {
    this._abort.internalValue = value;
  }
  public resetAbort() {
    this._abort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abortInput() {
    return this._abort.internalValue;
  }

  // delay - computed: false, optional: true, required: false
  private _delay = new ComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayOutputReference(this, "delay");
  public get delay() {
    return this._delay;
  }
  public putDelay(value: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelay) {
    this._delay.internalValue = value;
  }
  public resetDelay() {
    this._delay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay.internalValue;
  }
}
export interface ComputeRegionUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicy {
  /**
  * The RegionBackendService resource being mirrored to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#backend_service ComputeRegionUrlMap#backend_service}
  */
  readonly backendService: string;
}

export function computeRegionUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicyToTerraform(struct?: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicyOutputReference | ComputeRegionUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_service: cdktf.stringToTerraform(struct!.backendService),
  }
}

export class ComputeRegionUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendService !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendService = this._backendService;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backendService = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backendService = value.backendService;
    }
  }

  // backend_service - computed: false, optional: false, required: true
  private _backendService?: string; 
  public get backendService() {
    return this.getStringAttribute('backend_service');
  }
  public set backendService(value: string) {
    this._backendService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendServiceInput() {
    return this._backendService;
  }
}
export interface ComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeout {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#nanos ComputeRegionUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#seconds ComputeRegionUrlMap#seconds}
  */
  readonly seconds: string;
}

export function computeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeoutToTerraform(struct?: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeoutOutputReference | ComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}

export class ComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicy {
  /**
  * Specifies the allowed number retries. This number must be > 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#num_retries ComputeRegionUrlMap#num_retries}
  */
  readonly numRetries: number;
  /**
  * Specifies one or more conditions when this retry rule applies. Valid values are:

* 5xx: Loadbalancer will attempt a retry if the backend service responds with
  any 5xx response code, or if the backend service does not respond at all,
  example: disconnects, reset, read timeout, connection failure, and refused
  streams.
* gateway-error: Similar to 5xx, but only applies to response codes
  502, 503 or 504.
* connect-failure: Loadbalancer will retry on failures
  connecting to backend services, for example due to connection timeouts.
* retriable-4xx: Loadbalancer will retry for retriable 4xx response codes.
  Currently the only retriable error supported is 409.
* refused-stream: Loadbalancer will retry if the backend service resets the stream with a
  REFUSED_STREAM error code. This reset type indicates that it is safe to retry.
* cancelled: Loadbalancer will retry if the gRPC status code in the response
  header is set to cancelled
* deadline-exceeded: Loadbalancer will retry if the
  gRPC status code in the response header is set to deadline-exceeded
* resource-exhausted: Loadbalancer will retry if the gRPC status code in the response
  header is set to resource-exhausted
* unavailable: Loadbalancer will retry if the gRPC status code in
  the response header is set to unavailable
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#retry_conditions ComputeRegionUrlMap#retry_conditions}
  */
  readonly retryConditions?: string[];
  /**
  * per_try_timeout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#per_try_timeout ComputeRegionUrlMap#per_try_timeout}
  */
  readonly perTryTimeout?: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeout;
}

export function computeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicyToTerraform(struct?: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicyOutputReference | ComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_retries: cdktf.numberToTerraform(struct!.numRetries),
    retry_conditions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.retryConditions),
    per_try_timeout: computeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeoutToTerraform(struct!.perTryTimeout),
  }
}

export class ComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRetries = this._numRetries;
    }
    if (this._retryConditions !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryConditions = this._retryConditions;
    }
    if (this._perTryTimeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perTryTimeout = this._perTryTimeout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numRetries = undefined;
      this._retryConditions = undefined;
      this._perTryTimeout.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numRetries = value.numRetries;
      this._retryConditions = value.retryConditions;
      this._perTryTimeout.internalValue = value.perTryTimeout;
    }
  }

  // num_retries - computed: false, optional: false, required: true
  private _numRetries?: number; 
  public get numRetries() {
    return this.getNumberAttribute('num_retries');
  }
  public set numRetries(value: number) {
    this._numRetries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numRetriesInput() {
    return this._numRetries;
  }

  // retry_conditions - computed: false, optional: true, required: false
  private _retryConditions?: string[]; 
  public get retryConditions() {
    return this.getListAttribute('retry_conditions');
  }
  public set retryConditions(value: string[]) {
    this._retryConditions = value;
  }
  public resetRetryConditions() {
    this._retryConditions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryConditionsInput() {
    return this._retryConditions;
  }

  // per_try_timeout - computed: false, optional: true, required: false
  private _perTryTimeout = new ComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeoutOutputReference(this, "per_try_timeout");
  public get perTryTimeout() {
    return this._perTryTimeout;
  }
  public putPerTryTimeout(value: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeout) {
    this._perTryTimeout.internalValue = value;
  }
  public resetPerTryTimeout() {
    this._perTryTimeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perTryTimeoutInput() {
    return this._perTryTimeout.internalValue;
  }
}
export interface ComputeRegionUrlMapPathMatcherRouteRulesRouteActionTimeout {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#nanos ComputeRegionUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#seconds ComputeRegionUrlMap#seconds}
  */
  readonly seconds: string;
}

export function computeRegionUrlMapPathMatcherRouteRulesRouteActionTimeoutToTerraform(struct?: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionTimeoutOutputReference | ComputeRegionUrlMapPathMatcherRouteRulesRouteActionTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}

export class ComputeRegionUrlMapPathMatcherRouteRulesRouteActionTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionUrlMapPathMatcherRouteRulesRouteActionTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeRegionUrlMapPathMatcherRouteRulesRouteActionUrlRewrite {
  /**
  * Prior to forwarding the request to the selected service, the request's host
header is replaced with contents of hostRewrite. The value must be between 1 and
255 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#host_rewrite ComputeRegionUrlMap#host_rewrite}
  */
  readonly hostRewrite?: string;
  /**
  * Prior to forwarding the request to the selected backend service, the matching
portion of the request's path is replaced by pathPrefixRewrite. The value must
be between 1 and 1024 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#path_prefix_rewrite ComputeRegionUrlMap#path_prefix_rewrite}
  */
  readonly pathPrefixRewrite?: string;
}

export function computeRegionUrlMapPathMatcherRouteRulesRouteActionUrlRewriteToTerraform(struct?: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionUrlRewriteOutputReference | ComputeRegionUrlMapPathMatcherRouteRulesRouteActionUrlRewrite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_rewrite: cdktf.stringToTerraform(struct!.hostRewrite),
    path_prefix_rewrite: cdktf.stringToTerraform(struct!.pathPrefixRewrite),
  }
}

export class ComputeRegionUrlMapPathMatcherRouteRulesRouteActionUrlRewriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionUrlMapPathMatcherRouteRulesRouteActionUrlRewrite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRewrite = this._hostRewrite;
    }
    if (this._pathPrefixRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPrefixRewrite = this._pathPrefixRewrite;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionUrlRewrite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostRewrite = undefined;
      this._pathPrefixRewrite = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostRewrite = value.hostRewrite;
      this._pathPrefixRewrite = value.pathPrefixRewrite;
    }
  }

  // host_rewrite - computed: false, optional: true, required: false
  private _hostRewrite?: string; 
  public get hostRewrite() {
    return this.getStringAttribute('host_rewrite');
  }
  public set hostRewrite(value: string) {
    this._hostRewrite = value;
  }
  public resetHostRewrite() {
    this._hostRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRewriteInput() {
    return this._hostRewrite;
  }

  // path_prefix_rewrite - computed: false, optional: true, required: false
  private _pathPrefixRewrite?: string; 
  public get pathPrefixRewrite() {
    return this.getStringAttribute('path_prefix_rewrite');
  }
  public set pathPrefixRewrite(value: string) {
    this._pathPrefixRewrite = value;
  }
  public resetPathPrefixRewrite() {
    this._pathPrefixRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixRewriteInput() {
    return this._pathPrefixRewrite;
  }
}
export interface ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd {
  /**
  * The name of the header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#header_name ComputeRegionUrlMap#header_name}
  */
  readonly headerName: string;
  /**
  * The value of the header to add.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#header_value ComputeRegionUrlMap#header_value}
  */
  readonly headerValue: string;
  /**
  * If false, headerValue is appended to any values that already exist for the
header. If true, headerValue is set for the header, discarding any values that
were set for that header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#replace ComputeRegionUrlMap#replace}
  */
  readonly replace: boolean | cdktf.IResolvable;
}

export function computeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToTerraform(struct?: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}

export class ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
      this._replace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
      this._replace = value.replace;
    }
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: false, required: true
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }

  // replace - computed: false, optional: false, required: true
  private _replace?: boolean | cdktf.IResolvable; 
  public get replace() {
    return this.getBooleanAttribute('replace');
  }
  public set replace(value: boolean | cdktf.IResolvable) {
    this._replace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }
}

export class ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddList extends cdktf.ComplexList {
  public internalValue? : ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[] | cdktf.IResolvable

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
  public get(index: number): ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddOutputReference {
    return new ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd {
  /**
  * The name of the header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#header_name ComputeRegionUrlMap#header_name}
  */
  readonly headerName: string;
  /**
  * The value of the header to add.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#header_value ComputeRegionUrlMap#header_value}
  */
  readonly headerValue: string;
  /**
  * If false, headerValue is appended to any values that already exist for the
header. If true, headerValue is set for the header, discarding any values that
were set for that header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#replace ComputeRegionUrlMap#replace}
  */
  readonly replace: boolean | cdktf.IResolvable;
}

export function computeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToTerraform(struct?: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}

export class ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
      this._replace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
      this._replace = value.replace;
    }
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: false, required: true
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }

  // replace - computed: false, optional: false, required: true
  private _replace?: boolean | cdktf.IResolvable; 
  public get replace() {
    return this.getBooleanAttribute('replace');
  }
  public set replace(value: boolean | cdktf.IResolvable) {
    this._replace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }
}

export class ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddList extends cdktf.ComplexList {
  public internalValue? : ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[] | cdktf.IResolvable

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
  public get(index: number): ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddOutputReference {
    return new ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderAction {
  /**
  * A list of header names for headers that need to be removed from the request
prior to forwarding the request to the backendService.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#request_headers_to_remove ComputeRegionUrlMap#request_headers_to_remove}
  */
  readonly requestHeadersToRemove?: string[];
  /**
  * A list of header names for headers that need to be removed from the response
prior to sending the response back to the client.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#response_headers_to_remove ComputeRegionUrlMap#response_headers_to_remove}
  */
  readonly responseHeadersToRemove?: string[];
  /**
  * request_headers_to_add block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#request_headers_to_add ComputeRegionUrlMap#request_headers_to_add}
  */
  readonly requestHeadersToAdd?: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[] | cdktf.IResolvable;
  /**
  * response_headers_to_add block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#response_headers_to_add ComputeRegionUrlMap#response_headers_to_add}
  */
  readonly responseHeadersToAdd?: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[] | cdktf.IResolvable;
}

export function computeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionToTerraform(struct?: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionOutputReference | ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requestHeadersToRemove),
    response_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.responseHeadersToRemove),
    request_headers_to_add: cdktf.listMapper(computeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToTerraform, true)(struct!.requestHeadersToAdd),
    response_headers_to_add: cdktf.listMapper(computeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToTerraform, true)(struct!.responseHeadersToAdd),
  }
}

export class ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestHeadersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToRemove = this._requestHeadersToRemove;
    }
    if (this._responseHeadersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToRemove = this._responseHeadersToRemove;
    }
    if (this._requestHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToAdd = this._requestHeadersToAdd?.internalValue;
    }
    if (this._responseHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToAdd = this._responseHeadersToAdd?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestHeadersToRemove = undefined;
      this._responseHeadersToRemove = undefined;
      this._requestHeadersToAdd.internalValue = undefined;
      this._responseHeadersToAdd.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestHeadersToRemove = value.requestHeadersToRemove;
      this._responseHeadersToRemove = value.responseHeadersToRemove;
      this._requestHeadersToAdd.internalValue = value.requestHeadersToAdd;
      this._responseHeadersToAdd.internalValue = value.responseHeadersToAdd;
    }
  }

  // request_headers_to_remove - computed: false, optional: true, required: false
  private _requestHeadersToRemove?: string[]; 
  public get requestHeadersToRemove() {
    return this.getListAttribute('request_headers_to_remove');
  }
  public set requestHeadersToRemove(value: string[]) {
    this._requestHeadersToRemove = value;
  }
  public resetRequestHeadersToRemove() {
    this._requestHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToRemoveInput() {
    return this._requestHeadersToRemove;
  }

  // response_headers_to_remove - computed: false, optional: true, required: false
  private _responseHeadersToRemove?: string[]; 
  public get responseHeadersToRemove() {
    return this.getListAttribute('response_headers_to_remove');
  }
  public set responseHeadersToRemove(value: string[]) {
    this._responseHeadersToRemove = value;
  }
  public resetResponseHeadersToRemove() {
    this._responseHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToRemoveInput() {
    return this._responseHeadersToRemove;
  }

  // request_headers_to_add - computed: false, optional: true, required: false
  private _requestHeadersToAdd = new ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddList(this, "request_headers_to_add", false);
  public get requestHeadersToAdd() {
    return this._requestHeadersToAdd;
  }
  public putRequestHeadersToAdd(value: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[] | cdktf.IResolvable) {
    this._requestHeadersToAdd.internalValue = value;
  }
  public resetRequestHeadersToAdd() {
    this._requestHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToAddInput() {
    return this._requestHeadersToAdd.internalValue;
  }

  // response_headers_to_add - computed: false, optional: true, required: false
  private _responseHeadersToAdd = new ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddList(this, "response_headers_to_add", false);
  public get responseHeadersToAdd() {
    return this._responseHeadersToAdd;
  }
  public putResponseHeadersToAdd(value: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[] | cdktf.IResolvable) {
    this._responseHeadersToAdd.internalValue = value;
  }
  public resetResponseHeadersToAdd() {
    this._responseHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToAddInput() {
    return this._responseHeadersToAdd.internalValue;
  }
}
export interface ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServices {
  /**
  * The default RegionBackendService resource. Before
forwarding the request to backendService, the loadbalancer applies any relevant
headerActions specified as part of this backendServiceWeight.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#backend_service ComputeRegionUrlMap#backend_service}
  */
  readonly backendService: string;
  /**
  * Specifies the fraction of traffic sent to backendService, computed as weight /
(sum of all weightedBackendService weights in routeAction) . The selection of a
backend service is determined only for new traffic. Once a user's request has
been directed to a backendService, subsequent requests will be sent to the same
backendService as determined by the BackendService's session affinity policy.
The value must be between 0 and 1000
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#weight ComputeRegionUrlMap#weight}
  */
  readonly weight: number;
  /**
  * header_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#header_action ComputeRegionUrlMap#header_action}
  */
  readonly headerAction?: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderAction;
}

export function computeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesToTerraform(struct?: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_service: cdktf.stringToTerraform(struct!.backendService),
    weight: cdktf.numberToTerraform(struct!.weight),
    header_action: computeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionToTerraform(struct!.headerAction),
  }
}

export class ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendService !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendService = this._backendService;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._headerAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerAction = this._headerAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendService = undefined;
      this._weight = undefined;
      this._headerAction.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backendService = value.backendService;
      this._weight = value.weight;
      this._headerAction.internalValue = value.headerAction;
    }
  }

  // backend_service - computed: false, optional: false, required: true
  private _backendService?: string; 
  public get backendService() {
    return this.getStringAttribute('backend_service');
  }
  public set backendService(value: string) {
    this._backendService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendServiceInput() {
    return this._backendService;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // header_action - computed: false, optional: true, required: false
  private _headerAction = new ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionOutputReference(this, "header_action");
  public get headerAction() {
    return this._headerAction;
  }
  public putHeaderAction(value: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderAction) {
    this._headerAction.internalValue = value;
  }
  public resetHeaderAction() {
    this._headerAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerActionInput() {
    return this._headerAction.internalValue;
  }
}

export class ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesList extends cdktf.ComplexList {
  public internalValue? : ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServices[] | cdktf.IResolvable

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
  public get(index: number): ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesOutputReference {
    return new ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeRegionUrlMapPathMatcherRouteRulesRouteAction {
  /**
  * cors_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#cors_policy ComputeRegionUrlMap#cors_policy}
  */
  readonly corsPolicy?: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionCorsPolicy;
  /**
  * fault_injection_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#fault_injection_policy ComputeRegionUrlMap#fault_injection_policy}
  */
  readonly faultInjectionPolicy?: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicy;
  /**
  * request_mirror_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#request_mirror_policy ComputeRegionUrlMap#request_mirror_policy}
  */
  readonly requestMirrorPolicy?: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicy;
  /**
  * retry_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#retry_policy ComputeRegionUrlMap#retry_policy}
  */
  readonly retryPolicy?: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicy;
  /**
  * timeout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#timeout ComputeRegionUrlMap#timeout}
  */
  readonly timeout?: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionTimeout;
  /**
  * url_rewrite block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#url_rewrite ComputeRegionUrlMap#url_rewrite}
  */
  readonly urlRewrite?: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionUrlRewrite;
  /**
  * weighted_backend_services block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#weighted_backend_services ComputeRegionUrlMap#weighted_backend_services}
  */
  readonly weightedBackendServices?: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServices[] | cdktf.IResolvable;
}

export function computeRegionUrlMapPathMatcherRouteRulesRouteActionToTerraform(struct?: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionOutputReference | ComputeRegionUrlMapPathMatcherRouteRulesRouteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cors_policy: computeRegionUrlMapPathMatcherRouteRulesRouteActionCorsPolicyToTerraform(struct!.corsPolicy),
    fault_injection_policy: computeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyToTerraform(struct!.faultInjectionPolicy),
    request_mirror_policy: computeRegionUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicyToTerraform(struct!.requestMirrorPolicy),
    retry_policy: computeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicyToTerraform(struct!.retryPolicy),
    timeout: computeRegionUrlMapPathMatcherRouteRulesRouteActionTimeoutToTerraform(struct!.timeout),
    url_rewrite: computeRegionUrlMapPathMatcherRouteRulesRouteActionUrlRewriteToTerraform(struct!.urlRewrite),
    weighted_backend_services: cdktf.listMapper(computeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesToTerraform, true)(struct!.weightedBackendServices),
  }
}

export class ComputeRegionUrlMapPathMatcherRouteRulesRouteActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionUrlMapPathMatcherRouteRulesRouteAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._corsPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.corsPolicy = this._corsPolicy?.internalValue;
    }
    if (this._faultInjectionPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.faultInjectionPolicy = this._faultInjectionPolicy?.internalValue;
    }
    if (this._requestMirrorPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMirrorPolicy = this._requestMirrorPolicy?.internalValue;
    }
    if (this._retryPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryPolicy = this._retryPolicy?.internalValue;
    }
    if (this._timeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout?.internalValue;
    }
    if (this._urlRewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlRewrite = this._urlRewrite?.internalValue;
    }
    if (this._weightedBackendServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightedBackendServices = this._weightedBackendServices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherRouteRulesRouteAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._corsPolicy.internalValue = undefined;
      this._faultInjectionPolicy.internalValue = undefined;
      this._requestMirrorPolicy.internalValue = undefined;
      this._retryPolicy.internalValue = undefined;
      this._timeout.internalValue = undefined;
      this._urlRewrite.internalValue = undefined;
      this._weightedBackendServices.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._corsPolicy.internalValue = value.corsPolicy;
      this._faultInjectionPolicy.internalValue = value.faultInjectionPolicy;
      this._requestMirrorPolicy.internalValue = value.requestMirrorPolicy;
      this._retryPolicy.internalValue = value.retryPolicy;
      this._timeout.internalValue = value.timeout;
      this._urlRewrite.internalValue = value.urlRewrite;
      this._weightedBackendServices.internalValue = value.weightedBackendServices;
    }
  }

  // cors_policy - computed: false, optional: true, required: false
  private _corsPolicy = new ComputeRegionUrlMapPathMatcherRouteRulesRouteActionCorsPolicyOutputReference(this, "cors_policy");
  public get corsPolicy() {
    return this._corsPolicy;
  }
  public putCorsPolicy(value: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionCorsPolicy) {
    this._corsPolicy.internalValue = value;
  }
  public resetCorsPolicy() {
    this._corsPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsPolicyInput() {
    return this._corsPolicy.internalValue;
  }

  // fault_injection_policy - computed: false, optional: true, required: false
  private _faultInjectionPolicy = new ComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyOutputReference(this, "fault_injection_policy");
  public get faultInjectionPolicy() {
    return this._faultInjectionPolicy;
  }
  public putFaultInjectionPolicy(value: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicy) {
    this._faultInjectionPolicy.internalValue = value;
  }
  public resetFaultInjectionPolicy() {
    this._faultInjectionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultInjectionPolicyInput() {
    return this._faultInjectionPolicy.internalValue;
  }

  // request_mirror_policy - computed: false, optional: true, required: false
  private _requestMirrorPolicy = new ComputeRegionUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicyOutputReference(this, "request_mirror_policy");
  public get requestMirrorPolicy() {
    return this._requestMirrorPolicy;
  }
  public putRequestMirrorPolicy(value: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicy) {
    this._requestMirrorPolicy.internalValue = value;
  }
  public resetRequestMirrorPolicy() {
    this._requestMirrorPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMirrorPolicyInput() {
    return this._requestMirrorPolicy.internalValue;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy = new ComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicyOutputReference(this, "retry_policy");
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public putRetryPolicy(value: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicy) {
    this._retryPolicy.internalValue = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout = new ComputeRegionUrlMapPathMatcherRouteRulesRouteActionTimeoutOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionTimeout) {
    this._timeout.internalValue = value;
  }
  public resetTimeout() {
    this._timeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout.internalValue;
  }

  // url_rewrite - computed: false, optional: true, required: false
  private _urlRewrite = new ComputeRegionUrlMapPathMatcherRouteRulesRouteActionUrlRewriteOutputReference(this, "url_rewrite");
  public get urlRewrite() {
    return this._urlRewrite;
  }
  public putUrlRewrite(value: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionUrlRewrite) {
    this._urlRewrite.internalValue = value;
  }
  public resetUrlRewrite() {
    this._urlRewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlRewriteInput() {
    return this._urlRewrite.internalValue;
  }

  // weighted_backend_services - computed: false, optional: true, required: false
  private _weightedBackendServices = new ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesList(this, "weighted_backend_services", false);
  public get weightedBackendServices() {
    return this._weightedBackendServices;
  }
  public putWeightedBackendServices(value: ComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServices[] | cdktf.IResolvable) {
    this._weightedBackendServices.internalValue = value;
  }
  public resetWeightedBackendServices() {
    this._weightedBackendServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedBackendServicesInput() {
    return this._weightedBackendServices.internalValue;
  }
}
export interface ComputeRegionUrlMapPathMatcherRouteRulesUrlRedirect {
  /**
  * The host that will be used in the redirect response instead of the one
that was supplied in the request. The value must be between 1 and 255
characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#host_redirect ComputeRegionUrlMap#host_redirect}
  */
  readonly hostRedirect?: string;
  /**
  * If set to true, the URL scheme in the redirected request is set to https.
If set to false, the URL scheme of the redirected request will remain the
same as that of the request. This must only be set for UrlMaps used in
TargetHttpProxys. Setting this true for TargetHttpsProxy is not
permitted. The default is set to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#https_redirect ComputeRegionUrlMap#https_redirect}
  */
  readonly httpsRedirect?: boolean | cdktf.IResolvable;
  /**
  * The path that will be used in the redirect response instead of the one
that was supplied in the request. pathRedirect cannot be supplied
together with prefixRedirect. Supply one alone or neither. If neither is
supplied, the path of the original request will be used for the redirect.
The value must be between 1 and 1024 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#path_redirect ComputeRegionUrlMap#path_redirect}
  */
  readonly pathRedirect?: string;
  /**
  * The prefix that replaces the prefixMatch specified in the
HttpRouteRuleMatch, retaining the remaining portion of the URL before
redirecting the request. prefixRedirect cannot be supplied together with
pathRedirect. Supply one alone or neither. If neither is supplied, the
path of the original request will be used for the redirect. The value
must be between 1 and 1024 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#prefix_redirect ComputeRegionUrlMap#prefix_redirect}
  */
  readonly prefixRedirect?: string;
  /**
  * The HTTP Status code to use for this RedirectAction. Supported values are:

* MOVED_PERMANENTLY_DEFAULT, which is the default value and corresponds to 301.

* FOUND, which corresponds to 302.

* SEE_OTHER which corresponds to 303.

* TEMPORARY_REDIRECT, which corresponds to 307. In this case, the request method
will be retained.

* PERMANENT_REDIRECT, which corresponds to 308. In this case,
the request method will be retained. Possible values: ["FOUND", "MOVED_PERMANENTLY_DEFAULT", "PERMANENT_REDIRECT", "SEE_OTHER", "TEMPORARY_REDIRECT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#redirect_response_code ComputeRegionUrlMap#redirect_response_code}
  */
  readonly redirectResponseCode?: string;
  /**
  * If set to true, any accompanying query portion of the original URL is
removed prior to redirecting the request. If set to false, the query
portion of the original URL is retained. The default value is false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#strip_query ComputeRegionUrlMap#strip_query}
  */
  readonly stripQuery?: boolean | cdktf.IResolvable;
}

export function computeRegionUrlMapPathMatcherRouteRulesUrlRedirectToTerraform(struct?: ComputeRegionUrlMapPathMatcherRouteRulesUrlRedirectOutputReference | ComputeRegionUrlMapPathMatcherRouteRulesUrlRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_redirect: cdktf.stringToTerraform(struct!.hostRedirect),
    https_redirect: cdktf.booleanToTerraform(struct!.httpsRedirect),
    path_redirect: cdktf.stringToTerraform(struct!.pathRedirect),
    prefix_redirect: cdktf.stringToTerraform(struct!.prefixRedirect),
    redirect_response_code: cdktf.stringToTerraform(struct!.redirectResponseCode),
    strip_query: cdktf.booleanToTerraform(struct!.stripQuery),
  }
}

export class ComputeRegionUrlMapPathMatcherRouteRulesUrlRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionUrlMapPathMatcherRouteRulesUrlRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRedirect = this._hostRedirect;
    }
    if (this._httpsRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsRedirect = this._httpsRedirect;
    }
    if (this._pathRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathRedirect = this._pathRedirect;
    }
    if (this._prefixRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixRedirect = this._prefixRedirect;
    }
    if (this._redirectResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectResponseCode = this._redirectResponseCode;
    }
    if (this._stripQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripQuery = this._stripQuery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherRouteRulesUrlRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostRedirect = undefined;
      this._httpsRedirect = undefined;
      this._pathRedirect = undefined;
      this._prefixRedirect = undefined;
      this._redirectResponseCode = undefined;
      this._stripQuery = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostRedirect = value.hostRedirect;
      this._httpsRedirect = value.httpsRedirect;
      this._pathRedirect = value.pathRedirect;
      this._prefixRedirect = value.prefixRedirect;
      this._redirectResponseCode = value.redirectResponseCode;
      this._stripQuery = value.stripQuery;
    }
  }

  // host_redirect - computed: false, optional: true, required: false
  private _hostRedirect?: string; 
  public get hostRedirect() {
    return this.getStringAttribute('host_redirect');
  }
  public set hostRedirect(value: string) {
    this._hostRedirect = value;
  }
  public resetHostRedirect() {
    this._hostRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRedirectInput() {
    return this._hostRedirect;
  }

  // https_redirect - computed: false, optional: true, required: false
  private _httpsRedirect?: boolean | cdktf.IResolvable; 
  public get httpsRedirect() {
    return this.getBooleanAttribute('https_redirect');
  }
  public set httpsRedirect(value: boolean | cdktf.IResolvable) {
    this._httpsRedirect = value;
  }
  public resetHttpsRedirect() {
    this._httpsRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsRedirectInput() {
    return this._httpsRedirect;
  }

  // path_redirect - computed: false, optional: true, required: false
  private _pathRedirect?: string; 
  public get pathRedirect() {
    return this.getStringAttribute('path_redirect');
  }
  public set pathRedirect(value: string) {
    this._pathRedirect = value;
  }
  public resetPathRedirect() {
    this._pathRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRedirectInput() {
    return this._pathRedirect;
  }

  // prefix_redirect - computed: false, optional: true, required: false
  private _prefixRedirect?: string; 
  public get prefixRedirect() {
    return this.getStringAttribute('prefix_redirect');
  }
  public set prefixRedirect(value: string) {
    this._prefixRedirect = value;
  }
  public resetPrefixRedirect() {
    this._prefixRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixRedirectInput() {
    return this._prefixRedirect;
  }

  // redirect_response_code - computed: false, optional: true, required: false
  private _redirectResponseCode?: string; 
  public get redirectResponseCode() {
    return this.getStringAttribute('redirect_response_code');
  }
  public set redirectResponseCode(value: string) {
    this._redirectResponseCode = value;
  }
  public resetRedirectResponseCode() {
    this._redirectResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectResponseCodeInput() {
    return this._redirectResponseCode;
  }

  // strip_query - computed: false, optional: true, required: false
  private _stripQuery?: boolean | cdktf.IResolvable; 
  public get stripQuery() {
    return this.getBooleanAttribute('strip_query');
  }
  public set stripQuery(value: boolean | cdktf.IResolvable) {
    this._stripQuery = value;
  }
  public resetStripQuery() {
    this._stripQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripQueryInput() {
    return this._stripQuery;
  }
}
export interface ComputeRegionUrlMapPathMatcherRouteRules {
  /**
  * For routeRules within a given pathMatcher, priority determines the order
in which load balancer will interpret routeRules. RouteRules are evaluated
in order of priority, from the lowest to highest number. The priority of
a rule decreases as its number increases (1, 2, 3, N+1). The first rule
that matches the request is applied.

You cannot configure two or more routeRules with the same priority.
Priority for each rule must be set to a number between 0 and
2147483647 inclusive.

Priority numbers can have gaps, which enable you to add or remove rules
in the future without affecting the rest of the rules. For example,
1, 2, 3, 4, 5, 9, 12, 16 is a valid series of priority numbers to which
you could add rules numbered from 6 to 8, 10 to 11, and 13 to 15 in the
future without any impact on existing rules.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#priority ComputeRegionUrlMap#priority}
  */
  readonly priority: number;
  /**
  * The region backend service resource to which traffic is
directed if this rule is matched. If routeAction is additionally specified,
advanced routing actions like URL Rewrites, etc. take effect prior to sending
the request to the backend. However, if service is specified, routeAction cannot
contain any weightedBackendService s. Conversely, if routeAction specifies any
weightedBackendServices, service must not be specified. Only one of urlRedirect,
service or routeAction.weightedBackendService must be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#service ComputeRegionUrlMap#service}
  */
  readonly service?: string;
  /**
  * header_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#header_action ComputeRegionUrlMap#header_action}
  */
  readonly headerAction?: ComputeRegionUrlMapPathMatcherRouteRulesHeaderAction;
  /**
  * match_rules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#match_rules ComputeRegionUrlMap#match_rules}
  */
  readonly matchRules?: ComputeRegionUrlMapPathMatcherRouteRulesMatchRules[] | cdktf.IResolvable;
  /**
  * route_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#route_action ComputeRegionUrlMap#route_action}
  */
  readonly routeAction?: ComputeRegionUrlMapPathMatcherRouteRulesRouteAction;
  /**
  * url_redirect block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#url_redirect ComputeRegionUrlMap#url_redirect}
  */
  readonly urlRedirect?: ComputeRegionUrlMapPathMatcherRouteRulesUrlRedirect;
}

export function computeRegionUrlMapPathMatcherRouteRulesToTerraform(struct?: ComputeRegionUrlMapPathMatcherRouteRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    service: cdktf.stringToTerraform(struct!.service),
    header_action: computeRegionUrlMapPathMatcherRouteRulesHeaderActionToTerraform(struct!.headerAction),
    match_rules: cdktf.listMapper(computeRegionUrlMapPathMatcherRouteRulesMatchRulesToTerraform, true)(struct!.matchRules),
    route_action: computeRegionUrlMapPathMatcherRouteRulesRouteActionToTerraform(struct!.routeAction),
    url_redirect: computeRegionUrlMapPathMatcherRouteRulesUrlRedirectToTerraform(struct!.urlRedirect),
  }
}

export class ComputeRegionUrlMapPathMatcherRouteRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeRegionUrlMapPathMatcherRouteRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._headerAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerAction = this._headerAction?.internalValue;
    }
    if (this._matchRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRules = this._matchRules?.internalValue;
    }
    if (this._routeAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeAction = this._routeAction?.internalValue;
    }
    if (this._urlRedirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlRedirect = this._urlRedirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcherRouteRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priority = undefined;
      this._service = undefined;
      this._headerAction.internalValue = undefined;
      this._matchRules.internalValue = undefined;
      this._routeAction.internalValue = undefined;
      this._urlRedirect.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._priority = value.priority;
      this._service = value.service;
      this._headerAction.internalValue = value.headerAction;
      this._matchRules.internalValue = value.matchRules;
      this._routeAction.internalValue = value.routeAction;
      this._urlRedirect.internalValue = value.urlRedirect;
    }
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // header_action - computed: false, optional: true, required: false
  private _headerAction = new ComputeRegionUrlMapPathMatcherRouteRulesHeaderActionOutputReference(this, "header_action");
  public get headerAction() {
    return this._headerAction;
  }
  public putHeaderAction(value: ComputeRegionUrlMapPathMatcherRouteRulesHeaderAction) {
    this._headerAction.internalValue = value;
  }
  public resetHeaderAction() {
    this._headerAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerActionInput() {
    return this._headerAction.internalValue;
  }

  // match_rules - computed: false, optional: true, required: false
  private _matchRules = new ComputeRegionUrlMapPathMatcherRouteRulesMatchRulesList(this, "match_rules", false);
  public get matchRules() {
    return this._matchRules;
  }
  public putMatchRules(value: ComputeRegionUrlMapPathMatcherRouteRulesMatchRules[] | cdktf.IResolvable) {
    this._matchRules.internalValue = value;
  }
  public resetMatchRules() {
    this._matchRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRulesInput() {
    return this._matchRules.internalValue;
  }

  // route_action - computed: false, optional: true, required: false
  private _routeAction = new ComputeRegionUrlMapPathMatcherRouteRulesRouteActionOutputReference(this, "route_action");
  public get routeAction() {
    return this._routeAction;
  }
  public putRouteAction(value: ComputeRegionUrlMapPathMatcherRouteRulesRouteAction) {
    this._routeAction.internalValue = value;
  }
  public resetRouteAction() {
    this._routeAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeActionInput() {
    return this._routeAction.internalValue;
  }

  // url_redirect - computed: false, optional: true, required: false
  private _urlRedirect = new ComputeRegionUrlMapPathMatcherRouteRulesUrlRedirectOutputReference(this, "url_redirect");
  public get urlRedirect() {
    return this._urlRedirect;
  }
  public putUrlRedirect(value: ComputeRegionUrlMapPathMatcherRouteRulesUrlRedirect) {
    this._urlRedirect.internalValue = value;
  }
  public resetUrlRedirect() {
    this._urlRedirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlRedirectInput() {
    return this._urlRedirect.internalValue;
  }
}

export class ComputeRegionUrlMapPathMatcherRouteRulesList extends cdktf.ComplexList {
  public internalValue? : ComputeRegionUrlMapPathMatcherRouteRules[] | cdktf.IResolvable

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
  public get(index: number): ComputeRegionUrlMapPathMatcherRouteRulesOutputReference {
    return new ComputeRegionUrlMapPathMatcherRouteRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeRegionUrlMapPathMatcher {
  /**
  * A reference to a RegionBackendService resource. This will be used if
none of the pathRules defined by this PathMatcher is matched by
the URL's path portion.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#default_service ComputeRegionUrlMap#default_service}
  */
  readonly defaultService?: string;
  /**
  * An optional description of this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#description ComputeRegionUrlMap#description}
  */
  readonly description?: string;
  /**
  * The name to which this PathMatcher is referred by the HostRule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#name ComputeRegionUrlMap#name}
  */
  readonly name: string;
  /**
  * default_url_redirect block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#default_url_redirect ComputeRegionUrlMap#default_url_redirect}
  */
  readonly defaultUrlRedirect?: ComputeRegionUrlMapPathMatcherDefaultUrlRedirect;
  /**
  * path_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#path_rule ComputeRegionUrlMap#path_rule}
  */
  readonly pathRule?: ComputeRegionUrlMapPathMatcherPathRule[] | cdktf.IResolvable;
  /**
  * route_rules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#route_rules ComputeRegionUrlMap#route_rules}
  */
  readonly routeRules?: ComputeRegionUrlMapPathMatcherRouteRules[] | cdktf.IResolvable;
}

export function computeRegionUrlMapPathMatcherToTerraform(struct?: ComputeRegionUrlMapPathMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_service: cdktf.stringToTerraform(struct!.defaultService),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    default_url_redirect: computeRegionUrlMapPathMatcherDefaultUrlRedirectToTerraform(struct!.defaultUrlRedirect),
    path_rule: cdktf.listMapper(computeRegionUrlMapPathMatcherPathRuleToTerraform, true)(struct!.pathRule),
    route_rules: cdktf.listMapper(computeRegionUrlMapPathMatcherRouteRulesToTerraform, true)(struct!.routeRules),
  }
}

export class ComputeRegionUrlMapPathMatcherOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeRegionUrlMapPathMatcher | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultService !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultService = this._defaultService;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._defaultUrlRedirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultUrlRedirect = this._defaultUrlRedirect?.internalValue;
    }
    if (this._pathRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathRule = this._pathRule?.internalValue;
    }
    if (this._routeRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeRules = this._routeRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapPathMatcher | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultService = undefined;
      this._description = undefined;
      this._name = undefined;
      this._defaultUrlRedirect.internalValue = undefined;
      this._pathRule.internalValue = undefined;
      this._routeRules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultService = value.defaultService;
      this._description = value.description;
      this._name = value.name;
      this._defaultUrlRedirect.internalValue = value.defaultUrlRedirect;
      this._pathRule.internalValue = value.pathRule;
      this._routeRules.internalValue = value.routeRules;
    }
  }

  // default_service - computed: false, optional: true, required: false
  private _defaultService?: string; 
  public get defaultService() {
    return this.getStringAttribute('default_service');
  }
  public set defaultService(value: string) {
    this._defaultService = value;
  }
  public resetDefaultService() {
    this._defaultService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultServiceInput() {
    return this._defaultService;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // default_url_redirect - computed: false, optional: true, required: false
  private _defaultUrlRedirect = new ComputeRegionUrlMapPathMatcherDefaultUrlRedirectOutputReference(this, "default_url_redirect");
  public get defaultUrlRedirect() {
    return this._defaultUrlRedirect;
  }
  public putDefaultUrlRedirect(value: ComputeRegionUrlMapPathMatcherDefaultUrlRedirect) {
    this._defaultUrlRedirect.internalValue = value;
  }
  public resetDefaultUrlRedirect() {
    this._defaultUrlRedirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUrlRedirectInput() {
    return this._defaultUrlRedirect.internalValue;
  }

  // path_rule - computed: false, optional: true, required: false
  private _pathRule = new ComputeRegionUrlMapPathMatcherPathRuleList(this, "path_rule", false);
  public get pathRule() {
    return this._pathRule;
  }
  public putPathRule(value: ComputeRegionUrlMapPathMatcherPathRule[] | cdktf.IResolvable) {
    this._pathRule.internalValue = value;
  }
  public resetPathRule() {
    this._pathRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRuleInput() {
    return this._pathRule.internalValue;
  }

  // route_rules - computed: false, optional: true, required: false
  private _routeRules = new ComputeRegionUrlMapPathMatcherRouteRulesList(this, "route_rules", false);
  public get routeRules() {
    return this._routeRules;
  }
  public putRouteRules(value: ComputeRegionUrlMapPathMatcherRouteRules[] | cdktf.IResolvable) {
    this._routeRules.internalValue = value;
  }
  public resetRouteRules() {
    this._routeRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeRulesInput() {
    return this._routeRules.internalValue;
  }
}

export class ComputeRegionUrlMapPathMatcherList extends cdktf.ComplexList {
  public internalValue? : ComputeRegionUrlMapPathMatcher[] | cdktf.IResolvable

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
  public get(index: number): ComputeRegionUrlMapPathMatcherOutputReference {
    return new ComputeRegionUrlMapPathMatcherOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeRegionUrlMapTest {
  /**
  * Description of this test case.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#description ComputeRegionUrlMap#description}
  */
  readonly description?: string;
  /**
  * Host portion of the URL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#host ComputeRegionUrlMap#host}
  */
  readonly host: string;
  /**
  * Path portion of the URL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#path ComputeRegionUrlMap#path}
  */
  readonly path: string;
  /**
  * A reference to expected RegionBackendService resource the given URL should be mapped to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#service ComputeRegionUrlMap#service}
  */
  readonly service: string;
}

export function computeRegionUrlMapTestToTerraform(struct?: ComputeRegionUrlMapTest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    service: cdktf.stringToTerraform(struct!.service),
  }
}

export class ComputeRegionUrlMapTestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeRegionUrlMapTest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionUrlMapTest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._host = undefined;
      this._path = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._host = value.host;
      this._path = value.path;
      this._service = value.service;
    }
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

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}

export class ComputeRegionUrlMapTestList extends cdktf.ComplexList {
  public internalValue? : ComputeRegionUrlMapTest[] | cdktf.IResolvable

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
  public get(index: number): ComputeRegionUrlMapTestOutputReference {
    return new ComputeRegionUrlMapTestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeRegionUrlMapTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#create ComputeRegionUrlMap#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#delete ComputeRegionUrlMap#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map#update ComputeRegionUrlMap#update}
  */
  readonly update?: string;
}

export function computeRegionUrlMapTimeoutsToTerraform(struct?: ComputeRegionUrlMapTimeoutsOutputReference | ComputeRegionUrlMapTimeouts | cdktf.IResolvable): any {
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

export class ComputeRegionUrlMapTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRegionUrlMapTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeRegionUrlMapTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map google_compute_region_url_map}
*/
export class ComputeRegionUrlMap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_region_url_map";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_region_url_map google_compute_region_url_map} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeRegionUrlMapConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeRegionUrlMapConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_region_url_map',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.35.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultService = config.defaultService;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._defaultUrlRedirect.internalValue = config.defaultUrlRedirect;
    this._hostRule.internalValue = config.hostRule;
    this._pathMatcher.internalValue = config.pathMatcher;
    this._test.internalValue = config.test;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // default_service - computed: false, optional: true, required: false
  private _defaultService?: string; 
  public get defaultService() {
    return this.getStringAttribute('default_service');
  }
  public set defaultService(value: string) {
    this._defaultService = value;
  }
  public resetDefaultService() {
    this._defaultService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultServiceInput() {
    return this._defaultService;
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

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
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

  // map_id - computed: true, optional: false, required: false
  public get mapId() {
    return this.getNumberAttribute('map_id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // default_url_redirect - computed: false, optional: true, required: false
  private _defaultUrlRedirect = new ComputeRegionUrlMapDefaultUrlRedirectOutputReference(this, "default_url_redirect");
  public get defaultUrlRedirect() {
    return this._defaultUrlRedirect;
  }
  public putDefaultUrlRedirect(value: ComputeRegionUrlMapDefaultUrlRedirect) {
    this._defaultUrlRedirect.internalValue = value;
  }
  public resetDefaultUrlRedirect() {
    this._defaultUrlRedirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUrlRedirectInput() {
    return this._defaultUrlRedirect.internalValue;
  }

  // host_rule - computed: false, optional: true, required: false
  private _hostRule = new ComputeRegionUrlMapHostRuleList(this, "host_rule", true);
  public get hostRule() {
    return this._hostRule;
  }
  public putHostRule(value: ComputeRegionUrlMapHostRule[] | cdktf.IResolvable) {
    this._hostRule.internalValue = value;
  }
  public resetHostRule() {
    this._hostRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRuleInput() {
    return this._hostRule.internalValue;
  }

  // path_matcher - computed: false, optional: true, required: false
  private _pathMatcher = new ComputeRegionUrlMapPathMatcherList(this, "path_matcher", false);
  public get pathMatcher() {
    return this._pathMatcher;
  }
  public putPathMatcher(value: ComputeRegionUrlMapPathMatcher[] | cdktf.IResolvable) {
    this._pathMatcher.internalValue = value;
  }
  public resetPathMatcher() {
    this._pathMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathMatcherInput() {
    return this._pathMatcher.internalValue;
  }

  // test - computed: false, optional: true, required: false
  private _test = new ComputeRegionUrlMapTestList(this, "test", false);
  public get test() {
    return this._test;
  }
  public putTest(value: ComputeRegionUrlMapTest[] | cdktf.IResolvable) {
    this._test.internalValue = value;
  }
  public resetTest() {
    this._test.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testInput() {
    return this._test.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeRegionUrlMapTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeRegionUrlMapTimeouts) {
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
      default_service: cdktf.stringToTerraform(this._defaultService),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      default_url_redirect: computeRegionUrlMapDefaultUrlRedirectToTerraform(this._defaultUrlRedirect.internalValue),
      host_rule: cdktf.listMapper(computeRegionUrlMapHostRuleToTerraform, true)(this._hostRule.internalValue),
      path_matcher: cdktf.listMapper(computeRegionUrlMapPathMatcherToTerraform, true)(this._pathMatcher.internalValue),
      test: cdktf.listMapper(computeRegionUrlMapTestToTerraform, true)(this._test.internalValue),
      timeouts: computeRegionUrlMapTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
