# `networkConnectivitySpoke` Submodule <a name="`networkConnectivitySpoke` Submodule" id="@cdktf/provider-google.networkConnectivitySpoke"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkConnectivitySpoke <a name="NetworkConnectivitySpoke" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke google_network_connectivity_spoke}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_spoke.NetworkConnectivitySpoke;

NetworkConnectivitySpoke.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .hub(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .group(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .linkedInterconnectAttachments(NetworkConnectivitySpokeLinkedInterconnectAttachments)
//  .linkedProducerVpcNetwork(NetworkConnectivitySpokeLinkedProducerVpcNetwork)
//  .linkedRouterApplianceInstances(NetworkConnectivitySpokeLinkedRouterApplianceInstances)
//  .linkedVpcNetwork(NetworkConnectivitySpokeLinkedVpcNetwork)
//  .linkedVpnTunnels(NetworkConnectivitySpokeLinkedVpnTunnels)
//  .project(java.lang.String)
//  .timeouts(NetworkConnectivitySpokeTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.hub">hub</a></code> | <code>java.lang.String</code> | Immutable. The URI of the hub that this spoke is attached to. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Immutable. The name of the spoke. Spoke names must be unique. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of the spoke. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.group">group</a></code> | <code>java.lang.String</code> | The name of the group that this spoke is associated with. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#id NetworkConnectivitySpoke#id}. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.linkedInterconnectAttachments">linkedInterconnectAttachments</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments">NetworkConnectivitySpokeLinkedInterconnectAttachments</a></code> | linked_interconnect_attachments block. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.linkedProducerVpcNetwork">linkedProducerVpcNetwork</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetwork">NetworkConnectivitySpokeLinkedProducerVpcNetwork</a></code> | linked_producer_vpc_network block. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.linkedRouterApplianceInstances">linkedRouterApplianceInstances</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstances</a></code> | linked_router_appliance_instances block. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.linkedVpcNetwork">linkedVpcNetwork</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork">NetworkConnectivitySpokeLinkedVpcNetwork</a></code> | linked_vpc_network block. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.linkedVpnTunnels">linkedVpnTunnels</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels">NetworkConnectivitySpokeLinkedVpnTunnels</a></code> | linked_vpn_tunnels block. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#project NetworkConnectivitySpoke#project}. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts">NetworkConnectivitySpokeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hub`<sup>Required</sup> <a name="hub" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.hub"></a>

- *Type:* java.lang.String

Immutable. The URI of the hub that this spoke is attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#hub NetworkConnectivitySpoke#hub}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#location NetworkConnectivitySpoke#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Immutable. The name of the spoke. Spoke names must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#name NetworkConnectivitySpoke#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of the spoke.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#description NetworkConnectivitySpoke#description}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.group"></a>

- *Type:* java.lang.String

The name of the group that this spoke is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#group NetworkConnectivitySpoke#group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#id NetworkConnectivitySpoke#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#labels NetworkConnectivitySpoke#labels}

---

##### `linkedInterconnectAttachments`<sup>Optional</sup> <a name="linkedInterconnectAttachments" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.linkedInterconnectAttachments"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments">NetworkConnectivitySpokeLinkedInterconnectAttachments</a>

linked_interconnect_attachments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#linked_interconnect_attachments NetworkConnectivitySpoke#linked_interconnect_attachments}

---

##### `linkedProducerVpcNetwork`<sup>Optional</sup> <a name="linkedProducerVpcNetwork" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.linkedProducerVpcNetwork"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetwork">NetworkConnectivitySpokeLinkedProducerVpcNetwork</a>

linked_producer_vpc_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#linked_producer_vpc_network NetworkConnectivitySpoke#linked_producer_vpc_network}

---

##### `linkedRouterApplianceInstances`<sup>Optional</sup> <a name="linkedRouterApplianceInstances" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.linkedRouterApplianceInstances"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstances</a>

linked_router_appliance_instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#linked_router_appliance_instances NetworkConnectivitySpoke#linked_router_appliance_instances}

---

##### `linkedVpcNetwork`<sup>Optional</sup> <a name="linkedVpcNetwork" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.linkedVpcNetwork"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork">NetworkConnectivitySpokeLinkedVpcNetwork</a>

linked_vpc_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#linked_vpc_network NetworkConnectivitySpoke#linked_vpc_network}

---

##### `linkedVpnTunnels`<sup>Optional</sup> <a name="linkedVpnTunnels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.linkedVpnTunnels"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels">NetworkConnectivitySpokeLinkedVpnTunnels</a>

linked_vpn_tunnels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#linked_vpn_tunnels NetworkConnectivitySpoke#linked_vpn_tunnels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#project NetworkConnectivitySpoke#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts">NetworkConnectivitySpokeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#timeouts NetworkConnectivitySpoke#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedInterconnectAttachments">putLinkedInterconnectAttachments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedProducerVpcNetwork">putLinkedProducerVpcNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedRouterApplianceInstances">putLinkedRouterApplianceInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedVpcNetwork">putLinkedVpcNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedVpnTunnels">putLinkedVpnTunnels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetLinkedInterconnectAttachments">resetLinkedInterconnectAttachments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetLinkedProducerVpcNetwork">resetLinkedProducerVpcNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetLinkedRouterApplianceInstances">resetLinkedRouterApplianceInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetLinkedVpcNetwork">resetLinkedVpcNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetLinkedVpnTunnels">resetLinkedVpnTunnels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLinkedInterconnectAttachments` <a name="putLinkedInterconnectAttachments" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedInterconnectAttachments"></a>

```java
public void putLinkedInterconnectAttachments(NetworkConnectivitySpokeLinkedInterconnectAttachments value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedInterconnectAttachments.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments">NetworkConnectivitySpokeLinkedInterconnectAttachments</a>

---

##### `putLinkedProducerVpcNetwork` <a name="putLinkedProducerVpcNetwork" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedProducerVpcNetwork"></a>

```java
public void putLinkedProducerVpcNetwork(NetworkConnectivitySpokeLinkedProducerVpcNetwork value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedProducerVpcNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetwork">NetworkConnectivitySpokeLinkedProducerVpcNetwork</a>

---

##### `putLinkedRouterApplianceInstances` <a name="putLinkedRouterApplianceInstances" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedRouterApplianceInstances"></a>

```java
public void putLinkedRouterApplianceInstances(NetworkConnectivitySpokeLinkedRouterApplianceInstances value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedRouterApplianceInstances.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstances</a>

---

##### `putLinkedVpcNetwork` <a name="putLinkedVpcNetwork" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedVpcNetwork"></a>

```java
public void putLinkedVpcNetwork(NetworkConnectivitySpokeLinkedVpcNetwork value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedVpcNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork">NetworkConnectivitySpokeLinkedVpcNetwork</a>

---

##### `putLinkedVpnTunnels` <a name="putLinkedVpnTunnels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedVpnTunnels"></a>

```java
public void putLinkedVpnTunnels(NetworkConnectivitySpokeLinkedVpnTunnels value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedVpnTunnels.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels">NetworkConnectivitySpokeLinkedVpnTunnels</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putTimeouts"></a>

```java
public void putTimeouts(NetworkConnectivitySpokeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts">NetworkConnectivitySpokeTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetGroup` <a name="resetGroup" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetGroup"></a>

```java
public void resetGroup()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLinkedInterconnectAttachments` <a name="resetLinkedInterconnectAttachments" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetLinkedInterconnectAttachments"></a>

```java
public void resetLinkedInterconnectAttachments()
```

##### `resetLinkedProducerVpcNetwork` <a name="resetLinkedProducerVpcNetwork" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetLinkedProducerVpcNetwork"></a>

```java
public void resetLinkedProducerVpcNetwork()
```

##### `resetLinkedRouterApplianceInstances` <a name="resetLinkedRouterApplianceInstances" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetLinkedRouterApplianceInstances"></a>

```java
public void resetLinkedRouterApplianceInstances()
```

##### `resetLinkedVpcNetwork` <a name="resetLinkedVpcNetwork" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetLinkedVpcNetwork"></a>

```java
public void resetLinkedVpcNetwork()
```

##### `resetLinkedVpnTunnels` <a name="resetLinkedVpnTunnels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetLinkedVpnTunnels"></a>

```java
public void resetLinkedVpnTunnels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkConnectivitySpoke resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_spoke.NetworkConnectivitySpoke;

NetworkConnectivitySpoke.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_spoke.NetworkConnectivitySpoke;

NetworkConnectivitySpoke.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_spoke.NetworkConnectivitySpoke;

NetworkConnectivitySpoke.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_spoke.NetworkConnectivitySpoke;

NetworkConnectivitySpoke.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkConnectivitySpoke.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NetworkConnectivitySpoke resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkConnectivitySpoke to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkConnectivitySpoke that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NetworkConnectivitySpoke to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedInterconnectAttachments">linkedInterconnectAttachments</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference">NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedProducerVpcNetwork">linkedProducerVpcNetwork</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference">NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedRouterApplianceInstances">linkedRouterApplianceInstances</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference">NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedVpcNetwork">linkedVpcNetwork</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference">NetworkConnectivitySpokeLinkedVpcNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedVpnTunnels">linkedVpnTunnels</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference">NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.reasons">reasons</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsList">NetworkConnectivitySpokeReasonsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference">NetworkConnectivitySpokeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.uniqueId">uniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.groupInput">groupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.hubInput">hubInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedInterconnectAttachmentsInput">linkedInterconnectAttachmentsInput</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments">NetworkConnectivitySpokeLinkedInterconnectAttachments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedProducerVpcNetworkInput">linkedProducerVpcNetworkInput</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetwork">NetworkConnectivitySpokeLinkedProducerVpcNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedRouterApplianceInstancesInput">linkedRouterApplianceInstancesInput</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedVpcNetworkInput">linkedVpcNetworkInput</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork">NetworkConnectivitySpokeLinkedVpcNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedVpnTunnelsInput">linkedVpnTunnelsInput</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels">NetworkConnectivitySpokeLinkedVpnTunnels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts">NetworkConnectivitySpokeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.group">group</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.hub">hub</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `linkedInterconnectAttachments`<sup>Required</sup> <a name="linkedInterconnectAttachments" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedInterconnectAttachments"></a>

```java
public NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference getLinkedInterconnectAttachments();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference">NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference</a>

---

##### `linkedProducerVpcNetwork`<sup>Required</sup> <a name="linkedProducerVpcNetwork" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedProducerVpcNetwork"></a>

```java
public NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference getLinkedProducerVpcNetwork();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference">NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference</a>

---

##### `linkedRouterApplianceInstances`<sup>Required</sup> <a name="linkedRouterApplianceInstances" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedRouterApplianceInstances"></a>

```java
public NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference getLinkedRouterApplianceInstances();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference">NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference</a>

---

##### `linkedVpcNetwork`<sup>Required</sup> <a name="linkedVpcNetwork" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedVpcNetwork"></a>

```java
public NetworkConnectivitySpokeLinkedVpcNetworkOutputReference getLinkedVpcNetwork();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference">NetworkConnectivitySpokeLinkedVpcNetworkOutputReference</a>

---

##### `linkedVpnTunnels`<sup>Required</sup> <a name="linkedVpnTunnels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedVpnTunnels"></a>

```java
public NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference getLinkedVpnTunnels();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference">NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference</a>

---

##### `reasons`<sup>Required</sup> <a name="reasons" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.reasons"></a>

```java
public NetworkConnectivitySpokeReasonsList getReasons();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsList">NetworkConnectivitySpokeReasonsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.timeouts"></a>

```java
public NetworkConnectivitySpokeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference">NetworkConnectivitySpokeTimeoutsOutputReference</a>

---

##### `uniqueId`<sup>Required</sup> <a name="uniqueId" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.uniqueId"></a>

```java
public java.lang.String getUniqueId();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.groupInput"></a>

```java
public java.lang.String getGroupInput();
```

- *Type:* java.lang.String

---

##### `hubInput`<sup>Optional</sup> <a name="hubInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.hubInput"></a>

```java
public java.lang.String getHubInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `linkedInterconnectAttachmentsInput`<sup>Optional</sup> <a name="linkedInterconnectAttachmentsInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedInterconnectAttachmentsInput"></a>

```java
public NetworkConnectivitySpokeLinkedInterconnectAttachments getLinkedInterconnectAttachmentsInput();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments">NetworkConnectivitySpokeLinkedInterconnectAttachments</a>

---

##### `linkedProducerVpcNetworkInput`<sup>Optional</sup> <a name="linkedProducerVpcNetworkInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedProducerVpcNetworkInput"></a>

```java
public NetworkConnectivitySpokeLinkedProducerVpcNetwork getLinkedProducerVpcNetworkInput();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetwork">NetworkConnectivitySpokeLinkedProducerVpcNetwork</a>

---

##### `linkedRouterApplianceInstancesInput`<sup>Optional</sup> <a name="linkedRouterApplianceInstancesInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedRouterApplianceInstancesInput"></a>

```java
public NetworkConnectivitySpokeLinkedRouterApplianceInstances getLinkedRouterApplianceInstancesInput();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstances</a>

---

##### `linkedVpcNetworkInput`<sup>Optional</sup> <a name="linkedVpcNetworkInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedVpcNetworkInput"></a>

```java
public NetworkConnectivitySpokeLinkedVpcNetwork getLinkedVpcNetworkInput();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork">NetworkConnectivitySpokeLinkedVpcNetwork</a>

---

##### `linkedVpnTunnelsInput`<sup>Optional</sup> <a name="linkedVpnTunnelsInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedVpnTunnelsInput"></a>

```java
public NetworkConnectivitySpokeLinkedVpnTunnels getLinkedVpnTunnelsInput();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels">NetworkConnectivitySpokeLinkedVpnTunnels</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts">NetworkConnectivitySpokeTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

---

##### `hub`<sup>Required</sup> <a name="hub" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.hub"></a>

```java
public java.lang.String getHub();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkConnectivitySpokeConfig <a name="NetworkConnectivitySpokeConfig" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_spoke.NetworkConnectivitySpokeConfig;

NetworkConnectivitySpokeConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .hub(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .group(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .linkedInterconnectAttachments(NetworkConnectivitySpokeLinkedInterconnectAttachments)
//  .linkedProducerVpcNetwork(NetworkConnectivitySpokeLinkedProducerVpcNetwork)
//  .linkedRouterApplianceInstances(NetworkConnectivitySpokeLinkedRouterApplianceInstances)
//  .linkedVpcNetwork(NetworkConnectivitySpokeLinkedVpcNetwork)
//  .linkedVpnTunnels(NetworkConnectivitySpokeLinkedVpnTunnels)
//  .project(java.lang.String)
//  .timeouts(NetworkConnectivitySpokeTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.hub">hub</a></code> | <code>java.lang.String</code> | Immutable. The URI of the hub that this spoke is attached to. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.name">name</a></code> | <code>java.lang.String</code> | Immutable. The name of the spoke. Spoke names must be unique. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of the spoke. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.group">group</a></code> | <code>java.lang.String</code> | The name of the group that this spoke is associated with. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#id NetworkConnectivitySpoke#id}. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.linkedInterconnectAttachments">linkedInterconnectAttachments</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments">NetworkConnectivitySpokeLinkedInterconnectAttachments</a></code> | linked_interconnect_attachments block. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.linkedProducerVpcNetwork">linkedProducerVpcNetwork</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetwork">NetworkConnectivitySpokeLinkedProducerVpcNetwork</a></code> | linked_producer_vpc_network block. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.linkedRouterApplianceInstances">linkedRouterApplianceInstances</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstances</a></code> | linked_router_appliance_instances block. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.linkedVpcNetwork">linkedVpcNetwork</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork">NetworkConnectivitySpokeLinkedVpcNetwork</a></code> | linked_vpc_network block. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.linkedVpnTunnels">linkedVpnTunnels</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels">NetworkConnectivitySpokeLinkedVpnTunnels</a></code> | linked_vpn_tunnels block. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#project NetworkConnectivitySpoke#project}. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts">NetworkConnectivitySpokeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hub`<sup>Required</sup> <a name="hub" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.hub"></a>

```java
public java.lang.String getHub();
```

- *Type:* java.lang.String

Immutable. The URI of the hub that this spoke is attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#hub NetworkConnectivitySpoke#hub}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#location NetworkConnectivitySpoke#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Immutable. The name of the spoke. Spoke names must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#name NetworkConnectivitySpoke#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of the spoke.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#description NetworkConnectivitySpoke#description}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

The name of the group that this spoke is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#group NetworkConnectivitySpoke#group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#id NetworkConnectivitySpoke#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#labels NetworkConnectivitySpoke#labels}

---

##### `linkedInterconnectAttachments`<sup>Optional</sup> <a name="linkedInterconnectAttachments" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.linkedInterconnectAttachments"></a>

```java
public NetworkConnectivitySpokeLinkedInterconnectAttachments getLinkedInterconnectAttachments();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments">NetworkConnectivitySpokeLinkedInterconnectAttachments</a>

linked_interconnect_attachments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#linked_interconnect_attachments NetworkConnectivitySpoke#linked_interconnect_attachments}

---

##### `linkedProducerVpcNetwork`<sup>Optional</sup> <a name="linkedProducerVpcNetwork" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.linkedProducerVpcNetwork"></a>

```java
public NetworkConnectivitySpokeLinkedProducerVpcNetwork getLinkedProducerVpcNetwork();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetwork">NetworkConnectivitySpokeLinkedProducerVpcNetwork</a>

linked_producer_vpc_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#linked_producer_vpc_network NetworkConnectivitySpoke#linked_producer_vpc_network}

---

##### `linkedRouterApplianceInstances`<sup>Optional</sup> <a name="linkedRouterApplianceInstances" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.linkedRouterApplianceInstances"></a>

```java
public NetworkConnectivitySpokeLinkedRouterApplianceInstances getLinkedRouterApplianceInstances();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstances</a>

linked_router_appliance_instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#linked_router_appliance_instances NetworkConnectivitySpoke#linked_router_appliance_instances}

---

##### `linkedVpcNetwork`<sup>Optional</sup> <a name="linkedVpcNetwork" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.linkedVpcNetwork"></a>

```java
public NetworkConnectivitySpokeLinkedVpcNetwork getLinkedVpcNetwork();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork">NetworkConnectivitySpokeLinkedVpcNetwork</a>

linked_vpc_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#linked_vpc_network NetworkConnectivitySpoke#linked_vpc_network}

---

##### `linkedVpnTunnels`<sup>Optional</sup> <a name="linkedVpnTunnels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.linkedVpnTunnels"></a>

```java
public NetworkConnectivitySpokeLinkedVpnTunnels getLinkedVpnTunnels();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels">NetworkConnectivitySpokeLinkedVpnTunnels</a>

linked_vpn_tunnels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#linked_vpn_tunnels NetworkConnectivitySpoke#linked_vpn_tunnels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#project NetworkConnectivitySpoke#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.timeouts"></a>

```java
public NetworkConnectivitySpokeTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts">NetworkConnectivitySpokeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#timeouts NetworkConnectivitySpoke#timeouts}

---

### NetworkConnectivitySpokeLinkedInterconnectAttachments <a name="NetworkConnectivitySpokeLinkedInterconnectAttachments" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_spoke.NetworkConnectivitySpokeLinkedInterconnectAttachments;

NetworkConnectivitySpokeLinkedInterconnectAttachments.builder()
    .siteToSiteDataTransfer(java.lang.Boolean)
    .siteToSiteDataTransfer(IResolvable)
    .uris(java.util.List<java.lang.String>)
//  .includeImportRanges(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments.property.siteToSiteDataTransfer">siteToSiteDataTransfer</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | A value that controls whether site-to-site data transfer is enabled for these resources. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments.property.uris">uris</a></code> | <code>java.util.List<java.lang.String></code> | The URIs of linked interconnect attachment resources. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments.property.includeImportRanges">includeImportRanges</a></code> | <code>java.util.List<java.lang.String></code> | IP ranges allowed to be included during import from hub (does not control transit connectivity). |

---

##### `siteToSiteDataTransfer`<sup>Required</sup> <a name="siteToSiteDataTransfer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments.property.siteToSiteDataTransfer"></a>

```java
public java.lang.Object getSiteToSiteDataTransfer();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

A value that controls whether site-to-site data transfer is enabled for these resources.

Note that data transfer is available only in supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#site_to_site_data_transfer NetworkConnectivitySpoke#site_to_site_data_transfer}

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments.property.uris"></a>

```java
public java.util.List<java.lang.String> getUris();
```

- *Type:* java.util.List<java.lang.String>

The URIs of linked interconnect attachment resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#uris NetworkConnectivitySpoke#uris}

---

##### `includeImportRanges`<sup>Optional</sup> <a name="includeImportRanges" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments.property.includeImportRanges"></a>

```java
public java.util.List<java.lang.String> getIncludeImportRanges();
```

- *Type:* java.util.List<java.lang.String>

IP ranges allowed to be included during import from hub (does not control transit connectivity).

The only allowed value for now is "ALL_IPV4_RANGES".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#include_import_ranges NetworkConnectivitySpoke#include_import_ranges}

---

### NetworkConnectivitySpokeLinkedProducerVpcNetwork <a name="NetworkConnectivitySpokeLinkedProducerVpcNetwork" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_spoke.NetworkConnectivitySpokeLinkedProducerVpcNetwork;

NetworkConnectivitySpokeLinkedProducerVpcNetwork.builder()
    .network(java.lang.String)
    .peering(java.lang.String)
//  .excludeExportRanges(java.util.List<java.lang.String>)
//  .includeExportRanges(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetwork.property.network">network</a></code> | <code>java.lang.String</code> | The URI of the Service Consumer VPC that the Producer VPC is peered with. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetwork.property.peering">peering</a></code> | <code>java.lang.String</code> | The name of the VPC peering between the Service Consumer VPC and the Producer VPC (defined in the Tenant project) which is added to the NCC hub. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetwork.property.excludeExportRanges">excludeExportRanges</a></code> | <code>java.util.List<java.lang.String></code> | IP ranges encompassing the subnets to be excluded from peering. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetwork.property.includeExportRanges">includeExportRanges</a></code> | <code>java.util.List<java.lang.String></code> | IP ranges allowed to be included from peering. |

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetwork.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The URI of the Service Consumer VPC that the Producer VPC is peered with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#network NetworkConnectivitySpoke#network}

---

##### `peering`<sup>Required</sup> <a name="peering" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetwork.property.peering"></a>

```java
public java.lang.String getPeering();
```

- *Type:* java.lang.String

The name of the VPC peering between the Service Consumer VPC and the Producer VPC (defined in the Tenant project) which is added to the NCC hub.

This peering must be in ACTIVE state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#peering NetworkConnectivitySpoke#peering}

---

##### `excludeExportRanges`<sup>Optional</sup> <a name="excludeExportRanges" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetwork.property.excludeExportRanges"></a>

```java
public java.util.List<java.lang.String> getExcludeExportRanges();
```

- *Type:* java.util.List<java.lang.String>

IP ranges encompassing the subnets to be excluded from peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#exclude_export_ranges NetworkConnectivitySpoke#exclude_export_ranges}

---

##### `includeExportRanges`<sup>Optional</sup> <a name="includeExportRanges" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetwork.property.includeExportRanges"></a>

```java
public java.util.List<java.lang.String> getIncludeExportRanges();
```

- *Type:* java.util.List<java.lang.String>

IP ranges allowed to be included from peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#include_export_ranges NetworkConnectivitySpoke#include_export_ranges}

---

### NetworkConnectivitySpokeLinkedRouterApplianceInstances <a name="NetworkConnectivitySpokeLinkedRouterApplianceInstances" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_spoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances;

NetworkConnectivitySpokeLinkedRouterApplianceInstances.builder()
    .instances(IResolvable)
    .instances(java.util.List<NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances>)
    .siteToSiteDataTransfer(java.lang.Boolean)
    .siteToSiteDataTransfer(IResolvable)
//  .includeImportRanges(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances.property.instances">instances</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>></code> | instances block. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances.property.siteToSiteDataTransfer">siteToSiteDataTransfer</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | A value that controls whether site-to-site data transfer is enabled for these resources. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances.property.includeImportRanges">includeImportRanges</a></code> | <code>java.util.List<java.lang.String></code> | IP ranges allowed to be included during import from hub (does not control transit connectivity). |

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances.property.instances"></a>

```java
public java.lang.Object getInstances();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>>

instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#instances NetworkConnectivitySpoke#instances}

---

##### `siteToSiteDataTransfer`<sup>Required</sup> <a name="siteToSiteDataTransfer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances.property.siteToSiteDataTransfer"></a>

```java
public java.lang.Object getSiteToSiteDataTransfer();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

A value that controls whether site-to-site data transfer is enabled for these resources.

Note that data transfer is available only in supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#site_to_site_data_transfer NetworkConnectivitySpoke#site_to_site_data_transfer}

---

##### `includeImportRanges`<sup>Optional</sup> <a name="includeImportRanges" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances.property.includeImportRanges"></a>

```java
public java.util.List<java.lang.String> getIncludeImportRanges();
```

- *Type:* java.util.List<java.lang.String>

IP ranges allowed to be included during import from hub (does not control transit connectivity).

The only allowed value for now is "ALL_IPV4_RANGES".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#include_import_ranges NetworkConnectivitySpoke#include_import_ranges}

---

### NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances <a name="NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_spoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances;

NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances.builder()
    .ipAddress(java.lang.String)
    .virtualMachine(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | The IP address on the VM to use for peering. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances.property.virtualMachine">virtualMachine</a></code> | <code>java.lang.String</code> | The URI of the virtual machine resource. |

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

The IP address on the VM to use for peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#ip_address NetworkConnectivitySpoke#ip_address}

---

##### `virtualMachine`<sup>Required</sup> <a name="virtualMachine" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances.property.virtualMachine"></a>

```java
public java.lang.String getVirtualMachine();
```

- *Type:* java.lang.String

The URI of the virtual machine resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#virtual_machine NetworkConnectivitySpoke#virtual_machine}

---

### NetworkConnectivitySpokeLinkedVpcNetwork <a name="NetworkConnectivitySpokeLinkedVpcNetwork" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_spoke.NetworkConnectivitySpokeLinkedVpcNetwork;

NetworkConnectivitySpokeLinkedVpcNetwork.builder()
    .uri(java.lang.String)
//  .excludeExportRanges(java.util.List<java.lang.String>)
//  .includeExportRanges(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork.property.uri">uri</a></code> | <code>java.lang.String</code> | The URI of the VPC network resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork.property.excludeExportRanges">excludeExportRanges</a></code> | <code>java.util.List<java.lang.String></code> | IP ranges encompassing the subnets to be excluded from peering. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork.property.includeExportRanges">includeExportRanges</a></code> | <code>java.util.List<java.lang.String></code> | IP ranges allowed to be included from peering. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

The URI of the VPC network resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#uri NetworkConnectivitySpoke#uri}

---

##### `excludeExportRanges`<sup>Optional</sup> <a name="excludeExportRanges" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork.property.excludeExportRanges"></a>

```java
public java.util.List<java.lang.String> getExcludeExportRanges();
```

- *Type:* java.util.List<java.lang.String>

IP ranges encompassing the subnets to be excluded from peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#exclude_export_ranges NetworkConnectivitySpoke#exclude_export_ranges}

---

##### `includeExportRanges`<sup>Optional</sup> <a name="includeExportRanges" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork.property.includeExportRanges"></a>

```java
public java.util.List<java.lang.String> getIncludeExportRanges();
```

- *Type:* java.util.List<java.lang.String>

IP ranges allowed to be included from peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#include_export_ranges NetworkConnectivitySpoke#include_export_ranges}

---

### NetworkConnectivitySpokeLinkedVpnTunnels <a name="NetworkConnectivitySpokeLinkedVpnTunnels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_spoke.NetworkConnectivitySpokeLinkedVpnTunnels;

NetworkConnectivitySpokeLinkedVpnTunnels.builder()
    .siteToSiteDataTransfer(java.lang.Boolean)
    .siteToSiteDataTransfer(IResolvable)
    .uris(java.util.List<java.lang.String>)
//  .includeImportRanges(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels.property.siteToSiteDataTransfer">siteToSiteDataTransfer</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | A value that controls whether site-to-site data transfer is enabled for these resources. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels.property.uris">uris</a></code> | <code>java.util.List<java.lang.String></code> | The URIs of linked VPN tunnel resources. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels.property.includeImportRanges">includeImportRanges</a></code> | <code>java.util.List<java.lang.String></code> | IP ranges allowed to be included during import from hub (does not control transit connectivity). |

---

##### `siteToSiteDataTransfer`<sup>Required</sup> <a name="siteToSiteDataTransfer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels.property.siteToSiteDataTransfer"></a>

```java
public java.lang.Object getSiteToSiteDataTransfer();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

A value that controls whether site-to-site data transfer is enabled for these resources.

Note that data transfer is available only in supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#site_to_site_data_transfer NetworkConnectivitySpoke#site_to_site_data_transfer}

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels.property.uris"></a>

```java
public java.util.List<java.lang.String> getUris();
```

- *Type:* java.util.List<java.lang.String>

The URIs of linked VPN tunnel resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#uris NetworkConnectivitySpoke#uris}

---

##### `includeImportRanges`<sup>Optional</sup> <a name="includeImportRanges" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels.property.includeImportRanges"></a>

```java
public java.util.List<java.lang.String> getIncludeImportRanges();
```

- *Type:* java.util.List<java.lang.String>

IP ranges allowed to be included during import from hub (does not control transit connectivity).

The only allowed value for now is "ALL_IPV4_RANGES".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#include_import_ranges NetworkConnectivitySpoke#include_import_ranges}

---

### NetworkConnectivitySpokeReasons <a name="NetworkConnectivitySpokeReasons" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasons"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasons.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_spoke.NetworkConnectivitySpokeReasons;

NetworkConnectivitySpokeReasons.builder()
    .build();
```


### NetworkConnectivitySpokeTimeouts <a name="NetworkConnectivitySpokeTimeouts" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_spoke.NetworkConnectivitySpokeTimeouts;

NetworkConnectivitySpokeTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#create NetworkConnectivitySpoke#create}. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#delete NetworkConnectivitySpoke#delete}. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#update NetworkConnectivitySpoke#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#create NetworkConnectivitySpoke#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#delete NetworkConnectivitySpoke#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_connectivity_spoke#update NetworkConnectivitySpoke#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference <a name="NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_spoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference;

new NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.resetIncludeImportRanges">resetIncludeImportRanges</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeImportRanges` <a name="resetIncludeImportRanges" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.resetIncludeImportRanges"></a>

```java
public void resetIncludeImportRanges()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.includeImportRangesInput">includeImportRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.siteToSiteDataTransferInput">siteToSiteDataTransferInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.urisInput">urisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.includeImportRanges">includeImportRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.siteToSiteDataTransfer">siteToSiteDataTransfer</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.uris">uris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments">NetworkConnectivitySpokeLinkedInterconnectAttachments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includeImportRangesInput`<sup>Optional</sup> <a name="includeImportRangesInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.includeImportRangesInput"></a>

```java
public java.util.List<java.lang.String> getIncludeImportRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `siteToSiteDataTransferInput`<sup>Optional</sup> <a name="siteToSiteDataTransferInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.siteToSiteDataTransferInput"></a>

```java
public java.lang.Object getSiteToSiteDataTransferInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `urisInput`<sup>Optional</sup> <a name="urisInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.urisInput"></a>

```java
public java.util.List<java.lang.String> getUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeImportRanges`<sup>Required</sup> <a name="includeImportRanges" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.includeImportRanges"></a>

```java
public java.util.List<java.lang.String> getIncludeImportRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `siteToSiteDataTransfer`<sup>Required</sup> <a name="siteToSiteDataTransfer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.siteToSiteDataTransfer"></a>

```java
public java.lang.Object getSiteToSiteDataTransfer();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.uris"></a>

```java
public java.util.List<java.lang.String> getUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.internalValue"></a>

```java
public NetworkConnectivitySpokeLinkedInterconnectAttachments getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments">NetworkConnectivitySpokeLinkedInterconnectAttachments</a>

---


### NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference <a name="NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_spoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference;

new NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.resetExcludeExportRanges">resetExcludeExportRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.resetIncludeExportRanges">resetIncludeExportRanges</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludeExportRanges` <a name="resetExcludeExportRanges" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.resetExcludeExportRanges"></a>

```java
public void resetExcludeExportRanges()
```

##### `resetIncludeExportRanges` <a name="resetIncludeExportRanges" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.resetIncludeExportRanges"></a>

```java
public void resetIncludeExportRanges()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.producerNetwork">producerNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.excludeExportRangesInput">excludeExportRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.includeExportRangesInput">includeExportRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.peeringInput">peeringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.excludeExportRanges">excludeExportRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.includeExportRanges">includeExportRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.peering">peering</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetwork">NetworkConnectivitySpokeLinkedProducerVpcNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `producerNetwork`<sup>Required</sup> <a name="producerNetwork" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.producerNetwork"></a>

```java
public java.lang.String getProducerNetwork();
```

- *Type:* java.lang.String

---

##### `excludeExportRangesInput`<sup>Optional</sup> <a name="excludeExportRangesInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.excludeExportRangesInput"></a>

```java
public java.util.List<java.lang.String> getExcludeExportRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeExportRangesInput`<sup>Optional</sup> <a name="includeExportRangesInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.includeExportRangesInput"></a>

```java
public java.util.List<java.lang.String> getIncludeExportRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `peeringInput`<sup>Optional</sup> <a name="peeringInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.peeringInput"></a>

```java
public java.lang.String getPeeringInput();
```

- *Type:* java.lang.String

---

##### `excludeExportRanges`<sup>Required</sup> <a name="excludeExportRanges" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.excludeExportRanges"></a>

```java
public java.util.List<java.lang.String> getExcludeExportRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeExportRanges`<sup>Required</sup> <a name="includeExportRanges" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.includeExportRanges"></a>

```java
public java.util.List<java.lang.String> getIncludeExportRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `peering`<sup>Required</sup> <a name="peering" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.peering"></a>

```java
public java.lang.String getPeering();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetworkOutputReference.property.internalValue"></a>

```java
public NetworkConnectivitySpokeLinkedProducerVpcNetwork getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedProducerVpcNetwork">NetworkConnectivitySpokeLinkedProducerVpcNetwork</a>

---


### NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList <a name="NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_spoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList;

new NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.get"></a>

```java
public NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>>

---


### NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference <a name="NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_spoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference;

new NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.virtualMachineInput">virtualMachineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.virtualMachine">virtualMachine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.ipAddressInput"></a>

```java
public java.lang.String getIpAddressInput();
```

- *Type:* java.lang.String

---

##### `virtualMachineInput`<sup>Optional</sup> <a name="virtualMachineInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.virtualMachineInput"></a>

```java
public java.lang.String getVirtualMachineInput();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `virtualMachine`<sup>Required</sup> <a name="virtualMachine" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.virtualMachine"></a>

```java
public java.lang.String getVirtualMachine();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>

---


### NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference <a name="NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_spoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference;

new NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.putInstances">putInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.resetIncludeImportRanges">resetIncludeImportRanges</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInstances` <a name="putInstances" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.putInstances"></a>

```java
public void putInstances(IResolvable OR java.util.List<NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.putInstances.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>>

---

##### `resetIncludeImportRanges` <a name="resetIncludeImportRanges" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.resetIncludeImportRanges"></a>

```java
public void resetIncludeImportRanges()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.instances">instances</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList">NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.includeImportRangesInput">includeImportRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.instancesInput">instancesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.siteToSiteDataTransferInput">siteToSiteDataTransferInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.includeImportRanges">includeImportRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.siteToSiteDataTransfer">siteToSiteDataTransfer</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstances</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.instances"></a>

```java
public NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList getInstances();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList">NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList</a>

---

##### `includeImportRangesInput`<sup>Optional</sup> <a name="includeImportRangesInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.includeImportRangesInput"></a>

```java
public java.util.List<java.lang.String> getIncludeImportRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `instancesInput`<sup>Optional</sup> <a name="instancesInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.instancesInput"></a>

```java
public java.lang.Object getInstancesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>>

---

##### `siteToSiteDataTransferInput`<sup>Optional</sup> <a name="siteToSiteDataTransferInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.siteToSiteDataTransferInput"></a>

```java
public java.lang.Object getSiteToSiteDataTransferInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeImportRanges`<sup>Required</sup> <a name="includeImportRanges" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.includeImportRanges"></a>

```java
public java.util.List<java.lang.String> getIncludeImportRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `siteToSiteDataTransfer`<sup>Required</sup> <a name="siteToSiteDataTransfer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.siteToSiteDataTransfer"></a>

```java
public java.lang.Object getSiteToSiteDataTransfer();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.internalValue"></a>

```java
public NetworkConnectivitySpokeLinkedRouterApplianceInstances getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstances</a>

---


### NetworkConnectivitySpokeLinkedVpcNetworkOutputReference <a name="NetworkConnectivitySpokeLinkedVpcNetworkOutputReference" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_spoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference;

new NetworkConnectivitySpokeLinkedVpcNetworkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.resetExcludeExportRanges">resetExcludeExportRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.resetIncludeExportRanges">resetIncludeExportRanges</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludeExportRanges` <a name="resetExcludeExportRanges" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.resetExcludeExportRanges"></a>

```java
public void resetExcludeExportRanges()
```

##### `resetIncludeExportRanges` <a name="resetIncludeExportRanges" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.resetIncludeExportRanges"></a>

```java
public void resetIncludeExportRanges()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.excludeExportRangesInput">excludeExportRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.includeExportRangesInput">includeExportRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.excludeExportRanges">excludeExportRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.includeExportRanges">includeExportRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork">NetworkConnectivitySpokeLinkedVpcNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `excludeExportRangesInput`<sup>Optional</sup> <a name="excludeExportRangesInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.excludeExportRangesInput"></a>

```java
public java.util.List<java.lang.String> getExcludeExportRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeExportRangesInput`<sup>Optional</sup> <a name="includeExportRangesInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.includeExportRangesInput"></a>

```java
public java.util.List<java.lang.String> getIncludeExportRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `excludeExportRanges`<sup>Required</sup> <a name="excludeExportRanges" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.excludeExportRanges"></a>

```java
public java.util.List<java.lang.String> getExcludeExportRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeExportRanges`<sup>Required</sup> <a name="includeExportRanges" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.includeExportRanges"></a>

```java
public java.util.List<java.lang.String> getIncludeExportRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.internalValue"></a>

```java
public NetworkConnectivitySpokeLinkedVpcNetwork getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork">NetworkConnectivitySpokeLinkedVpcNetwork</a>

---


### NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference <a name="NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_spoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference;

new NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.resetIncludeImportRanges">resetIncludeImportRanges</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeImportRanges` <a name="resetIncludeImportRanges" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.resetIncludeImportRanges"></a>

```java
public void resetIncludeImportRanges()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.includeImportRangesInput">includeImportRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.siteToSiteDataTransferInput">siteToSiteDataTransferInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.urisInput">urisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.includeImportRanges">includeImportRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.siteToSiteDataTransfer">siteToSiteDataTransfer</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.uris">uris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels">NetworkConnectivitySpokeLinkedVpnTunnels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includeImportRangesInput`<sup>Optional</sup> <a name="includeImportRangesInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.includeImportRangesInput"></a>

```java
public java.util.List<java.lang.String> getIncludeImportRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `siteToSiteDataTransferInput`<sup>Optional</sup> <a name="siteToSiteDataTransferInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.siteToSiteDataTransferInput"></a>

```java
public java.lang.Object getSiteToSiteDataTransferInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `urisInput`<sup>Optional</sup> <a name="urisInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.urisInput"></a>

```java
public java.util.List<java.lang.String> getUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeImportRanges`<sup>Required</sup> <a name="includeImportRanges" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.includeImportRanges"></a>

```java
public java.util.List<java.lang.String> getIncludeImportRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `siteToSiteDataTransfer`<sup>Required</sup> <a name="siteToSiteDataTransfer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.siteToSiteDataTransfer"></a>

```java
public java.lang.Object getSiteToSiteDataTransfer();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.uris"></a>

```java
public java.util.List<java.lang.String> getUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.internalValue"></a>

```java
public NetworkConnectivitySpokeLinkedVpnTunnels getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels">NetworkConnectivitySpokeLinkedVpnTunnels</a>

---


### NetworkConnectivitySpokeReasonsList <a name="NetworkConnectivitySpokeReasonsList" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_spoke.NetworkConnectivitySpokeReasonsList;

new NetworkConnectivitySpokeReasonsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsList.get"></a>

```java
public NetworkConnectivitySpokeReasonsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### NetworkConnectivitySpokeReasonsOutputReference <a name="NetworkConnectivitySpokeReasonsOutputReference" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_spoke.NetworkConnectivitySpokeReasonsOutputReference;

new NetworkConnectivitySpokeReasonsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.property.code">code</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.property.userDetails">userDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasons">NetworkConnectivitySpokeReasons</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.property.code"></a>

```java
public java.lang.String getCode();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `userDetails`<sup>Required</sup> <a name="userDetails" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.property.userDetails"></a>

```java
public java.lang.String getUserDetails();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasonsOutputReference.property.internalValue"></a>

```java
public NetworkConnectivitySpokeReasons getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeReasons">NetworkConnectivitySpokeReasons</a>

---


### NetworkConnectivitySpokeTimeoutsOutputReference <a name="NetworkConnectivitySpokeTimeoutsOutputReference" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_spoke.NetworkConnectivitySpokeTimeoutsOutputReference;

new NetworkConnectivitySpokeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts">NetworkConnectivitySpokeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts">NetworkConnectivitySpokeTimeouts</a>

---



