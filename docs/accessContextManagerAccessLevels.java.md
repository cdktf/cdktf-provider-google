# `google_access_context_manager_access_levels`

Refer to the Terraform Registory for docs: [`google_access_context_manager_access_levels`](https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels).

# `accessContextManagerAccessLevels` Submodule <a name="`accessContextManagerAccessLevels` Submodule" id="@cdktf/provider-google.accessContextManagerAccessLevels"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessContextManagerAccessLevels <a name="AccessContextManagerAccessLevels" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels google_access_context_manager_access_levels}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_levels.AccessContextManagerAccessLevels;

AccessContextManagerAccessLevels.Builder.create(Construct scope, java.lang.String id)
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
    .parent(java.lang.String)
//  .accessLevels(IResolvable)
//  .accessLevels(java.util.List<AccessContextManagerAccessLevelsAccessLevels>)
//  .id(java.lang.String)
//  .timeouts(AccessContextManagerAccessLevelsTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The AccessPolicy this AccessLevel lives in. Format: accessPolicies/{policy_id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.Initializer.parameter.accessLevels">accessLevels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevels">AccessContextManagerAccessLevelsAccessLevels</a>></code> | access_levels block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#id AccessContextManagerAccessLevels#id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeouts">AccessContextManagerAccessLevelsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The AccessPolicy this AccessLevel lives in. Format: accessPolicies/{policy_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#parent AccessContextManagerAccessLevels#parent}

---

##### `accessLevels`<sup>Optional</sup> <a name="accessLevels" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.Initializer.parameter.accessLevels"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevels">AccessContextManagerAccessLevelsAccessLevels</a>>

access_levels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#access_levels AccessContextManagerAccessLevels#access_levels}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#id AccessContextManagerAccessLevels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeouts">AccessContextManagerAccessLevelsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#timeouts AccessContextManagerAccessLevels#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.putAccessLevels">putAccessLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.resetAccessLevels">resetAccessLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAccessLevels` <a name="putAccessLevels" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.putAccessLevels"></a>

