# `networkServicesLbTrafficExtension` Submodule <a name="`networkServicesLbTrafficExtension` Submodule" id="@cdktf/provider-google.networkServicesLbTrafficExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesLbTrafficExtension <a name="NetworkServicesLbTrafficExtension" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension google_network_services_lb_traffic_extension}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_lb_traffic_extension.NetworkServicesLbTrafficExtension;

NetworkServicesLbTrafficExtension.Builder.create(Construct scope, java.lang.String id)
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
    .extensionChains(IResolvable)
    .extensionChains(java.util.List<NetworkServicesLbTrafficExtensionExtensionChains>)
    .forwardingRules(java.util.List<java.lang.String>)
    .location(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .loadBalancingScheme(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(NetworkServicesLbTrafficExtensionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.extensionChains">extensionChains</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChains">NetworkServicesLbTrafficExtensionExtensionChains</a>></code> | extension_chains block. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.forwardingRules">forwardingRules</a></code> | <code>java.util.List<java.lang.String></code> | A list of references to the forwarding rules to which this service extension is attached to. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the traffic extension. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the LbTrafficExtension resource in the following format: projects/{project}/locations/{location}/lbTrafficExtensions/{lbTrafficExtension}. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#id NetworkServicesLbTrafficExtension#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of labels associated with the LbTrafficExtension resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.loadBalancingScheme">loadBalancingScheme</a></code> | <code>java.lang.String</code> | All backend services and forwarding rules referenced by this extension must share the same load balancing scheme. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#project NetworkServicesLbTrafficExtension#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeouts">NetworkServicesLbTrafficExtensionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `extensionChains`<sup>Required</sup> <a name="extensionChains" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.extensionChains"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChains">NetworkServicesLbTrafficExtensionExtensionChains</a>>

extension_chains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#extension_chains NetworkServicesLbTrafficExtension#extension_chains}

---

##### `forwardingRules`<sup>Required</sup> <a name="forwardingRules" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.forwardingRules"></a>

- *Type:* java.util.List<java.lang.String>

A list of references to the forwarding rules to which this service extension is attached to.

At least one forwarding rule is required. There can be only one LBTrafficExtension resource per forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#forwarding_rules NetworkServicesLbTrafficExtension#forwarding_rules}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the traffic extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#location NetworkServicesLbTrafficExtension#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the LbTrafficExtension resource in the following format: projects/{project}/locations/{location}/lbTrafficExtensions/{lbTrafficExtension}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#name NetworkServicesLbTrafficExtension#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#description NetworkServicesLbTrafficExtension#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#id NetworkServicesLbTrafficExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of labels associated with the LbTrafficExtension resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#labels NetworkServicesLbTrafficExtension#labels}

---

##### `loadBalancingScheme`<sup>Optional</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.loadBalancingScheme"></a>

- *Type:* java.lang.String

All backend services and forwarding rules referenced by this extension must share the same load balancing scheme.

For more information, refer to [Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service) and
[Supported application load balancers](https://cloud.google.com/service-extensions/docs/callouts-overview#supported-lbs). Possible values: ["INTERNAL_MANAGED", "EXTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#load_balancing_scheme NetworkServicesLbTrafficExtension#load_balancing_scheme}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#project NetworkServicesLbTrafficExtension#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeouts">NetworkServicesLbTrafficExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#timeouts NetworkServicesLbTrafficExtension#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.putExtensionChains">putExtensionChains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.resetLoadBalancingScheme">resetLoadBalancingScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExtensionChains` <a name="putExtensionChains" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.putExtensionChains"></a>

```java
public void putExtensionChains(IResolvable OR java.util.List<NetworkServicesLbTrafficExtensionExtensionChains> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.putExtensionChains.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChains">NetworkServicesLbTrafficExtensionExtensionChains</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.putTimeouts"></a>

```java
public void putTimeouts(NetworkServicesLbTrafficExtensionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeouts">NetworkServicesLbTrafficExtensionTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLoadBalancingScheme` <a name="resetLoadBalancingScheme" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.resetLoadBalancingScheme"></a>

```java
public void resetLoadBalancingScheme()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkServicesLbTrafficExtension resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_lb_traffic_extension.NetworkServicesLbTrafficExtension;

NetworkServicesLbTrafficExtension.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_lb_traffic_extension.NetworkServicesLbTrafficExtension;

NetworkServicesLbTrafficExtension.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_lb_traffic_extension.NetworkServicesLbTrafficExtension;

NetworkServicesLbTrafficExtension.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_lb_traffic_extension.NetworkServicesLbTrafficExtension;

NetworkServicesLbTrafficExtension.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkServicesLbTrafficExtension.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NetworkServicesLbTrafficExtension resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkServicesLbTrafficExtension to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkServicesLbTrafficExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NetworkServicesLbTrafficExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.extensionChains">extensionChains</a></code> | <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList">NetworkServicesLbTrafficExtensionExtensionChainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference">NetworkServicesLbTrafficExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.extensionChainsInput">extensionChainsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChains">NetworkServicesLbTrafficExtensionExtensionChains</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.forwardingRulesInput">forwardingRulesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.loadBalancingSchemeInput">loadBalancingSchemeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeouts">NetworkServicesLbTrafficExtensionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.forwardingRules">forwardingRules</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `extensionChains`<sup>Required</sup> <a name="extensionChains" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.extensionChains"></a>

```java
public NetworkServicesLbTrafficExtensionExtensionChainsList getExtensionChains();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList">NetworkServicesLbTrafficExtensionExtensionChainsList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.timeouts"></a>

```java
public NetworkServicesLbTrafficExtensionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference">NetworkServicesLbTrafficExtensionTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `extensionChainsInput`<sup>Optional</sup> <a name="extensionChainsInput" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.extensionChainsInput"></a>

```java
public java.lang.Object getExtensionChainsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChains">NetworkServicesLbTrafficExtensionExtensionChains</a>>

---

##### `forwardingRulesInput`<sup>Optional</sup> <a name="forwardingRulesInput" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.forwardingRulesInput"></a>

```java
public java.util.List<java.lang.String> getForwardingRulesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `loadBalancingSchemeInput`<sup>Optional</sup> <a name="loadBalancingSchemeInput" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.loadBalancingSchemeInput"></a>

```java
public java.lang.String getLoadBalancingSchemeInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeouts">NetworkServicesLbTrafficExtensionTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `forwardingRules`<sup>Required</sup> <a name="forwardingRules" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.forwardingRules"></a>

```java
public java.util.List<java.lang.String> getForwardingRules();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `loadBalancingScheme`<sup>Required</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.loadBalancingScheme"></a>

```java
public java.lang.String getLoadBalancingScheme();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtension.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesLbTrafficExtensionConfig <a name="NetworkServicesLbTrafficExtensionConfig" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_lb_traffic_extension.NetworkServicesLbTrafficExtensionConfig;

NetworkServicesLbTrafficExtensionConfig.builder()
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
    .extensionChains(IResolvable)
    .extensionChains(java.util.List<NetworkServicesLbTrafficExtensionExtensionChains>)
    .forwardingRules(java.util.List<java.lang.String>)
    .location(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .loadBalancingScheme(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(NetworkServicesLbTrafficExtensionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.extensionChains">extensionChains</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChains">NetworkServicesLbTrafficExtensionExtensionChains</a>></code> | extension_chains block. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.forwardingRules">forwardingRules</a></code> | <code>java.util.List<java.lang.String></code> | A list of references to the forwarding rules to which this service extension is attached to. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the traffic extension. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the LbTrafficExtension resource in the following format: projects/{project}/locations/{location}/lbTrafficExtensions/{lbTrafficExtension}. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#id NetworkServicesLbTrafficExtension#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of labels associated with the LbTrafficExtension resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>java.lang.String</code> | All backend services and forwarding rules referenced by this extension must share the same load balancing scheme. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#project NetworkServicesLbTrafficExtension#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeouts">NetworkServicesLbTrafficExtensionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `extensionChains`<sup>Required</sup> <a name="extensionChains" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.extensionChains"></a>

```java
public java.lang.Object getExtensionChains();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChains">NetworkServicesLbTrafficExtensionExtensionChains</a>>

extension_chains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#extension_chains NetworkServicesLbTrafficExtension#extension_chains}

---

##### `forwardingRules`<sup>Required</sup> <a name="forwardingRules" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.forwardingRules"></a>

```java
public java.util.List<java.lang.String> getForwardingRules();
```

- *Type:* java.util.List<java.lang.String>

A list of references to the forwarding rules to which this service extension is attached to.

At least one forwarding rule is required. There can be only one LBTrafficExtension resource per forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#forwarding_rules NetworkServicesLbTrafficExtension#forwarding_rules}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the traffic extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#location NetworkServicesLbTrafficExtension#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the LbTrafficExtension resource in the following format: projects/{project}/locations/{location}/lbTrafficExtensions/{lbTrafficExtension}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#name NetworkServicesLbTrafficExtension#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#description NetworkServicesLbTrafficExtension#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#id NetworkServicesLbTrafficExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of labels associated with the LbTrafficExtension resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#labels NetworkServicesLbTrafficExtension#labels}

---

##### `loadBalancingScheme`<sup>Optional</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.loadBalancingScheme"></a>

```java
public java.lang.String getLoadBalancingScheme();
```

- *Type:* java.lang.String

All backend services and forwarding rules referenced by this extension must share the same load balancing scheme.

For more information, refer to [Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service) and
[Supported application load balancers](https://cloud.google.com/service-extensions/docs/callouts-overview#supported-lbs). Possible values: ["INTERNAL_MANAGED", "EXTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#load_balancing_scheme NetworkServicesLbTrafficExtension#load_balancing_scheme}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#project NetworkServicesLbTrafficExtension#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionConfig.property.timeouts"></a>

```java
public NetworkServicesLbTrafficExtensionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeouts">NetworkServicesLbTrafficExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#timeouts NetworkServicesLbTrafficExtension#timeouts}

---

### NetworkServicesLbTrafficExtensionExtensionChains <a name="NetworkServicesLbTrafficExtensionExtensionChains" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChains.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_lb_traffic_extension.NetworkServicesLbTrafficExtensionExtensionChains;

NetworkServicesLbTrafficExtensionExtensionChains.builder()
    .extensions(IResolvable)
    .extensions(java.util.List<NetworkServicesLbTrafficExtensionExtensionChainsExtensions>)
    .matchCondition(NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChains.property.extensions">extensions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions">NetworkServicesLbTrafficExtensionExtensionChainsExtensions</a>></code> | extensions block. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChains.property.matchCondition">matchCondition</a></code> | <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition">NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition</a></code> | match_condition block. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChains.property.name">name</a></code> | <code>java.lang.String</code> | The name for this extension chain. |

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChains.property.extensions"></a>

```java
public java.lang.Object getExtensions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions">NetworkServicesLbTrafficExtensionExtensionChainsExtensions</a>>

extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#extensions NetworkServicesLbTrafficExtension#extensions}

---

##### `matchCondition`<sup>Required</sup> <a name="matchCondition" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChains.property.matchCondition"></a>

```java
public NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition getMatchCondition();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition">NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition</a>

match_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#match_condition NetworkServicesLbTrafficExtension#match_condition}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChains.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name for this extension chain.

The name is logged as part of the HTTP request logs.
The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
and can have a maximum length of 63 characters. Additionally, the first character must be a letter
and the last a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#name NetworkServicesLbTrafficExtension#name}

---

### NetworkServicesLbTrafficExtensionExtensionChainsExtensions <a name="NetworkServicesLbTrafficExtensionExtensionChainsExtensions" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_lb_traffic_extension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions;

NetworkServicesLbTrafficExtensionExtensionChainsExtensions.builder()
    .name(java.lang.String)
    .service(java.lang.String)
//  .authority(java.lang.String)
//  .failOpen(java.lang.Boolean)
//  .failOpen(IResolvable)
//  .forwardHeaders(java.util.List<java.lang.String>)
//  .supportedEvents(java.util.List<java.lang.String>)
//  .timeout(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.name">name</a></code> | <code>java.lang.String</code> | The name for this extension. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.service">service</a></code> | <code>java.lang.String</code> | The reference to the service that runs the extension. Must be a reference to a backend service. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.authority">authority</a></code> | <code>java.lang.String</code> | The :authority header in the gRPC request sent from Envoy to the extension service. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.failOpen">failOpen</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines how the proxy behaves if the call to the extension fails or times out. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.forwardHeaders">forwardHeaders</a></code> | <code>java.util.List<java.lang.String></code> | List of the HTTP headers to forward to the extension (from the client or backend). |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.supportedEvents">supportedEvents</a></code> | <code>java.util.List<java.lang.String></code> | A set of events during request or response processing for which this extension is called. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.timeout">timeout</a></code> | <code>java.lang.String</code> | Specifies the timeout for each individual message on the stream. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name for this extension.

The name is logged as part of the HTTP request logs.
The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
and can have a maximum length of 63 characters. Additionally, the first character must be a letter
and the last a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#name NetworkServicesLbTrafficExtension#name}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

The reference to the service that runs the extension. Must be a reference to a backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#service NetworkServicesLbTrafficExtension#service}

---

##### `authority`<sup>Optional</sup> <a name="authority" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.authority"></a>

```java
public java.lang.String getAuthority();
```

- *Type:* java.lang.String

The :authority header in the gRPC request sent from Envoy to the extension service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#authority NetworkServicesLbTrafficExtension#authority}

---

##### `failOpen`<sup>Optional</sup> <a name="failOpen" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.failOpen"></a>

```java
public java.lang.Object getFailOpen();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines how the proxy behaves if the call to the extension fails or times out.

When set to TRUE, request or response processing continues without error.
Any subsequent extensions in the extension chain are also executed.
When set to FALSE: * If response headers have not been delivered to the downstream client,
a generic 500 error is returned to the client. The error response can be tailored by
configuring a custom error response in the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#fail_open NetworkServicesLbTrafficExtension#fail_open}

---

##### `forwardHeaders`<sup>Optional</sup> <a name="forwardHeaders" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.forwardHeaders"></a>

```java
public java.util.List<java.lang.String> getForwardHeaders();
```

- *Type:* java.util.List<java.lang.String>

List of the HTTP headers to forward to the extension (from the client or backend).

If omitted, all headers are sent. Each element is a string indicating the header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#forward_headers NetworkServicesLbTrafficExtension#forward_headers}

---

##### `supportedEvents`<sup>Optional</sup> <a name="supportedEvents" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.supportedEvents"></a>

```java
public java.util.List<java.lang.String> getSupportedEvents();
```

- *Type:* java.util.List<java.lang.String>

A set of events during request or response processing for which this extension is called.

This field is required for the LbTrafficExtension resource. It's not relevant for the LbRouteExtension
resource. Possible values:'EVENT_TYPE_UNSPECIFIED', 'REQUEST_HEADERS', 'REQUEST_BODY', 'RESPONSE_HEADERS',
'RESPONSE_BODY', 'RESPONSE_BODY' and 'RESPONSE_BODY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#supported_events NetworkServicesLbTrafficExtension#supported_events}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

Specifies the timeout for each individual message on the stream.

The timeout must be between 10-1000 milliseconds.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#timeout NetworkServicesLbTrafficExtension#timeout}

---

### NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition <a name="NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_lb_traffic_extension.NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition;

NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition.builder()
    .celExpression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition.property.celExpression">celExpression</a></code> | <code>java.lang.String</code> | A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed. |

---

##### `celExpression`<sup>Required</sup> <a name="celExpression" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition.property.celExpression"></a>

```java
public java.lang.String getCelExpression();
```

- *Type:* java.lang.String

A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#cel_expression NetworkServicesLbTrafficExtension#cel_expression}

---

### NetworkServicesLbTrafficExtensionTimeouts <a name="NetworkServicesLbTrafficExtensionTimeouts" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_lb_traffic_extension.NetworkServicesLbTrafficExtensionTimeouts;

NetworkServicesLbTrafficExtensionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#create NetworkServicesLbTrafficExtension#create}. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#delete NetworkServicesLbTrafficExtension#delete}. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#update NetworkServicesLbTrafficExtension#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#create NetworkServicesLbTrafficExtension#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#delete NetworkServicesLbTrafficExtension#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/network_services_lb_traffic_extension#update NetworkServicesLbTrafficExtension#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList <a name="NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_lb_traffic_extension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList;

new NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.get"></a>

```java
public NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions">NetworkServicesLbTrafficExtensionExtensionChainsExtensions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions">NetworkServicesLbTrafficExtensionExtensionChainsExtensions</a>>

---


### NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference <a name="NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_lb_traffic_extension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference;

new NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetAuthority">resetAuthority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetFailOpen">resetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetForwardHeaders">resetForwardHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetSupportedEvents">resetSupportedEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthority` <a name="resetAuthority" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetAuthority"></a>

```java
public void resetAuthority()
```

##### `resetFailOpen` <a name="resetFailOpen" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetFailOpen"></a>

```java
public void resetFailOpen()
```

##### `resetForwardHeaders` <a name="resetForwardHeaders" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetForwardHeaders"></a>

```java
public void resetForwardHeaders()
```

##### `resetSupportedEvents` <a name="resetSupportedEvents" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetSupportedEvents"></a>

```java
public void resetSupportedEvents()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetTimeout"></a>

```java
public void resetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.authorityInput">authorityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.failOpenInput">failOpenInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.forwardHeadersInput">forwardHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.supportedEventsInput">supportedEventsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.authority">authority</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.failOpen">failOpen</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.forwardHeaders">forwardHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.supportedEvents">supportedEvents</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.timeout">timeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions">NetworkServicesLbTrafficExtensionExtensionChainsExtensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorityInput`<sup>Optional</sup> <a name="authorityInput" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.authorityInput"></a>

```java
public java.lang.String getAuthorityInput();
```

- *Type:* java.lang.String

---

##### `failOpenInput`<sup>Optional</sup> <a name="failOpenInput" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.failOpenInput"></a>

```java
public java.lang.Object getFailOpenInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forwardHeadersInput`<sup>Optional</sup> <a name="forwardHeadersInput" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.forwardHeadersInput"></a>

```java
public java.util.List<java.lang.String> getForwardHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `supportedEventsInput`<sup>Optional</sup> <a name="supportedEventsInput" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.supportedEventsInput"></a>

```java
public java.util.List<java.lang.String> getSupportedEventsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.timeoutInput"></a>

```java
public java.lang.String getTimeoutInput();
```

- *Type:* java.lang.String

---

##### `authority`<sup>Required</sup> <a name="authority" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.authority"></a>

```java
public java.lang.String getAuthority();
```

- *Type:* java.lang.String

---

##### `failOpen`<sup>Required</sup> <a name="failOpen" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.failOpen"></a>

```java
public java.lang.Object getFailOpen();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forwardHeaders`<sup>Required</sup> <a name="forwardHeaders" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.forwardHeaders"></a>

```java
public java.util.List<java.lang.String> getForwardHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `supportedEvents`<sup>Required</sup> <a name="supportedEvents" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.supportedEvents"></a>

```java
public java.util.List<java.lang.String> getSupportedEvents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions">NetworkServicesLbTrafficExtensionExtensionChainsExtensions</a>

---


### NetworkServicesLbTrafficExtensionExtensionChainsList <a name="NetworkServicesLbTrafficExtensionExtensionChainsList" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_lb_traffic_extension.NetworkServicesLbTrafficExtensionExtensionChainsList;

new NetworkServicesLbTrafficExtensionExtensionChainsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.get"></a>

```java
public NetworkServicesLbTrafficExtensionExtensionChainsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChains">NetworkServicesLbTrafficExtensionExtensionChains</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChains">NetworkServicesLbTrafficExtensionExtensionChains</a>>

---


### NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference <a name="NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_lb_traffic_extension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference;

new NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.celExpressionInput">celExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.celExpression">celExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition">NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `celExpressionInput`<sup>Optional</sup> <a name="celExpressionInput" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.celExpressionInput"></a>

```java
public java.lang.String getCelExpressionInput();
```

- *Type:* java.lang.String

---

##### `celExpression`<sup>Required</sup> <a name="celExpression" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.celExpression"></a>

```java
public java.lang.String getCelExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.internalValue"></a>

```java
public NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition">NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition</a>

---


### NetworkServicesLbTrafficExtensionExtensionChainsOutputReference <a name="NetworkServicesLbTrafficExtensionExtensionChainsOutputReference" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_lb_traffic_extension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference;

new NetworkServicesLbTrafficExtensionExtensionChainsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.putExtensions">putExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.putMatchCondition">putMatchCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExtensions` <a name="putExtensions" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.putExtensions"></a>

```java
public void putExtensions(IResolvable OR java.util.List<NetworkServicesLbTrafficExtensionExtensionChainsExtensions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.putExtensions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions">NetworkServicesLbTrafficExtensionExtensionChainsExtensions</a>>

---

##### `putMatchCondition` <a name="putMatchCondition" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.putMatchCondition"></a>

```java
public void putMatchCondition(NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.putMatchCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition">NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.extensions">extensions</a></code> | <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList">NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.matchCondition">matchCondition</a></code> | <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference">NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.extensionsInput">extensionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions">NetworkServicesLbTrafficExtensionExtensionChainsExtensions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.matchConditionInput">matchConditionInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition">NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChains">NetworkServicesLbTrafficExtensionExtensionChains</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.extensions"></a>

```java
public NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList getExtensions();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList">NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList</a>

---

##### `matchCondition`<sup>Required</sup> <a name="matchCondition" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.matchCondition"></a>

```java
public NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference getMatchCondition();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference">NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference</a>

---

##### `extensionsInput`<sup>Optional</sup> <a name="extensionsInput" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.extensionsInput"></a>

```java
public java.lang.Object getExtensionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsExtensions">NetworkServicesLbTrafficExtensionExtensionChainsExtensions</a>>

---

##### `matchConditionInput`<sup>Optional</sup> <a name="matchConditionInput" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.matchConditionInput"></a>

```java
public NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition getMatchConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition">NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionExtensionChains">NetworkServicesLbTrafficExtensionExtensionChains</a>

---


### NetworkServicesLbTrafficExtensionTimeoutsOutputReference <a name="NetworkServicesLbTrafficExtensionTimeoutsOutputReference" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_lb_traffic_extension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference;

new NetworkServicesLbTrafficExtensionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeouts">NetworkServicesLbTrafficExtensionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesLbTrafficExtension.NetworkServicesLbTrafficExtensionTimeouts">NetworkServicesLbTrafficExtensionTimeouts</a>

---



