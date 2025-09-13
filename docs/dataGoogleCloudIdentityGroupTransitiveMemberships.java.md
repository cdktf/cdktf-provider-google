# `dataGoogleCloudIdentityGroupTransitiveMemberships` Submodule <a name="`dataGoogleCloudIdentityGroupTransitiveMemberships` Submodule" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudIdentityGroupTransitiveMemberships <a name="DataGoogleCloudIdentityGroupTransitiveMemberships" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/cloud_identity_group_transitive_memberships google_cloud_identity_group_transitive_memberships}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_identity_group_transitive_memberships.DataGoogleCloudIdentityGroupTransitiveMemberships;

DataGoogleCloudIdentityGroupTransitiveMemberships.Builder.create(Construct scope, java.lang.String id)
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
    .group(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.group">group</a></code> | <code>java.lang.String</code> | The name of the Group to get memberships from. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/cloud_identity_group_transitive_memberships#id DataGoogleCloudIdentityGroupTransitiveMemberships#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.group"></a>

- *Type:* java.lang.String

The name of the Group to get memberships from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/cloud_identity_group_transitive_memberships#group DataGoogleCloudIdentityGroupTransitiveMemberships#group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/cloud_identity_group_transitive_memberships#id DataGoogleCloudIdentityGroupTransitiveMemberships#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleCloudIdentityGroupTransitiveMemberships resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_identity_group_transitive_memberships.DataGoogleCloudIdentityGroupTransitiveMemberships;

DataGoogleCloudIdentityGroupTransitiveMemberships.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_identity_group_transitive_memberships.DataGoogleCloudIdentityGroupTransitiveMemberships;

DataGoogleCloudIdentityGroupTransitiveMemberships.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_identity_group_transitive_memberships.DataGoogleCloudIdentityGroupTransitiveMemberships;

DataGoogleCloudIdentityGroupTransitiveMemberships.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_identity_group_transitive_memberships.DataGoogleCloudIdentityGroupTransitiveMemberships;

DataGoogleCloudIdentityGroupTransitiveMemberships.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleCloudIdentityGroupTransitiveMemberships.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleCloudIdentityGroupTransitiveMemberships resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleCloudIdentityGroupTransitiveMemberships to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleCloudIdentityGroupTransitiveMemberships that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/cloud_identity_group_transitive_memberships#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudIdentityGroupTransitiveMemberships to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.memberships">memberships</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList">DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.groupInput">groupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.group">group</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `memberships`<sup>Required</sup> <a name="memberships" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.memberships"></a>

```java
public DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList getMemberships();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList">DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList</a>

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.groupInput"></a>

```java
public java.lang.String getGroupInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudIdentityGroupTransitiveMembershipsConfig <a name="DataGoogleCloudIdentityGroupTransitiveMembershipsConfig" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_identity_group_transitive_memberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig;

DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.builder()
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
    .group(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.group">group</a></code> | <code>java.lang.String</code> | The name of the Group to get memberships from. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/cloud_identity_group_transitive_memberships#id DataGoogleCloudIdentityGroupTransitiveMemberships#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

The name of the Group to get memberships from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/cloud_identity_group_transitive_memberships#group DataGoogleCloudIdentityGroupTransitiveMemberships#group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/cloud_identity_group_transitive_memberships#id DataGoogleCloudIdentityGroupTransitiveMemberships#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships <a name="DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_identity_group_transitive_memberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships;

DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships.builder()
    .build();
```


### DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey <a name="DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_identity_group_transitive_memberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey;

DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey.builder()
    .build();
```


### DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles <a name="DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_identity_group_transitive_memberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles;

DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList <a name="DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_identity_group_transitive_memberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList;

new DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.get"></a>

```java
public DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference <a name="DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_identity_group_transitive_memberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference;

new DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.member">member</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.preferredMemberKey">preferredMemberKey</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList">DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.relationType">relationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.roles">roles</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList">DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships">DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

---

##### `preferredMemberKey`<sup>Required</sup> <a name="preferredMemberKey" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.preferredMemberKey"></a>

```java
public DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList getPreferredMemberKey();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList">DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList</a>

---

##### `relationType`<sup>Required</sup> <a name="relationType" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.relationType"></a>

```java
public java.lang.String getRelationType();
```

- *Type:* java.lang.String

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.roles"></a>

```java
public DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList getRoles();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList">DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships">DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships</a>

---


### DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList <a name="DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_identity_group_transitive_memberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList;

new DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.get"></a>

```java
public DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference <a name="DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_identity_group_transitive_memberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference;

new DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey">DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey">DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey</a>

---


### DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList <a name="DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_identity_group_transitive_memberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList;

new DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.get"></a>

```java
public DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference <a name="DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_identity_group_transitive_memberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference;

new DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles">DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles">DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles</a>

---



