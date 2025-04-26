# `firebaseDataConnectService` Submodule <a name="`firebaseDataConnectService` Submodule" id="@cdktf/provider-google.firebaseDataConnectService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirebaseDataConnectService <a name="FirebaseDataConnectService" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_data_connect_service google_firebase_data_connect_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.firebase_data_connect_service.FirebaseDataConnectService;

FirebaseDataConnectService.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .serviceId(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(FirebaseDataConnectServiceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The region in which the service resides, e.g. "us-central1" or "asia-east1". |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.serviceId">serviceId</a></code> | <code>java.lang.String</code> | Required. The ID to use for the service, which will become the final component of the service's resource name. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Stores small amounts of arbitrary data. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | The deletion policy for the database. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Optional. Mutable human-readable name. 63 character limit. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_data_connect_service#id FirebaseDataConnectService#id}. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_data_connect_service#project FirebaseDataConnectService#project}. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeouts">FirebaseDataConnectServiceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The region in which the service resides, e.g. "us-central1" or "asia-east1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_data_connect_service#location FirebaseDataConnectService#location}

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.serviceId"></a>

- *Type:* java.lang.String

Required. The ID to use for the service, which will become the final component of the service's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_data_connect_service#service_id FirebaseDataConnectService#service_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Stores small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_data_connect_service#annotations FirebaseDataConnectService#annotations}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

The deletion policy for the database.

Setting the field to FORCE allows the
Service to be deleted even if a Schema or Connector is present. By default,
the Service deletion will only succeed when no Schema or Connectors are
present.
Possible values: DEFAULT, FORCE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_data_connect_service#deletion_policy FirebaseDataConnectService#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Optional. Mutable human-readable name. 63 character limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_data_connect_service#display_name FirebaseDataConnectService#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_data_connect_service#id FirebaseDataConnectService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_data_connect_service#labels FirebaseDataConnectService#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_data_connect_service#project FirebaseDataConnectService#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeouts">FirebaseDataConnectServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_data_connect_service#timeouts FirebaseDataConnectService#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.putTimeouts"></a>

```java
public void putTimeouts(FirebaseDataConnectServiceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeouts">FirebaseDataConnectServiceTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FirebaseDataConnectService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.firebase_data_connect_service.FirebaseDataConnectService;

FirebaseDataConnectService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.firebase_data_connect_service.FirebaseDataConnectService;

FirebaseDataConnectService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.firebase_data_connect_service.FirebaseDataConnectService;

FirebaseDataConnectService.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.firebase_data_connect_service.FirebaseDataConnectService;

FirebaseDataConnectService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FirebaseDataConnectService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a FirebaseDataConnectService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FirebaseDataConnectService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FirebaseDataConnectService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_data_connect_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the FirebaseDataConnectService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.reconciling">reconciling</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference">FirebaseDataConnectServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.serviceIdInput">serviceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeouts">FirebaseDataConnectServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.reconciling"></a>

```java
public IResolvable getReconciling();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.timeouts"></a>

```java
public FirebaseDataConnectServiceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference">FirebaseDataConnectServiceTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `serviceIdInput`<sup>Optional</sup> <a name="serviceIdInput" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.serviceIdInput"></a>

```java
public java.lang.String getServiceIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeouts">FirebaseDataConnectServiceTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FirebaseDataConnectServiceConfig <a name="FirebaseDataConnectServiceConfig" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.firebase_data_connect_service.FirebaseDataConnectServiceConfig;

FirebaseDataConnectServiceConfig.builder()
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
    .location(java.lang.String)
    .serviceId(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(FirebaseDataConnectServiceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.location">location</a></code> | <code>java.lang.String</code> | The region in which the service resides, e.g. "us-central1" or "asia-east1". |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | Required. The ID to use for the service, which will become the final component of the service's resource name. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Stores small amounts of arbitrary data. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | The deletion policy for the database. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Optional. Mutable human-readable name. 63 character limit. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_data_connect_service#id FirebaseDataConnectService#id}. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_data_connect_service#project FirebaseDataConnectService#project}. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeouts">FirebaseDataConnectServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The region in which the service resides, e.g. "us-central1" or "asia-east1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_data_connect_service#location FirebaseDataConnectService#location}

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

Required. The ID to use for the service, which will become the final component of the service's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_data_connect_service#service_id FirebaseDataConnectService#service_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Stores small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_data_connect_service#annotations FirebaseDataConnectService#annotations}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

The deletion policy for the database.

Setting the field to FORCE allows the
Service to be deleted even if a Schema or Connector is present. By default,
the Service deletion will only succeed when no Schema or Connectors are
present.
Possible values: DEFAULT, FORCE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_data_connect_service#deletion_policy FirebaseDataConnectService#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Optional. Mutable human-readable name. 63 character limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_data_connect_service#display_name FirebaseDataConnectService#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_data_connect_service#id FirebaseDataConnectService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_data_connect_service#labels FirebaseDataConnectService#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_data_connect_service#project FirebaseDataConnectService#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceConfig.property.timeouts"></a>

```java
public FirebaseDataConnectServiceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeouts">FirebaseDataConnectServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_data_connect_service#timeouts FirebaseDataConnectService#timeouts}

---

### FirebaseDataConnectServiceTimeouts <a name="FirebaseDataConnectServiceTimeouts" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.firebase_data_connect_service.FirebaseDataConnectServiceTimeouts;

FirebaseDataConnectServiceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_data_connect_service#create FirebaseDataConnectService#create}. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_data_connect_service#delete FirebaseDataConnectService#delete}. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_data_connect_service#update FirebaseDataConnectService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_data_connect_service#create FirebaseDataConnectService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_data_connect_service#delete FirebaseDataConnectService#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_data_connect_service#update FirebaseDataConnectService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirebaseDataConnectServiceTimeoutsOutputReference <a name="FirebaseDataConnectServiceTimeoutsOutputReference" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.firebase_data_connect_service.FirebaseDataConnectServiceTimeoutsOutputReference;

new FirebaseDataConnectServiceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeouts">FirebaseDataConnectServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.firebaseDataConnectService.FirebaseDataConnectServiceTimeouts">FirebaseDataConnectServiceTimeouts</a>

---