```java
public void putAccessLevels(IResolvable OR java.util.List<AccessContextManagerAccessLevelsAccessLevels> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.putAccessLevels.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevels">AccessContextManagerAccessLevelsAccessLevels</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.putTimeouts"></a>

```java
public void putTimeouts(AccessContextManagerAccessLevelsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeouts">AccessContextManagerAccessLevelsTimeouts</a>

---

##### `resetAccessLevels` <a name="resetAccessLevels" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.resetAccessLevels"></a>

```java
public void resetAccessLevels()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_levels.AccessContextManagerAccessLevels;

AccessContextManagerAccessLevels.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_levels.AccessContextManagerAccessLevels;

AccessContextManagerAccessLevels.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_levels.AccessContextManagerAccessLevels;

AccessContextManagerAccessLevels.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.accessLevels">accessLevels</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList">AccessContextManagerAccessLevelsAccessLevelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference">AccessContextManagerAccessLevelsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.accessLevelsInput">accessLevelsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevels">AccessContextManagerAccessLevelsAccessLevels</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeouts">AccessContextManagerAccessLevelsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessLevels`<sup>Required</sup> <a name="accessLevels" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.accessLevels"></a>

```java
public AccessContextManagerAccessLevelsAccessLevelsList getAccessLevels();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList">AccessContextManagerAccessLevelsAccessLevelsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.timeouts"></a>

```java
public AccessContextManagerAccessLevelsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference">AccessContextManagerAccessLevelsTimeoutsOutputReference</a>

---

##### `accessLevelsInput`<sup>Optional</sup> <a name="accessLevelsInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.accessLevelsInput"></a>

```java
public java.lang.Object getAccessLevelsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevels">AccessContextManagerAccessLevelsAccessLevels</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeouts">AccessContextManagerAccessLevelsTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AccessContextManagerAccessLevelsAccessLevels <a name="AccessContextManagerAccessLevelsAccessLevels" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevels.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_levels.AccessContextManagerAccessLevelsAccessLevels;

AccessContextManagerAccessLevelsAccessLevels.builder()
    .name(java.lang.String)
    .title(java.lang.String)
//  .basic(AccessContextManagerAccessLevelsAccessLevelsBasic)
//  .custom(AccessContextManagerAccessLevelsAccessLevelsCustom)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevels.property.name">name</a></code> | <code>java.lang.String</code> | Resource name for the Access Level. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevels.property.title">title</a></code> | <code>java.lang.String</code> | Human readable title. Must be unique within the Policy. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevels.property.basic">basic</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasic">AccessContextManagerAccessLevelsAccessLevelsBasic</a></code> | basic block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevels.property.custom">custom</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustom">AccessContextManagerAccessLevelsAccessLevelsCustom</a></code> | custom block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevels.property.description">description</a></code> | <code>java.lang.String</code> | Description of the AccessLevel and its use. Does not affect behavior. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevels.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Resource name for the Access Level.

The short_name component must begin
with a letter and only include alphanumeric and '_'.
Format: accessPolicies/{policy_id}/accessLevels/{short_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#name AccessContextManagerAccessLevels#name}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevels.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Human readable title. Must be unique within the Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#title AccessContextManagerAccessLevels#title}

---

##### `basic`<sup>Optional</sup> <a name="basic" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevels.property.basic"></a>

```java
public AccessContextManagerAccessLevelsAccessLevelsBasic getBasic();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasic">AccessContextManagerAccessLevelsAccessLevelsBasic</a>

basic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#basic AccessContextManagerAccessLevels#basic}

---

##### `custom`<sup>Optional</sup> <a name="custom" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevels.property.custom"></a>

```java
public AccessContextManagerAccessLevelsAccessLevelsCustom getCustom();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustom">AccessContextManagerAccessLevelsAccessLevelsCustom</a>

custom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#custom AccessContextManagerAccessLevels#custom}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevels.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the AccessLevel and its use. Does not affect behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#description AccessContextManagerAccessLevels#description}

---

### AccessContextManagerAccessLevelsAccessLevelsBasic <a name="AccessContextManagerAccessLevelsAccessLevelsBasic" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasic.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_levels.AccessContextManagerAccessLevelsAccessLevelsBasic;

AccessContextManagerAccessLevelsAccessLevelsBasic.builder()
    .conditions(IResolvable)
    .conditions(java.util.List<AccessContextManagerAccessLevelsAccessLevelsBasicConditions>)
//  .combiningFunction(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasic.property.conditions">conditions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditions">AccessContextManagerAccessLevelsAccessLevelsBasicConditions</a>></code> | conditions block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasic.property.combiningFunction">combiningFunction</a></code> | <code>java.lang.String</code> | How the conditions list should be combined to determine if a request is granted this AccessLevel. |

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasic.property.conditions"></a>

```java
public java.lang.Object getConditions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditions">AccessContextManagerAccessLevelsAccessLevelsBasicConditions</a>>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#conditions AccessContextManagerAccessLevels#conditions}

---

##### `combiningFunction`<sup>Optional</sup> <a name="combiningFunction" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasic.property.combiningFunction"></a>

```java
public java.lang.String getCombiningFunction();
```

- *Type:* java.lang.String

How the conditions list should be combined to determine if a request is granted this AccessLevel.

If AND is used, each Condition in
conditions must be satisfied for the AccessLevel to be applied. If
OR is used, at least one Condition in conditions must be satisfied
for the AccessLevel to be applied. Default value: "AND" Possible values: ["AND", "OR"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#combining_function AccessContextManagerAccessLevels#combining_function}

---

### AccessContextManagerAccessLevelsAccessLevelsBasicConditions <a name="AccessContextManagerAccessLevelsAccessLevelsBasicConditions" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_levels.AccessContextManagerAccessLevelsAccessLevelsBasicConditions;

AccessContextManagerAccessLevelsAccessLevelsBasicConditions.builder()
//  .devicePolicy(AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy)
//  .ipSubnetworks(java.util.List<java.lang.String>)
//  .members(java.util.List<java.lang.String>)
//  .negate(java.lang.Boolean)
//  .negate(IResolvable)
//  .regions(java.util.List<java.lang.String>)
//  .requiredAccessLevels(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.devicePolicy">devicePolicy</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy</a></code> | device_policy block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.ipSubnetworks">ipSubnetworks</a></code> | <code>java.util.List<java.lang.String></code> | A list of CIDR block IP subnetwork specification. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | An allowed list of members (users, service accounts). Using groups is not supported yet. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.negate">negate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to negate the Condition. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | The request must originate from one of the provided countries/regions. Format: A valid ISO 3166-1 alpha-2 code. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.requiredAccessLevels">requiredAccessLevels</a></code> | <code>java.util.List<java.lang.String></code> | A list of other access levels defined in the same Policy, referenced by resource name. |

---

##### `devicePolicy`<sup>Optional</sup> <a name="devicePolicy" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.devicePolicy"></a>

```java
public AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy getDevicePolicy();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy</a>

device_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#device_policy AccessContextManagerAccessLevels#device_policy}

---

##### `ipSubnetworks`<sup>Optional</sup> <a name="ipSubnetworks" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.ipSubnetworks"></a>

```java
public java.util.List<java.lang.String> getIpSubnetworks();
```

- *Type:* java.util.List<java.lang.String>

A list of CIDR block IP subnetwork specification.

May be IPv4
or IPv6.
Note that for a CIDR IP address block, the specified IP address
portion must be properly truncated (i.e. all the host bits must
be zero) or the input is considered malformed. For example,
"192.0.2.0/24" is accepted but "192.0.2.1/24" is not. Similarly,
for IPv6, "2001:db8::/32" is accepted whereas "2001:db8::1/32"
is not. The originating IP of a request must be in one of the
listed subnets in order for this Condition to be true.
If empty, all IP addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#ip_subnetworks AccessContextManagerAccessLevels#ip_subnetworks}

---

##### `members`<sup>Optional</sup> <a name="members" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

An allowed list of members (users, service accounts). Using groups is not supported yet.

The signed-in user originating the request must be a part of one
of the provided members. If not specified, a request may come
from any user (logged in/not logged in, not present in any
groups, etc.).
Formats: 'user:{emailid}', 'serviceAccount:{emailid}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#members AccessContextManagerAccessLevels#members}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.negate"></a>

```java
public java.lang.Object getNegate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to negate the Condition.

If true, the Condition becomes
a NAND over its non-empty fields, each field must be false for
the Condition overall to be satisfied. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#negate AccessContextManagerAccessLevels#negate}

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

The request must originate from one of the provided countries/regions. Format: A valid ISO 3166-1 alpha-2 code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#regions AccessContextManagerAccessLevels#regions}

---

##### `requiredAccessLevels`<sup>Optional</sup> <a name="requiredAccessLevels" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.requiredAccessLevels"></a>

```java
public java.util.List<java.lang.String> getRequiredAccessLevels();
```

- *Type:* java.util.List<java.lang.String>

A list of other access levels defined in the same Policy, referenced by resource name.

Referencing an AccessLevel which
does not exist is an error. All access levels listed must be
granted for the Condition to be true.
Format: accessPolicies/{policy_id}/accessLevels/{short_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#required_access_levels AccessContextManagerAccessLevels#required_access_levels}

---

### AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy <a name="AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_levels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy;

AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.builder()
//  .allowedDeviceManagementLevels(java.util.List<java.lang.String>)
//  .allowedEncryptionStatuses(java.util.List<java.lang.String>)
//  .osConstraints(IResolvable)
//  .osConstraints(java.util.List<AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints>)
//  .requireAdminApproval(java.lang.Boolean)
//  .requireAdminApproval(IResolvable)
//  .requireCorpOwned(java.lang.Boolean)
//  .requireCorpOwned(IResolvable)
//  .requireScreenLock(java.lang.Boolean)
//  .requireScreenLock(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.allowedDeviceManagementLevels">allowedDeviceManagementLevels</a></code> | <code>java.util.List<java.lang.String></code> | A list of allowed device management levels. An empty list allows all management levels. Possible values: ["MANAGEMENT_UNSPECIFIED", "NONE", "BASIC", "COMPLETE"]. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.allowedEncryptionStatuses">allowedEncryptionStatuses</a></code> | <code>java.util.List<java.lang.String></code> | A list of allowed encryptions statuses. An empty list allows all statuses. Possible values: ["ENCRYPTION_UNSPECIFIED", "ENCRYPTION_UNSUPPORTED", "UNENCRYPTED", "ENCRYPTED"]. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.osConstraints">osConstraints</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints</a>></code> | os_constraints block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.requireAdminApproval">requireAdminApproval</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the device needs to be approved by the customer admin. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.requireCorpOwned">requireCorpOwned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the device needs to be corp owned. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.requireScreenLock">requireScreenLock</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not screenlock is required for the DevicePolicy to be true. Defaults to false. |

---

##### `allowedDeviceManagementLevels`<sup>Optional</sup> <a name="allowedDeviceManagementLevels" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.allowedDeviceManagementLevels"></a>

```java
public java.util.List<java.lang.String> getAllowedDeviceManagementLevels();
```

- *Type:* java.util.List<java.lang.String>

A list of allowed device management levels. An empty list allows all management levels. Possible values: ["MANAGEMENT_UNSPECIFIED", "NONE", "BASIC", "COMPLETE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#allowed_device_management_levels AccessContextManagerAccessLevels#allowed_device_management_levels}

---

##### `allowedEncryptionStatuses`<sup>Optional</sup> <a name="allowedEncryptionStatuses" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.allowedEncryptionStatuses"></a>

```java
public java.util.List<java.lang.String> getAllowedEncryptionStatuses();
```

- *Type:* java.util.List<java.lang.String>

A list of allowed encryptions statuses. An empty list allows all statuses. Possible values: ["ENCRYPTION_UNSPECIFIED", "ENCRYPTION_UNSUPPORTED", "UNENCRYPTED", "ENCRYPTED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#allowed_encryption_statuses AccessContextManagerAccessLevels#allowed_encryption_statuses}

---

##### `osConstraints`<sup>Optional</sup> <a name="osConstraints" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.osConstraints"></a>

```java
public java.lang.Object getOsConstraints();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints</a>>

os_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#os_constraints AccessContextManagerAccessLevels#os_constraints}

---

##### `requireAdminApproval`<sup>Optional</sup> <a name="requireAdminApproval" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.requireAdminApproval"></a>

```java
public java.lang.Object getRequireAdminApproval();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the device needs to be approved by the customer admin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#require_admin_approval AccessContextManagerAccessLevels#require_admin_approval}

---

##### `requireCorpOwned`<sup>Optional</sup> <a name="requireCorpOwned" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.requireCorpOwned"></a>

```java
public java.lang.Object getRequireCorpOwned();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the device needs to be corp owned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#require_corp_owned AccessContextManagerAccessLevels#require_corp_owned}

---

##### `requireScreenLock`<sup>Optional</sup> <a name="requireScreenLock" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.requireScreenLock"></a>

```java
public java.lang.Object getRequireScreenLock();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not screenlock is required for the DevicePolicy to be true. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#require_screen_lock AccessContextManagerAccessLevels#require_screen_lock}

---

### AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints <a name="AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_levels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints;

AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints.builder()
    .osType(java.lang.String)
//  .minimumVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints.property.osType">osType</a></code> | <code>java.lang.String</code> | The operating system type of the device. Possible values: ["OS_UNSPECIFIED", "DESKTOP_MAC", "DESKTOP_WINDOWS", "DESKTOP_LINUX", "DESKTOP_CHROME_OS", "ANDROID", "IOS"]. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints.property.minimumVersion">minimumVersion</a></code> | <code>java.lang.String</code> | The minimum allowed OS version. |

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints.property.osType"></a>

```java
public java.lang.String getOsType();
```

- *Type:* java.lang.String

The operating system type of the device. Possible values: ["OS_UNSPECIFIED", "DESKTOP_MAC", "DESKTOP_WINDOWS", "DESKTOP_LINUX", "DESKTOP_CHROME_OS", "ANDROID", "IOS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#os_type AccessContextManagerAccessLevels#os_type}

---

##### `minimumVersion`<sup>Optional</sup> <a name="minimumVersion" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints.property.minimumVersion"></a>

```java
public java.lang.String getMinimumVersion();
```

- *Type:* java.lang.String

The minimum allowed OS version.

If not set, any version
of this OS satisfies the constraint.
Format: "major.minor.patch" such as "10.5.301", "9.2.1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#minimum_version AccessContextManagerAccessLevels#minimum_version}

---

### AccessContextManagerAccessLevelsAccessLevelsCustom <a name="AccessContextManagerAccessLevelsAccessLevelsCustom" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustom.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_levels.AccessContextManagerAccessLevelsAccessLevelsCustom;

AccessContextManagerAccessLevelsAccessLevelsCustom.builder()
    .expr(AccessContextManagerAccessLevelsAccessLevelsCustomExpr)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustom.property.expr">expr</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExpr">AccessContextManagerAccessLevelsAccessLevelsCustomExpr</a></code> | expr block. |

---

##### `expr`<sup>Required</sup> <a name="expr" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustom.property.expr"></a>

```java
public AccessContextManagerAccessLevelsAccessLevelsCustomExpr getExpr();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExpr">AccessContextManagerAccessLevelsAccessLevelsCustomExpr</a>

expr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#expr AccessContextManagerAccessLevels#expr}

---

### AccessContextManagerAccessLevelsAccessLevelsCustomExpr <a name="AccessContextManagerAccessLevelsAccessLevelsCustomExpr" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExpr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExpr.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_levels.AccessContextManagerAccessLevelsAccessLevelsCustomExpr;

AccessContextManagerAccessLevelsAccessLevelsCustomExpr.builder()
    .expression(java.lang.String)
//  .description(java.lang.String)
//  .location(java.lang.String)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExpr.property.expression">expression</a></code> | <code>java.lang.String</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExpr.property.description">description</a></code> | <code>java.lang.String</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExpr.property.location">location</a></code> | <code>java.lang.String</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExpr.property.title">title</a></code> | <code>java.lang.String</code> | Title for the expression, i.e. a short string describing its purpose. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExpr.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#expression AccessContextManagerAccessLevels#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExpr.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#description AccessContextManagerAccessLevels#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExpr.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#location AccessContextManagerAccessLevels#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExpr.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Title for the expression, i.e. a short string describing its purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#title AccessContextManagerAccessLevels#title}

---

### AccessContextManagerAccessLevelsConfig <a name="AccessContextManagerAccessLevelsConfig" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_levels.AccessContextManagerAccessLevelsConfig;

AccessContextManagerAccessLevelsConfig.builder()
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
    .parent(java.lang.String)
//  .accessLevels(IResolvable)
//  .accessLevels(java.util.List<AccessContextManagerAccessLevelsAccessLevels>)
//  .id(java.lang.String)
//  .timeouts(AccessContextManagerAccessLevelsTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The AccessPolicy this AccessLevel lives in. Format: accessPolicies/{policy_id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.accessLevels">accessLevels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevels">AccessContextManagerAccessLevelsAccessLevels</a>></code> | access_levels block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#id AccessContextManagerAccessLevels#id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeouts">AccessContextManagerAccessLevelsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The AccessPolicy this AccessLevel lives in. Format: accessPolicies/{policy_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#parent AccessContextManagerAccessLevels#parent}

---

##### `accessLevels`<sup>Optional</sup> <a name="accessLevels" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.accessLevels"></a>

```java
public java.lang.Object getAccessLevels();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevels">AccessContextManagerAccessLevelsAccessLevels</a>>

access_levels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#access_levels AccessContextManagerAccessLevels#access_levels}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#id AccessContextManagerAccessLevels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.timeouts"></a>

```java
public AccessContextManagerAccessLevelsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeouts">AccessContextManagerAccessLevelsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#timeouts AccessContextManagerAccessLevels#timeouts}

---

### AccessContextManagerAccessLevelsTimeouts <a name="AccessContextManagerAccessLevelsTimeouts" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_levels.AccessContextManagerAccessLevelsTimeouts;

AccessContextManagerAccessLevelsTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#create AccessContextManagerAccessLevels#create}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#delete AccessContextManagerAccessLevels#delete}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#update AccessContextManagerAccessLevels#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#create AccessContextManagerAccessLevels#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#delete AccessContextManagerAccessLevels#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/access_context_manager_access_levels#update AccessContextManagerAccessLevels#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList <a name="AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_levels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList;

new AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.get"></a>

```java
public AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints</a>>

---


### AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference <a name="AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_levels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference;

new AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.resetMinimumVersion">resetMinimumVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMinimumVersion` <a name="resetMinimumVersion" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.resetMinimumVersion"></a>

```java
public void resetMinimumVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.minimumVersionInput">minimumVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.osTypeInput">osTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.minimumVersion">minimumVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.osType">osType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `minimumVersionInput`<sup>Optional</sup> <a name="minimumVersionInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.minimumVersionInput"></a>

```java
public java.lang.String getMinimumVersionInput();
```

- *Type:* java.lang.String

---

##### `osTypeInput`<sup>Optional</sup> <a name="osTypeInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.osTypeInput"></a>

```java
public java.lang.String getOsTypeInput();
```

- *Type:* java.lang.String

---

##### `minimumVersion`<sup>Required</sup> <a name="minimumVersion" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.minimumVersion"></a>

```java
public java.lang.String getMinimumVersion();
```

- *Type:* java.lang.String

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.osType"></a>

```java
public java.lang.String getOsType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints</a>

---


### AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference <a name="AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_levels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference;

new AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.putOsConstraints">putOsConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetAllowedDeviceManagementLevels">resetAllowedDeviceManagementLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetAllowedEncryptionStatuses">resetAllowedEncryptionStatuses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetOsConstraints">resetOsConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetRequireAdminApproval">resetRequireAdminApproval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetRequireCorpOwned">resetRequireCorpOwned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetRequireScreenLock">resetRequireScreenLock</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOsConstraints` <a name="putOsConstraints" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.putOsConstraints"></a>

```java
public void putOsConstraints(IResolvable OR java.util.List<AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.putOsConstraints.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints</a>>

---

##### `resetAllowedDeviceManagementLevels` <a name="resetAllowedDeviceManagementLevels" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetAllowedDeviceManagementLevels"></a>

```java
public void resetAllowedDeviceManagementLevels()
```

##### `resetAllowedEncryptionStatuses` <a name="resetAllowedEncryptionStatuses" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetAllowedEncryptionStatuses"></a>

```java
public void resetAllowedEncryptionStatuses()
```

##### `resetOsConstraints` <a name="resetOsConstraints" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetOsConstraints"></a>

```java
public void resetOsConstraints()
```

##### `resetRequireAdminApproval` <a name="resetRequireAdminApproval" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetRequireAdminApproval"></a>

```java
public void resetRequireAdminApproval()
```

##### `resetRequireCorpOwned` <a name="resetRequireCorpOwned" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetRequireCorpOwned"></a>

```java
public void resetRequireCorpOwned()
```

##### `resetRequireScreenLock` <a name="resetRequireScreenLock" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetRequireScreenLock"></a>

```java
public void resetRequireScreenLock()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.osConstraints">osConstraints</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.allowedDeviceManagementLevelsInput">allowedDeviceManagementLevelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.allowedEncryptionStatusesInput">allowedEncryptionStatusesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.osConstraintsInput">osConstraintsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireAdminApprovalInput">requireAdminApprovalInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireCorpOwnedInput">requireCorpOwnedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireScreenLockInput">requireScreenLockInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.allowedDeviceManagementLevels">allowedDeviceManagementLevels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.allowedEncryptionStatuses">allowedEncryptionStatuses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireAdminApproval">requireAdminApproval</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireCorpOwned">requireCorpOwned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireScreenLock">requireScreenLock</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `osConstraints`<sup>Required</sup> <a name="osConstraints" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.osConstraints"></a>

```java
public AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList getOsConstraints();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList</a>

---

##### `allowedDeviceManagementLevelsInput`<sup>Optional</sup> <a name="allowedDeviceManagementLevelsInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.allowedDeviceManagementLevelsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedDeviceManagementLevelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedEncryptionStatusesInput`<sup>Optional</sup> <a name="allowedEncryptionStatusesInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.allowedEncryptionStatusesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedEncryptionStatusesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `osConstraintsInput`<sup>Optional</sup> <a name="osConstraintsInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.osConstraintsInput"></a>

```java
public java.lang.Object getOsConstraintsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints</a>>

---

##### `requireAdminApprovalInput`<sup>Optional</sup> <a name="requireAdminApprovalInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireAdminApprovalInput"></a>

```java
public java.lang.Object getRequireAdminApprovalInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requireCorpOwnedInput`<sup>Optional</sup> <a name="requireCorpOwnedInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireCorpOwnedInput"></a>

```java
public java.lang.Object getRequireCorpOwnedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requireScreenLockInput`<sup>Optional</sup> <a name="requireScreenLockInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireScreenLockInput"></a>

```java
public java.lang.Object getRequireScreenLockInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedDeviceManagementLevels`<sup>Required</sup> <a name="allowedDeviceManagementLevels" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.allowedDeviceManagementLevels"></a>

```java
public java.util.List<java.lang.String> getAllowedDeviceManagementLevels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedEncryptionStatuses`<sup>Required</sup> <a name="allowedEncryptionStatuses" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.allowedEncryptionStatuses"></a>

```java
public java.util.List<java.lang.String> getAllowedEncryptionStatuses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requireAdminApproval`<sup>Required</sup> <a name="requireAdminApproval" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireAdminApproval"></a>

```java
public java.lang.Object getRequireAdminApproval();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requireCorpOwned`<sup>Required</sup> <a name="requireCorpOwned" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireCorpOwned"></a>

```java
public java.lang.Object getRequireCorpOwned();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requireScreenLock`<sup>Required</sup> <a name="requireScreenLock" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireScreenLock"></a>

```java
public java.lang.Object getRequireScreenLock();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.internalValue"></a>

```java
public AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy</a>

---


### AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList <a name="AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_levels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList;

new AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.get"></a>

```java
public AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditions">AccessContextManagerAccessLevelsAccessLevelsBasicConditions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditions">AccessContextManagerAccessLevelsAccessLevelsBasicConditions</a>>

---


### AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference <a name="AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_levels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference;

new AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.putDevicePolicy">putDevicePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetDevicePolicy">resetDevicePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetIpSubnetworks">resetIpSubnetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetMembers">resetMembers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetNegate">resetNegate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetRegions">resetRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetRequiredAccessLevels">resetRequiredAccessLevels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDevicePolicy` <a name="putDevicePolicy" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.putDevicePolicy"></a>

```java
public void putDevicePolicy(AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.putDevicePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy</a>

---

##### `resetDevicePolicy` <a name="resetDevicePolicy" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetDevicePolicy"></a>

```java
public void resetDevicePolicy()
```

##### `resetIpSubnetworks` <a name="resetIpSubnetworks" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetIpSubnetworks"></a>

```java
public void resetIpSubnetworks()
```

##### `resetMembers` <a name="resetMembers" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetMembers"></a>

```java
public void resetMembers()
```

##### `resetNegate` <a name="resetNegate" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetNegate"></a>

```java
public void resetNegate()
```

##### `resetRegions` <a name="resetRegions" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetRegions"></a>

```java
public void resetRegions()
```

##### `resetRequiredAccessLevels` <a name="resetRequiredAccessLevels" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetRequiredAccessLevels"></a>

```java
public void resetRequiredAccessLevels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.devicePolicy">devicePolicy</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.devicePolicyInput">devicePolicyInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.ipSubnetworksInput">ipSubnetworksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.membersInput">membersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.negateInput">negateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.regionsInput">regionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.requiredAccessLevelsInput">requiredAccessLevelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.ipSubnetworks">ipSubnetworks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.negate">negate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.requiredAccessLevels">requiredAccessLevels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditions">AccessContextManagerAccessLevelsAccessLevelsBasicConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `devicePolicy`<sup>Required</sup> <a name="devicePolicy" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.devicePolicy"></a>

```java
public AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference getDevicePolicy();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference</a>

---

##### `devicePolicyInput`<sup>Optional</sup> <a name="devicePolicyInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.devicePolicyInput"></a>

```java
public AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy getDevicePolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy</a>

---

##### `ipSubnetworksInput`<sup>Optional</sup> <a name="ipSubnetworksInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.ipSubnetworksInput"></a>

```java
public java.util.List<java.lang.String> getIpSubnetworksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.membersInput"></a>

```java
public java.util.List<java.lang.String> getMembersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateInput`<sup>Optional</sup> <a name="negateInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.negateInput"></a>

```java
public java.lang.Object getNegateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.regionsInput"></a>

```java
public java.util.List<java.lang.String> getRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requiredAccessLevelsInput`<sup>Optional</sup> <a name="requiredAccessLevelsInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.requiredAccessLevelsInput"></a>

```java
public java.util.List<java.lang.String> getRequiredAccessLevelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipSubnetworks`<sup>Required</sup> <a name="ipSubnetworks" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.ipSubnetworks"></a>

```java
public java.util.List<java.lang.String> getIpSubnetworks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.negate"></a>

```java
public java.lang.Object getNegate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requiredAccessLevels`<sup>Required</sup> <a name="requiredAccessLevels" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.requiredAccessLevels"></a>

```java
public java.util.List<java.lang.String> getRequiredAccessLevels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditions">AccessContextManagerAccessLevelsAccessLevelsBasicConditions</a>

---


### AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference <a name="AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_levels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference;

new AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.resetCombiningFunction">resetCombiningFunction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditions` <a name="putConditions" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.putConditions"></a>

```java
public void putConditions(IResolvable OR java.util.List<AccessContextManagerAccessLevelsAccessLevelsBasicConditions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.putConditions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditions">AccessContextManagerAccessLevelsAccessLevelsBasicConditions</a>>

---

##### `resetCombiningFunction` <a name="resetCombiningFunction" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.resetCombiningFunction"></a>

```java
public void resetCombiningFunction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.combiningFunctionInput">combiningFunctionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.conditionsInput">conditionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditions">AccessContextManagerAccessLevelsAccessLevelsBasicConditions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.combiningFunction">combiningFunction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasic">AccessContextManagerAccessLevelsAccessLevelsBasic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.conditions"></a>

```java
public AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList getConditions();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList</a>

---

##### `combiningFunctionInput`<sup>Optional</sup> <a name="combiningFunctionInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.combiningFunctionInput"></a>

```java
public java.lang.String getCombiningFunctionInput();
```

- *Type:* java.lang.String

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.conditionsInput"></a>

```java
public java.lang.Object getConditionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditions">AccessContextManagerAccessLevelsAccessLevelsBasicConditions</a>>

---

##### `combiningFunction`<sup>Required</sup> <a name="combiningFunction" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.combiningFunction"></a>

```java
public java.lang.String getCombiningFunction();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.internalValue"></a>

```java
public AccessContextManagerAccessLevelsAccessLevelsBasic getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasic">AccessContextManagerAccessLevelsAccessLevelsBasic</a>

---


### AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference <a name="AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_levels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference;

new AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resetTitle"></a>

```java
public void resetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExpr">AccessContextManagerAccessLevelsAccessLevelsCustomExpr</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.internalValue"></a>

```java
public AccessContextManagerAccessLevelsAccessLevelsCustomExpr getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExpr">AccessContextManagerAccessLevelsAccessLevelsCustomExpr</a>

---


### AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference <a name="AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_levels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference;

new AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.putExpr">putExpr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExpr` <a name="putExpr" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.putExpr"></a>

```java
public void putExpr(AccessContextManagerAccessLevelsAccessLevelsCustomExpr value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.putExpr.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExpr">AccessContextManagerAccessLevelsAccessLevelsCustomExpr</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.expr">expr</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference">AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.exprInput">exprInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExpr">AccessContextManagerAccessLevelsAccessLevelsCustomExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustom">AccessContextManagerAccessLevelsAccessLevelsCustom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expr`<sup>Required</sup> <a name="expr" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.expr"></a>

```java
public AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference getExpr();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference">AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference</a>

---

##### `exprInput`<sup>Optional</sup> <a name="exprInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.exprInput"></a>

```java
public AccessContextManagerAccessLevelsAccessLevelsCustomExpr getExprInput();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExpr">AccessContextManagerAccessLevelsAccessLevelsCustomExpr</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.internalValue"></a>

```java
public AccessContextManagerAccessLevelsAccessLevelsCustom getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustom">AccessContextManagerAccessLevelsAccessLevelsCustom</a>

---


### AccessContextManagerAccessLevelsAccessLevelsList <a name="AccessContextManagerAccessLevelsAccessLevelsList" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_levels.AccessContextManagerAccessLevelsAccessLevelsList;

new AccessContextManagerAccessLevelsAccessLevelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.get"></a>

```java
public AccessContextManagerAccessLevelsAccessLevelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevels">AccessContextManagerAccessLevelsAccessLevels</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevels">AccessContextManagerAccessLevelsAccessLevels</a>>

---


### AccessContextManagerAccessLevelsAccessLevelsOutputReference <a name="AccessContextManagerAccessLevelsAccessLevelsOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_levels.AccessContextManagerAccessLevelsAccessLevelsOutputReference;

new AccessContextManagerAccessLevelsAccessLevelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.putBasic">putBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.putCustom">putCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.resetBasic">resetBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.resetCustom">resetCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBasic` <a name="putBasic" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.putBasic"></a>

```java
public void putBasic(AccessContextManagerAccessLevelsAccessLevelsBasic value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.putBasic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasic">AccessContextManagerAccessLevelsAccessLevelsBasic</a>

---

##### `putCustom` <a name="putCustom" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.putCustom"></a>

```java
public void putCustom(AccessContextManagerAccessLevelsAccessLevelsCustom value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.putCustom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustom">AccessContextManagerAccessLevelsAccessLevelsCustom</a>

---

##### `resetBasic` <a name="resetBasic" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.resetBasic"></a>

```java
public void resetBasic()
```

##### `resetCustom` <a name="resetCustom" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.resetCustom"></a>

```java
public void resetCustom()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.basic">basic</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference">AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.custom">custom</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference">AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.basicInput">basicInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasic">AccessContextManagerAccessLevelsAccessLevelsBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.customInput">customInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustom">AccessContextManagerAccessLevelsAccessLevelsCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevels">AccessContextManagerAccessLevelsAccessLevels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `basic`<sup>Required</sup> <a name="basic" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.basic"></a>

```java
public AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference getBasic();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference">AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference</a>

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.custom"></a>

```java
public AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference getCustom();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference">AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference</a>

---

##### `basicInput`<sup>Optional</sup> <a name="basicInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.basicInput"></a>

```java
public AccessContextManagerAccessLevelsAccessLevelsBasic getBasicInput();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasic">AccessContextManagerAccessLevelsAccessLevelsBasic</a>

---

##### `customInput`<sup>Optional</sup> <a name="customInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.customInput"></a>

```java
public AccessContextManagerAccessLevelsAccessLevelsCustom getCustomInput();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustom">AccessContextManagerAccessLevelsAccessLevelsCustom</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevels">AccessContextManagerAccessLevelsAccessLevels</a>

---


### AccessContextManagerAccessLevelsTimeoutsOutputReference <a name="AccessContextManagerAccessLevelsTimeoutsOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_levels.AccessContextManagerAccessLevelsTimeoutsOutputReference;

new AccessContextManagerAccessLevelsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeouts">AccessContextManagerAccessLevelsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeouts">AccessContextManagerAccessLevelsTimeouts</a>

---



