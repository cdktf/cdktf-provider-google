# `dataGoogleVmwareengineExternalAccessRule` Submodule <a name="`dataGoogleVmwareengineExternalAccessRule` Submodule" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleVmwareengineExternalAccessRule <a name="DataGoogleVmwareengineExternalAccessRule" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/data-sources/vmwareengine_external_access_rule google_vmwareengine_external_access_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_vmwareengine_external_access_rule.DataGoogleVmwareengineExternalAccessRule;

DataGoogleVmwareengineExternalAccessRule.Builder.create(Construct scope, java.lang.String id)
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
    .parent(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The ID of the external access rule. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The resource name of the network policy. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: projects/my-project/locations/us-west1-a/networkPolicies/my-policy. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/data-sources/vmwareengine_external_access_rule#id DataGoogleVmwareengineExternalAccessRule#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The ID of the external access rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/data-sources/vmwareengine_external_access_rule#name DataGoogleVmwareengineExternalAccessRule#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The resource name of the network policy. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: projects/my-project/locations/us-west1-a/networkPolicies/my-policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/data-sources/vmwareengine_external_access_rule#parent DataGoogleVmwareengineExternalAccessRule#parent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/data-sources/vmwareengine_external_access_rule#id DataGoogleVmwareengineExternalAccessRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleVmwareengineExternalAccessRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_vmwareengine_external_access_rule.DataGoogleVmwareengineExternalAccessRule;

DataGoogleVmwareengineExternalAccessRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_vmwareengine_external_access_rule.DataGoogleVmwareengineExternalAccessRule;

DataGoogleVmwareengineExternalAccessRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_vmwareengine_external_access_rule.DataGoogleVmwareengineExternalAccessRule;

DataGoogleVmwareengineExternalAccessRule.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_vmwareengine_external_access_rule.DataGoogleVmwareengineExternalAccessRule;

DataGoogleVmwareengineExternalAccessRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleVmwareengineExternalAccessRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleVmwareengineExternalAccessRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleVmwareengineExternalAccessRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleVmwareengineExternalAccessRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/data-sources/vmwareengine_external_access_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleVmwareengineExternalAccessRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.destinationIpRanges">destinationIpRanges</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList">DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.destinationPorts">destinationPorts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.ipProtocol">ipProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.sourceIpRanges">sourceIpRanges</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList">DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.sourcePorts">sourcePorts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `destinationIpRanges`<sup>Required</sup> <a name="destinationIpRanges" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.destinationIpRanges"></a>

```java
public DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList getDestinationIpRanges();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList">DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList</a>

---

##### `destinationPorts`<sup>Required</sup> <a name="destinationPorts" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.destinationPorts"></a>

```java
public java.util.List<java.lang.String> getDestinationPorts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.ipProtocol"></a>

```java
public java.lang.String getIpProtocol();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `sourceIpRanges`<sup>Required</sup> <a name="sourceIpRanges" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.sourceIpRanges"></a>

```java
public DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList getSourceIpRanges();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList">DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList</a>

---

##### `sourcePorts`<sup>Required</sup> <a name="sourcePorts" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.sourcePorts"></a>

```java
public java.util.List<java.lang.String> getSourcePorts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleVmwareengineExternalAccessRuleConfig <a name="DataGoogleVmwareengineExternalAccessRuleConfig" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_vmwareengine_external_access_rule.DataGoogleVmwareengineExternalAccessRuleConfig;

DataGoogleVmwareengineExternalAccessRuleConfig.builder()
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
    .parent(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | The ID of the external access rule. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The resource name of the network policy. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: projects/my-project/locations/us-west1-a/networkPolicies/my-policy. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/data-sources/vmwareengine_external_access_rule#id DataGoogleVmwareengineExternalAccessRule#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The ID of the external access rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/data-sources/vmwareengine_external_access_rule#name DataGoogleVmwareengineExternalAccessRule#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The resource name of the network policy. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: projects/my-project/locations/us-west1-a/networkPolicies/my-policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/data-sources/vmwareengine_external_access_rule#parent DataGoogleVmwareengineExternalAccessRule#parent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/data-sources/vmwareengine_external_access_rule#id DataGoogleVmwareengineExternalAccessRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleVmwareengineExternalAccessRuleDestinationIpRanges <a name="DataGoogleVmwareengineExternalAccessRuleDestinationIpRanges" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRanges.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_vmwareengine_external_access_rule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRanges;

DataGoogleVmwareengineExternalAccessRuleDestinationIpRanges.builder()
    .build();
```


### DataGoogleVmwareengineExternalAccessRuleSourceIpRanges <a name="DataGoogleVmwareengineExternalAccessRuleSourceIpRanges" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRanges.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_vmwareengine_external_access_rule.DataGoogleVmwareengineExternalAccessRuleSourceIpRanges;

DataGoogleVmwareengineExternalAccessRuleSourceIpRanges.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList <a name="DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_vmwareengine_external_access_rule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList;

new DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.get"></a>

```java
public DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference <a name="DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_vmwareengine_external_access_rule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference;

new DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.externalAddress">externalAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.ipAddressRange">ipAddressRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRanges">DataGoogleVmwareengineExternalAccessRuleDestinationIpRanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `externalAddress`<sup>Required</sup> <a name="externalAddress" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.externalAddress"></a>

```java
public java.lang.String getExternalAddress();
```

- *Type:* java.lang.String

---

##### `ipAddressRange`<sup>Required</sup> <a name="ipAddressRange" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.ipAddressRange"></a>

```java
public java.lang.String getIpAddressRange();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.internalValue"></a>

```java
public DataGoogleVmwareengineExternalAccessRuleDestinationIpRanges getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRanges">DataGoogleVmwareengineExternalAccessRuleDestinationIpRanges</a>

---


### DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList <a name="DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_vmwareengine_external_access_rule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList;

new DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.get"></a>

```java
public DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference <a name="DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_vmwareengine_external_access_rule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference;

new DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddressRange">ipAddressRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRanges">DataGoogleVmwareengineExternalAccessRuleSourceIpRanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `ipAddressRange`<sup>Required</sup> <a name="ipAddressRange" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddressRange"></a>

```java
public java.lang.String getIpAddressRange();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.internalValue"></a>

```java
public DataGoogleVmwareengineExternalAccessRuleSourceIpRanges getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRanges">DataGoogleVmwareengineExternalAccessRuleSourceIpRanges</a>

---



