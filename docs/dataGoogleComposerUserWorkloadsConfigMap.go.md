# `dataGoogleComposerUserWorkloadsConfigMap` Submodule <a name="`dataGoogleComposerUserWorkloadsConfigMap` Submodule" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComposerUserWorkloadsConfigMap <a name="DataGoogleComposerUserWorkloadsConfigMap" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/composer_user_workloads_config_map google_composer_user_workloads_config_map}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglecomposeruserworkloadsconfigmap"

datagooglecomposeruserworkloadsconfigmap.NewDataGoogleComposerUserWorkloadsConfigMap(scope Construct, id *string, config DataGoogleComposerUserWorkloadsConfigMapConfig) DataGoogleComposerUserWorkloadsConfigMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig">DataGoogleComposerUserWorkloadsConfigMapConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig">DataGoogleComposerUserWorkloadsConfigMapConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleComposerUserWorkloadsConfigMap resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglecomposeruserworkloadsconfigmap"

datagooglecomposeruserworkloadsconfigmap.DataGoogleComposerUserWorkloadsConfigMap_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglecomposeruserworkloadsconfigmap"

datagooglecomposeruserworkloadsconfigmap.DataGoogleComposerUserWorkloadsConfigMap_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglecomposeruserworkloadsconfigmap"

datagooglecomposeruserworkloadsconfigmap.DataGoogleComposerUserWorkloadsConfigMap_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglecomposeruserworkloadsconfigmap"

datagooglecomposeruserworkloadsconfigmap.DataGoogleComposerUserWorkloadsConfigMap_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleComposerUserWorkloadsConfigMap resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleComposerUserWorkloadsConfigMap to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleComposerUserWorkloadsConfigMap that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/composer_user_workloads_config_map#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComposerUserWorkloadsConfigMap to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.data">Data</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.data"></a>

```go
func Data() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComposerUserWorkloadsConfigMapConfig <a name="DataGoogleComposerUserWorkloadsConfigMapConfig" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglecomposeruserworkloadsconfigmap"

&datagooglecomposeruserworkloadsconfigmap.DataGoogleComposerUserWorkloadsConfigMapConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Environment: *string,
	Name: *string,
	Id: *string,
	Project: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.environment">Environment</a></code> | <code>*string</code> | Environment where the Kubernetes ConfigMap will be stored and used. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.name">Name</a></code> | <code>*string</code> | Name of the Kubernetes ConfigMap. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/composer_user_workloads_config_map#id DataGoogleComposerUserWorkloadsConfigMap#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/composer_user_workloads_config_map#project DataGoogleComposerUserWorkloadsConfigMap#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.region">Region</a></code> | <code>*string</code> | The location or Compute Engine region for the environment. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

Environment where the Kubernetes ConfigMap will be stored and used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/composer_user_workloads_config_map#environment DataGoogleComposerUserWorkloadsConfigMap#environment}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the Kubernetes ConfigMap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/composer_user_workloads_config_map#name DataGoogleComposerUserWorkloadsConfigMap#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/composer_user_workloads_config_map#id DataGoogleComposerUserWorkloadsConfigMap#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/composer_user_workloads_config_map#project DataGoogleComposerUserWorkloadsConfigMap#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The location or Compute Engine region for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/composer_user_workloads_config_map#region DataGoogleComposerUserWorkloadsConfigMap#region}

---



