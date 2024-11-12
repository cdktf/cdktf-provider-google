# `apigeeSharedflow` Submodule <a name="`apigeeSharedflow` Submodule" id="@cdktf/provider-google.apigeeSharedflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeSharedflow <a name="ApigeeSharedflow" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/apigee_sharedflow google_apigee_sharedflow}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_sharedflow.ApigeeSharedflow;

ApigeeSharedflow.Builder.create(Construct scope, java.lang.String id)
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
    .configBundle(java.lang.String)
    .name(java.lang.String)
    .orgId(java.lang.String)
//  .detectMd5Hash(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ApigeeSharedflowTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.Initializer.parameter.configBundle">configBundle</a></code> | <code>java.lang.String</code> | Path to the config zip bundle. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The ID of the shared flow. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.Initializer.parameter.orgId">orgId</a></code> | <code>java.lang.String</code> | The Apigee Organization name associated with the Apigee instance. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.Initializer.parameter.detectMd5Hash">detectMd5Hash</a></code> | <code>java.lang.String</code> | A hash of local config bundle in string, user needs to use a Terraform Hash function of their choice. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/apigee_sharedflow#id ApigeeSharedflow#id}. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeouts">ApigeeSharedflowTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `configBundle`<sup>Required</sup> <a name="configBundle" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.Initializer.parameter.configBundle"></a>

- *Type:* java.lang.String

Path to the config zip bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/apigee_sharedflow#config_bundle ApigeeSharedflow#config_bundle}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The ID of the shared flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/apigee_sharedflow#name ApigeeSharedflow#name}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.Initializer.parameter.orgId"></a>

- *Type:* java.lang.String

The Apigee Organization name associated with the Apigee instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/apigee_sharedflow#org_id ApigeeSharedflow#org_id}

---

##### `detectMd5Hash`<sup>Optional</sup> <a name="detectMd5Hash" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.Initializer.parameter.detectMd5Hash"></a>

- *Type:* java.lang.String

A hash of local config bundle in string, user needs to use a Terraform Hash function of their choice.

A change in hash will trigger an update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/apigee_sharedflow#detect_md5hash ApigeeSharedflow#detect_md5hash}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/apigee_sharedflow#id ApigeeSharedflow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeouts">ApigeeSharedflowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/apigee_sharedflow#timeouts ApigeeSharedflow#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.resetDetectMd5Hash">resetDetectMd5Hash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.putTimeouts"></a>

```java
public void putTimeouts(ApigeeSharedflowTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeouts">ApigeeSharedflowTimeouts</a>

---

##### `resetDetectMd5Hash` <a name="resetDetectMd5Hash" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.resetDetectMd5Hash"></a>

```java
public void resetDetectMd5Hash()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApigeeSharedflow resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_sharedflow.ApigeeSharedflow;

ApigeeSharedflow.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_sharedflow.ApigeeSharedflow;

ApigeeSharedflow.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_sharedflow.ApigeeSharedflow;

ApigeeSharedflow.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_sharedflow.ApigeeSharedflow;

ApigeeSharedflow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApigeeSharedflow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApigeeSharedflow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApigeeSharedflow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApigeeSharedflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/apigee_sharedflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeSharedflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.latestRevisionId">latestRevisionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.md5Hash">md5Hash</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.metaData">metaData</a></code> | <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList">ApigeeSharedflowMetaDataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.revision">revision</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference">ApigeeSharedflowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.configBundleInput">configBundleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.detectMd5HashInput">detectMd5HashInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.orgIdInput">orgIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeouts">ApigeeSharedflowTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.configBundle">configBundle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.detectMd5Hash">detectMd5Hash</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.orgId">orgId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `latestRevisionId`<sup>Required</sup> <a name="latestRevisionId" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.latestRevisionId"></a>

```java
public java.lang.String getLatestRevisionId();
```

- *Type:* java.lang.String

---

##### `md5Hash`<sup>Required</sup> <a name="md5Hash" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.md5Hash"></a>

```java
public java.lang.String getMd5Hash();
```

- *Type:* java.lang.String

---

##### `metaData`<sup>Required</sup> <a name="metaData" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.metaData"></a>

```java
public ApigeeSharedflowMetaDataList getMetaData();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList">ApigeeSharedflowMetaDataList</a>

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.revision"></a>

```java
public java.util.List<java.lang.String> getRevision();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.timeouts"></a>

```java
public ApigeeSharedflowTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference">ApigeeSharedflowTimeoutsOutputReference</a>

---

##### `configBundleInput`<sup>Optional</sup> <a name="configBundleInput" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.configBundleInput"></a>

```java
public java.lang.String getConfigBundleInput();
```

- *Type:* java.lang.String

---

##### `detectMd5HashInput`<sup>Optional</sup> <a name="detectMd5HashInput" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.detectMd5HashInput"></a>

```java
public java.lang.String getDetectMd5HashInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.orgIdInput"></a>

