# `apigeeControlPlaneAccess` Submodule <a name="`apigeeControlPlaneAccess` Submodule" id="@cdktf/provider-google.apigeeControlPlaneAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeControlPlaneAccess <a name="ApigeeControlPlaneAccess" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apigee_control_plane_access google_apigee_control_plane_access}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_control_plane_access.ApigeeControlPlaneAccess;

ApigeeControlPlaneAccess.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .analyticsPublisherIdentities(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .synchronizerIdentities(java.util.List<java.lang.String>)
//  .timeouts(ApigeeControlPlaneAccessTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the Apigee organization. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer.parameter.analyticsPublisherIdentities">analyticsPublisherIdentities</a></code> | <code>java.util.List<java.lang.String></code> | Array of service accounts authorized to publish analytics data to the control plane, each specified using the following format: 'serviceAccount:service-account-name'. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apigee_control_plane_access#id ApigeeControlPlaneAccess#id}. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer.parameter.synchronizerIdentities">synchronizerIdentities</a></code> | <code>java.util.List<java.lang.String></code> | Array of service accounts to grant access to control plane resources (for the Synchronizer component), each specified using the following format: 'serviceAccount:service-account-name'. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeouts">ApigeeControlPlaneAccessTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the Apigee organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apigee_control_plane_access#name ApigeeControlPlaneAccess#name}

---

##### `analyticsPublisherIdentities`<sup>Optional</sup> <a name="analyticsPublisherIdentities" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer.parameter.analyticsPublisherIdentities"></a>

- *Type:* java.util.List<java.lang.String>

Array of service accounts authorized to publish analytics data to the control plane, each specified using the following format: 'serviceAccount:service-account-name'.

The 'service-account-name' is formatted like an email address. For example: serviceAccount@my_project_id.iam.gserviceaccount.com

You might specify multiple service accounts, for example, if you have multiple environments and wish to assign a unique service account to each one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apigee_control_plane_access#analytics_publisher_identities ApigeeControlPlaneAccess#analytics_publisher_identities}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apigee_control_plane_access#id ApigeeControlPlaneAccess#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `synchronizerIdentities`<sup>Optional</sup> <a name="synchronizerIdentities" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer.parameter.synchronizerIdentities"></a>

- *Type:* java.util.List<java.lang.String>

Array of service accounts to grant access to control plane resources (for the Synchronizer component), each specified using the following format: 'serviceAccount:service-account-name'.

The 'service-account-name' is formatted like an email address. For example: serviceAccount@my_project_id.iam.gserviceaccount.com

You might specify multiple service accounts, for example, if you have multiple environments and wish to assign a unique service account to each one.

The service accounts must have **Apigee Synchronizer Manager** role. See also [Create service accounts](https://cloud.google.com/apigee/docs/hybrid/v1.8/sa-about#create-the-service-accounts).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apigee_control_plane_access#synchronizer_identities ApigeeControlPlaneAccess#synchronizer_identities}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeouts">ApigeeControlPlaneAccessTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apigee_control_plane_access#timeouts ApigeeControlPlaneAccess#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.resetAnalyticsPublisherIdentities">resetAnalyticsPublisherIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.resetSynchronizerIdentities">resetSynchronizerIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.putTimeouts"></a>

```java
public void putTimeouts(ApigeeControlPlaneAccessTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeouts">ApigeeControlPlaneAccessTimeouts</a>

---

##### `resetAnalyticsPublisherIdentities` <a name="resetAnalyticsPublisherIdentities" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.resetAnalyticsPublisherIdentities"></a>

```java
public void resetAnalyticsPublisherIdentities()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.resetId"></a>

```java
public void resetId()
```

##### `resetSynchronizerIdentities` <a name="resetSynchronizerIdentities" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.resetSynchronizerIdentities"></a>

```java
public void resetSynchronizerIdentities()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApigeeControlPlaneAccess resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_control_plane_access.ApigeeControlPlaneAccess;

ApigeeControlPlaneAccess.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_control_plane_access.ApigeeControlPlaneAccess;

ApigeeControlPlaneAccess.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_control_plane_access.ApigeeControlPlaneAccess;

ApigeeControlPlaneAccess.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_control_plane_access.ApigeeControlPlaneAccess;

ApigeeControlPlaneAccess.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApigeeControlPlaneAccess.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApigeeControlPlaneAccess resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApigeeControlPlaneAccess to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApigeeControlPlaneAccess that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apigee_control_plane_access#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeControlPlaneAccess to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference">ApigeeControlPlaneAccessTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.analyticsPublisherIdentitiesInput">analyticsPublisherIdentitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.synchronizerIdentitiesInput">synchronizerIdentitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeouts">ApigeeControlPlaneAccessTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.analyticsPublisherIdentities">analyticsPublisherIdentities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.synchronizerIdentities">synchronizerIdentities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.timeouts"></a>

```java
public ApigeeControlPlaneAccessTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference">ApigeeControlPlaneAccessTimeoutsOutputReference</a>

---

##### `analyticsPublisherIdentitiesInput`<sup>Optional</sup> <a name="analyticsPublisherIdentitiesInput" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.analyticsPublisherIdentitiesInput"></a>

```java
public java.util.List<java.lang.String> getAnalyticsPublisherIdentitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `synchronizerIdentitiesInput`<sup>Optional</sup> <a name="synchronizerIdentitiesInput" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.synchronizerIdentitiesInput"></a>

```java
public java.util.List<java.lang.String> getSynchronizerIdentitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeouts">ApigeeControlPlaneAccessTimeouts</a>

---

##### `analyticsPublisherIdentities`<sup>Required</sup> <a name="analyticsPublisherIdentities" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.analyticsPublisherIdentities"></a>

```java
public java.util.List<java.lang.String> getAnalyticsPublisherIdentities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `synchronizerIdentities`<sup>Required</sup> <a name="synchronizerIdentities" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.synchronizerIdentities"></a>

```java
public java.util.List<java.lang.String> getSynchronizerIdentities();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeControlPlaneAccessConfig <a name="ApigeeControlPlaneAccessConfig" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_control_plane_access.ApigeeControlPlaneAccessConfig;

ApigeeControlPlaneAccessConfig.builder()
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
    .name(java.lang.String)
//  .analyticsPublisherIdentities(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .synchronizerIdentities(java.util.List<java.lang.String>)
//  .timeouts(ApigeeControlPlaneAccessTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the Apigee organization. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.analyticsPublisherIdentities">analyticsPublisherIdentities</a></code> | <code>java.util.List<java.lang.String></code> | Array of service accounts authorized to publish analytics data to the control plane, each specified using the following format: 'serviceAccount:service-account-name'. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apigee_control_plane_access#id ApigeeControlPlaneAccess#id}. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.synchronizerIdentities">synchronizerIdentities</a></code> | <code>java.util.List<java.lang.String></code> | Array of service accounts to grant access to control plane resources (for the Synchronizer component), each specified using the following format: 'serviceAccount:service-account-name'. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeouts">ApigeeControlPlaneAccessTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the Apigee organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apigee_control_plane_access#name ApigeeControlPlaneAccess#name}

---

##### `analyticsPublisherIdentities`<sup>Optional</sup> <a name="analyticsPublisherIdentities" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.analyticsPublisherIdentities"></a>

```java
public java.util.List<java.lang.String> getAnalyticsPublisherIdentities();
```

- *Type:* java.util.List<java.lang.String>

Array of service accounts authorized to publish analytics data to the control plane, each specified using the following format: 'serviceAccount:service-account-name'.

The 'service-account-name' is formatted like an email address. For example: serviceAccount@my_project_id.iam.gserviceaccount.com

You might specify multiple service accounts, for example, if you have multiple environments and wish to assign a unique service account to each one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apigee_control_plane_access#analytics_publisher_identities ApigeeControlPlaneAccess#analytics_publisher_identities}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apigee_control_plane_access#id ApigeeControlPlaneAccess#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `synchronizerIdentities`<sup>Optional</sup> <a name="synchronizerIdentities" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.synchronizerIdentities"></a>

```java
public java.util.List<java.lang.String> getSynchronizerIdentities();
```

- *Type:* java.util.List<java.lang.String>

Array of service accounts to grant access to control plane resources (for the Synchronizer component), each specified using the following format: 'serviceAccount:service-account-name'.

The 'service-account-name' is formatted like an email address. For example: serviceAccount@my_project_id.iam.gserviceaccount.com

You might specify multiple service accounts, for example, if you have multiple environments and wish to assign a unique service account to each one.

The service accounts must have **Apigee Synchronizer Manager** role. See also [Create service accounts](https://cloud.google.com/apigee/docs/hybrid/v1.8/sa-about#create-the-service-accounts).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apigee_control_plane_access#synchronizer_identities ApigeeControlPlaneAccess#synchronizer_identities}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.timeouts"></a>

```java
public ApigeeControlPlaneAccessTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeouts">ApigeeControlPlaneAccessTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apigee_control_plane_access#timeouts ApigeeControlPlaneAccess#timeouts}

---

### ApigeeControlPlaneAccessTimeouts <a name="ApigeeControlPlaneAccessTimeouts" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_control_plane_access.ApigeeControlPlaneAccessTimeouts;

ApigeeControlPlaneAccessTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apigee_control_plane_access#create ApigeeControlPlaneAccess#create}. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apigee_control_plane_access#delete ApigeeControlPlaneAccess#delete}. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apigee_control_plane_access#update ApigeeControlPlaneAccess#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apigee_control_plane_access#create ApigeeControlPlaneAccess#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apigee_control_plane_access#delete ApigeeControlPlaneAccess#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/apigee_control_plane_access#update ApigeeControlPlaneAccess#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeControlPlaneAccessTimeoutsOutputReference <a name="ApigeeControlPlaneAccessTimeoutsOutputReference" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_control_plane_access.ApigeeControlPlaneAccessTimeoutsOutputReference;

new ApigeeControlPlaneAccessTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeouts">ApigeeControlPlaneAccessTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeouts">ApigeeControlPlaneAccessTimeouts</a>

---



