# `resourceManagerLien` Submodule <a name="`resourceManagerLien` Submodule" id="@cdktf/provider-google.resourceManagerLien"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceManagerLien <a name="ResourceManagerLien" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/resource_manager_lien google_resource_manager_lien}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.resource_manager_lien.ResourceManagerLien;

ResourceManagerLien.Builder.create(Construct scope, java.lang.String id)
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
    .origin(java.lang.String)
    .parent(java.lang.String)
    .reason(java.lang.String)
    .restrictions(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(ResourceManagerLienTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.Initializer.parameter.origin">origin</a></code> | <code>java.lang.String</code> | A stable, user-visible/meaningful string identifying the origin of the Lien, intended to be inspected programmatically. Maximum length of 200 characters. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | A reference to the resource this Lien is attached to. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.Initializer.parameter.reason">reason</a></code> | <code>java.lang.String</code> | Concise user-visible strings indicating why an action cannot be performed on a resource. Maximum length of 200 characters. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.Initializer.parameter.restrictions">restrictions</a></code> | <code>java.util.List<java.lang.String></code> | The types of operations which should be blocked as a result of this Lien. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/resource_manager_lien#id ResourceManagerLien#id}. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeouts">ResourceManagerLienTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.Initializer.parameter.origin"></a>

- *Type:* java.lang.String

A stable, user-visible/meaningful string identifying the origin of the Lien, intended to be inspected programmatically. Maximum length of 200 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/resource_manager_lien#origin ResourceManagerLien#origin}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

A reference to the resource this Lien is attached to.

The server will validate the parent against those for which Liens are supported.
Since a variety of objects can have Liens against them, you must provide the type
prefix (e.g. "projects/my-project-name").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/resource_manager_lien#parent ResourceManagerLien#parent}

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.Initializer.parameter.reason"></a>

- *Type:* java.lang.String

Concise user-visible strings indicating why an action cannot be performed on a resource. Maximum length of 200 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/resource_manager_lien#reason ResourceManagerLien#reason}

---

##### `restrictions`<sup>Required</sup> <a name="restrictions" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.Initializer.parameter.restrictions"></a>

- *Type:* java.util.List<java.lang.String>

The types of operations which should be blocked as a result of this Lien.

Each value should correspond to an IAM permission. The server will validate
the permissions against those for which Liens are supported.  An empty
list is meaningless and will be rejected.
e.g. ['resourcemanager.projects.delete']

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/resource_manager_lien#restrictions ResourceManagerLien#restrictions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/resource_manager_lien#id ResourceManagerLien#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeouts">ResourceManagerLienTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/resource_manager_lien#timeouts ResourceManagerLien#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.putTimeouts"></a>

```java
public void putTimeouts(ResourceManagerLienTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeouts">ResourceManagerLienTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ResourceManagerLien resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.resource_manager_lien.ResourceManagerLien;

ResourceManagerLien.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.resource_manager_lien.ResourceManagerLien;

ResourceManagerLien.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.resource_manager_lien.ResourceManagerLien;

ResourceManagerLien.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.resource_manager_lien.ResourceManagerLien;

ResourceManagerLien.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ResourceManagerLien.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ResourceManagerLien resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ResourceManagerLien to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ResourceManagerLien that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/resource_manager_lien#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ResourceManagerLien to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference">ResourceManagerLienTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.originInput">originInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.reasonInput">reasonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.restrictionsInput">restrictionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeouts">ResourceManagerLienTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.origin">origin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.reason">reason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.restrictions">restrictions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.timeouts"></a>

```java
public ResourceManagerLienTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference">ResourceManagerLienTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `originInput`<sup>Optional</sup> <a name="originInput" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.originInput"></a>

```java
public java.lang.String getOriginInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `reasonInput`<sup>Optional</sup> <a name="reasonInput" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.reasonInput"></a>

```java
public java.lang.String getReasonInput();
```

- *Type:* java.lang.String

---

##### `restrictionsInput`<sup>Optional</sup> <a name="restrictionsInput" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.restrictionsInput"></a>

```java
public java.util.List<java.lang.String> getRestrictionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeouts">ResourceManagerLienTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.origin"></a>

```java
public java.lang.String getOrigin();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

---

##### `restrictions`<sup>Required</sup> <a name="restrictions" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.restrictions"></a>

```java
public java.util.List<java.lang.String> getRestrictions();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLien.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceManagerLienConfig <a name="ResourceManagerLienConfig" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.resource_manager_lien.ResourceManagerLienConfig;

ResourceManagerLienConfig.builder()
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
    .origin(java.lang.String)
    .parent(java.lang.String)
    .reason(java.lang.String)
    .restrictions(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(ResourceManagerLienTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.origin">origin</a></code> | <code>java.lang.String</code> | A stable, user-visible/meaningful string identifying the origin of the Lien, intended to be inspected programmatically. Maximum length of 200 characters. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | A reference to the resource this Lien is attached to. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.reason">reason</a></code> | <code>java.lang.String</code> | Concise user-visible strings indicating why an action cannot be performed on a resource. Maximum length of 200 characters. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.restrictions">restrictions</a></code> | <code>java.util.List<java.lang.String></code> | The types of operations which should be blocked as a result of this Lien. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/resource_manager_lien#id ResourceManagerLien#id}. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeouts">ResourceManagerLienTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.origin"></a>

```java
public java.lang.String getOrigin();
```

- *Type:* java.lang.String

A stable, user-visible/meaningful string identifying the origin of the Lien, intended to be inspected programmatically. Maximum length of 200 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/resource_manager_lien#origin ResourceManagerLien#origin}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

A reference to the resource this Lien is attached to.

The server will validate the parent against those for which Liens are supported.
Since a variety of objects can have Liens against them, you must provide the type
prefix (e.g. "projects/my-project-name").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/resource_manager_lien#parent ResourceManagerLien#parent}

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

Concise user-visible strings indicating why an action cannot be performed on a resource. Maximum length of 200 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/resource_manager_lien#reason ResourceManagerLien#reason}

---

##### `restrictions`<sup>Required</sup> <a name="restrictions" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.restrictions"></a>

```java
public java.util.List<java.lang.String> getRestrictions();
```

- *Type:* java.util.List<java.lang.String>

The types of operations which should be blocked as a result of this Lien.

Each value should correspond to an IAM permission. The server will validate
the permissions against those for which Liens are supported.  An empty
list is meaningless and will be rejected.
e.g. ['resourcemanager.projects.delete']

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/resource_manager_lien#restrictions ResourceManagerLien#restrictions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/resource_manager_lien#id ResourceManagerLien#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienConfig.property.timeouts"></a>

```java
public ResourceManagerLienTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeouts">ResourceManagerLienTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/resource_manager_lien#timeouts ResourceManagerLien#timeouts}

---

### ResourceManagerLienTimeouts <a name="ResourceManagerLienTimeouts" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.resource_manager_lien.ResourceManagerLienTimeouts;

ResourceManagerLienTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/resource_manager_lien#create ResourceManagerLien#create}. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/resource_manager_lien#delete ResourceManagerLien#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/resource_manager_lien#create ResourceManagerLien#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/resource_manager_lien#delete ResourceManagerLien#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceManagerLienTimeoutsOutputReference <a name="ResourceManagerLienTimeoutsOutputReference" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.resource_manager_lien.ResourceManagerLienTimeoutsOutputReference;

new ResourceManagerLienTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeouts">ResourceManagerLienTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.resourceManagerLien.ResourceManagerLienTimeouts">ResourceManagerLienTimeouts</a>

---



