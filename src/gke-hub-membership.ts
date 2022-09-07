// https://www.terraform.io/docs/providers/google/r/gke_hub_membership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GkeHubMembershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership#id GkeHubMembership#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels to apply to this membership.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership#labels GkeHubMembership#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The client-provided identifier of the membership.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership#membership_id GkeHubMembership#membership_id}
  */
  readonly membershipId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership#project GkeHubMembership#project}
  */
  readonly project?: string;
  /**
  * authority block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership#authority GkeHubMembership#authority}
  */
  readonly authority?: GkeHubMembershipAuthority;
  /**
  * endpoint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership#endpoint GkeHubMembership#endpoint}
  */
  readonly endpoint?: GkeHubMembershipEndpoint;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership#timeouts GkeHubMembership#timeouts}
  */
  readonly timeouts?: GkeHubMembershipTimeouts;
}
export interface GkeHubMembershipAuthority {
  /**
  * A JSON Web Token (JWT) issuer URI. 'issuer' must start with 'https://' and // be a valid 
with length <2000 characters. For example: 'https://container.googleapis.com/v1/projects/my-project/locations/us-west1/clusters/my-cluster' (must be 'locations' rather than 'zones'). If the cluster is provisioned with Terraform, this is '"https://container.googleapis.com/v1/${google_container_cluster.my-cluster.id}"'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership#issuer GkeHubMembership#issuer}
  */
  readonly issuer: string;
}

export function gkeHubMembershipAuthorityToTerraform(struct?: GkeHubMembershipAuthorityOutputReference | GkeHubMembershipAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issuer: cdktf.stringToTerraform(struct!.issuer),
  }
}

export class GkeHubMembershipAuthorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubMembershipAuthority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubMembershipAuthority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._issuer = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._issuer = value.issuer;
    }
  }

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }
}
export interface GkeHubMembershipEndpointGkeCluster {
  /**
  * Self-link of the GCP resource for the GKE cluster.
For example: '//container.googleapis.com/projects/my-project/zones/us-west1-a/clusters/my-cluster'.
It can be at the most 1000 characters in length. If the cluster is provisioned with Terraform,
this can be '"//container.googleapis.com/${google_container_cluster.my-cluster.id}"' or
'google_container_cluster.my-cluster.id'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership#resource_link GkeHubMembership#resource_link}
  */
  readonly resourceLink: string;
}

export function gkeHubMembershipEndpointGkeClusterToTerraform(struct?: GkeHubMembershipEndpointGkeClusterOutputReference | GkeHubMembershipEndpointGkeCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_link: cdktf.stringToTerraform(struct!.resourceLink),
  }
}

export class GkeHubMembershipEndpointGkeClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubMembershipEndpointGkeCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLink = this._resourceLink;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubMembershipEndpointGkeCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceLink = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceLink = value.resourceLink;
    }
  }

  // resource_link - computed: false, optional: false, required: true
  private _resourceLink?: string; 
  public get resourceLink() {
    return this.getStringAttribute('resource_link');
  }
  public set resourceLink(value: string) {
    this._resourceLink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLinkInput() {
    return this._resourceLink;
  }
}
export interface GkeHubMembershipEndpoint {
  /**
  * gke_cluster block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership#gke_cluster GkeHubMembership#gke_cluster}
  */
  readonly gkeCluster?: GkeHubMembershipEndpointGkeCluster;
}

export function gkeHubMembershipEndpointToTerraform(struct?: GkeHubMembershipEndpointOutputReference | GkeHubMembershipEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gke_cluster: gkeHubMembershipEndpointGkeClusterToTerraform(struct!.gkeCluster),
  }
}

export class GkeHubMembershipEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubMembershipEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gkeCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gkeCluster = this._gkeCluster?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubMembershipEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gkeCluster.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gkeCluster.internalValue = value.gkeCluster;
    }
  }

  // gke_cluster - computed: false, optional: true, required: false
  private _gkeCluster = new GkeHubMembershipEndpointGkeClusterOutputReference(this, "gke_cluster");
  public get gkeCluster() {
    return this._gkeCluster;
  }
  public putGkeCluster(value: GkeHubMembershipEndpointGkeCluster) {
    this._gkeCluster.internalValue = value;
  }
  public resetGkeCluster() {
    this._gkeCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeClusterInput() {
    return this._gkeCluster.internalValue;
  }
}
export interface GkeHubMembershipTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership#create GkeHubMembership#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership#delete GkeHubMembership#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership#update GkeHubMembership#update}
  */
  readonly update?: string;
}

export function gkeHubMembershipTimeoutsToTerraform(struct?: GkeHubMembershipTimeoutsOutputReference | GkeHubMembershipTimeouts | cdktf.IResolvable): any {
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

export class GkeHubMembershipTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubMembershipTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GkeHubMembershipTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership google_gke_hub_membership}
*/
export class GkeHubMembership extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_gke_hub_membership";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership google_gke_hub_membership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GkeHubMembershipConfig
  */
  public constructor(scope: Construct, id: string, config: GkeHubMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'google_gke_hub_membership',
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
    this._id = config.id;
    this._labels = config.labels;
    this._membershipId = config.membershipId;
    this._project = config.project;
    this._authority.internalValue = config.authority;
    this._endpoint.internalValue = config.endpoint;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // membership_id - computed: false, optional: false, required: true
  private _membershipId?: string; 
  public get membershipId() {
    return this.getStringAttribute('membership_id');
  }
  public set membershipId(value: string) {
    this._membershipId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membershipIdInput() {
    return this._membershipId;
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

  // authority - computed: false, optional: true, required: false
  private _authority = new GkeHubMembershipAuthorityOutputReference(this, "authority");
  public get authority() {
    return this._authority;
  }
  public putAuthority(value: GkeHubMembershipAuthority) {
    this._authority.internalValue = value;
  }
  public resetAuthority() {
    this._authority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorityInput() {
    return this._authority.internalValue;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint = new GkeHubMembershipEndpointOutputReference(this, "endpoint");
  public get endpoint() {
    return this._endpoint;
  }
  public putEndpoint(value: GkeHubMembershipEndpoint) {
    this._endpoint.internalValue = value;
  }
  public resetEndpoint() {
    this._endpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GkeHubMembershipTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GkeHubMembershipTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      membership_id: cdktf.stringToTerraform(this._membershipId),
      project: cdktf.stringToTerraform(this._project),
      authority: gkeHubMembershipAuthorityToTerraform(this._authority.internalValue),
      endpoint: gkeHubMembershipEndpointToTerraform(this._endpoint.internalValue),
      timeouts: gkeHubMembershipTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
