# `google_access_context_manager_service_perimeters`

Refer to the Terraform Registory for docs: [`google_access_context_manager_service_perimeters`](https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters).

# `accessContextManagerServicePerimeters` Submodule <a name="`accessContextManagerServicePerimeters` Submodule" id="@cdktf/provider-google.accessContextManagerServicePerimeters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessContextManagerServicePerimeters <a name="AccessContextManagerServicePerimeters" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters google_access_context_manager_service_perimeters}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimeters;

AccessContextManagerServicePerimeters.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
//  .servicePerimeters(IResolvable)
//  .servicePerimeters(java.util.List<AccessContextManagerServicePerimetersServicePerimeters>)
//  .timeouts(AccessContextManagerServicePerimetersTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The AccessPolicy this ServicePerimeter lives in. Format: accessPolicies/{policy_id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#id AccessContextManagerServicePerimeters#id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.Initializer.parameter.servicePerimeters">servicePerimeters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimeters">AccessContextManagerServicePerimetersServicePerimeters</a>></code> | service_perimeters block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeouts">AccessContextManagerServicePerimetersTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The AccessPolicy this ServicePerimeter lives in. Format: accessPolicies/{policy_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#parent AccessContextManagerServicePerimeters#parent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#id AccessContextManagerServicePerimeters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `servicePerimeters`<sup>Optional</sup> <a name="servicePerimeters" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.Initializer.parameter.servicePerimeters"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimeters">AccessContextManagerServicePerimetersServicePerimeters</a>>

service_perimeters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#service_perimeters AccessContextManagerServicePerimeters#service_perimeters}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeouts">AccessContextManagerServicePerimetersTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#timeouts AccessContextManagerServicePerimeters#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.putServicePerimeters">putServicePerimeters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.resetServicePerimeters">resetServicePerimeters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putServicePerimeters` <a name="putServicePerimeters" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.putServicePerimeters"></a>

