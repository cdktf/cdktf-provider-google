# `networkConnectivityPolicyBasedRoute` Submodule <a name="`networkConnectivityPolicyBasedRoute` Submodule" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkConnectivityPolicyBasedRoute <a name="NetworkConnectivityPolicyBasedRoute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route google_network_connectivity_policy_based_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_policy_based_route.NetworkConnectivityPolicyBasedRoute;

NetworkConnectivityPolicyBasedRoute.Builder.create(Construct scope, java.lang.String id)
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
    .filter(NetworkConnectivityPolicyBasedRouteFilter)
    .name(java.lang.String)
    .network(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .interconnectAttachment(NetworkConnectivityPolicyBasedRouteInterconnectAttachment)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .nextHopIlbIp(java.lang.String)
//  .nextHopOtherRoutes(java.lang.String)
//  .priority(java.lang.Number)
//  .project(java.lang.String)
//  .timeouts(NetworkConnectivityPolicyBasedRouteTimeouts)
//  .virtualMachine(NetworkConnectivityPolicyBasedRouteVirtualMachine)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter">NetworkConnectivityPolicyBasedRouteFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the policy based route. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#id NetworkConnectivityPolicyBasedRoute#id}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.interconnectAttachment">interconnectAttachment</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachment">NetworkConnectivityPolicyBasedRouteInterconnectAttachment</a></code> | interconnect_attachment block. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.nextHopIlbIp">nextHopIlbIp</a></code> | <code>java.lang.String</code> | The IP address of a global-access-enabled L4 ILB that is the next hop for matching packets. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.nextHopOtherRoutes">nextHopOtherRoutes</a></code> | <code>java.lang.String</code> | Other routes that will be referenced to determine the next hop of the packet. Possible values: ["DEFAULT_ROUTING"]. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | The priority of this policy-based route. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#project NetworkConnectivityPolicyBasedRoute#project}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts">NetworkConnectivityPolicyBasedRouteTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.virtualMachine">virtualMachine</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachine">NetworkConnectivityPolicyBasedRouteVirtualMachine</a></code> | virtual_machine block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter">NetworkConnectivityPolicyBasedRouteFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#filter NetworkConnectivityPolicyBasedRoute#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the policy based route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#name NetworkConnectivityPolicyBasedRoute#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.network"></a>

- *Type:* java.lang.String

Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#network NetworkConnectivityPolicyBasedRoute#network}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#description NetworkConnectivityPolicyBasedRoute#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#id NetworkConnectivityPolicyBasedRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interconnectAttachment`<sup>Optional</sup> <a name="interconnectAttachment" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.interconnectAttachment"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachment">NetworkConnectivityPolicyBasedRouteInterconnectAttachment</a>

interconnect_attachment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#interconnect_attachment NetworkConnectivityPolicyBasedRoute#interconnect_attachment}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#labels NetworkConnectivityPolicyBasedRoute#labels}

---

##### `nextHopIlbIp`<sup>Optional</sup> <a name="nextHopIlbIp" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.nextHopIlbIp"></a>

- *Type:* java.lang.String

The IP address of a global-access-enabled L4 ILB that is the next hop for matching packets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#next_hop_ilb_ip NetworkConnectivityPolicyBasedRoute#next_hop_ilb_ip}

---

##### `nextHopOtherRoutes`<sup>Optional</sup> <a name="nextHopOtherRoutes" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.nextHopOtherRoutes"></a>

- *Type:* java.lang.String

Other routes that will be referenced to determine the next hop of the packet. Possible values: ["DEFAULT_ROUTING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#next_hop_other_routes NetworkConnectivityPolicyBasedRoute#next_hop_other_routes}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

The priority of this policy-based route.

Priority is used to break ties in cases where there are more than one matching policy-based routes found. In cases where multiple policy-based routes are matched, the one with the lowest-numbered priority value wins. The default value is 1000. The priority value must be from 1 to 65535, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#priority NetworkConnectivityPolicyBasedRoute#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#project NetworkConnectivityPolicyBasedRoute#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts">NetworkConnectivityPolicyBasedRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#timeouts NetworkConnectivityPolicyBasedRoute#timeouts}

---

##### `virtualMachine`<sup>Optional</sup> <a name="virtualMachine" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.Initializer.parameter.virtualMachine"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachine">NetworkConnectivityPolicyBasedRouteVirtualMachine</a>

virtual_machine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#virtual_machine NetworkConnectivityPolicyBasedRoute#virtual_machine}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.putInterconnectAttachment">putInterconnectAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.putVirtualMachine">putVirtualMachine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetInterconnectAttachment">resetInterconnectAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetNextHopIlbIp">resetNextHopIlbIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetNextHopOtherRoutes">resetNextHopOtherRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetVirtualMachine">resetVirtualMachine</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.putFilter"></a>

```java
public void putFilter(NetworkConnectivityPolicyBasedRouteFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter">NetworkConnectivityPolicyBasedRouteFilter</a>

---

##### `putInterconnectAttachment` <a name="putInterconnectAttachment" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.putInterconnectAttachment"></a>

```java
public void putInterconnectAttachment(NetworkConnectivityPolicyBasedRouteInterconnectAttachment value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.putInterconnectAttachment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachment">NetworkConnectivityPolicyBasedRouteInterconnectAttachment</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.putTimeouts"></a>

```java
public void putTimeouts(NetworkConnectivityPolicyBasedRouteTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts">NetworkConnectivityPolicyBasedRouteTimeouts</a>

---

##### `putVirtualMachine` <a name="putVirtualMachine" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.putVirtualMachine"></a>

```java
public void putVirtualMachine(NetworkConnectivityPolicyBasedRouteVirtualMachine value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.putVirtualMachine.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachine">NetworkConnectivityPolicyBasedRouteVirtualMachine</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetId"></a>

```java
public void resetId()
```

##### `resetInterconnectAttachment` <a name="resetInterconnectAttachment" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetInterconnectAttachment"></a>

```java
public void resetInterconnectAttachment()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetNextHopIlbIp` <a name="resetNextHopIlbIp" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetNextHopIlbIp"></a>

```java
public void resetNextHopIlbIp()
```

##### `resetNextHopOtherRoutes` <a name="resetNextHopOtherRoutes" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetNextHopOtherRoutes"></a>

```java
public void resetNextHopOtherRoutes()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVirtualMachine` <a name="resetVirtualMachine" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.resetVirtualMachine"></a>

```java
public void resetVirtualMachine()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkConnectivityPolicyBasedRoute resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_policy_based_route.NetworkConnectivityPolicyBasedRoute;

NetworkConnectivityPolicyBasedRoute.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_policy_based_route.NetworkConnectivityPolicyBasedRoute;

NetworkConnectivityPolicyBasedRoute.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_policy_based_route.NetworkConnectivityPolicyBasedRoute;

NetworkConnectivityPolicyBasedRoute.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_policy_based_route.NetworkConnectivityPolicyBasedRoute;

NetworkConnectivityPolicyBasedRoute.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkConnectivityPolicyBasedRoute.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NetworkConnectivityPolicyBasedRoute resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkConnectivityPolicyBasedRoute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkConnectivityPolicyBasedRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NetworkConnectivityPolicyBasedRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference">NetworkConnectivityPolicyBasedRouteFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.interconnectAttachment">interconnectAttachment</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference">NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference">NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.virtualMachine">virtualMachine</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference">NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.warnings">warnings</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList">NetworkConnectivityPolicyBasedRouteWarningsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.filterInput">filterInput</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter">NetworkConnectivityPolicyBasedRouteFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.interconnectAttachmentInput">interconnectAttachmentInput</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachment">NetworkConnectivityPolicyBasedRouteInterconnectAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.nextHopIlbIpInput">nextHopIlbIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.nextHopOtherRoutesInput">nextHopOtherRoutesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts">NetworkConnectivityPolicyBasedRouteTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.virtualMachineInput">virtualMachineInput</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachine">NetworkConnectivityPolicyBasedRouteVirtualMachine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.nextHopIlbIp">nextHopIlbIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.nextHopOtherRoutes">nextHopOtherRoutes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.filter"></a>

```java
public NetworkConnectivityPolicyBasedRouteFilterOutputReference getFilter();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference">NetworkConnectivityPolicyBasedRouteFilterOutputReference</a>

---

##### `interconnectAttachment`<sup>Required</sup> <a name="interconnectAttachment" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.interconnectAttachment"></a>

```java
public NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference getInterconnectAttachment();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference">NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference</a>

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.timeouts"></a>

```java
public NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference">NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `virtualMachine`<sup>Required</sup> <a name="virtualMachine" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.virtualMachine"></a>

```java
public NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference getVirtualMachine();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference">NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference</a>

---

##### `warnings`<sup>Required</sup> <a name="warnings" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.warnings"></a>

```java
public NetworkConnectivityPolicyBasedRouteWarningsList getWarnings();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList">NetworkConnectivityPolicyBasedRouteWarningsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.filterInput"></a>

```java
public NetworkConnectivityPolicyBasedRouteFilter getFilterInput();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter">NetworkConnectivityPolicyBasedRouteFilter</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `interconnectAttachmentInput`<sup>Optional</sup> <a name="interconnectAttachmentInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.interconnectAttachmentInput"></a>

```java
public NetworkConnectivityPolicyBasedRouteInterconnectAttachment getInterconnectAttachmentInput();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachment">NetworkConnectivityPolicyBasedRouteInterconnectAttachment</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `nextHopIlbIpInput`<sup>Optional</sup> <a name="nextHopIlbIpInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.nextHopIlbIpInput"></a>

```java
public java.lang.String getNextHopIlbIpInput();
```

- *Type:* java.lang.String

---

##### `nextHopOtherRoutesInput`<sup>Optional</sup> <a name="nextHopOtherRoutesInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.nextHopOtherRoutesInput"></a>

```java
public java.lang.String getNextHopOtherRoutesInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts">NetworkConnectivityPolicyBasedRouteTimeouts</a>

---

##### `virtualMachineInput`<sup>Optional</sup> <a name="virtualMachineInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.virtualMachineInput"></a>

```java
public NetworkConnectivityPolicyBasedRouteVirtualMachine getVirtualMachineInput();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachine">NetworkConnectivityPolicyBasedRouteVirtualMachine</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `nextHopIlbIp`<sup>Required</sup> <a name="nextHopIlbIp" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.nextHopIlbIp"></a>

```java
public java.lang.String getNextHopIlbIp();
```

- *Type:* java.lang.String

---

##### `nextHopOtherRoutes`<sup>Required</sup> <a name="nextHopOtherRoutes" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.nextHopOtherRoutes"></a>

```java
public java.lang.String getNextHopOtherRoutes();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRoute.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkConnectivityPolicyBasedRouteConfig <a name="NetworkConnectivityPolicyBasedRouteConfig" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_policy_based_route.NetworkConnectivityPolicyBasedRouteConfig;

NetworkConnectivityPolicyBasedRouteConfig.builder()
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
    .filter(NetworkConnectivityPolicyBasedRouteFilter)
    .name(java.lang.String)
    .network(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .interconnectAttachment(NetworkConnectivityPolicyBasedRouteInterconnectAttachment)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .nextHopIlbIp(java.lang.String)
//  .nextHopOtherRoutes(java.lang.String)
//  .priority(java.lang.Number)
//  .project(java.lang.String)
//  .timeouts(NetworkConnectivityPolicyBasedRouteTimeouts)
//  .virtualMachine(NetworkConnectivityPolicyBasedRouteVirtualMachine)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter">NetworkConnectivityPolicyBasedRouteFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the policy based route. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.network">network</a></code> | <code>java.lang.String</code> | Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#id NetworkConnectivityPolicyBasedRoute#id}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.interconnectAttachment">interconnectAttachment</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachment">NetworkConnectivityPolicyBasedRouteInterconnectAttachment</a></code> | interconnect_attachment block. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.nextHopIlbIp">nextHopIlbIp</a></code> | <code>java.lang.String</code> | The IP address of a global-access-enabled L4 ILB that is the next hop for matching packets. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.nextHopOtherRoutes">nextHopOtherRoutes</a></code> | <code>java.lang.String</code> | Other routes that will be referenced to determine the next hop of the packet. Possible values: ["DEFAULT_ROUTING"]. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | The priority of this policy-based route. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#project NetworkConnectivityPolicyBasedRoute#project}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts">NetworkConnectivityPolicyBasedRouteTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.virtualMachine">virtualMachine</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachine">NetworkConnectivityPolicyBasedRouteVirtualMachine</a></code> | virtual_machine block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.filter"></a>

```java
public NetworkConnectivityPolicyBasedRouteFilter getFilter();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter">NetworkConnectivityPolicyBasedRouteFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#filter NetworkConnectivityPolicyBasedRoute#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the policy based route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#name NetworkConnectivityPolicyBasedRoute#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#network NetworkConnectivityPolicyBasedRoute#network}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#description NetworkConnectivityPolicyBasedRoute#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#id NetworkConnectivityPolicyBasedRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interconnectAttachment`<sup>Optional</sup> <a name="interconnectAttachment" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.interconnectAttachment"></a>

```java
public NetworkConnectivityPolicyBasedRouteInterconnectAttachment getInterconnectAttachment();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachment">NetworkConnectivityPolicyBasedRouteInterconnectAttachment</a>

interconnect_attachment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#interconnect_attachment NetworkConnectivityPolicyBasedRoute#interconnect_attachment}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#labels NetworkConnectivityPolicyBasedRoute#labels}

---

##### `nextHopIlbIp`<sup>Optional</sup> <a name="nextHopIlbIp" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.nextHopIlbIp"></a>

```java
public java.lang.String getNextHopIlbIp();
```

- *Type:* java.lang.String

The IP address of a global-access-enabled L4 ILB that is the next hop for matching packets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#next_hop_ilb_ip NetworkConnectivityPolicyBasedRoute#next_hop_ilb_ip}

---

##### `nextHopOtherRoutes`<sup>Optional</sup> <a name="nextHopOtherRoutes" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.nextHopOtherRoutes"></a>

```java
public java.lang.String getNextHopOtherRoutes();
```

- *Type:* java.lang.String

Other routes that will be referenced to determine the next hop of the packet. Possible values: ["DEFAULT_ROUTING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#next_hop_other_routes NetworkConnectivityPolicyBasedRoute#next_hop_other_routes}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

The priority of this policy-based route.

Priority is used to break ties in cases where there are more than one matching policy-based routes found. In cases where multiple policy-based routes are matched, the one with the lowest-numbered priority value wins. The default value is 1000. The priority value must be from 1 to 65535, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#priority NetworkConnectivityPolicyBasedRoute#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#project NetworkConnectivityPolicyBasedRoute#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.timeouts"></a>

```java
public NetworkConnectivityPolicyBasedRouteTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts">NetworkConnectivityPolicyBasedRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#timeouts NetworkConnectivityPolicyBasedRoute#timeouts}

---

##### `virtualMachine`<sup>Optional</sup> <a name="virtualMachine" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteConfig.property.virtualMachine"></a>

```java
public NetworkConnectivityPolicyBasedRouteVirtualMachine getVirtualMachine();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachine">NetworkConnectivityPolicyBasedRouteVirtualMachine</a>

virtual_machine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#virtual_machine NetworkConnectivityPolicyBasedRoute#virtual_machine}

---

### NetworkConnectivityPolicyBasedRouteFilter <a name="NetworkConnectivityPolicyBasedRouteFilter" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_policy_based_route.NetworkConnectivityPolicyBasedRouteFilter;

NetworkConnectivityPolicyBasedRouteFilter.builder()
    .protocolVersion(java.lang.String)
//  .destRange(java.lang.String)
//  .ipProtocol(java.lang.String)
//  .srcRange(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter.property.protocolVersion">protocolVersion</a></code> | <code>java.lang.String</code> | Internet protocol versions this policy-based route applies to. Possible values: ["IPV4", "IPV6"]. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter.property.destRange">destRange</a></code> | <code>java.lang.String</code> | The destination IP range of outgoing packets that this policy-based route applies to. Default is "0.0.0.0/0". |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter.property.ipProtocol">ipProtocol</a></code> | <code>java.lang.String</code> | The IP protocol that this policy-based route applies to. Valid values are 'TCP', 'UDP', and 'ALL'. Default is 'ALL'. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter.property.srcRange">srcRange</a></code> | <code>java.lang.String</code> | The source IP range of outgoing packets that this policy-based route applies to. Default is "0.0.0.0/0". |

---

##### `protocolVersion`<sup>Required</sup> <a name="protocolVersion" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter.property.protocolVersion"></a>

```java
public java.lang.String getProtocolVersion();
```

- *Type:* java.lang.String

Internet protocol versions this policy-based route applies to. Possible values: ["IPV4", "IPV6"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#protocol_version NetworkConnectivityPolicyBasedRoute#protocol_version}

---

##### `destRange`<sup>Optional</sup> <a name="destRange" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter.property.destRange"></a>

```java
public java.lang.String getDestRange();
```

- *Type:* java.lang.String

The destination IP range of outgoing packets that this policy-based route applies to. Default is "0.0.0.0/0".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#dest_range NetworkConnectivityPolicyBasedRoute#dest_range}

---

##### `ipProtocol`<sup>Optional</sup> <a name="ipProtocol" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter.property.ipProtocol"></a>

```java
public java.lang.String getIpProtocol();
```

- *Type:* java.lang.String

The IP protocol that this policy-based route applies to. Valid values are 'TCP', 'UDP', and 'ALL'. Default is 'ALL'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#ip_protocol NetworkConnectivityPolicyBasedRoute#ip_protocol}

---

##### `srcRange`<sup>Optional</sup> <a name="srcRange" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter.property.srcRange"></a>

```java
public java.lang.String getSrcRange();
```

- *Type:* java.lang.String

The source IP range of outgoing packets that this policy-based route applies to. Default is "0.0.0.0/0".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#src_range NetworkConnectivityPolicyBasedRoute#src_range}

---

### NetworkConnectivityPolicyBasedRouteInterconnectAttachment <a name="NetworkConnectivityPolicyBasedRouteInterconnectAttachment" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_policy_based_route.NetworkConnectivityPolicyBasedRouteInterconnectAttachment;

NetworkConnectivityPolicyBasedRouteInterconnectAttachment.builder()
    .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachment.property.region">region</a></code> | <code>java.lang.String</code> | Cloud region to install this policy-based route on for Interconnect attachments. |

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachment.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Cloud region to install this policy-based route on for Interconnect attachments.

Use 'all' to install it on all Interconnect attachments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#region NetworkConnectivityPolicyBasedRoute#region}

---

### NetworkConnectivityPolicyBasedRouteTimeouts <a name="NetworkConnectivityPolicyBasedRouteTimeouts" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_policy_based_route.NetworkConnectivityPolicyBasedRouteTimeouts;

NetworkConnectivityPolicyBasedRouteTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#create NetworkConnectivityPolicyBasedRoute#create}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#delete NetworkConnectivityPolicyBasedRoute#delete}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#update NetworkConnectivityPolicyBasedRoute#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#create NetworkConnectivityPolicyBasedRoute#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#delete NetworkConnectivityPolicyBasedRoute#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#update NetworkConnectivityPolicyBasedRoute#update}.

---

### NetworkConnectivityPolicyBasedRouteVirtualMachine <a name="NetworkConnectivityPolicyBasedRouteVirtualMachine" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachine.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_policy_based_route.NetworkConnectivityPolicyBasedRouteVirtualMachine;

NetworkConnectivityPolicyBasedRouteVirtualMachine.builder()
    .tags(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachine.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | A list of VM instance tags that this policy-based route applies to. |

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachine.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

A list of VM instance tags that this policy-based route applies to.

VM instances that have ANY of tags specified here will install this PBR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/network_connectivity_policy_based_route#tags NetworkConnectivityPolicyBasedRoute#tags}

---

### NetworkConnectivityPolicyBasedRouteWarnings <a name="NetworkConnectivityPolicyBasedRouteWarnings" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarnings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarnings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_policy_based_route.NetworkConnectivityPolicyBasedRouteWarnings;

NetworkConnectivityPolicyBasedRouteWarnings.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### NetworkConnectivityPolicyBasedRouteFilterOutputReference <a name="NetworkConnectivityPolicyBasedRouteFilterOutputReference" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_policy_based_route.NetworkConnectivityPolicyBasedRouteFilterOutputReference;

new NetworkConnectivityPolicyBasedRouteFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.resetDestRange">resetDestRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.resetIpProtocol">resetIpProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.resetSrcRange">resetSrcRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestRange` <a name="resetDestRange" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.resetDestRange"></a>

```java
public void resetDestRange()
```

##### `resetIpProtocol` <a name="resetIpProtocol" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.resetIpProtocol"></a>

```java
public void resetIpProtocol()
```

##### `resetSrcRange` <a name="resetSrcRange" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.resetSrcRange"></a>

```java
public void resetSrcRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.destRangeInput">destRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.ipProtocolInput">ipProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.protocolVersionInput">protocolVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.srcRangeInput">srcRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.destRange">destRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.ipProtocol">ipProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.protocolVersion">protocolVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.srcRange">srcRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter">NetworkConnectivityPolicyBasedRouteFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destRangeInput`<sup>Optional</sup> <a name="destRangeInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.destRangeInput"></a>

```java
public java.lang.String getDestRangeInput();
```

- *Type:* java.lang.String

---

##### `ipProtocolInput`<sup>Optional</sup> <a name="ipProtocolInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.ipProtocolInput"></a>

```java
public java.lang.String getIpProtocolInput();
```

- *Type:* java.lang.String

---

##### `protocolVersionInput`<sup>Optional</sup> <a name="protocolVersionInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.protocolVersionInput"></a>

```java
public java.lang.String getProtocolVersionInput();
```

- *Type:* java.lang.String

---

##### `srcRangeInput`<sup>Optional</sup> <a name="srcRangeInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.srcRangeInput"></a>

```java
public java.lang.String getSrcRangeInput();
```

- *Type:* java.lang.String

---

##### `destRange`<sup>Required</sup> <a name="destRange" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.destRange"></a>

```java
public java.lang.String getDestRange();
```

- *Type:* java.lang.String

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.ipProtocol"></a>

```java
public java.lang.String getIpProtocol();
```

- *Type:* java.lang.String

---

##### `protocolVersion`<sup>Required</sup> <a name="protocolVersion" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.protocolVersion"></a>

```java
public java.lang.String getProtocolVersion();
```

- *Type:* java.lang.String

---

##### `srcRange`<sup>Required</sup> <a name="srcRange" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.srcRange"></a>

```java
public java.lang.String getSrcRange();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilterOutputReference.property.internalValue"></a>

```java
public NetworkConnectivityPolicyBasedRouteFilter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteFilter">NetworkConnectivityPolicyBasedRouteFilter</a>

---


### NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference <a name="NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_policy_based_route.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference;

new NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachment">NetworkConnectivityPolicyBasedRouteInterconnectAttachment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.internalValue"></a>

```java
public NetworkConnectivityPolicyBasedRouteInterconnectAttachment getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteInterconnectAttachment">NetworkConnectivityPolicyBasedRouteInterconnectAttachment</a>

---


### NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference <a name="NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_policy_based_route.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference;

new NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts">NetworkConnectivityPolicyBasedRouteTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteTimeouts">NetworkConnectivityPolicyBasedRouteTimeouts</a>

---


### NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference <a name="NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_policy_based_route.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference;

new NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachine">NetworkConnectivityPolicyBasedRouteVirtualMachine</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.internalValue"></a>

```java
public NetworkConnectivityPolicyBasedRouteVirtualMachine getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteVirtualMachine">NetworkConnectivityPolicyBasedRouteVirtualMachine</a>

---


### NetworkConnectivityPolicyBasedRouteWarningsList <a name="NetworkConnectivityPolicyBasedRouteWarningsList" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_policy_based_route.NetworkConnectivityPolicyBasedRouteWarningsList;

new NetworkConnectivityPolicyBasedRouteWarningsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.get"></a>

```java
public NetworkConnectivityPolicyBasedRouteWarningsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### NetworkConnectivityPolicyBasedRouteWarningsOutputReference <a name="NetworkConnectivityPolicyBasedRouteWarningsOutputReference" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_policy_based_route.NetworkConnectivityPolicyBasedRouteWarningsOutputReference;

new NetworkConnectivityPolicyBasedRouteWarningsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.code">code</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.data">data</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.warningMessage">warningMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarnings">NetworkConnectivityPolicyBasedRouteWarnings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.code"></a>

```java
public java.lang.String getCode();
```

- *Type:* java.lang.String

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.data"></a>

```java
public StringMap getData();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `warningMessage`<sup>Required</sup> <a name="warningMessage" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.warningMessage"></a>

```java
public java.lang.String getWarningMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.internalValue"></a>

```java
public NetworkConnectivityPolicyBasedRouteWarnings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityPolicyBasedRoute.NetworkConnectivityPolicyBasedRouteWarnings">NetworkConnectivityPolicyBasedRouteWarnings</a>

---



