// https://www.terraform.io/docs/providers/google/r/gke_hub_membership.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GkeHubMembershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Labels to apply to this membership.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership.html#labels GkeHubMembership#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The client-provided identifier of the membership.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership.html#membership_id GkeHubMembership#membership_id}
  */
  readonly membershipId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership.html#project GkeHubMembership#project}
  */
  readonly project?: string;
  /**
  * authority block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership.html#authority GkeHubMembership#authority}
  */
  readonly authority?: GkeHubMembershipAuthority;
  /**
  * endpoint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership.html#endpoint GkeHubMembership#endpoint}
  */
  readonly endpoint?: GkeHubMembershipEndpoint;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership.html#timeouts GkeHubMembership#timeouts}
  */
  readonly timeouts?: GkeHubMembershipTimeouts;
}
export interface GkeHubMembershipAuthority {
  /**
  * A JSON Web Token (JWT) issuer URI. 'issuer' must start with 'https://' and // be a valid 
with length <2000 characters. For example: 'https://container.googleapis.com/v1/projects/my-project/locations/us-west1/clusters/my-cluster' (must be 'locations' rather than 'zones'). If the cluster is provisioned with Terraform, this is '"https://container.googleapis.com/v1/${google_container_cluster.my-cluster.id}"'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership.html#issuer GkeHubMembership#issuer}
  */
  readonly issuer: string;
}

function gkeHubMembershipAuthorityToTerraform(struct?: GkeHubMembershipAuthorityOutputReference | GkeHubMembershipAuthority): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issuer: cdktf.stringToTerraform(struct!.issuer),
  }
}

export class GkeHubMembershipAuthorityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._issuer
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership.html#resource_link GkeHubMembership#resource_link}
  */
  readonly resourceLink: string;
}

function gkeHubMembershipEndpointGkeClusterToTerraform(struct?: GkeHubMembershipEndpointGkeClusterOutputReference | GkeHubMembershipEndpointGkeCluster): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_link: cdktf.stringToTerraform(struct!.resourceLink),
  }
}

export class GkeHubMembershipEndpointGkeClusterOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._resourceLink
  }
}
export interface GkeHubMembershipEndpoint {
  /**
  * gke_cluster block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership.html#gke_cluster GkeHubMembership#gke_cluster}
  */
  readonly gkeCluster?: GkeHubMembershipEndpointGkeCluster;
}

function gkeHubMembershipEndpointToTerraform(struct?: GkeHubMembershipEndpointOutputReference | GkeHubMembershipEndpoint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gke_cluster: gkeHubMembershipEndpointGkeClusterToTerraform(struct!.gkeCluster),
  }
}

export class GkeHubMembershipEndpointOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // gke_cluster - computed: false, optional: true, required: false
  private _gkeCluster?: GkeHubMembershipEndpointGkeCluster | undefined; 
  private __gkeClusterOutput = new GkeHubMembershipEndpointGkeClusterOutputReference(this as any, "gke_cluster", true);
  public get gkeCluster() {
    return this.__gkeClusterOutput;
  }
  public putGkeCluster(value: GkeHubMembershipEndpointGkeCluster | undefined) {
    this._gkeCluster = value;
  }
  public resetGkeCluster() {
    this._gkeCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeClusterInput() {
    return this._gkeCluster
  }
}
export interface GkeHubMembershipTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership.html#create GkeHubMembership#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership.html#delete GkeHubMembership#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership.html#update GkeHubMembership#update}
  */
  readonly update?: string;
}

function gkeHubMembershipTimeoutsToTerraform(struct?: GkeHubMembershipTimeoutsOutputReference | GkeHubMembershipTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership.html google_gke_hub_membership}
*/
export class GkeHubMembership extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_gke_hub_membership";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/gke_hub_membership.html google_gke_hub_membership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GkeHubMembershipConfig
  */
  public constructor(scope: Construct, id: string, config: GkeHubMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'google_gke_hub_membership',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._labels = config.labels;
    this._membershipId = config.membershipId;
    this._project = config.project;
    this._authority = config.authority;
    this._endpoint = config.endpoint;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
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
    return this._membershipId
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string | undefined; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // authority - computed: false, optional: true, required: false
  private _authority?: GkeHubMembershipAuthority | undefined; 
  private __authorityOutput = new GkeHubMembershipAuthorityOutputReference(this as any, "authority", true);
  public get authority() {
    return this.__authorityOutput;
  }
  public putAuthority(value: GkeHubMembershipAuthority | undefined) {
    this._authority = value;
  }
  public resetAuthority() {
    this._authority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorityInput() {
    return this._authority
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: GkeHubMembershipEndpoint | undefined; 
  private __endpointOutput = new GkeHubMembershipEndpointOutputReference(this as any, "endpoint", true);
  public get endpoint() {
    return this.__endpointOutput;
  }
  public putEndpoint(value: GkeHubMembershipEndpoint | undefined) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GkeHubMembershipTimeouts | undefined; 
  private __timeoutsOutput = new GkeHubMembershipTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: GkeHubMembershipTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      membership_id: cdktf.stringToTerraform(this._membershipId),
      project: cdktf.stringToTerraform(this._project),
      authority: gkeHubMembershipAuthorityToTerraform(this._authority),
      endpoint: gkeHubMembershipEndpointToTerraform(this._endpoint),
      timeouts: gkeHubMembershipTimeoutsToTerraform(this._timeouts),
    };
  }
}