```java
public java.lang.String getOrgIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeouts">ApigeeSharedflowTimeouts</a>

---

##### `configBundle`<sup>Required</sup> <a name="configBundle" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.configBundle"></a>

```java
public java.lang.String getConfigBundle();
```

- *Type:* java.lang.String

---

##### `detectMd5Hash`<sup>Required</sup> <a name="detectMd5Hash" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.detectMd5Hash"></a>

```java
public java.lang.String getDetectMd5Hash();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeSharedflowConfig <a name="ApigeeSharedflowConfig" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_sharedflow.ApigeeSharedflowConfig;

ApigeeSharedflowConfig.builder()
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
    .configBundle(java.lang.String)
    .name(java.lang.String)
    .orgId(java.lang.String)
//  .detectMd5Hash(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ApigeeSharedflowTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.configBundle">configBundle</a></code> | <code>java.lang.String</code> | Path to the config zip bundle. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.name">name</a></code> | <code>java.lang.String</code> | The ID of the shared flow. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.orgId">orgId</a></code> | <code>java.lang.String</code> | The Apigee Organization name associated with the Apigee instance. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.detectMd5Hash">detectMd5Hash</a></code> | <code>java.lang.String</code> | A hash of local config bundle in string, user needs to use a Terraform Hash function of their choice. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/apigee_sharedflow#id ApigeeSharedflow#id}. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeouts">ApigeeSharedflowTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `configBundle`<sup>Required</sup> <a name="configBundle" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.configBundle"></a>

```java
public java.lang.String getConfigBundle();
```

- *Type:* java.lang.String

Path to the config zip bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/apigee_sharedflow#config_bundle ApigeeSharedflow#config_bundle}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The ID of the shared flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/apigee_sharedflow#name ApigeeSharedflow#name}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

The Apigee Organization name associated with the Apigee instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/apigee_sharedflow#org_id ApigeeSharedflow#org_id}

---

##### `detectMd5Hash`<sup>Optional</sup> <a name="detectMd5Hash" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.detectMd5Hash"></a>

```java
public java.lang.String getDetectMd5Hash();
```

- *Type:* java.lang.String

A hash of local config bundle in string, user needs to use a Terraform Hash function of their choice.

A change in hash will trigger an update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/apigee_sharedflow#detect_md5hash ApigeeSharedflow#detect_md5hash}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/apigee_sharedflow#id ApigeeSharedflow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.timeouts"></a>

```java
public ApigeeSharedflowTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeouts">ApigeeSharedflowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/apigee_sharedflow#timeouts ApigeeSharedflow#timeouts}

---

### ApigeeSharedflowMetaData <a name="ApigeeSharedflowMetaData" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaData.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_sharedflow.ApigeeSharedflowMetaData;

ApigeeSharedflowMetaData.builder()
    .build();
```


### ApigeeSharedflowTimeouts <a name="ApigeeSharedflowTimeouts" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_sharedflow.ApigeeSharedflowTimeouts;

ApigeeSharedflowTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/apigee_sharedflow#create ApigeeSharedflow#create}. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/apigee_sharedflow#delete ApigeeSharedflow#delete}. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/apigee_sharedflow#update ApigeeSharedflow#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/apigee_sharedflow#create ApigeeSharedflow#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/apigee_sharedflow#delete ApigeeSharedflow#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/apigee_sharedflow#update ApigeeSharedflow#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeSharedflowMetaDataList <a name="ApigeeSharedflowMetaDataList" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_sharedflow.ApigeeSharedflowMetaDataList;

new ApigeeSharedflowMetaDataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.get"></a>

```java
public ApigeeSharedflowMetaDataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ApigeeSharedflowMetaDataOutputReference <a name="ApigeeSharedflowMetaDataOutputReference" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_sharedflow.ApigeeSharedflowMetaDataOutputReference;

new ApigeeSharedflowMetaDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.property.lastModifiedAt">lastModifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.property.subType">subType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaData">ApigeeSharedflowMetaData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `lastModifiedAt`<sup>Required</sup> <a name="lastModifiedAt" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.property.lastModifiedAt"></a>

```java
public java.lang.String getLastModifiedAt();
```

- *Type:* java.lang.String

---

##### `subType`<sup>Required</sup> <a name="subType" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.property.subType"></a>

```java
public java.lang.String getSubType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.property.internalValue"></a>

```java
public ApigeeSharedflowMetaData getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaData">ApigeeSharedflowMetaData</a>

---


### ApigeeSharedflowTimeoutsOutputReference <a name="ApigeeSharedflowTimeoutsOutputReference" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_sharedflow.ApigeeSharedflowTimeoutsOutputReference;

new ApigeeSharedflowTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeouts">ApigeeSharedflowTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeouts">ApigeeSharedflowTimeouts</a>

---