```java
public void putServicePerimeters(IResolvable OR java.util.List<AccessContextManagerServicePerimetersServicePerimeters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.putServicePerimeters.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimeters">AccessContextManagerServicePerimetersServicePerimeters</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.putTimeouts"></a>

```java
public void putTimeouts(AccessContextManagerServicePerimetersTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeouts">AccessContextManagerServicePerimetersTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.resetId"></a>

```java
public void resetId()
```

##### `resetServicePerimeters` <a name="resetServicePerimeters" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.resetServicePerimeters"></a>

```java
public void resetServicePerimeters()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimeters;

AccessContextManagerServicePerimeters.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimeters;

AccessContextManagerServicePerimeters.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimeters;

AccessContextManagerServicePerimeters.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.servicePerimeters">servicePerimeters</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersList">AccessContextManagerServicePerimetersServicePerimetersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference">AccessContextManagerServicePerimetersTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.servicePerimetersInput">servicePerimetersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimeters">AccessContextManagerServicePerimetersServicePerimeters</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeouts">AccessContextManagerServicePerimetersTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `servicePerimeters`<sup>Required</sup> <a name="servicePerimeters" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.servicePerimeters"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersList getServicePerimeters();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersList">AccessContextManagerServicePerimetersServicePerimetersList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.timeouts"></a>

```java
public AccessContextManagerServicePerimetersTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference">AccessContextManagerServicePerimetersTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `servicePerimetersInput`<sup>Optional</sup> <a name="servicePerimetersInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.servicePerimetersInput"></a>

```java
public java.lang.Object getServicePerimetersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimeters">AccessContextManagerServicePerimetersServicePerimeters</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeouts">AccessContextManagerServicePerimetersTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimeters.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AccessContextManagerServicePerimetersConfig <a name="AccessContextManagerServicePerimetersConfig" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersConfig;

AccessContextManagerServicePerimetersConfig.builder()
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
//  .id(java.lang.String)
//  .servicePerimeters(IResolvable)
//  .servicePerimeters(java.util.List<AccessContextManagerServicePerimetersServicePerimeters>)
//  .timeouts(AccessContextManagerServicePerimetersTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The AccessPolicy this ServicePerimeter lives in. Format: accessPolicies/{policy_id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#id AccessContextManagerServicePerimeters#id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersConfig.property.servicePerimeters">servicePerimeters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimeters">AccessContextManagerServicePerimetersServicePerimeters</a>></code> | service_perimeters block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeouts">AccessContextManagerServicePerimetersTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The AccessPolicy this ServicePerimeter lives in. Format: accessPolicies/{policy_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#parent AccessContextManagerServicePerimeters#parent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#id AccessContextManagerServicePerimeters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `servicePerimeters`<sup>Optional</sup> <a name="servicePerimeters" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersConfig.property.servicePerimeters"></a>

```java
public java.lang.Object getServicePerimeters();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimeters">AccessContextManagerServicePerimetersServicePerimeters</a>>

service_perimeters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#service_perimeters AccessContextManagerServicePerimeters#service_perimeters}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersConfig.property.timeouts"></a>

```java
public AccessContextManagerServicePerimetersTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeouts">AccessContextManagerServicePerimetersTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#timeouts AccessContextManagerServicePerimeters#timeouts}

---

### AccessContextManagerServicePerimetersServicePerimeters <a name="AccessContextManagerServicePerimetersServicePerimeters" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimeters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimeters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimeters;

AccessContextManagerServicePerimetersServicePerimeters.builder()
    .name(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
//  .perimeterType(java.lang.String)
//  .spec(AccessContextManagerServicePerimetersServicePerimetersSpec)
//  .status(AccessContextManagerServicePerimetersServicePerimetersStatus)
//  .useExplicitDryRunSpec(java.lang.Boolean)
//  .useExplicitDryRunSpec(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimeters.property.name">name</a></code> | <code>java.lang.String</code> | Resource name for the ServicePerimeter. The short_name component must begin with a letter and only include alphanumeric and '_'. Format: accessPolicies/{policy_id}/servicePerimeters/{short_name}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimeters.property.title">title</a></code> | <code>java.lang.String</code> | Human readable title. Must be unique within the Policy. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimeters.property.description">description</a></code> | <code>java.lang.String</code> | Description of the ServicePerimeter and its use. Does not affect behavior. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimeters.property.perimeterType">perimeterType</a></code> | <code>java.lang.String</code> | Specifies the type of the Perimeter. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimeters.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpec">AccessContextManagerServicePerimetersServicePerimetersSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimeters.property.status">status</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatus">AccessContextManagerServicePerimetersServicePerimetersStatus</a></code> | status block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimeters.property.useExplicitDryRunSpec">useExplicitDryRunSpec</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Use explicit dry run spec flag. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimeters.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Resource name for the ServicePerimeter. The short_name component must begin with a letter and only include alphanumeric and '_'. Format: accessPolicies/{policy_id}/servicePerimeters/{short_name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#name AccessContextManagerServicePerimeters#name}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimeters.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Human readable title. Must be unique within the Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#title AccessContextManagerServicePerimeters#title}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimeters.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the ServicePerimeter and its use. Does not affect behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#description AccessContextManagerServicePerimeters#description}

---

##### `perimeterType`<sup>Optional</sup> <a name="perimeterType" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimeters.property.perimeterType"></a>

```java
public java.lang.String getPerimeterType();
```

- *Type:* java.lang.String

Specifies the type of the Perimeter.

There are two types: regular and
bridge. Regular Service Perimeter contains resources, access levels,
and restricted services. Every resource can be in at most
ONE regular Service Perimeter.

In addition to being in a regular service perimeter, a resource can also
be in zero or more perimeter bridges. A perimeter bridge only contains
resources. Cross project operations are permitted if all effected
resources share some perimeter (whether bridge or regular). Perimeter
Bridge does not contain access levels or services: those are governed
entirely by the regular perimeter that resource is in.

Perimeter Bridges are typically useful when building more complex
topologies with many independent perimeters that need to share some data
with a common perimeter, but should not be able to share data among
themselves. Default value: "PERIMETER_TYPE_REGULAR" Possible values: ["PERIMETER_TYPE_REGULAR", "PERIMETER_TYPE_BRIDGE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#perimeter_type AccessContextManagerServicePerimeters#perimeter_type}

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimeters.property.spec"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersSpec getSpec();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpec">AccessContextManagerServicePerimetersServicePerimetersSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#spec AccessContextManagerServicePerimeters#spec}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimeters.property.status"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersStatus getStatus();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatus">AccessContextManagerServicePerimetersServicePerimetersStatus</a>

status block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#status AccessContextManagerServicePerimeters#status}

---

##### `useExplicitDryRunSpec`<sup>Optional</sup> <a name="useExplicitDryRunSpec" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimeters.property.useExplicitDryRunSpec"></a>

```java
public java.lang.Object getUseExplicitDryRunSpec();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Use explicit dry run spec flag.

Ordinarily, a dry-run spec implicitly exists
for all Service Perimeters, and that spec is identical to the status for those
Service Perimeters. When this flag is set, it inhibits the generation of the
implicit spec, thereby allowing the user to explicitly provide a
configuration ("spec") to use in a dry-run version of the Service Perimeter.
This allows the user to test changes to the enforced config ("status") without
actually enforcing them. This testing is done through analyzing the differences
between currently enforced and suggested restrictions. useExplicitDryRunSpec must
bet set to True if any of the fields in the spec are set to non-default values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#use_explicit_dry_run_spec AccessContextManagerServicePerimeters#use_explicit_dry_run_spec}

---

### AccessContextManagerServicePerimetersServicePerimetersSpec <a name="AccessContextManagerServicePerimetersServicePerimetersSpec" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersSpec;

AccessContextManagerServicePerimetersServicePerimetersSpec.builder()
//  .accessLevels(java.util.List<java.lang.String>)
//  .egressPolicies(IResolvable)
//  .egressPolicies(java.util.List<AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies>)
//  .ingressPolicies(IResolvable)
//  .ingressPolicies(java.util.List<AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies>)
//  .resources(java.util.List<java.lang.String>)
//  .restrictedServices(java.util.List<java.lang.String>)
//  .vpcAccessibleServices(AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpec.property.accessLevels">accessLevels</a></code> | <code>java.util.List<java.lang.String></code> | A list of AccessLevel resource names that allow resources within the ServicePerimeter to be accessed from the internet. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpec.property.egressPolicies">egressPolicies</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies</a>></code> | egress_policies block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpec.property.ingressPolicies">ingressPolicies</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies</a>></code> | ingress_policies block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpec.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | A list of GCP resources that are inside of the service perimeter. Currently only projects are allowed. Format: projects/{project_number}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpec.property.restrictedServices">restrictedServices</a></code> | <code>java.util.List<java.lang.String></code> | GCP services that are subject to the Service Perimeter restrictions. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpec.property.vpcAccessibleServices">vpcAccessibleServices</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices">AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices</a></code> | vpc_accessible_services block. |

---

##### `accessLevels`<sup>Optional</sup> <a name="accessLevels" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpec.property.accessLevels"></a>

```java
public java.util.List<java.lang.String> getAccessLevels();
```

- *Type:* java.util.List<java.lang.String>

A list of AccessLevel resource names that allow resources within the ServicePerimeter to be accessed from the internet.

AccessLevels listed must be in the same policy as this
ServicePerimeter. Referencing a nonexistent AccessLevel is a
syntax error. If no AccessLevel names are listed, resources within
the perimeter can only be accessed via GCP calls with request
origins within the perimeter. For Service Perimeter Bridge, must
be empty.

Format: accessPolicies/{policy_id}/accessLevels/{access_level_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#access_levels AccessContextManagerServicePerimeters#access_levels}

---

##### `egressPolicies`<sup>Optional</sup> <a name="egressPolicies" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpec.property.egressPolicies"></a>

```java
public java.lang.Object getEgressPolicies();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies</a>>

egress_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#egress_policies AccessContextManagerServicePerimeters#egress_policies}

---

##### `ingressPolicies`<sup>Optional</sup> <a name="ingressPolicies" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpec.property.ingressPolicies"></a>

```java
public java.lang.Object getIngressPolicies();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies</a>>

ingress_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#ingress_policies AccessContextManagerServicePerimeters#ingress_policies}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpec.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

A list of GCP resources that are inside of the service perimeter. Currently only projects are allowed. Format: projects/{project_number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#resources AccessContextManagerServicePerimeters#resources}

---

##### `restrictedServices`<sup>Optional</sup> <a name="restrictedServices" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpec.property.restrictedServices"></a>

```java
public java.util.List<java.lang.String> getRestrictedServices();
```

- *Type:* java.util.List<java.lang.String>

GCP services that are subject to the Service Perimeter restrictions.

Must contain a list of services. For example, if
'storage.googleapis.com' is specified, access to the storage
buckets inside the perimeter must meet the perimeter's access
restrictions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#restricted_services AccessContextManagerServicePerimeters#restricted_services}

---

##### `vpcAccessibleServices`<sup>Optional</sup> <a name="vpcAccessibleServices" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpec.property.vpcAccessibleServices"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices getVpcAccessibleServices();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices">AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices</a>

vpc_accessible_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#vpc_accessible_services AccessContextManagerServicePerimeters#vpc_accessible_services}

---

### AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies <a name="AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies;

AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies.builder()
//  .egressFrom(AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom)
//  .egressTo(AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies.property.egressFrom">egressFrom</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom</a></code> | egress_from block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies.property.egressTo">egressTo</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo</a></code> | egress_to block. |

---

##### `egressFrom`<sup>Optional</sup> <a name="egressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies.property.egressFrom"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom getEgressFrom();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom</a>

egress_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#egress_from AccessContextManagerServicePerimeters#egress_from}

---

##### `egressTo`<sup>Optional</sup> <a name="egressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies.property.egressTo"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo getEgressTo();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo</a>

egress_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#egress_to AccessContextManagerServicePerimeters#egress_to}

---

### AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom <a name="AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom;

AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom.builder()
//  .identities(java.util.List<java.lang.String>)
//  .identityType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom.property.identities">identities</a></code> | <code>java.util.List<java.lang.String></code> | A list of identities that are allowed access through this 'EgressPolicy'. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom.property.identityType">identityType</a></code> | <code>java.lang.String</code> | Specifies the type of identities that are allowed access to outside the  perimeter. |

---

##### `identities`<sup>Optional</sup> <a name="identities" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom.property.identities"></a>

```java
public java.util.List<java.lang.String> getIdentities();
```

- *Type:* java.util.List<java.lang.String>

A list of identities that are allowed access through this 'EgressPolicy'.

Should be in the format of email address. The email address should
represent individual user or service account only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#identities AccessContextManagerServicePerimeters#identities}

---

##### `identityType`<sup>Optional</sup> <a name="identityType" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom.property.identityType"></a>

```java
public java.lang.String getIdentityType();
```

- *Type:* java.lang.String

Specifies the type of identities that are allowed access to outside the  perimeter.

If left unspecified, then members of 'identities' field will
be allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#identity_type AccessContextManagerServicePerimeters#identity_type}

---

### AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo <a name="AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo;

AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo.builder()
//  .externalResources(java.util.List<java.lang.String>)
//  .operations(IResolvable)
//  .operations(java.util.List<AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations>)
//  .resources(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo.property.externalResources">externalResources</a></code> | <code>java.util.List<java.lang.String></code> | A list of external resources that are allowed to be accessed. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo.property.operations">operations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations</a>></code> | operations block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | A list of resources, currently only projects in the form  'projects/<projectnumber>', that match this to stanza. |

---

##### `externalResources`<sup>Optional</sup> <a name="externalResources" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo.property.externalResources"></a>

```java
public java.util.List<java.lang.String> getExternalResources();
```

- *Type:* java.util.List<java.lang.String>

A list of external resources that are allowed to be accessed.

A request
matches if it contains an external resource in this list (Example:
s3://bucket/path). Currently '*' is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#external_resources AccessContextManagerServicePerimeters#external_resources}

---

##### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo.property.operations"></a>

```java
public java.lang.Object getOperations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations</a>>

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#operations AccessContextManagerServicePerimeters#operations}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

A list of resources, currently only projects in the form  'projects/<projectnumber>', that match this to stanza.

A request matches
if it contains a resource in this list. If * is specified for resources,
then this 'EgressTo' rule will authorize access to all resources outside
the perimeter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#resources AccessContextManagerServicePerimeters#resources}

---

### AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations <a name="AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations;

AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations.builder()
//  .methodSelectors(IResolvable)
//  .methodSelectors(java.util.List<AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors>)
//  .serviceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations.property.methodSelectors">methodSelectors</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors</a>></code> | method_selectors block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | The name of the API whose methods or permissions the 'IngressPolicy' or  'EgressPolicy' want to allow. |

---

##### `methodSelectors`<sup>Optional</sup> <a name="methodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations.property.methodSelectors"></a>

```java
public java.lang.Object getMethodSelectors();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors</a>>

method_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#method_selectors AccessContextManagerServicePerimeters#method_selectors}

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

The name of the API whose methods or permissions the 'IngressPolicy' or  'EgressPolicy' want to allow.

A single 'ApiOperation' with serviceName
field set to '*' will allow all methods AND permissions for all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#service_name AccessContextManagerServicePerimeters#service_name}

---

### AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors <a name="AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors;

AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors.builder()
//  .method(java.lang.String)
//  .permission(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors.property.method">method</a></code> | <code>java.lang.String</code> | Value for 'method' should be a valid method name for the corresponding  'serviceName' in 'ApiOperation'. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors.property.permission">permission</a></code> | <code>java.lang.String</code> | Value for permission should be a valid Cloud IAM permission for the  corresponding 'serviceName' in 'ApiOperation'. |

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

Value for 'method' should be a valid method name for the corresponding  'serviceName' in 'ApiOperation'.

If '*' used as value for method,
then ALL methods and permissions are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#method AccessContextManagerServicePerimeters#method}

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

Value for permission should be a valid Cloud IAM permission for the  corresponding 'serviceName' in 'ApiOperation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#permission AccessContextManagerServicePerimeters#permission}

---

### AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies <a name="AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies;

AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies.builder()
//  .ingressFrom(AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom)
//  .ingressTo(AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies.property.ingressFrom">ingressFrom</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom</a></code> | ingress_from block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies.property.ingressTo">ingressTo</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo</a></code> | ingress_to block. |

---

##### `ingressFrom`<sup>Optional</sup> <a name="ingressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies.property.ingressFrom"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom getIngressFrom();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom</a>

ingress_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#ingress_from AccessContextManagerServicePerimeters#ingress_from}

---

##### `ingressTo`<sup>Optional</sup> <a name="ingressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies.property.ingressTo"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo getIngressTo();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo</a>

ingress_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#ingress_to AccessContextManagerServicePerimeters#ingress_to}

---

### AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom <a name="AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom;

AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom.builder()
//  .identities(java.util.List<java.lang.String>)
//  .identityType(java.lang.String)
//  .sources(IResolvable)
//  .sources(java.util.List<AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom.property.identities">identities</a></code> | <code>java.util.List<java.lang.String></code> | A list of identities that are allowed access through this ingress policy. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom.property.identityType">identityType</a></code> | <code>java.lang.String</code> | Specifies the type of identities that are allowed access from outside the  perimeter. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom.property.sources">sources</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources</a>></code> | sources block. |

---

##### `identities`<sup>Optional</sup> <a name="identities" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom.property.identities"></a>

```java
public java.util.List<java.lang.String> getIdentities();
```

- *Type:* java.util.List<java.lang.String>

A list of identities that are allowed access through this ingress policy.

Should be in the format of email address. The email address should represent
individual user or service account only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#identities AccessContextManagerServicePerimeters#identities}

---

##### `identityType`<sup>Optional</sup> <a name="identityType" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom.property.identityType"></a>

```java
public java.lang.String getIdentityType();
```

- *Type:* java.lang.String

Specifies the type of identities that are allowed access from outside the  perimeter.

If left unspecified, then members of 'identities' field will be
allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#identity_type AccessContextManagerServicePerimeters#identity_type}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom.property.sources"></a>

```java
public java.lang.Object getSources();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources</a>>

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#sources AccessContextManagerServicePerimeters#sources}

---

### AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources <a name="AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources;

AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources.builder()
//  .accessLevel(java.lang.String)
//  .resource(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | An 'AccessLevel' resource name that allow resources within the  'ServicePerimeters' to be accessed from the internet. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources.property.resource">resource</a></code> | <code>java.lang.String</code> | A Google Cloud resource that is allowed to ingress the perimeter. |

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

An 'AccessLevel' resource name that allow resources within the  'ServicePerimeters' to be accessed from the internet.

'AccessLevels' listed
must be in the same policy as this 'ServicePerimeter'. Referencing a nonexistent
'AccessLevel' will cause an error. If no 'AccessLevel' names are listed,
resources within the perimeter can only be accessed via Google Cloud calls
with request origins within the perimeter.
Example 'accessPolicies/MY_POLICY/accessLevels/MY_LEVEL.'
If * is specified, then all IngressSources will be allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#access_level AccessContextManagerServicePerimeters#access_level}

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources.property.resource"></a>

```java
public java.lang.String getResource();
```

- *Type:* java.lang.String

A Google Cloud resource that is allowed to ingress the perimeter.

Requests from these resources will be allowed to access perimeter data.
Currently only projects are allowed. Format 'projects/{project_number}'
The project may be in any Google Cloud organization, not just the
organization that the perimeter is defined in. '*' is not allowed, the case
of allowing all Google Cloud resources only is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#resource AccessContextManagerServicePerimeters#resource}

---

### AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo <a name="AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo;

AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo.builder()
//  .operations(IResolvable)
//  .operations(java.util.List<AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations>)
//  .resources(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo.property.operations">operations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations</a>></code> | operations block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | A list of resources, currently only projects in the form  'projects/<projectnumber>', protected by this 'ServicePerimeter' that are allowed to be accessed by sources defined in the corresponding 'IngressFrom'. |

---

##### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo.property.operations"></a>

```java
public java.lang.Object getOperations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations</a>>

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#operations AccessContextManagerServicePerimeters#operations}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

A list of resources, currently only projects in the form  'projects/<projectnumber>', protected by this 'ServicePerimeter' that are allowed to be accessed by sources defined in the corresponding 'IngressFrom'.

A request matches if it contains
a resource in this list. If '*' is specified for resources,
then this 'IngressTo' rule will authorize access to all
resources inside the perimeter, provided that the request
also matches the 'operations' field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#resources AccessContextManagerServicePerimeters#resources}

---

### AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations <a name="AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations;

AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations.builder()
//  .methodSelectors(IResolvable)
//  .methodSelectors(java.util.List<AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors>)
//  .serviceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations.property.methodSelectors">methodSelectors</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors</a>></code> | method_selectors block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | The name of the API whose methods or permissions the 'IngressPolicy' or  'EgressPolicy' want to allow. |

---

##### `methodSelectors`<sup>Optional</sup> <a name="methodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations.property.methodSelectors"></a>

```java
public java.lang.Object getMethodSelectors();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors</a>>

method_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#method_selectors AccessContextManagerServicePerimeters#method_selectors}

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

The name of the API whose methods or permissions the 'IngressPolicy' or  'EgressPolicy' want to allow.

A single 'ApiOperation' with 'serviceName'
field set to '*' will allow all methods AND permissions for all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#service_name AccessContextManagerServicePerimeters#service_name}

---

### AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors <a name="AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors;

AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors.builder()
//  .method(java.lang.String)
//  .permission(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors.property.method">method</a></code> | <code>java.lang.String</code> | Value for method should be a valid method name for the corresponding  serviceName in 'ApiOperation'. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors.property.permission">permission</a></code> | <code>java.lang.String</code> | Value for permission should be a valid Cloud IAM permission for the  corresponding 'serviceName' in 'ApiOperation'. |

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

Value for method should be a valid method name for the corresponding  serviceName in 'ApiOperation'.

If '*' used as value for 'method', then
ALL methods and permissions are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#method AccessContextManagerServicePerimeters#method}

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

Value for permission should be a valid Cloud IAM permission for the  corresponding 'serviceName' in 'ApiOperation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#permission AccessContextManagerServicePerimeters#permission}

---

### AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices <a name="AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices;

AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices.builder()
//  .allowedServices(java.util.List<java.lang.String>)
//  .enableRestriction(java.lang.Boolean)
//  .enableRestriction(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices.property.allowedServices">allowedServices</a></code> | <code>java.util.List<java.lang.String></code> | The list of APIs usable within the Service Perimeter. Must be empty unless 'enableRestriction' is True. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices.property.enableRestriction">enableRestriction</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to restrict API calls within the Service Perimeter to the list of APIs specified in 'allowedServices'. |

---

##### `allowedServices`<sup>Optional</sup> <a name="allowedServices" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices.property.allowedServices"></a>

```java
public java.util.List<java.lang.String> getAllowedServices();
```

- *Type:* java.util.List<java.lang.String>

The list of APIs usable within the Service Perimeter. Must be empty unless 'enableRestriction' is True.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#allowed_services AccessContextManagerServicePerimeters#allowed_services}

---

##### `enableRestriction`<sup>Optional</sup> <a name="enableRestriction" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices.property.enableRestriction"></a>

```java
public java.lang.Object getEnableRestriction();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to restrict API calls within the Service Perimeter to the list of APIs specified in 'allowedServices'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#enable_restriction AccessContextManagerServicePerimeters#enable_restriction}

---

### AccessContextManagerServicePerimetersServicePerimetersStatus <a name="AccessContextManagerServicePerimetersServicePerimetersStatus" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersStatus;

AccessContextManagerServicePerimetersServicePerimetersStatus.builder()
//  .accessLevels(java.util.List<java.lang.String>)
//  .egressPolicies(IResolvable)
//  .egressPolicies(java.util.List<AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies>)
//  .ingressPolicies(IResolvable)
//  .ingressPolicies(java.util.List<AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies>)
//  .resources(java.util.List<java.lang.String>)
//  .restrictedServices(java.util.List<java.lang.String>)
//  .vpcAccessibleServices(AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatus.property.accessLevels">accessLevels</a></code> | <code>java.util.List<java.lang.String></code> | A list of AccessLevel resource names that allow resources within the ServicePerimeter to be accessed from the internet. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatus.property.egressPolicies">egressPolicies</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies</a>></code> | egress_policies block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatus.property.ingressPolicies">ingressPolicies</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies</a>></code> | ingress_policies block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatus.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | A list of GCP resources that are inside of the service perimeter. Currently only projects are allowed. Format: projects/{project_number}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatus.property.restrictedServices">restrictedServices</a></code> | <code>java.util.List<java.lang.String></code> | GCP services that are subject to the Service Perimeter restrictions. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatus.property.vpcAccessibleServices">vpcAccessibleServices</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices">AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices</a></code> | vpc_accessible_services block. |

---

##### `accessLevels`<sup>Optional</sup> <a name="accessLevels" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatus.property.accessLevels"></a>

```java
public java.util.List<java.lang.String> getAccessLevels();
```

- *Type:* java.util.List<java.lang.String>

A list of AccessLevel resource names that allow resources within the ServicePerimeter to be accessed from the internet.

AccessLevels listed must be in the same policy as this
ServicePerimeter. Referencing a nonexistent AccessLevel is a
syntax error. If no AccessLevel names are listed, resources within
the perimeter can only be accessed via GCP calls with request
origins within the perimeter. For Service Perimeter Bridge, must
be empty.

Format: accessPolicies/{policy_id}/accessLevels/{access_level_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#access_levels AccessContextManagerServicePerimeters#access_levels}

---

##### `egressPolicies`<sup>Optional</sup> <a name="egressPolicies" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatus.property.egressPolicies"></a>

```java
public java.lang.Object getEgressPolicies();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies</a>>

egress_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#egress_policies AccessContextManagerServicePerimeters#egress_policies}

---

##### `ingressPolicies`<sup>Optional</sup> <a name="ingressPolicies" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatus.property.ingressPolicies"></a>

```java
public java.lang.Object getIngressPolicies();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies</a>>

ingress_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#ingress_policies AccessContextManagerServicePerimeters#ingress_policies}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatus.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

A list of GCP resources that are inside of the service perimeter. Currently only projects are allowed. Format: projects/{project_number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#resources AccessContextManagerServicePerimeters#resources}

---

##### `restrictedServices`<sup>Optional</sup> <a name="restrictedServices" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatus.property.restrictedServices"></a>

```java
public java.util.List<java.lang.String> getRestrictedServices();
```

- *Type:* java.util.List<java.lang.String>

GCP services that are subject to the Service Perimeter restrictions.

Must contain a list of services. For example, if
'storage.googleapis.com' is specified, access to the storage
buckets inside the perimeter must meet the perimeter's access
restrictions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#restricted_services AccessContextManagerServicePerimeters#restricted_services}

---

##### `vpcAccessibleServices`<sup>Optional</sup> <a name="vpcAccessibleServices" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatus.property.vpcAccessibleServices"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices getVpcAccessibleServices();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices">AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices</a>

vpc_accessible_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#vpc_accessible_services AccessContextManagerServicePerimeters#vpc_accessible_services}

---

### AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies <a name="AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies;

AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies.builder()
//  .egressFrom(AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom)
//  .egressTo(AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies.property.egressFrom">egressFrom</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom</a></code> | egress_from block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies.property.egressTo">egressTo</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo</a></code> | egress_to block. |

---

##### `egressFrom`<sup>Optional</sup> <a name="egressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies.property.egressFrom"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom getEgressFrom();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom</a>

egress_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#egress_from AccessContextManagerServicePerimeters#egress_from}

---

##### `egressTo`<sup>Optional</sup> <a name="egressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies.property.egressTo"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo getEgressTo();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo</a>

egress_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#egress_to AccessContextManagerServicePerimeters#egress_to}

---

### AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom <a name="AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom;

AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom.builder()
//  .identities(java.util.List<java.lang.String>)
//  .identityType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom.property.identities">identities</a></code> | <code>java.util.List<java.lang.String></code> | A list of identities that are allowed access through this 'EgressPolicy'. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom.property.identityType">identityType</a></code> | <code>java.lang.String</code> | Specifies the type of identities that are allowed access to outside the  perimeter. |

---

##### `identities`<sup>Optional</sup> <a name="identities" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom.property.identities"></a>

```java
public java.util.List<java.lang.String> getIdentities();
```

- *Type:* java.util.List<java.lang.String>

A list of identities that are allowed access through this 'EgressPolicy'.

Should be in the format of email address. The email address should
represent individual user or service account only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#identities AccessContextManagerServicePerimeters#identities}

---

##### `identityType`<sup>Optional</sup> <a name="identityType" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom.property.identityType"></a>

```java
public java.lang.String getIdentityType();
```

- *Type:* java.lang.String

Specifies the type of identities that are allowed access to outside the  perimeter.

If left unspecified, then members of 'identities' field will
be allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#identity_type AccessContextManagerServicePerimeters#identity_type}

---

### AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo <a name="AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo;

AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo.builder()
//  .externalResources(java.util.List<java.lang.String>)
//  .operations(IResolvable)
//  .operations(java.util.List<AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations>)
//  .resources(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo.property.externalResources">externalResources</a></code> | <code>java.util.List<java.lang.String></code> | A list of external resources that are allowed to be accessed. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo.property.operations">operations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations</a>></code> | operations block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | A list of resources, currently only projects in the form  'projects/<projectnumber>', that match this to stanza. |

---

##### `externalResources`<sup>Optional</sup> <a name="externalResources" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo.property.externalResources"></a>

```java
public java.util.List<java.lang.String> getExternalResources();
```

- *Type:* java.util.List<java.lang.String>

A list of external resources that are allowed to be accessed.

A request
matches if it contains an external resource in this list (Example:
s3://bucket/path). Currently '*' is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#external_resources AccessContextManagerServicePerimeters#external_resources}

---

##### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo.property.operations"></a>

```java
public java.lang.Object getOperations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations</a>>

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#operations AccessContextManagerServicePerimeters#operations}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

A list of resources, currently only projects in the form  'projects/<projectnumber>', that match this to stanza.

A request matches
if it contains a resource in this list. If * is specified for resources,
then this 'EgressTo' rule will authorize access to all resources outside
the perimeter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#resources AccessContextManagerServicePerimeters#resources}

---

### AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations <a name="AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations;

AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations.builder()
//  .methodSelectors(IResolvable)
//  .methodSelectors(java.util.List<AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors>)
//  .serviceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations.property.methodSelectors">methodSelectors</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors</a>></code> | method_selectors block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | The name of the API whose methods or permissions the 'IngressPolicy' or  'EgressPolicy' want to allow. |

---

##### `methodSelectors`<sup>Optional</sup> <a name="methodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations.property.methodSelectors"></a>

```java
public java.lang.Object getMethodSelectors();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors</a>>

method_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#method_selectors AccessContextManagerServicePerimeters#method_selectors}

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

The name of the API whose methods or permissions the 'IngressPolicy' or  'EgressPolicy' want to allow.

A single 'ApiOperation' with serviceName
field set to '*' will allow all methods AND permissions for all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#service_name AccessContextManagerServicePerimeters#service_name}

---

### AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors <a name="AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors;

AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors.builder()
//  .method(java.lang.String)
//  .permission(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors.property.method">method</a></code> | <code>java.lang.String</code> | Value for 'method' should be a valid method name for the corresponding  'serviceName' in 'ApiOperation'. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors.property.permission">permission</a></code> | <code>java.lang.String</code> | Value for permission should be a valid Cloud IAM permission for the  corresponding 'serviceName' in 'ApiOperation'. |

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

Value for 'method' should be a valid method name for the corresponding  'serviceName' in 'ApiOperation'.

If '*' used as value for method,
then ALL methods and permissions are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#method AccessContextManagerServicePerimeters#method}

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

Value for permission should be a valid Cloud IAM permission for the  corresponding 'serviceName' in 'ApiOperation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#permission AccessContextManagerServicePerimeters#permission}

---

### AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies <a name="AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies;

AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies.builder()
//  .ingressFrom(AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom)
//  .ingressTo(AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies.property.ingressFrom">ingressFrom</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom</a></code> | ingress_from block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies.property.ingressTo">ingressTo</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo</a></code> | ingress_to block. |

---

##### `ingressFrom`<sup>Optional</sup> <a name="ingressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies.property.ingressFrom"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom getIngressFrom();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom</a>

ingress_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#ingress_from AccessContextManagerServicePerimeters#ingress_from}

---

##### `ingressTo`<sup>Optional</sup> <a name="ingressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies.property.ingressTo"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo getIngressTo();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo</a>

ingress_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#ingress_to AccessContextManagerServicePerimeters#ingress_to}

---

### AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom <a name="AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom;

AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom.builder()
//  .identities(java.util.List<java.lang.String>)
//  .identityType(java.lang.String)
//  .sources(IResolvable)
//  .sources(java.util.List<AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom.property.identities">identities</a></code> | <code>java.util.List<java.lang.String></code> | A list of identities that are allowed access through this ingress policy. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom.property.identityType">identityType</a></code> | <code>java.lang.String</code> | Specifies the type of identities that are allowed access from outside the  perimeter. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom.property.sources">sources</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources</a>></code> | sources block. |

---

##### `identities`<sup>Optional</sup> <a name="identities" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom.property.identities"></a>

```java
public java.util.List<java.lang.String> getIdentities();
```

- *Type:* java.util.List<java.lang.String>

A list of identities that are allowed access through this ingress policy.

Should be in the format of email address. The email address should represent
individual user or service account only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#identities AccessContextManagerServicePerimeters#identities}

---

##### `identityType`<sup>Optional</sup> <a name="identityType" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom.property.identityType"></a>

```java
public java.lang.String getIdentityType();
```

- *Type:* java.lang.String

Specifies the type of identities that are allowed access from outside the  perimeter.

If left unspecified, then members of 'identities' field will be
allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#identity_type AccessContextManagerServicePerimeters#identity_type}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom.property.sources"></a>

```java
public java.lang.Object getSources();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources</a>>

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#sources AccessContextManagerServicePerimeters#sources}

---

### AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources <a name="AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources;

AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources.builder()
//  .accessLevel(java.lang.String)
//  .resource(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | An 'AccessLevel' resource name that allow resources within the  'ServicePerimeters' to be accessed from the internet. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources.property.resource">resource</a></code> | <code>java.lang.String</code> | A Google Cloud resource that is allowed to ingress the perimeter. |

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

An 'AccessLevel' resource name that allow resources within the  'ServicePerimeters' to be accessed from the internet.

'AccessLevels' listed
must be in the same policy as this 'ServicePerimeter'. Referencing a nonexistent
'AccessLevel' will cause an error. If no 'AccessLevel' names are listed,
resources within the perimeter can only be accessed via Google Cloud calls
with request origins within the perimeter.
Example 'accessPolicies/MY_POLICY/accessLevels/MY_LEVEL.'
If * is specified, then all IngressSources will be allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#access_level AccessContextManagerServicePerimeters#access_level}

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources.property.resource"></a>

```java
public java.lang.String getResource();
```

- *Type:* java.lang.String

A Google Cloud resource that is allowed to ingress the perimeter.

Requests from these resources will be allowed to access perimeter data.
Currently only projects are allowed. Format 'projects/{project_number}'
The project may be in any Google Cloud organization, not just the
organization that the perimeter is defined in. '*' is not allowed, the case
of allowing all Google Cloud resources only is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#resource AccessContextManagerServicePerimeters#resource}

---

### AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo <a name="AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo;

AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo.builder()
//  .operations(IResolvable)
//  .operations(java.util.List<AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations>)
//  .resources(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo.property.operations">operations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations</a>></code> | operations block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | A list of resources, currently only projects in the form  'projects/<projectnumber>', protected by this 'ServicePerimeter' that are allowed to be accessed by sources defined in the corresponding 'IngressFrom'. |

---

##### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo.property.operations"></a>

```java
public java.lang.Object getOperations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations</a>>

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#operations AccessContextManagerServicePerimeters#operations}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

A list of resources, currently only projects in the form  'projects/<projectnumber>', protected by this 'ServicePerimeter' that are allowed to be accessed by sources defined in the corresponding 'IngressFrom'.

A request matches if it contains
a resource in this list. If '*' is specified for resources,
then this 'IngressTo' rule will authorize access to all
resources inside the perimeter, provided that the request
also matches the 'operations' field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#resources AccessContextManagerServicePerimeters#resources}

---

### AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations <a name="AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations;

AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations.builder()
//  .methodSelectors(IResolvable)
//  .methodSelectors(java.util.List<AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors>)
//  .serviceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations.property.methodSelectors">methodSelectors</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors</a>></code> | method_selectors block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | The name of the API whose methods or permissions the 'IngressPolicy' or  'EgressPolicy' want to allow. |

---

##### `methodSelectors`<sup>Optional</sup> <a name="methodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations.property.methodSelectors"></a>

```java
public java.lang.Object getMethodSelectors();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors</a>>

method_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#method_selectors AccessContextManagerServicePerimeters#method_selectors}

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

The name of the API whose methods or permissions the 'IngressPolicy' or  'EgressPolicy' want to allow.

A single 'ApiOperation' with 'serviceName'
field set to '*' will allow all methods AND permissions for all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#service_name AccessContextManagerServicePerimeters#service_name}

---

### AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors <a name="AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors;

AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors.builder()
//  .method(java.lang.String)
//  .permission(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors.property.method">method</a></code> | <code>java.lang.String</code> | Value for method should be a valid method name for the corresponding  serviceName in 'ApiOperation'. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors.property.permission">permission</a></code> | <code>java.lang.String</code> | Value for permission should be a valid Cloud IAM permission for the  corresponding 'serviceName' in 'ApiOperation'. |

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

Value for method should be a valid method name for the corresponding  serviceName in 'ApiOperation'.

If '*' used as value for 'method', then
ALL methods and permissions are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#method AccessContextManagerServicePerimeters#method}

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

Value for permission should be a valid Cloud IAM permission for the  corresponding 'serviceName' in 'ApiOperation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#permission AccessContextManagerServicePerimeters#permission}

---

### AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices <a name="AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices;

AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices.builder()
//  .allowedServices(java.util.List<java.lang.String>)
//  .enableRestriction(java.lang.Boolean)
//  .enableRestriction(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices.property.allowedServices">allowedServices</a></code> | <code>java.util.List<java.lang.String></code> | The list of APIs usable within the Service Perimeter. Must be empty unless 'enableRestriction' is True. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices.property.enableRestriction">enableRestriction</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to restrict API calls within the Service Perimeter to the list of APIs specified in 'allowedServices'. |

---

##### `allowedServices`<sup>Optional</sup> <a name="allowedServices" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices.property.allowedServices"></a>

```java
public java.util.List<java.lang.String> getAllowedServices();
```

- *Type:* java.util.List<java.lang.String>

The list of APIs usable within the Service Perimeter. Must be empty unless 'enableRestriction' is True.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#allowed_services AccessContextManagerServicePerimeters#allowed_services}

---

##### `enableRestriction`<sup>Optional</sup> <a name="enableRestriction" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices.property.enableRestriction"></a>

```java
public java.lang.Object getEnableRestriction();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to restrict API calls within the Service Perimeter to the list of APIs specified in 'allowedServices'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#enable_restriction AccessContextManagerServicePerimeters#enable_restriction}

---

### AccessContextManagerServicePerimetersTimeouts <a name="AccessContextManagerServicePerimetersTimeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersTimeouts;

AccessContextManagerServicePerimetersTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#create AccessContextManagerServicePerimeters#create}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#delete AccessContextManagerServicePerimeters#delete}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#update AccessContextManagerServicePerimeters#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#create AccessContextManagerServicePerimeters#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#delete AccessContextManagerServicePerimeters#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/access_context_manager_service_perimeters#update AccessContextManagerServicePerimeters#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessContextManagerServicePerimetersServicePerimetersList <a name="AccessContextManagerServicePerimetersServicePerimetersList" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersList;

new AccessContextManagerServicePerimetersServicePerimetersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersList.get"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimeters">AccessContextManagerServicePerimetersServicePerimeters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimeters">AccessContextManagerServicePerimetersServicePerimeters</a>>

---


### AccessContextManagerServicePerimetersServicePerimetersOutputReference <a name="AccessContextManagerServicePerimetersServicePerimetersOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference;

new AccessContextManagerServicePerimetersServicePerimetersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.putStatus">putStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.resetPerimeterType">resetPerimeterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.resetSpec">resetSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.resetUseExplicitDryRunSpec">resetUseExplicitDryRunSpec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSpec` <a name="putSpec" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.putSpec"></a>

```java
public void putSpec(AccessContextManagerServicePerimetersServicePerimetersSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpec">AccessContextManagerServicePerimetersServicePerimetersSpec</a>

---

##### `putStatus` <a name="putStatus" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.putStatus"></a>

```java
public void putStatus(AccessContextManagerServicePerimetersServicePerimetersStatus value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.putStatus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatus">AccessContextManagerServicePerimetersServicePerimetersStatus</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetPerimeterType` <a name="resetPerimeterType" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.resetPerimeterType"></a>

```java
public void resetPerimeterType()
```

##### `resetSpec` <a name="resetSpec" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.resetSpec"></a>

```java
public void resetSpec()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetUseExplicitDryRunSpec` <a name="resetUseExplicitDryRunSpec" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.resetUseExplicitDryRunSpec"></a>

```java
public void resetUseExplicitDryRunSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference">AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.property.status">status</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference">AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.property.perimeterTypeInput">perimeterTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.property.specInput">specInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpec">AccessContextManagerServicePerimetersServicePerimetersSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.property.statusInput">statusInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatus">AccessContextManagerServicePerimetersServicePerimetersStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.property.useExplicitDryRunSpecInput">useExplicitDryRunSpecInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.property.perimeterType">perimeterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.property.useExplicitDryRunSpec">useExplicitDryRunSpec</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimeters">AccessContextManagerServicePerimetersServicePerimeters</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.property.spec"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference getSpec();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference">AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.property.status"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference getStatus();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference">AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `perimeterTypeInput`<sup>Optional</sup> <a name="perimeterTypeInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.property.perimeterTypeInput"></a>

```java
public java.lang.String getPerimeterTypeInput();
```

- *Type:* java.lang.String

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.property.specInput"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersSpec getSpecInput();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpec">AccessContextManagerServicePerimetersServicePerimetersSpec</a>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.property.statusInput"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersStatus getStatusInput();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatus">AccessContextManagerServicePerimetersServicePerimetersStatus</a>

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `useExplicitDryRunSpecInput`<sup>Optional</sup> <a name="useExplicitDryRunSpecInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.property.useExplicitDryRunSpecInput"></a>

```java
public java.lang.Object getUseExplicitDryRunSpecInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `perimeterType`<sup>Required</sup> <a name="perimeterType" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.property.perimeterType"></a>

```java
public java.lang.String getPerimeterType();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `useExplicitDryRunSpec`<sup>Required</sup> <a name="useExplicitDryRunSpec" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.property.useExplicitDryRunSpec"></a>

```java
public java.lang.Object getUseExplicitDryRunSpec();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimeters">AccessContextManagerServicePerimetersServicePerimeters</a> OR com.hashicorp.cdktf.IResolvable

---


### AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference <a name="AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference;

new AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.resetIdentities">resetIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.resetIdentityType">resetIdentityType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentities` <a name="resetIdentities" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.resetIdentities"></a>

```java
public void resetIdentities()
```

##### `resetIdentityType` <a name="resetIdentityType" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.resetIdentityType"></a>

```java
public void resetIdentityType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.property.identitiesInput">identitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.property.identityTypeInput">identityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.property.identities">identities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.property.identityType">identityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identitiesInput`<sup>Optional</sup> <a name="identitiesInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.property.identitiesInput"></a>

```java
public java.util.List<java.lang.String> getIdentitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityTypeInput`<sup>Optional</sup> <a name="identityTypeInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.property.identityTypeInput"></a>

```java
public java.lang.String getIdentityTypeInput();
```

- *Type:* java.lang.String

---

##### `identities`<sup>Required</sup> <a name="identities" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.property.identities"></a>

```java
public java.util.List<java.lang.String> getIdentities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityType`<sup>Required</sup> <a name="identityType" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.property.identityType"></a>

```java
public java.lang.String getIdentityType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference.property.internalValue"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom</a>

---


### AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsList <a name="AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsList" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsList;

new AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsList.get"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations</a>>

---


### AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsList <a name="AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsList" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsList;

new AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsList.get"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors</a>>

---


### AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference <a name="AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference;

new AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resetPermission">resetPermission</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetPermission` <a name="resetPermission" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resetPermission"></a>

```java
public void resetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.permissionInput">permissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.permission">permission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.permissionInput"></a>

```java
public java.lang.String getPermissionInput();
```

- *Type:* java.lang.String

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors</a> OR com.hashicorp.cdktf.IResolvable

---


### AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference <a name="AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference;

new AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.putMethodSelectors">putMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.resetMethodSelectors">resetMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMethodSelectors` <a name="putMethodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.putMethodSelectors"></a>

```java
public void putMethodSelectors(IResolvable OR java.util.List<AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.putMethodSelectors.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors</a>>

---

##### `resetMethodSelectors` <a name="resetMethodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.resetMethodSelectors"></a>

```java
public void resetMethodSelectors()
```

##### `resetServiceName` <a name="resetServiceName" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.resetServiceName"></a>

```java
public void resetServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.property.methodSelectors">methodSelectors</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsList">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.property.methodSelectorsInput">methodSelectorsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `methodSelectors`<sup>Required</sup> <a name="methodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.property.methodSelectors"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsList getMethodSelectors();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsList">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsList</a>

---

##### `methodSelectorsInput`<sup>Optional</sup> <a name="methodSelectorsInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.property.methodSelectorsInput"></a>

```java
public java.lang.Object getMethodSelectorsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors</a>>

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations</a> OR com.hashicorp.cdktf.IResolvable

---


### AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference <a name="AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference;

new AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.putOperations">putOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.resetExternalResources">resetExternalResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.resetOperations">resetOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.resetResources">resetResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOperations` <a name="putOperations" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.putOperations"></a>

```java
public void putOperations(IResolvable OR java.util.List<AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.putOperations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations</a>>

---

##### `resetExternalResources` <a name="resetExternalResources" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.resetExternalResources"></a>

```java
public void resetExternalResources()
```

##### `resetOperations` <a name="resetOperations" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.resetOperations"></a>

```java
public void resetOperations()
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.resetResources"></a>

```java
public void resetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.property.operations">operations</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsList">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.property.externalResourcesInput">externalResourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.property.operationsInput">operationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.property.externalResources">externalResources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.property.operations"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsList getOperations();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsList">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsList</a>

---

##### `externalResourcesInput`<sup>Optional</sup> <a name="externalResourcesInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.property.externalResourcesInput"></a>

```java
public java.util.List<java.lang.String> getExternalResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operationsInput`<sup>Optional</sup> <a name="operationsInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.property.operationsInput"></a>

```java
public java.lang.Object getOperationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations</a>>

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.property.resourcesInput"></a>

```java
public java.util.List<java.lang.String> getResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `externalResources`<sup>Required</sup> <a name="externalResources" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.property.externalResources"></a>

```java
public java.util.List<java.lang.String> getExternalResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference.property.internalValue"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo</a>

---


### AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesList <a name="AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesList" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesList;

new AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesList.get"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies</a>>

---


### AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference <a name="AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference;

new AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.putEgressFrom">putEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.putEgressTo">putEgressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.resetEgressFrom">resetEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.resetEgressTo">resetEgressTo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEgressFrom` <a name="putEgressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.putEgressFrom"></a>

```java
public void putEgressFrom(AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.putEgressFrom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom</a>

---

##### `putEgressTo` <a name="putEgressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.putEgressTo"></a>

```java
public void putEgressTo(AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.putEgressTo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo</a>

---

##### `resetEgressFrom` <a name="resetEgressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.resetEgressFrom"></a>

```java
public void resetEgressFrom()
```

##### `resetEgressTo` <a name="resetEgressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.resetEgressTo"></a>

```java
public void resetEgressTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.property.egressFrom">egressFrom</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.property.egressTo">egressTo</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.property.egressFromInput">egressFromInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.property.egressToInput">egressToInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `egressFrom`<sup>Required</sup> <a name="egressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.property.egressFrom"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference getEgressFrom();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference</a>

---

##### `egressTo`<sup>Required</sup> <a name="egressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.property.egressTo"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference getEgressTo();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference</a>

---

##### `egressFromInput`<sup>Optional</sup> <a name="egressFromInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.property.egressFromInput"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom getEgressFromInput();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom</a>

---

##### `egressToInput`<sup>Optional</sup> <a name="egressToInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.property.egressToInput"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo getEgressToInput();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies</a> OR com.hashicorp.cdktf.IResolvable

---


### AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference <a name="AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference;

new AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.putSources">putSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.resetIdentities">resetIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.resetIdentityType">resetIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.resetSources">resetSources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSources` <a name="putSources" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.putSources"></a>

```java
public void putSources(IResolvable OR java.util.List<AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.putSources.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources</a>>

---

##### `resetIdentities` <a name="resetIdentities" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.resetIdentities"></a>

```java
public void resetIdentities()
```

##### `resetIdentityType` <a name="resetIdentityType" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.resetIdentityType"></a>

```java
public void resetIdentityType()
```

##### `resetSources` <a name="resetSources" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.resetSources"></a>

```java
public void resetSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.property.sources">sources</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesList">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.property.identitiesInput">identitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.property.identityTypeInput">identityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.property.sourcesInput">sourcesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.property.identities">identities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.property.identityType">identityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.property.sources"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesList getSources();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesList">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesList</a>

---

##### `identitiesInput`<sup>Optional</sup> <a name="identitiesInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.property.identitiesInput"></a>

```java
public java.util.List<java.lang.String> getIdentitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityTypeInput`<sup>Optional</sup> <a name="identityTypeInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.property.identityTypeInput"></a>

```java
public java.lang.String getIdentityTypeInput();
```

- *Type:* java.lang.String

---

##### `sourcesInput`<sup>Optional</sup> <a name="sourcesInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.property.sourcesInput"></a>

```java
public java.lang.Object getSourcesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources</a>>

---

##### `identities`<sup>Required</sup> <a name="identities" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.property.identities"></a>

```java
public java.util.List<java.lang.String> getIdentities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityType`<sup>Required</sup> <a name="identityType" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.property.identityType"></a>

```java
public java.lang.String getIdentityType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference.property.internalValue"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom</a>

---


### AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesList <a name="AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesList" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesList;

new AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesList.get"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources</a>>

---


### AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference <a name="AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference;

new AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.resetResource">resetResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessLevel` <a name="resetAccessLevel" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.resetAccessLevel"></a>

```java
public void resetAccessLevel()
```

##### `resetResource` <a name="resetResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.resetResource"></a>

```java
public void resetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.property.accessLevelInput">accessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.property.resourceInput">resourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.property.resource">resource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.property.accessLevelInput"></a>

```java
public java.lang.String getAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.property.resourceInput"></a>

```java
public java.lang.String getResourceInput();
```

- *Type:* java.lang.String

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.property.resource"></a>

```java
public java.lang.String getResource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources</a> OR com.hashicorp.cdktf.IResolvable

---


### AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsList <a name="AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsList" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsList;

new AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsList.get"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations</a>>

---


### AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsList <a name="AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsList" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsList;

new AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsList.get"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors</a>>

---


### AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference <a name="AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference;

new AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resetPermission">resetPermission</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetPermission` <a name="resetPermission" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resetPermission"></a>

```java
public void resetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.permissionInput">permissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.permission">permission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.permissionInput"></a>

```java
public java.lang.String getPermissionInput();
```

- *Type:* java.lang.String

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors</a> OR com.hashicorp.cdktf.IResolvable

---


### AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference <a name="AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference;

new AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.putMethodSelectors">putMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.resetMethodSelectors">resetMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMethodSelectors` <a name="putMethodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.putMethodSelectors"></a>

```java
public void putMethodSelectors(IResolvable OR java.util.List<AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.putMethodSelectors.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors</a>>

---

##### `resetMethodSelectors` <a name="resetMethodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.resetMethodSelectors"></a>

```java
public void resetMethodSelectors()
```

##### `resetServiceName` <a name="resetServiceName" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.resetServiceName"></a>

```java
public void resetServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.property.methodSelectors">methodSelectors</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsList">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.property.methodSelectorsInput">methodSelectorsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `methodSelectors`<sup>Required</sup> <a name="methodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.property.methodSelectors"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsList getMethodSelectors();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsList">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsList</a>

---

##### `methodSelectorsInput`<sup>Optional</sup> <a name="methodSelectorsInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.property.methodSelectorsInput"></a>

```java
public java.lang.Object getMethodSelectorsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors</a>>

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations</a> OR com.hashicorp.cdktf.IResolvable

---


### AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference <a name="AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference;

new AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.putOperations">putOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.resetOperations">resetOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.resetResources">resetResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOperations` <a name="putOperations" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.putOperations"></a>

```java
public void putOperations(IResolvable OR java.util.List<AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.putOperations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations</a>>

---

##### `resetOperations` <a name="resetOperations" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.resetOperations"></a>

```java
public void resetOperations()
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.resetResources"></a>

```java
public void resetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.property.operations">operations</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsList">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.property.operationsInput">operationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.property.operations"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsList getOperations();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsList">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsList</a>

---

##### `operationsInput`<sup>Optional</sup> <a name="operationsInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.property.operationsInput"></a>

```java
public java.lang.Object getOperationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations</a>>

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.property.resourcesInput"></a>

```java
public java.util.List<java.lang.String> getResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference.property.internalValue"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo</a>

---


### AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesList <a name="AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesList" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesList;

new AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesList.get"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies</a>>

---


### AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference <a name="AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference;

new AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.putIngressFrom">putIngressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.putIngressTo">putIngressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.resetIngressFrom">resetIngressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.resetIngressTo">resetIngressTo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIngressFrom` <a name="putIngressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.putIngressFrom"></a>

```java
public void putIngressFrom(AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.putIngressFrom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom</a>

---

##### `putIngressTo` <a name="putIngressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.putIngressTo"></a>

```java
public void putIngressTo(AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.putIngressTo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo</a>

---

##### `resetIngressFrom` <a name="resetIngressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.resetIngressFrom"></a>

```java
public void resetIngressFrom()
```

##### `resetIngressTo` <a name="resetIngressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.resetIngressTo"></a>

```java
public void resetIngressTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.property.ingressFrom">ingressFrom</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.property.ingressTo">ingressTo</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.property.ingressFromInput">ingressFromInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.property.ingressToInput">ingressToInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ingressFrom`<sup>Required</sup> <a name="ingressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.property.ingressFrom"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference getIngressFrom();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference</a>

---

##### `ingressTo`<sup>Required</sup> <a name="ingressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.property.ingressTo"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference getIngressTo();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference</a>

---

##### `ingressFromInput`<sup>Optional</sup> <a name="ingressFromInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.property.ingressFromInput"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom getIngressFromInput();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom</a>

---

##### `ingressToInput`<sup>Optional</sup> <a name="ingressToInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.property.ingressToInput"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo getIngressToInput();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies</a> OR com.hashicorp.cdktf.IResolvable

---


### AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference <a name="AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference;

new AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.putEgressPolicies">putEgressPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.putIngressPolicies">putIngressPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.putVpcAccessibleServices">putVpcAccessibleServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.resetAccessLevels">resetAccessLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.resetEgressPolicies">resetEgressPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.resetIngressPolicies">resetIngressPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.resetRestrictedServices">resetRestrictedServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.resetVpcAccessibleServices">resetVpcAccessibleServices</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEgressPolicies` <a name="putEgressPolicies" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.putEgressPolicies"></a>

```java
public void putEgressPolicies(IResolvable OR java.util.List<AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.putEgressPolicies.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies</a>>

---

##### `putIngressPolicies` <a name="putIngressPolicies" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.putIngressPolicies"></a>

```java
public void putIngressPolicies(IResolvable OR java.util.List<AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.putIngressPolicies.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies</a>>

---

##### `putVpcAccessibleServices` <a name="putVpcAccessibleServices" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.putVpcAccessibleServices"></a>

```java
public void putVpcAccessibleServices(AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.putVpcAccessibleServices.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices">AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices</a>

---

##### `resetAccessLevels` <a name="resetAccessLevels" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.resetAccessLevels"></a>

```java
public void resetAccessLevels()
```

##### `resetEgressPolicies` <a name="resetEgressPolicies" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.resetEgressPolicies"></a>

```java
public void resetEgressPolicies()
```

##### `resetIngressPolicies` <a name="resetIngressPolicies" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.resetIngressPolicies"></a>

```java
public void resetIngressPolicies()
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.resetResources"></a>

```java
public void resetResources()
```

##### `resetRestrictedServices` <a name="resetRestrictedServices" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.resetRestrictedServices"></a>

```java
public void resetRestrictedServices()
```

##### `resetVpcAccessibleServices` <a name="resetVpcAccessibleServices" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.resetVpcAccessibleServices"></a>

```java
public void resetVpcAccessibleServices()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.property.egressPolicies">egressPolicies</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesList">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.property.ingressPolicies">ingressPolicies</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesList">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.property.vpcAccessibleServices">vpcAccessibleServices</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference">AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.property.accessLevelsInput">accessLevelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.property.egressPoliciesInput">egressPoliciesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.property.ingressPoliciesInput">ingressPoliciesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.property.restrictedServicesInput">restrictedServicesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.property.vpcAccessibleServicesInput">vpcAccessibleServicesInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices">AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.property.accessLevels">accessLevels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.property.restrictedServices">restrictedServices</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpec">AccessContextManagerServicePerimetersServicePerimetersSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `egressPolicies`<sup>Required</sup> <a name="egressPolicies" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.property.egressPolicies"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesList getEgressPolicies();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesList">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesList</a>

---

##### `ingressPolicies`<sup>Required</sup> <a name="ingressPolicies" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.property.ingressPolicies"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesList getIngressPolicies();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesList">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesList</a>

---

##### `vpcAccessibleServices`<sup>Required</sup> <a name="vpcAccessibleServices" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.property.vpcAccessibleServices"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference getVpcAccessibleServices();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference">AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference</a>

---

##### `accessLevelsInput`<sup>Optional</sup> <a name="accessLevelsInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.property.accessLevelsInput"></a>

```java
public java.util.List<java.lang.String> getAccessLevelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `egressPoliciesInput`<sup>Optional</sup> <a name="egressPoliciesInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.property.egressPoliciesInput"></a>

```java
public java.lang.Object getEgressPoliciesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies">AccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies</a>>

---

##### `ingressPoliciesInput`<sup>Optional</sup> <a name="ingressPoliciesInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.property.ingressPoliciesInput"></a>

```java
public java.lang.Object getIngressPoliciesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies">AccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies</a>>

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.property.resourcesInput"></a>

```java
public java.util.List<java.lang.String> getResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `restrictedServicesInput`<sup>Optional</sup> <a name="restrictedServicesInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.property.restrictedServicesInput"></a>

```java
public java.util.List<java.lang.String> getRestrictedServicesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcAccessibleServicesInput`<sup>Optional</sup> <a name="vpcAccessibleServicesInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.property.vpcAccessibleServicesInput"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices getVpcAccessibleServicesInput();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices">AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices</a>

---

##### `accessLevels`<sup>Required</sup> <a name="accessLevels" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.property.accessLevels"></a>

```java
public java.util.List<java.lang.String> getAccessLevels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `restrictedServices`<sup>Required</sup> <a name="restrictedServices" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.property.restrictedServices"></a>

```java
public java.util.List<java.lang.String> getRestrictedServices();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecOutputReference.property.internalValue"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpec">AccessContextManagerServicePerimetersServicePerimetersSpec</a>

---


### AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference <a name="AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference;

new AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.resetAllowedServices">resetAllowedServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.resetEnableRestriction">resetEnableRestriction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedServices` <a name="resetAllowedServices" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.resetAllowedServices"></a>

```java
public void resetAllowedServices()
```

##### `resetEnableRestriction` <a name="resetEnableRestriction" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.resetEnableRestriction"></a>

```java
public void resetEnableRestriction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.property.allowedServicesInput">allowedServicesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.property.enableRestrictionInput">enableRestrictionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.property.allowedServices">allowedServices</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.property.enableRestriction">enableRestriction</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices">AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedServicesInput`<sup>Optional</sup> <a name="allowedServicesInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.property.allowedServicesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedServicesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableRestrictionInput`<sup>Optional</sup> <a name="enableRestrictionInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.property.enableRestrictionInput"></a>

```java
public java.lang.Object getEnableRestrictionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedServices`<sup>Required</sup> <a name="allowedServices" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.property.allowedServices"></a>

```java
public java.util.List<java.lang.String> getAllowedServices();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableRestriction`<sup>Required</sup> <a name="enableRestriction" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.property.enableRestriction"></a>

```java
public java.lang.Object getEnableRestriction();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference.property.internalValue"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices">AccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices</a>

---


### AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference <a name="AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference;

new AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.resetIdentities">resetIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.resetIdentityType">resetIdentityType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentities` <a name="resetIdentities" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.resetIdentities"></a>

```java
public void resetIdentities()
```

##### `resetIdentityType` <a name="resetIdentityType" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.resetIdentityType"></a>

```java
public void resetIdentityType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.property.identitiesInput">identitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.property.identityTypeInput">identityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.property.identities">identities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.property.identityType">identityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identitiesInput`<sup>Optional</sup> <a name="identitiesInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.property.identitiesInput"></a>

```java
public java.util.List<java.lang.String> getIdentitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityTypeInput`<sup>Optional</sup> <a name="identityTypeInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.property.identityTypeInput"></a>

```java
public java.lang.String getIdentityTypeInput();
```

- *Type:* java.lang.String

---

##### `identities`<sup>Required</sup> <a name="identities" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.property.identities"></a>

```java
public java.util.List<java.lang.String> getIdentities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityType`<sup>Required</sup> <a name="identityType" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.property.identityType"></a>

```java
public java.lang.String getIdentityType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference.property.internalValue"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom</a>

---


### AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsList <a name="AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsList" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsList;

new AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsList.get"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations</a>>

---


### AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsList <a name="AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsList" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsList;

new AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsList.get"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors</a>>

---


### AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference <a name="AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference;

new AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resetPermission">resetPermission</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetPermission` <a name="resetPermission" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resetPermission"></a>

```java
public void resetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.permissionInput">permissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.permission">permission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.permissionInput"></a>

```java
public java.lang.String getPermissionInput();
```

- *Type:* java.lang.String

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors</a> OR com.hashicorp.cdktf.IResolvable

---


### AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference <a name="AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference;

new AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.putMethodSelectors">putMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.resetMethodSelectors">resetMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMethodSelectors` <a name="putMethodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.putMethodSelectors"></a>

```java
public void putMethodSelectors(IResolvable OR java.util.List<AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.putMethodSelectors.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors</a>>

---

##### `resetMethodSelectors` <a name="resetMethodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.resetMethodSelectors"></a>

```java
public void resetMethodSelectors()
```

##### `resetServiceName` <a name="resetServiceName" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.resetServiceName"></a>

```java
public void resetServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.property.methodSelectors">methodSelectors</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsList">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.property.methodSelectorsInput">methodSelectorsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `methodSelectors`<sup>Required</sup> <a name="methodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.property.methodSelectors"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsList getMethodSelectors();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsList">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsList</a>

---

##### `methodSelectorsInput`<sup>Optional</sup> <a name="methodSelectorsInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.property.methodSelectorsInput"></a>

```java
public java.lang.Object getMethodSelectorsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors</a>>

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations</a> OR com.hashicorp.cdktf.IResolvable

---


### AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference <a name="AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference;

new AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.putOperations">putOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.resetExternalResources">resetExternalResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.resetOperations">resetOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.resetResources">resetResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOperations` <a name="putOperations" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.putOperations"></a>

```java
public void putOperations(IResolvable OR java.util.List<AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.putOperations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations</a>>

---

##### `resetExternalResources` <a name="resetExternalResources" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.resetExternalResources"></a>

```java
public void resetExternalResources()
```

##### `resetOperations` <a name="resetOperations" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.resetOperations"></a>

```java
public void resetOperations()
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.resetResources"></a>

```java
public void resetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.property.operations">operations</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsList">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.property.externalResourcesInput">externalResourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.property.operationsInput">operationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.property.externalResources">externalResources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.property.operations"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsList getOperations();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsList">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsList</a>

---

##### `externalResourcesInput`<sup>Optional</sup> <a name="externalResourcesInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.property.externalResourcesInput"></a>

```java
public java.util.List<java.lang.String> getExternalResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operationsInput`<sup>Optional</sup> <a name="operationsInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.property.operationsInput"></a>

```java
public java.lang.Object getOperationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations</a>>

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.property.resourcesInput"></a>

```java
public java.util.List<java.lang.String> getResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `externalResources`<sup>Required</sup> <a name="externalResources" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.property.externalResources"></a>

```java
public java.util.List<java.lang.String> getExternalResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference.property.internalValue"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo</a>

---


### AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesList <a name="AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesList" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesList;

new AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesList.get"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies</a>>

---


### AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference <a name="AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference;

new AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.putEgressFrom">putEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.putEgressTo">putEgressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.resetEgressFrom">resetEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.resetEgressTo">resetEgressTo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEgressFrom` <a name="putEgressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.putEgressFrom"></a>

```java
public void putEgressFrom(AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.putEgressFrom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom</a>

---

##### `putEgressTo` <a name="putEgressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.putEgressTo"></a>

```java
public void putEgressTo(AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.putEgressTo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo</a>

---

##### `resetEgressFrom` <a name="resetEgressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.resetEgressFrom"></a>

```java
public void resetEgressFrom()
```

##### `resetEgressTo` <a name="resetEgressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.resetEgressTo"></a>

```java
public void resetEgressTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.property.egressFrom">egressFrom</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.property.egressTo">egressTo</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.property.egressFromInput">egressFromInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.property.egressToInput">egressToInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `egressFrom`<sup>Required</sup> <a name="egressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.property.egressFrom"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference getEgressFrom();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference</a>

---

##### `egressTo`<sup>Required</sup> <a name="egressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.property.egressTo"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference getEgressTo();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference</a>

---

##### `egressFromInput`<sup>Optional</sup> <a name="egressFromInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.property.egressFromInput"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom getEgressFromInput();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom</a>

---

##### `egressToInput`<sup>Optional</sup> <a name="egressToInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.property.egressToInput"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo getEgressToInput();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies</a> OR com.hashicorp.cdktf.IResolvable

---


### AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference <a name="AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference;

new AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.putSources">putSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.resetIdentities">resetIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.resetIdentityType">resetIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.resetSources">resetSources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSources` <a name="putSources" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.putSources"></a>

```java
public void putSources(IResolvable OR java.util.List<AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.putSources.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources</a>>

---

##### `resetIdentities` <a name="resetIdentities" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.resetIdentities"></a>

```java
public void resetIdentities()
```

##### `resetIdentityType` <a name="resetIdentityType" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.resetIdentityType"></a>

```java
public void resetIdentityType()
```

##### `resetSources` <a name="resetSources" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.resetSources"></a>

```java
public void resetSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.property.sources">sources</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesList">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.property.identitiesInput">identitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.property.identityTypeInput">identityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.property.sourcesInput">sourcesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.property.identities">identities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.property.identityType">identityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.property.sources"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesList getSources();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesList">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesList</a>

---

##### `identitiesInput`<sup>Optional</sup> <a name="identitiesInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.property.identitiesInput"></a>

```java
public java.util.List<java.lang.String> getIdentitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityTypeInput`<sup>Optional</sup> <a name="identityTypeInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.property.identityTypeInput"></a>

```java
public java.lang.String getIdentityTypeInput();
```

- *Type:* java.lang.String

---

##### `sourcesInput`<sup>Optional</sup> <a name="sourcesInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.property.sourcesInput"></a>

```java
public java.lang.Object getSourcesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources</a>>

---

##### `identities`<sup>Required</sup> <a name="identities" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.property.identities"></a>

```java
public java.util.List<java.lang.String> getIdentities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityType`<sup>Required</sup> <a name="identityType" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.property.identityType"></a>

```java
public java.lang.String getIdentityType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference.property.internalValue"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom</a>

---


### AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesList <a name="AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesList" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesList;

new AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesList.get"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources</a>>

---


### AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference <a name="AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference;

new AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.resetResource">resetResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessLevel` <a name="resetAccessLevel" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.resetAccessLevel"></a>

```java
public void resetAccessLevel()
```

##### `resetResource` <a name="resetResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.resetResource"></a>

```java
public void resetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.property.accessLevelInput">accessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.property.resourceInput">resourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.property.resource">resource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.property.accessLevelInput"></a>

```java
public java.lang.String getAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.property.resourceInput"></a>

```java
public java.lang.String getResourceInput();
```

- *Type:* java.lang.String

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.property.resource"></a>

```java
public java.lang.String getResource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources</a> OR com.hashicorp.cdktf.IResolvable

---


### AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsList <a name="AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsList" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsList;

new AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsList.get"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations</a>>

---


### AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsList <a name="AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsList" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsList;

new AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsList.get"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors</a>>

---


### AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference <a name="AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference;

new AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resetPermission">resetPermission</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetPermission` <a name="resetPermission" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resetPermission"></a>

```java
public void resetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.permissionInput">permissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.permission">permission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.permissionInput"></a>

```java
public java.lang.String getPermissionInput();
```

- *Type:* java.lang.String

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors</a> OR com.hashicorp.cdktf.IResolvable

---


### AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference <a name="AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference;

new AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.putMethodSelectors">putMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.resetMethodSelectors">resetMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMethodSelectors` <a name="putMethodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.putMethodSelectors"></a>

```java
public void putMethodSelectors(IResolvable OR java.util.List<AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.putMethodSelectors.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors</a>>

---

##### `resetMethodSelectors` <a name="resetMethodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.resetMethodSelectors"></a>

```java
public void resetMethodSelectors()
```

##### `resetServiceName` <a name="resetServiceName" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.resetServiceName"></a>

```java
public void resetServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.property.methodSelectors">methodSelectors</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsList">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.property.methodSelectorsInput">methodSelectorsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `methodSelectors`<sup>Required</sup> <a name="methodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.property.methodSelectors"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsList getMethodSelectors();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsList">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsList</a>

---

##### `methodSelectorsInput`<sup>Optional</sup> <a name="methodSelectorsInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.property.methodSelectorsInput"></a>

```java
public java.lang.Object getMethodSelectorsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors</a>>

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations</a> OR com.hashicorp.cdktf.IResolvable

---


### AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference <a name="AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference;

new AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.putOperations">putOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.resetOperations">resetOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.resetResources">resetResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOperations` <a name="putOperations" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.putOperations"></a>

```java
public void putOperations(IResolvable OR java.util.List<AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.putOperations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations</a>>

---

##### `resetOperations` <a name="resetOperations" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.resetOperations"></a>

```java
public void resetOperations()
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.resetResources"></a>

```java
public void resetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.property.operations">operations</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsList">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.property.operationsInput">operationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.property.operations"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsList getOperations();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsList">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsList</a>

---

##### `operationsInput`<sup>Optional</sup> <a name="operationsInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.property.operationsInput"></a>

```java
public java.lang.Object getOperationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations</a>>

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.property.resourcesInput"></a>

```java
public java.util.List<java.lang.String> getResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference.property.internalValue"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo</a>

---


### AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesList <a name="AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesList" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesList;

new AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesList.get"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies</a>>

---


### AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference <a name="AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference;

new AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.putIngressFrom">putIngressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.putIngressTo">putIngressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.resetIngressFrom">resetIngressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.resetIngressTo">resetIngressTo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIngressFrom` <a name="putIngressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.putIngressFrom"></a>

```java
public void putIngressFrom(AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.putIngressFrom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom</a>

---

##### `putIngressTo` <a name="putIngressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.putIngressTo"></a>

```java
public void putIngressTo(AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.putIngressTo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo</a>

---

##### `resetIngressFrom` <a name="resetIngressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.resetIngressFrom"></a>

```java
public void resetIngressFrom()
```

##### `resetIngressTo` <a name="resetIngressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.resetIngressTo"></a>

```java
public void resetIngressTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.property.ingressFrom">ingressFrom</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.property.ingressTo">ingressTo</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.property.ingressFromInput">ingressFromInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.property.ingressToInput">ingressToInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ingressFrom`<sup>Required</sup> <a name="ingressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.property.ingressFrom"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference getIngressFrom();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference</a>

---

##### `ingressTo`<sup>Required</sup> <a name="ingressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.property.ingressTo"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference getIngressTo();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference</a>

---

##### `ingressFromInput`<sup>Optional</sup> <a name="ingressFromInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.property.ingressFromInput"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom getIngressFromInput();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom</a>

---

##### `ingressToInput`<sup>Optional</sup> <a name="ingressToInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.property.ingressToInput"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo getIngressToInput();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies</a> OR com.hashicorp.cdktf.IResolvable

---


### AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference <a name="AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference;

new AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.putEgressPolicies">putEgressPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.putIngressPolicies">putIngressPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.putVpcAccessibleServices">putVpcAccessibleServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.resetAccessLevels">resetAccessLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.resetEgressPolicies">resetEgressPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.resetIngressPolicies">resetIngressPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.resetRestrictedServices">resetRestrictedServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.resetVpcAccessibleServices">resetVpcAccessibleServices</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEgressPolicies` <a name="putEgressPolicies" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.putEgressPolicies"></a>

```java
public void putEgressPolicies(IResolvable OR java.util.List<AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.putEgressPolicies.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies</a>>

---

##### `putIngressPolicies` <a name="putIngressPolicies" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.putIngressPolicies"></a>

```java
public void putIngressPolicies(IResolvable OR java.util.List<AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.putIngressPolicies.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies</a>>

---

##### `putVpcAccessibleServices` <a name="putVpcAccessibleServices" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.putVpcAccessibleServices"></a>

```java
public void putVpcAccessibleServices(AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.putVpcAccessibleServices.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices">AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices</a>

---

##### `resetAccessLevels` <a name="resetAccessLevels" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.resetAccessLevels"></a>

```java
public void resetAccessLevels()
```

##### `resetEgressPolicies` <a name="resetEgressPolicies" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.resetEgressPolicies"></a>

```java
public void resetEgressPolicies()
```

##### `resetIngressPolicies` <a name="resetIngressPolicies" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.resetIngressPolicies"></a>

```java
public void resetIngressPolicies()
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.resetResources"></a>

```java
public void resetResources()
```

##### `resetRestrictedServices` <a name="resetRestrictedServices" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.resetRestrictedServices"></a>

```java
public void resetRestrictedServices()
```

##### `resetVpcAccessibleServices` <a name="resetVpcAccessibleServices" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.resetVpcAccessibleServices"></a>

```java
public void resetVpcAccessibleServices()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.property.egressPolicies">egressPolicies</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesList">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.property.ingressPolicies">ingressPolicies</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesList">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.property.vpcAccessibleServices">vpcAccessibleServices</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference">AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.property.accessLevelsInput">accessLevelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.property.egressPoliciesInput">egressPoliciesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.property.ingressPoliciesInput">ingressPoliciesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.property.restrictedServicesInput">restrictedServicesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.property.vpcAccessibleServicesInput">vpcAccessibleServicesInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices">AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.property.accessLevels">accessLevels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.property.restrictedServices">restrictedServices</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatus">AccessContextManagerServicePerimetersServicePerimetersStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `egressPolicies`<sup>Required</sup> <a name="egressPolicies" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.property.egressPolicies"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesList getEgressPolicies();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesList">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesList</a>

---

##### `ingressPolicies`<sup>Required</sup> <a name="ingressPolicies" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.property.ingressPolicies"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesList getIngressPolicies();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesList">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesList</a>

---

##### `vpcAccessibleServices`<sup>Required</sup> <a name="vpcAccessibleServices" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.property.vpcAccessibleServices"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference getVpcAccessibleServices();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference">AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference</a>

---

##### `accessLevelsInput`<sup>Optional</sup> <a name="accessLevelsInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.property.accessLevelsInput"></a>

```java
public java.util.List<java.lang.String> getAccessLevelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `egressPoliciesInput`<sup>Optional</sup> <a name="egressPoliciesInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.property.egressPoliciesInput"></a>

```java
public java.lang.Object getEgressPoliciesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies">AccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies</a>>

---

##### `ingressPoliciesInput`<sup>Optional</sup> <a name="ingressPoliciesInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.property.ingressPoliciesInput"></a>

```java
public java.lang.Object getIngressPoliciesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies">AccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies</a>>

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.property.resourcesInput"></a>

```java
public java.util.List<java.lang.String> getResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `restrictedServicesInput`<sup>Optional</sup> <a name="restrictedServicesInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.property.restrictedServicesInput"></a>

```java
public java.util.List<java.lang.String> getRestrictedServicesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcAccessibleServicesInput`<sup>Optional</sup> <a name="vpcAccessibleServicesInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.property.vpcAccessibleServicesInput"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices getVpcAccessibleServicesInput();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices">AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices</a>

---

##### `accessLevels`<sup>Required</sup> <a name="accessLevels" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.property.accessLevels"></a>

```java
public java.util.List<java.lang.String> getAccessLevels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `restrictedServices`<sup>Required</sup> <a name="restrictedServices" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.property.restrictedServices"></a>

```java
public java.util.List<java.lang.String> getRestrictedServices();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusOutputReference.property.internalValue"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersStatus getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatus">AccessContextManagerServicePerimetersServicePerimetersStatus</a>

---


### AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference <a name="AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference;

new AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.resetAllowedServices">resetAllowedServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.resetEnableRestriction">resetEnableRestriction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedServices` <a name="resetAllowedServices" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.resetAllowedServices"></a>

```java
public void resetAllowedServices()
```

##### `resetEnableRestriction` <a name="resetEnableRestriction" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.resetEnableRestriction"></a>

```java
public void resetEnableRestriction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.property.allowedServicesInput">allowedServicesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.property.enableRestrictionInput">enableRestrictionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.property.allowedServices">allowedServices</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.property.enableRestriction">enableRestriction</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices">AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedServicesInput`<sup>Optional</sup> <a name="allowedServicesInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.property.allowedServicesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedServicesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableRestrictionInput`<sup>Optional</sup> <a name="enableRestrictionInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.property.enableRestrictionInput"></a>

```java
public java.lang.Object getEnableRestrictionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedServices`<sup>Required</sup> <a name="allowedServices" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.property.allowedServices"></a>

```java
public java.util.List<java.lang.String> getAllowedServices();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableRestriction`<sup>Required</sup> <a name="enableRestriction" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.property.enableRestriction"></a>

```java
public java.lang.Object getEnableRestriction();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference.property.internalValue"></a>

```java
public AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices">AccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices</a>

---


### AccessContextManagerServicePerimetersTimeoutsOutputReference <a name="AccessContextManagerServicePerimetersTimeoutsOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_service_perimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference;

new AccessContextManagerServicePerimetersTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeouts">AccessContextManagerServicePerimetersTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeters.AccessContextManagerServicePerimetersTimeouts">AccessContextManagerServicePerimetersTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



