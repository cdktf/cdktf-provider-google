# `dataGoogleParameterManagerRegionalParameters` Submodule <a name="`dataGoogleParameterManagerRegionalParameters` Submodule" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleParameterManagerRegionalParameters <a name="DataGoogleParameterManagerRegionalParameters" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/parameter_manager_regional_parameters google_parameter_manager_regional_parameters}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_parameter_manager_regional_parameters.DataGoogleParameterManagerRegionalParameters;

DataGoogleParameterManagerRegionalParameters.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/parameter_manager_regional_parameters#location DataGoogleParameterManagerRegionalParameters#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.filter">filter</a></code> | <code>java.lang.String</code> | Filter string, adhering to the rules in List-operation filtering. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/parameter_manager_regional_parameters#id DataGoogleParameterManagerRegionalParameters#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/parameter_manager_regional_parameters#project DataGoogleParameterManagerRegionalParameters#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/parameter_manager_regional_parameters#location DataGoogleParameterManagerRegionalParameters#location}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.filter"></a>

- *Type:* java.lang.String

Filter string, adhering to the rules in List-operation filtering.

List only parameters matching the filter.
If filter is empty, all regional parameters are listed from specific location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/parameter_manager_regional_parameters#filter DataGoogleParameterManagerRegionalParameters#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/parameter_manager_regional_parameters#id DataGoogleParameterManagerRegionalParameters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/parameter_manager_regional_parameters#project DataGoogleParameterManagerRegionalParameters#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleParameterManagerRegionalParameters resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_parameter_manager_regional_parameters.DataGoogleParameterManagerRegionalParameters;

DataGoogleParameterManagerRegionalParameters.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_parameter_manager_regional_parameters.DataGoogleParameterManagerRegionalParameters;

DataGoogleParameterManagerRegionalParameters.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_parameter_manager_regional_parameters.DataGoogleParameterManagerRegionalParameters;

DataGoogleParameterManagerRegionalParameters.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_parameter_manager_regional_parameters.DataGoogleParameterManagerRegionalParameters;

DataGoogleParameterManagerRegionalParameters.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleParameterManagerRegionalParameters.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleParameterManagerRegionalParameters resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleParameterManagerRegionalParameters to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleParameterManagerRegionalParameters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/parameter_manager_regional_parameters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleParameterManagerRegionalParameters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList">DataGoogleParameterManagerRegionalParametersParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.parameters"></a>

```java
public DataGoogleParameterManagerRegionalParametersParametersList getParameters();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList">DataGoogleParameterManagerRegionalParametersParametersList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleParameterManagerRegionalParametersConfig <a name="DataGoogleParameterManagerRegionalParametersConfig" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_parameter_manager_regional_parameters.DataGoogleParameterManagerRegionalParametersConfig;

DataGoogleParameterManagerRegionalParametersConfig.builder()
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
//  .filter(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/parameter_manager_regional_parameters#location DataGoogleParameterManagerRegionalParameters#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.filter">filter</a></code> | <code>java.lang.String</code> | Filter string, adhering to the rules in List-operation filtering. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/parameter_manager_regional_parameters#id DataGoogleParameterManagerRegionalParameters#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/parameter_manager_regional_parameters#project DataGoogleParameterManagerRegionalParameters#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/parameter_manager_regional_parameters#location DataGoogleParameterManagerRegionalParameters#location}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

Filter string, adhering to the rules in List-operation filtering.

List only parameters matching the filter.
If filter is empty, all regional parameters are listed from specific location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/parameter_manager_regional_parameters#filter DataGoogleParameterManagerRegionalParameters#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/parameter_manager_regional_parameters#id DataGoogleParameterManagerRegionalParameters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/parameter_manager_regional_parameters#project DataGoogleParameterManagerRegionalParameters#project}.

---

### DataGoogleParameterManagerRegionalParametersParameters <a name="DataGoogleParameterManagerRegionalParametersParameters" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_parameter_manager_regional_parameters.DataGoogleParameterManagerRegionalParametersParameters;

DataGoogleParameterManagerRegionalParametersParameters.builder()
    .build();
```


### DataGoogleParameterManagerRegionalParametersParametersPolicyMember <a name="DataGoogleParameterManagerRegionalParametersParametersPolicyMember" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMember"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMember.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_parameter_manager_regional_parameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMember;

DataGoogleParameterManagerRegionalParametersParametersPolicyMember.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleParameterManagerRegionalParametersParametersList <a name="DataGoogleParameterManagerRegionalParametersParametersList" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_parameter_manager_regional_parameters.DataGoogleParameterManagerRegionalParametersParametersList;

new DataGoogleParameterManagerRegionalParametersParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.get"></a>

```java
public DataGoogleParameterManagerRegionalParametersParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleParameterManagerRegionalParametersParametersOutputReference <a name="DataGoogleParameterManagerRegionalParametersParametersOutputReference" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_parameter_manager_regional_parameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference;

new DataGoogleParameterManagerRegionalParametersParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.labels">labels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.parameterId">parameterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.policyMember">policyMember</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList">DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParameters">DataGoogleParameterManagerRegionalParametersParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.labels"></a>

```java
public StringMap getLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameterId`<sup>Required</sup> <a name="parameterId" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.parameterId"></a>

```java
public java.lang.String getParameterId();
```

- *Type:* java.lang.String

---

##### `policyMember`<sup>Required</sup> <a name="policyMember" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.policyMember"></a>

```java
public DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList getPolicyMember();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList">DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList</a>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.internalValue"></a>

```java
public DataGoogleParameterManagerRegionalParametersParameters getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParameters">DataGoogleParameterManagerRegionalParametersParameters</a>

---


### DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList <a name="DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_parameter_manager_regional_parameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList;

new DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.get"></a>

```java
public DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference <a name="DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_parameter_manager_regional_parameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference;

new DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.property.iamPolicyNamePrincipal">iamPolicyNamePrincipal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.property.iamPolicyUidPrincipal">iamPolicyUidPrincipal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMember">DataGoogleParameterManagerRegionalParametersParametersPolicyMember</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `iamPolicyNamePrincipal`<sup>Required</sup> <a name="iamPolicyNamePrincipal" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.property.iamPolicyNamePrincipal"></a>

```java
public java.lang.String getIamPolicyNamePrincipal();
```

- *Type:* java.lang.String

---

##### `iamPolicyUidPrincipal`<sup>Required</sup> <a name="iamPolicyUidPrincipal" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.property.iamPolicyUidPrincipal"></a>

```java
public java.lang.String getIamPolicyUidPrincipal();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.property.internalValue"></a>

```java
public DataGoogleParameterManagerRegionalParametersParametersPolicyMember getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMember">DataGoogleParameterManagerRegionalParametersParametersPolicyMember</a>

---



