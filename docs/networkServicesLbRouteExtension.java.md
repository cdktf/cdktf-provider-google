# `networkServicesLbRouteExtension` Submodule <a name="`networkServicesLbRouteExtension` Submodule" id="@cdktf/provider-google.networkServicesLbRouteExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesLbRouteExtension <a name="NetworkServicesLbRouteExtension" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension google_network_services_lb_route_extension}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_lb_route_extension.NetworkServicesLbRouteExtension;

NetworkServicesLbRouteExtension.Builder.create(Construct scope, java.lang.String id)
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
    .extensionChains(java.util.List<NetworkServicesLbRouteExtensionExtensionChains>)
    .forwardingRules(java.util.List<java.lang.String>)
    .loadBalancingScheme(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(NetworkServicesLbRouteExtensionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.extensionChains">extensionChains</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChains">NetworkServicesLbRouteExtensionExtensionChains</a>></code> | extension_chains block. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.forwardingRules">forwardingRules</a></code> | <code>java.util.List<java.lang.String></code> | A list of references to the forwarding rules to which this service extension is attached to. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.loadBalancingScheme">loadBalancingScheme</a></code> | <code>java.lang.String</code> | All backend services and forwarding rules referenced by this extension must share the same load balancing scheme. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the route extension. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the LbRouteExtension resource in the following format: projects/{project}/locations/{location}/lbRouteExtensions/{lbRouteExtension}. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#id NetworkServicesLbRouteExtension#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of labels associated with the LbRouteExtension resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#project NetworkServicesLbRouteExtension#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeouts">NetworkServicesLbRouteExtensionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `extensionChains`<sup>Required</sup> <a name="extensionChains" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.extensionChains"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChains">NetworkServicesLbRouteExtensionExtensionChains</a>>

extension_chains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#extension_chains NetworkServicesLbRouteExtension#extension_chains}

---

##### `forwardingRules`<sup>Required</sup> <a name="forwardingRules" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.forwardingRules"></a>

- *Type:* java.util.List<java.lang.String>

A list of references to the forwarding rules to which this service extension is attached to.

At least one forwarding rule is required. There can be only one LbRouteExtension resource per forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#forwarding_rules NetworkServicesLbRouteExtension#forwarding_rules}

---

##### `loadBalancingScheme`<sup>Required</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.loadBalancingScheme"></a>

- *Type:* java.lang.String

All backend services and forwarding rules referenced by this extension must share the same load balancing scheme.

For more information, refer to [Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service) and
[Supported application load balancers](https://cloud.google.com/service-extensions/docs/callouts-overview#supported-lbs). Possible values: ["INTERNAL_MANAGED", "EXTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#load_balancing_scheme NetworkServicesLbRouteExtension#load_balancing_scheme}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the route extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#location NetworkServicesLbRouteExtension#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the LbRouteExtension resource in the following format: projects/{project}/locations/{location}/lbRouteExtensions/{lbRouteExtension}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#name NetworkServicesLbRouteExtension#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#description NetworkServicesLbRouteExtension#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#id NetworkServicesLbRouteExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of labels associated with the LbRouteExtension resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#labels NetworkServicesLbRouteExtension#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#project NetworkServicesLbRouteExtension#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeouts">NetworkServicesLbRouteExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#timeouts NetworkServicesLbRouteExtension#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.putExtensionChains">putExtensionChains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExtensionChains` <a name="putExtensionChains" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.putExtensionChains"></a>

```java
public void putExtensionChains(IResolvable OR java.util.List<NetworkServicesLbRouteExtensionExtensionChains> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.putExtensionChains.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChains">NetworkServicesLbRouteExtensionExtensionChains</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.putTimeouts"></a>

```java
public void putTimeouts(NetworkServicesLbRouteExtensionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeouts">NetworkServicesLbRouteExtensionTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkServicesLbRouteExtension resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_lb_route_extension.NetworkServicesLbRouteExtension;

NetworkServicesLbRouteExtension.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_lb_route_extension.NetworkServicesLbRouteExtension;

NetworkServicesLbRouteExtension.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_lb_route_extension.NetworkServicesLbRouteExtension;

NetworkServicesLbRouteExtension.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_lb_route_extension.NetworkServicesLbRouteExtension;

NetworkServicesLbRouteExtension.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkServicesLbRouteExtension.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NetworkServicesLbRouteExtension resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkServicesLbRouteExtension to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkServicesLbRouteExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NetworkServicesLbRouteExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.extensionChains">extensionChains</a></code> | <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList">NetworkServicesLbRouteExtensionExtensionChainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference">NetworkServicesLbRouteExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.extensionChainsInput">extensionChainsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChains">NetworkServicesLbRouteExtensionExtensionChains</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.forwardingRulesInput">forwardingRulesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.loadBalancingSchemeInput">loadBalancingSchemeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeouts">NetworkServicesLbRouteExtensionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.forwardingRules">forwardingRules</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `extensionChains`<sup>Required</sup> <a name="extensionChains" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.extensionChains"></a>

```java
public NetworkServicesLbRouteExtensionExtensionChainsList getExtensionChains();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList">NetworkServicesLbRouteExtensionExtensionChainsList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.timeouts"></a>

```java
public NetworkServicesLbRouteExtensionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference">NetworkServicesLbRouteExtensionTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `extensionChainsInput`<sup>Optional</sup> <a name="extensionChainsInput" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.extensionChainsInput"></a>

```java
public java.lang.Object getExtensionChainsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChains">NetworkServicesLbRouteExtensionExtensionChains</a>>

---

##### `forwardingRulesInput`<sup>Optional</sup> <a name="forwardingRulesInput" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.forwardingRulesInput"></a>

```java
public java.util.List<java.lang.String> getForwardingRulesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `loadBalancingSchemeInput`<sup>Optional</sup> <a name="loadBalancingSchemeInput" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.loadBalancingSchemeInput"></a>

```java
public java.lang.String getLoadBalancingSchemeInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeouts">NetworkServicesLbRouteExtensionTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `forwardingRules`<sup>Required</sup> <a name="forwardingRules" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.forwardingRules"></a>

```java
public java.util.List<java.lang.String> getForwardingRules();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `loadBalancingScheme`<sup>Required</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.loadBalancingScheme"></a>

```java
public java.lang.String getLoadBalancingScheme();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesLbRouteExtensionConfig <a name="NetworkServicesLbRouteExtensionConfig" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_lb_route_extension.NetworkServicesLbRouteExtensionConfig;

NetworkServicesLbRouteExtensionConfig.builder()
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
    .extensionChains(java.util.List<NetworkServicesLbRouteExtensionExtensionChains>)
    .forwardingRules(java.util.List<java.lang.String>)
    .loadBalancingScheme(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(NetworkServicesLbRouteExtensionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.extensionChains">extensionChains</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChains">NetworkServicesLbRouteExtensionExtensionChains</a>></code> | extension_chains block. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.forwardingRules">forwardingRules</a></code> | <code>java.util.List<java.lang.String></code> | A list of references to the forwarding rules to which this service extension is attached to. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>java.lang.String</code> | All backend services and forwarding rules referenced by this extension must share the same load balancing scheme. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the route extension. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the LbRouteExtension resource in the following format: projects/{project}/locations/{location}/lbRouteExtensions/{lbRouteExtension}. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#id NetworkServicesLbRouteExtension#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of labels associated with the LbRouteExtension resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#project NetworkServicesLbRouteExtension#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeouts">NetworkServicesLbRouteExtensionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `extensionChains`<sup>Required</sup> <a name="extensionChains" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.extensionChains"></a>

```java
public java.lang.Object getExtensionChains();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChains">NetworkServicesLbRouteExtensionExtensionChains</a>>

extension_chains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#extension_chains NetworkServicesLbRouteExtension#extension_chains}

---

##### `forwardingRules`<sup>Required</sup> <a name="forwardingRules" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.forwardingRules"></a>

```java
public java.util.List<java.lang.String> getForwardingRules();
```

- *Type:* java.util.List<java.lang.String>

A list of references to the forwarding rules to which this service extension is attached to.

At least one forwarding rule is required. There can be only one LbRouteExtension resource per forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#forwarding_rules NetworkServicesLbRouteExtension#forwarding_rules}

---

##### `loadBalancingScheme`<sup>Required</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.loadBalancingScheme"></a>

```java
public java.lang.String getLoadBalancingScheme();
```

- *Type:* java.lang.String

All backend services and forwarding rules referenced by this extension must share the same load balancing scheme.

For more information, refer to [Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service) and
[Supported application load balancers](https://cloud.google.com/service-extensions/docs/callouts-overview#supported-lbs). Possible values: ["INTERNAL_MANAGED", "EXTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#load_balancing_scheme NetworkServicesLbRouteExtension#load_balancing_scheme}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the route extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#location NetworkServicesLbRouteExtension#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the LbRouteExtension resource in the following format: projects/{project}/locations/{location}/lbRouteExtensions/{lbRouteExtension}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#name NetworkServicesLbRouteExtension#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#description NetworkServicesLbRouteExtension#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#id NetworkServicesLbRouteExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of labels associated with the LbRouteExtension resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#labels NetworkServicesLbRouteExtension#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#project NetworkServicesLbRouteExtension#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.timeouts"></a>

```java
public NetworkServicesLbRouteExtensionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeouts">NetworkServicesLbRouteExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#timeouts NetworkServicesLbRouteExtension#timeouts}

---

### NetworkServicesLbRouteExtensionExtensionChains <a name="NetworkServicesLbRouteExtensionExtensionChains" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChains.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_lb_route_extension.NetworkServicesLbRouteExtensionExtensionChains;

NetworkServicesLbRouteExtensionExtensionChains.builder()
    .extensions(IResolvable)
    .extensions(java.util.List<NetworkServicesLbRouteExtensionExtensionChainsExtensions>)
    .matchCondition(NetworkServicesLbRouteExtensionExtensionChainsMatchCondition)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChains.property.extensions">extensions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions">NetworkServicesLbRouteExtensionExtensionChainsExtensions</a>></code> | extensions block. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChains.property.matchCondition">matchCondition</a></code> | <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchCondition">NetworkServicesLbRouteExtensionExtensionChainsMatchCondition</a></code> | match_condition block. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChains.property.name">name</a></code> | <code>java.lang.String</code> | The name for this extension chain. |

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChains.property.extensions"></a>

```java
public java.lang.Object getExtensions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions">NetworkServicesLbRouteExtensionExtensionChainsExtensions</a>>

extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#extensions NetworkServicesLbRouteExtension#extensions}

---

##### `matchCondition`<sup>Required</sup> <a name="matchCondition" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChains.property.matchCondition"></a>

```java
public NetworkServicesLbRouteExtensionExtensionChainsMatchCondition getMatchCondition();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchCondition">NetworkServicesLbRouteExtensionExtensionChainsMatchCondition</a>

match_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#match_condition NetworkServicesLbRouteExtension#match_condition}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChains.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name for this extension chain.

The name is logged as part of the HTTP request logs.
The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
and can have a maximum length of 63 characters. Additionally, the first character must be a letter
and the last character must be a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#name NetworkServicesLbRouteExtension#name}

---

### NetworkServicesLbRouteExtensionExtensionChainsExtensions <a name="NetworkServicesLbRouteExtensionExtensionChainsExtensions" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_lb_route_extension.NetworkServicesLbRouteExtensionExtensionChainsExtensions;

NetworkServicesLbRouteExtensionExtensionChainsExtensions.builder()
    .name(java.lang.String)
    .service(java.lang.String)
//  .authority(java.lang.String)
//  .failOpen(java.lang.Boolean)
//  .failOpen(IResolvable)
//  .forwardHeaders(java.util.List<java.lang.String>)
//  .timeout(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions.property.name">name</a></code> | <code>java.lang.String</code> | The name for this extension. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions.property.service">service</a></code> | <code>java.lang.String</code> | The reference to the service that runs the extension. Must be a reference to a backend service. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions.property.authority">authority</a></code> | <code>java.lang.String</code> | The :authority header in the gRPC request sent from Envoy to the extension service. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions.property.failOpen">failOpen</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines how the proxy behaves if the call to the extension fails or times out. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions.property.forwardHeaders">forwardHeaders</a></code> | <code>java.util.List<java.lang.String></code> | List of the HTTP headers to forward to the extension (from the client or backend). |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions.property.timeout">timeout</a></code> | <code>java.lang.String</code> | Specifies the timeout for each individual message on the stream. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name for this extension.

The name is logged as part of the HTTP request logs.
The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
and can have a maximum length of 63 characters. Additionally, the first character must be a letter
and the last a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#name NetworkServicesLbRouteExtension#name}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

The reference to the service that runs the extension. Must be a reference to a backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#service NetworkServicesLbRouteExtension#service}

---

##### `authority`<sup>Optional</sup> <a name="authority" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions.property.authority"></a>

```java
public java.lang.String getAuthority();
```

- *Type:* java.lang.String

The :authority header in the gRPC request sent from Envoy to the extension service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#authority NetworkServicesLbRouteExtension#authority}

---

##### `failOpen`<sup>Optional</sup> <a name="failOpen" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions.property.failOpen"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#fail_open NetworkServicesLbRouteExtension#fail_open}

---

##### `forwardHeaders`<sup>Optional</sup> <a name="forwardHeaders" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions.property.forwardHeaders"></a>

```java
public java.util.List<java.lang.String> getForwardHeaders();
```

- *Type:* java.util.List<java.lang.String>

List of the HTTP headers to forward to the extension (from the client or backend).

If omitted, all headers are sent. Each element is a string indicating the header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#forward_headers NetworkServicesLbRouteExtension#forward_headers}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

Specifies the timeout for each individual message on the stream.

The timeout must be between 10-1000 milliseconds.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#timeout NetworkServicesLbRouteExtension#timeout}

---

### NetworkServicesLbRouteExtensionExtensionChainsMatchCondition <a name="NetworkServicesLbRouteExtensionExtensionChainsMatchCondition" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_lb_route_extension.NetworkServicesLbRouteExtensionExtensionChainsMatchCondition;

NetworkServicesLbRouteExtensionExtensionChainsMatchCondition.builder()
    .celExpression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchCondition.property.celExpression">celExpression</a></code> | <code>java.lang.String</code> | A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed. |

---

##### `celExpression`<sup>Required</sup> <a name="celExpression" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchCondition.property.celExpression"></a>

```java
public java.lang.String getCelExpression();
```

- *Type:* java.lang.String

A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#cel_expression NetworkServicesLbRouteExtension#cel_expression}

---

### NetworkServicesLbRouteExtensionTimeouts <a name="NetworkServicesLbRouteExtensionTimeouts" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_lb_route_extension.NetworkServicesLbRouteExtensionTimeouts;

NetworkServicesLbRouteExtensionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#create NetworkServicesLbRouteExtension#create}. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#delete NetworkServicesLbRouteExtension#delete}. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#update NetworkServicesLbRouteExtension#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#create NetworkServicesLbRouteExtension#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#delete NetworkServicesLbRouteExtension#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#update NetworkServicesLbRouteExtension#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesLbRouteExtensionExtensionChainsExtensionsList <a name="NetworkServicesLbRouteExtensionExtensionChainsExtensionsList" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_lb_route_extension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList;

new NetworkServicesLbRouteExtensionExtensionChainsExtensionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.get"></a>

```java
public NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions">NetworkServicesLbRouteExtensionExtensionChainsExtensions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions">NetworkServicesLbRouteExtensionExtensionChainsExtensions</a>>

---


### NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference <a name="NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_lb_route_extension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference;

new NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetAuthority">resetAuthority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetFailOpen">resetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetForwardHeaders">resetForwardHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthority` <a name="resetAuthority" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetAuthority"></a>

```java
public void resetAuthority()
```

##### `resetFailOpen` <a name="resetFailOpen" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetFailOpen"></a>

```java
public void resetFailOpen()
```

##### `resetForwardHeaders` <a name="resetForwardHeaders" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetForwardHeaders"></a>

```java
public void resetForwardHeaders()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetTimeout"></a>

```java
public void resetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.authorityInput">authorityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.failOpenInput">failOpenInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.forwardHeadersInput">forwardHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.authority">authority</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.failOpen">failOpen</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.forwardHeaders">forwardHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.timeout">timeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions">NetworkServicesLbRouteExtensionExtensionChainsExtensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorityInput`<sup>Optional</sup> <a name="authorityInput" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.authorityInput"></a>

```java
public java.lang.String getAuthorityInput();
```

- *Type:* java.lang.String

---

##### `failOpenInput`<sup>Optional</sup> <a name="failOpenInput" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.failOpenInput"></a>

```java
public java.lang.Object getFailOpenInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forwardHeadersInput`<sup>Optional</sup> <a name="forwardHeadersInput" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.forwardHeadersInput"></a>

```java
public java.util.List<java.lang.String> getForwardHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.timeoutInput"></a>

```java
public java.lang.String getTimeoutInput();
```

- *Type:* java.lang.String

---

##### `authority`<sup>Required</sup> <a name="authority" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.authority"></a>

```java
public java.lang.String getAuthority();
```

- *Type:* java.lang.String

---

##### `failOpen`<sup>Required</sup> <a name="failOpen" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.failOpen"></a>

```java
public java.lang.Object getFailOpen();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forwardHeaders`<sup>Required</sup> <a name="forwardHeaders" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.forwardHeaders"></a>

```java
public java.util.List<java.lang.String> getForwardHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions">NetworkServicesLbRouteExtensionExtensionChainsExtensions</a>

---


### NetworkServicesLbRouteExtensionExtensionChainsList <a name="NetworkServicesLbRouteExtensionExtensionChainsList" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_lb_route_extension.NetworkServicesLbRouteExtensionExtensionChainsList;

new NetworkServicesLbRouteExtensionExtensionChainsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.get"></a>

```java
public NetworkServicesLbRouteExtensionExtensionChainsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChains">NetworkServicesLbRouteExtensionExtensionChains</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChains">NetworkServicesLbRouteExtensionExtensionChains</a>>

---


### NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference <a name="NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_lb_route_extension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference;

new NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.celExpressionInput">celExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.celExpression">celExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchCondition">NetworkServicesLbRouteExtensionExtensionChainsMatchCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `celExpressionInput`<sup>Optional</sup> <a name="celExpressionInput" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.celExpressionInput"></a>

```java
public java.lang.String getCelExpressionInput();
```

- *Type:* java.lang.String

---

##### `celExpression`<sup>Required</sup> <a name="celExpression" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.celExpression"></a>

```java
public java.lang.String getCelExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.internalValue"></a>

```java
public NetworkServicesLbRouteExtensionExtensionChainsMatchCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchCondition">NetworkServicesLbRouteExtensionExtensionChainsMatchCondition</a>

---


### NetworkServicesLbRouteExtensionExtensionChainsOutputReference <a name="NetworkServicesLbRouteExtensionExtensionChainsOutputReference" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_lb_route_extension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference;

new NetworkServicesLbRouteExtensionExtensionChainsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.putExtensions">putExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.putMatchCondition">putMatchCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExtensions` <a name="putExtensions" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.putExtensions"></a>

```java
public void putExtensions(IResolvable OR java.util.List<NetworkServicesLbRouteExtensionExtensionChainsExtensions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.putExtensions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions">NetworkServicesLbRouteExtensionExtensionChainsExtensions</a>>

---

##### `putMatchCondition` <a name="putMatchCondition" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.putMatchCondition"></a>

```java
public void putMatchCondition(NetworkServicesLbRouteExtensionExtensionChainsMatchCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.putMatchCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchCondition">NetworkServicesLbRouteExtensionExtensionChainsMatchCondition</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.extensions">extensions</a></code> | <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList">NetworkServicesLbRouteExtensionExtensionChainsExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.matchCondition">matchCondition</a></code> | <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference">NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.extensionsInput">extensionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions">NetworkServicesLbRouteExtensionExtensionChainsExtensions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.matchConditionInput">matchConditionInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchCondition">NetworkServicesLbRouteExtensionExtensionChainsMatchCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChains">NetworkServicesLbRouteExtensionExtensionChains</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.extensions"></a>

```java
public NetworkServicesLbRouteExtensionExtensionChainsExtensionsList getExtensions();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList">NetworkServicesLbRouteExtensionExtensionChainsExtensionsList</a>

---

##### `matchCondition`<sup>Required</sup> <a name="matchCondition" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.matchCondition"></a>

```java
public NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference getMatchCondition();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference">NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference</a>

---

##### `extensionsInput`<sup>Optional</sup> <a name="extensionsInput" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.extensionsInput"></a>

```java
public java.lang.Object getExtensionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions">NetworkServicesLbRouteExtensionExtensionChainsExtensions</a>>

---

##### `matchConditionInput`<sup>Optional</sup> <a name="matchConditionInput" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.matchConditionInput"></a>

```java
public NetworkServicesLbRouteExtensionExtensionChainsMatchCondition getMatchConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchCondition">NetworkServicesLbRouteExtensionExtensionChainsMatchCondition</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChains">NetworkServicesLbRouteExtensionExtensionChains</a>

---


### NetworkServicesLbRouteExtensionTimeoutsOutputReference <a name="NetworkServicesLbRouteExtensionTimeoutsOutputReference" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_lb_route_extension.NetworkServicesLbRouteExtensionTimeoutsOutputReference;

new NetworkServicesLbRouteExtensionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeouts">NetworkServicesLbRouteExtensionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeouts">NetworkServicesLbRouteExtensionTimeouts</a>

---



