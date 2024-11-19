# `serviceNetworkingVpcServiceControls` Submodule <a name="`serviceNetworkingVpcServiceControls` Submodule" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceNetworkingVpcServiceControls <a name="ServiceNetworkingVpcServiceControls" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/service_networking_vpc_service_controls google_service_networking_vpc_service_controls}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.service_networking_vpc_service_controls.ServiceNetworkingVpcServiceControls;

ServiceNetworkingVpcServiceControls.Builder.create(Construct scope, java.lang.String id)
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
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .network(java.lang.String)
    .service(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ServiceNetworkingVpcServiceControlsTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Desired VPC Service Controls state service producer VPC network, as described at the top of this page. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | The network that the consumer is using to connect with services. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.service">service</a></code> | <code>java.lang.String</code> | The service that is managing peering connectivity for a service producer's organization. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/service_networking_vpc_service_controls#id ServiceNetworkingVpcServiceControls#id}. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The id of the Google Cloud project containing the consumer network. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts">ServiceNetworkingVpcServiceControlsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Desired VPC Service Controls state service producer VPC network, as described at the top of this page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/service_networking_vpc_service_controls#enabled ServiceNetworkingVpcServiceControls#enabled}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.network"></a>

- *Type:* java.lang.String

The network that the consumer is using to connect with services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/service_networking_vpc_service_controls#network ServiceNetworkingVpcServiceControls#network}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.service"></a>

- *Type:* java.lang.String

The service that is managing peering connectivity for a service producer's organization.

For Google services that support this
functionality, this value is 'servicenetworking.googleapis.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/service_networking_vpc_service_controls#service ServiceNetworkingVpcServiceControls#service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/service_networking_vpc_service_controls#id ServiceNetworkingVpcServiceControls#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The id of the Google Cloud project containing the consumer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/service_networking_vpc_service_controls#project ServiceNetworkingVpcServiceControls#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts">ServiceNetworkingVpcServiceControlsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/service_networking_vpc_service_controls#timeouts ServiceNetworkingVpcServiceControls#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.putTimeouts"></a>

```java
public void putTimeouts(ServiceNetworkingVpcServiceControlsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts">ServiceNetworkingVpcServiceControlsTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceNetworkingVpcServiceControls resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.service_networking_vpc_service_controls.ServiceNetworkingVpcServiceControls;

ServiceNetworkingVpcServiceControls.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.service_networking_vpc_service_controls.ServiceNetworkingVpcServiceControls;

ServiceNetworkingVpcServiceControls.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.service_networking_vpc_service_controls.ServiceNetworkingVpcServiceControls;

ServiceNetworkingVpcServiceControls.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.service_networking_vpc_service_controls.ServiceNetworkingVpcServiceControls;

ServiceNetworkingVpcServiceControls.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ServiceNetworkingVpcServiceControls.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ServiceNetworkingVpcServiceControls resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ServiceNetworkingVpcServiceControls to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ServiceNetworkingVpcServiceControls that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/service_networking_vpc_service_controls#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ServiceNetworkingVpcServiceControls to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference">ServiceNetworkingVpcServiceControlsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts">ServiceNetworkingVpcServiceControlsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.timeouts"></a>

```java
public ServiceNetworkingVpcServiceControlsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference">ServiceNetworkingVpcServiceControlsTimeoutsOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts">ServiceNetworkingVpcServiceControlsTimeouts</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceNetworkingVpcServiceControlsConfig <a name="ServiceNetworkingVpcServiceControlsConfig" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.service_networking_vpc_service_controls.ServiceNetworkingVpcServiceControlsConfig;

ServiceNetworkingVpcServiceControlsConfig.builder()
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
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .network(java.lang.String)
    .service(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ServiceNetworkingVpcServiceControlsTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Desired VPC Service Controls state service producer VPC network, as described at the top of this page. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.network">network</a></code> | <code>java.lang.String</code> | The network that the consumer is using to connect with services. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.service">service</a></code> | <code>java.lang.String</code> | The service that is managing peering connectivity for a service producer's organization. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/service_networking_vpc_service_controls#id ServiceNetworkingVpcServiceControls#id}. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.project">project</a></code> | <code>java.lang.String</code> | The id of the Google Cloud project containing the consumer network. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts">ServiceNetworkingVpcServiceControlsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Desired VPC Service Controls state service producer VPC network, as described at the top of this page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/service_networking_vpc_service_controls#enabled ServiceNetworkingVpcServiceControls#enabled}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The network that the consumer is using to connect with services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/service_networking_vpc_service_controls#network ServiceNetworkingVpcServiceControls#network}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

The service that is managing peering connectivity for a service producer's organization.

For Google services that support this
functionality, this value is 'servicenetworking.googleapis.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/service_networking_vpc_service_controls#service ServiceNetworkingVpcServiceControls#service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/service_networking_vpc_service_controls#id ServiceNetworkingVpcServiceControls#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The id of the Google Cloud project containing the consumer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/service_networking_vpc_service_controls#project ServiceNetworkingVpcServiceControls#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.timeouts"></a>

```java
public ServiceNetworkingVpcServiceControlsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts">ServiceNetworkingVpcServiceControlsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/service_networking_vpc_service_controls#timeouts ServiceNetworkingVpcServiceControls#timeouts}

---

### ServiceNetworkingVpcServiceControlsTimeouts <a name="ServiceNetworkingVpcServiceControlsTimeouts" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.service_networking_vpc_service_controls.ServiceNetworkingVpcServiceControlsTimeouts;

ServiceNetworkingVpcServiceControlsTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/service_networking_vpc_service_controls#create ServiceNetworkingVpcServiceControls#create}. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/service_networking_vpc_service_controls#delete ServiceNetworkingVpcServiceControls#delete}. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/service_networking_vpc_service_controls#update ServiceNetworkingVpcServiceControls#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/service_networking_vpc_service_controls#create ServiceNetworkingVpcServiceControls#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/service_networking_vpc_service_controls#delete ServiceNetworkingVpcServiceControls#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/service_networking_vpc_service_controls#update ServiceNetworkingVpcServiceControls#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceNetworkingVpcServiceControlsTimeoutsOutputReference <a name="ServiceNetworkingVpcServiceControlsTimeoutsOutputReference" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.service_networking_vpc_service_controls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference;

new ServiceNetworkingVpcServiceControlsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts">ServiceNetworkingVpcServiceControlsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts">ServiceNetworkingVpcServiceControlsTimeouts</a>

---



