# `dataGoogleComposerEnvironment` Submodule <a name="`dataGoogleComposerEnvironment` Submodule" id="@cdktf/provider-google.dataGoogleComposerEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComposerEnvironment <a name="DataGoogleComposerEnvironment" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/composer_environment google_composer_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironment(scope Construct, id *string, config DataGoogleComposerEnvironmentConfig) DataGoogleComposerEnvironment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig">DataGoogleComposerEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig">DataGoogleComposerEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleComposerEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.DataGoogleComposerEnvironment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.DataGoogleComposerEnvironment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.DataGoogleComposerEnvironment_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.DataGoogleComposerEnvironment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleComposerEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleComposerEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleComposerEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/composer_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComposerEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList">DataGoogleComposerEnvironmentConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.labels">Labels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.storageConfig">StorageConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigList">DataGoogleComposerEnvironmentStorageConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.config"></a>

```go
func Config() DataGoogleComposerEnvironmentConfigAList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList">DataGoogleComposerEnvironmentConfigAList</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `StorageConfig`<sup>Required</sup> <a name="StorageConfig" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.storageConfig"></a>

```go
func StorageConfig() DataGoogleComposerEnvironmentStorageConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigList">DataGoogleComposerEnvironmentStorageConfigList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComposerEnvironmentConfig <a name="DataGoogleComposerEnvironmentConfig" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

&datagooglecomposerenvironment.DataGoogleComposerEnvironmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	Project: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.name">Name</a></code> | <code>*string</code> | Name of the environment. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/composer_environment#id DataGoogleComposerEnvironment#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.project">Project</a></code> | <code>*string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.region">Region</a></code> | <code>*string</code> | The location or Compute Engine region for the environment. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/composer_environment#name DataGoogleComposerEnvironment#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/composer_environment#id DataGoogleComposerEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/composer_environment#project DataGoogleComposerEnvironment#project}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The location or Compute Engine region for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/composer_environment#region DataGoogleComposerEnvironment#region}

---

### DataGoogleComposerEnvironmentConfigA <a name="DataGoogleComposerEnvironmentConfigA" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

&datagooglecomposerenvironment.DataGoogleComposerEnvironmentConfigA {

}
```


### DataGoogleComposerEnvironmentConfigDatabaseConfig <a name="DataGoogleComposerEnvironmentConfigDatabaseConfig" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

&datagooglecomposerenvironment.DataGoogleComposerEnvironmentConfigDatabaseConfig {

}
```


### DataGoogleComposerEnvironmentConfigDataRetentionConfig <a name="DataGoogleComposerEnvironmentConfigDataRetentionConfig" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

&datagooglecomposerenvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfig {

}
```


### DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig <a name="DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

&datagooglecomposerenvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig {

}
```


### DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig <a name="DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

&datagooglecomposerenvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig {

}
```


### DataGoogleComposerEnvironmentConfigEncryptionConfig <a name="DataGoogleComposerEnvironmentConfigEncryptionConfig" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

&datagooglecomposerenvironment.DataGoogleComposerEnvironmentConfigEncryptionConfig {

}
```


### DataGoogleComposerEnvironmentConfigMaintenanceWindow <a name="DataGoogleComposerEnvironmentConfigMaintenanceWindow" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

&datagooglecomposerenvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindow {

}
```


### DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig <a name="DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

&datagooglecomposerenvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig {

}
```


### DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks <a name="DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

&datagooglecomposerenvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks {

}
```


### DataGoogleComposerEnvironmentConfigNodeConfig <a name="DataGoogleComposerEnvironmentConfigNodeConfig" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

&datagooglecomposerenvironment.DataGoogleComposerEnvironmentConfigNodeConfig {

}
```


### DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy <a name="DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

&datagooglecomposerenvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy {

}
```


### DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfig <a name="DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfig" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

&datagooglecomposerenvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfig {

}
```


### DataGoogleComposerEnvironmentConfigRecoveryConfig <a name="DataGoogleComposerEnvironmentConfigRecoveryConfig" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

&datagooglecomposerenvironment.DataGoogleComposerEnvironmentConfigRecoveryConfig {

}
```


### DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig <a name="DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

&datagooglecomposerenvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig {

}
```


### DataGoogleComposerEnvironmentConfigSoftwareConfig <a name="DataGoogleComposerEnvironmentConfigSoftwareConfig" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

&datagooglecomposerenvironment.DataGoogleComposerEnvironmentConfigSoftwareConfig {

}
```


### DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration <a name="DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

&datagooglecomposerenvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration {

}
```


### DataGoogleComposerEnvironmentConfigWebServerConfig <a name="DataGoogleComposerEnvironmentConfigWebServerConfig" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

&datagooglecomposerenvironment.DataGoogleComposerEnvironmentConfigWebServerConfig {

}
```


### DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControl <a name="DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControl" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

&datagooglecomposerenvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControl {

}
```


### DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange <a name="DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

&datagooglecomposerenvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange {

}
```


### DataGoogleComposerEnvironmentConfigWorkloadsConfig <a name="DataGoogleComposerEnvironmentConfigWorkloadsConfig" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

&datagooglecomposerenvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfig {

}
```


### DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor <a name="DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

&datagooglecomposerenvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor {

}
```


### DataGoogleComposerEnvironmentConfigWorkloadsConfigScheduler <a name="DataGoogleComposerEnvironmentConfigWorkloadsConfigScheduler" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigScheduler"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigScheduler.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

&datagooglecomposerenvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigScheduler {

}
```


### DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggerer <a name="DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggerer" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggerer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggerer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

&datagooglecomposerenvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggerer {

}
```


### DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServer <a name="DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServer" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

&datagooglecomposerenvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServer {

}
```


### DataGoogleComposerEnvironmentConfigWorkloadsConfigWorker <a name="DataGoogleComposerEnvironmentConfigWorkloadsConfigWorker" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorker"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorker.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

&datagooglecomposerenvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorker {

}
```


### DataGoogleComposerEnvironmentStorageConfig <a name="DataGoogleComposerEnvironmentStorageConfig" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

&datagooglecomposerenvironment.DataGoogleComposerEnvironmentStorageConfig {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComposerEnvironmentConfigAList <a name="DataGoogleComposerEnvironmentConfigAList" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigAList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComposerEnvironmentConfigAList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.get"></a>

```go
func Get(index *f64) DataGoogleComposerEnvironmentConfigAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComposerEnvironmentConfigAOutputReference <a name="DataGoogleComposerEnvironmentConfigAOutputReference" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComposerEnvironmentConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.airflowUri">AirflowUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.dagGcsPrefix">DagGcsPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.databaseConfig">DatabaseConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList">DataGoogleComposerEnvironmentConfigDatabaseConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.dataRetentionConfig">DataRetentionConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigList">DataGoogleComposerEnvironmentConfigDataRetentionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.enablePrivateBuildsOnly">EnablePrivateBuildsOnly</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.enablePrivateEnvironment">EnablePrivateEnvironment</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList">DataGoogleComposerEnvironmentConfigEncryptionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.environmentSize">EnvironmentSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.gkeCluster">GkeCluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList">DataGoogleComposerEnvironmentConfigMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.masterAuthorizedNetworksConfig">MasterAuthorizedNetworksConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList">DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.nodeConfig">NodeConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList">DataGoogleComposerEnvironmentConfigNodeConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.privateEnvironmentConfig">PrivateEnvironmentConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList">DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.recoveryConfig">RecoveryConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList">DataGoogleComposerEnvironmentConfigRecoveryConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.resilienceMode">ResilienceMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.softwareConfig">SoftwareConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList">DataGoogleComposerEnvironmentConfigSoftwareConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.webServerConfig">WebServerConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList">DataGoogleComposerEnvironmentConfigWebServerConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.webServerNetworkAccessControl">WebServerNetworkAccessControl</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList">DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.workloadsConfig">WorkloadsConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList">DataGoogleComposerEnvironmentConfigWorkloadsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigA">DataGoogleComposerEnvironmentConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AirflowUri`<sup>Required</sup> <a name="AirflowUri" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.airflowUri"></a>

```go
func AirflowUri() *string
```

- *Type:* *string

---

##### `DagGcsPrefix`<sup>Required</sup> <a name="DagGcsPrefix" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.dagGcsPrefix"></a>

```go
func DagGcsPrefix() *string
```

- *Type:* *string

---

##### `DatabaseConfig`<sup>Required</sup> <a name="DatabaseConfig" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.databaseConfig"></a>

```go
func DatabaseConfig() DataGoogleComposerEnvironmentConfigDatabaseConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList">DataGoogleComposerEnvironmentConfigDatabaseConfigList</a>

---

##### `DataRetentionConfig`<sup>Required</sup> <a name="DataRetentionConfig" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.dataRetentionConfig"></a>

```go
func DataRetentionConfig() DataGoogleComposerEnvironmentConfigDataRetentionConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigList">DataGoogleComposerEnvironmentConfigDataRetentionConfigList</a>

---

##### `EnablePrivateBuildsOnly`<sup>Required</sup> <a name="EnablePrivateBuildsOnly" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.enablePrivateBuildsOnly"></a>

```go
func EnablePrivateBuildsOnly() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EnablePrivateEnvironment`<sup>Required</sup> <a name="EnablePrivateEnvironment" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.enablePrivateEnvironment"></a>

```go
func EnablePrivateEnvironment() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EncryptionConfig`<sup>Required</sup> <a name="EncryptionConfig" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.encryptionConfig"></a>

```go
func EncryptionConfig() DataGoogleComposerEnvironmentConfigEncryptionConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList">DataGoogleComposerEnvironmentConfigEncryptionConfigList</a>

---

##### `EnvironmentSize`<sup>Required</sup> <a name="EnvironmentSize" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.environmentSize"></a>

```go
func EnvironmentSize() *string
```

- *Type:* *string

---

##### `GkeCluster`<sup>Required</sup> <a name="GkeCluster" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.gkeCluster"></a>

```go
func GkeCluster() *string
```

- *Type:* *string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.maintenanceWindow"></a>

```go
func MaintenanceWindow() DataGoogleComposerEnvironmentConfigMaintenanceWindowList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList">DataGoogleComposerEnvironmentConfigMaintenanceWindowList</a>

---

##### `MasterAuthorizedNetworksConfig`<sup>Required</sup> <a name="MasterAuthorizedNetworksConfig" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.masterAuthorizedNetworksConfig"></a>

```go
func MasterAuthorizedNetworksConfig() DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList">DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList</a>

---

##### `NodeConfig`<sup>Required</sup> <a name="NodeConfig" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.nodeConfig"></a>

```go
func NodeConfig() DataGoogleComposerEnvironmentConfigNodeConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList">DataGoogleComposerEnvironmentConfigNodeConfigList</a>

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.nodeCount"></a>

```go
func NodeCount() *f64
```

- *Type:* *f64

---

##### `PrivateEnvironmentConfig`<sup>Required</sup> <a name="PrivateEnvironmentConfig" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.privateEnvironmentConfig"></a>

```go
func PrivateEnvironmentConfig() DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList">DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList</a>

---

##### `RecoveryConfig`<sup>Required</sup> <a name="RecoveryConfig" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.recoveryConfig"></a>

```go
func RecoveryConfig() DataGoogleComposerEnvironmentConfigRecoveryConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList">DataGoogleComposerEnvironmentConfigRecoveryConfigList</a>

---

##### `ResilienceMode`<sup>Required</sup> <a name="ResilienceMode" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.resilienceMode"></a>

```go
func ResilienceMode() *string
```

- *Type:* *string

---

##### `SoftwareConfig`<sup>Required</sup> <a name="SoftwareConfig" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.softwareConfig"></a>

```go
func SoftwareConfig() DataGoogleComposerEnvironmentConfigSoftwareConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList">DataGoogleComposerEnvironmentConfigSoftwareConfigList</a>

---

##### `WebServerConfig`<sup>Required</sup> <a name="WebServerConfig" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.webServerConfig"></a>

```go
func WebServerConfig() DataGoogleComposerEnvironmentConfigWebServerConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList">DataGoogleComposerEnvironmentConfigWebServerConfigList</a>

---

##### `WebServerNetworkAccessControl`<sup>Required</sup> <a name="WebServerNetworkAccessControl" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.webServerNetworkAccessControl"></a>

```go
func WebServerNetworkAccessControl() DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList">DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList</a>

---

##### `WorkloadsConfig`<sup>Required</sup> <a name="WorkloadsConfig" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.workloadsConfig"></a>

```go
func WorkloadsConfig() DataGoogleComposerEnvironmentConfigWorkloadsConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList">DataGoogleComposerEnvironmentConfigWorkloadsConfigList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComposerEnvironmentConfigA
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigA">DataGoogleComposerEnvironmentConfigA</a>

---


### DataGoogleComposerEnvironmentConfigDatabaseConfigList <a name="DataGoogleComposerEnvironmentConfigDatabaseConfigList" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigDatabaseConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComposerEnvironmentConfigDatabaseConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.get"></a>

```go
func Get(index *f64) DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference <a name="DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfig">DataGoogleComposerEnvironmentConfigDatabaseConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComposerEnvironmentConfigDatabaseConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfig">DataGoogleComposerEnvironmentConfigDatabaseConfig</a>

---


### DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList <a name="DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.get"></a>

```go
func Get(index *f64) DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference <a name="DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.retentionDays">RetentionDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.retentionMode">RetentionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig">DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.retentionDays"></a>

```go
func RetentionDays() *f64
```

- *Type:* *f64

---

##### `RetentionMode`<sup>Required</sup> <a name="RetentionMode" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.retentionMode"></a>

```go
func RetentionMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig">DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig</a>

---


### DataGoogleComposerEnvironmentConfigDataRetentionConfigList <a name="DataGoogleComposerEnvironmentConfigDataRetentionConfigList" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigDataRetentionConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComposerEnvironmentConfigDataRetentionConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigList.get"></a>

```go
func Get(index *f64) DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference <a name="DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.airflowMetadataRetentionConfig">AirflowMetadataRetentionConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList">DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.taskLogsRetentionConfig">TaskLogsRetentionConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList">DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfig">DataGoogleComposerEnvironmentConfigDataRetentionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AirflowMetadataRetentionConfig`<sup>Required</sup> <a name="AirflowMetadataRetentionConfig" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.airflowMetadataRetentionConfig"></a>

```go
func AirflowMetadataRetentionConfig() DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList">DataGoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList</a>

---

##### `TaskLogsRetentionConfig`<sup>Required</sup> <a name="TaskLogsRetentionConfig" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.taskLogsRetentionConfig"></a>

```go
func TaskLogsRetentionConfig() DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList">DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComposerEnvironmentConfigDataRetentionConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfig">DataGoogleComposerEnvironmentConfigDataRetentionConfig</a>

---


### DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList <a name="DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.get"></a>

```go
func Get(index *f64) DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference <a name="DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.storageMode">StorageMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig">DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StorageMode`<sup>Required</sup> <a name="StorageMode" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.storageMode"></a>

```go
func StorageMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig">DataGoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig</a>

---


### DataGoogleComposerEnvironmentConfigEncryptionConfigList <a name="DataGoogleComposerEnvironmentConfigEncryptionConfigList" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigEncryptionConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComposerEnvironmentConfigEncryptionConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.get"></a>

```go
func Get(index *f64) DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference <a name="DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfig">DataGoogleComposerEnvironmentConfigEncryptionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComposerEnvironmentConfigEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfig">DataGoogleComposerEnvironmentConfigEncryptionConfig</a>

---


### DataGoogleComposerEnvironmentConfigMaintenanceWindowList <a name="DataGoogleComposerEnvironmentConfigMaintenanceWindowList" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigMaintenanceWindowList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComposerEnvironmentConfigMaintenanceWindowList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.get"></a>

```go
func Get(index *f64) DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference <a name="DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.recurrence">Recurrence</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindow">DataGoogleComposerEnvironmentConfigMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `Recurrence`<sup>Required</sup> <a name="Recurrence" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.recurrence"></a>

```go
func Recurrence() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComposerEnvironmentConfigMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindow">DataGoogleComposerEnvironmentConfigMaintenanceWindow</a>

---


### DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList <a name="DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.get"></a>

```go
func Get(index *f64) DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference <a name="DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.cidrBlock">CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks">DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.cidrBlock"></a>

```go
func CidrBlock() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks">DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks</a>

---


### DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList <a name="DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.get"></a>

```go
func Get(index *f64) DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference <a name="DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.cidrBlocks">CidrBlocks</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList">DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig">DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CidrBlocks`<sup>Required</sup> <a name="CidrBlocks" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.cidrBlocks"></a>

```go
func CidrBlocks() DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList">DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig">DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a>

---


### DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList <a name="DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.get"></a>

```go
func Get(index *f64) DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference <a name="DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterIpv4CidrBlock">ClusterIpv4CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterSecondaryRangeName">ClusterSecondaryRangeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesIpv4CidrBlock">ServicesIpv4CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesSecondaryRangeName">ServicesSecondaryRangeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.useIpAliases">UseIpAliases</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy">DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterIpv4CidrBlock`<sup>Required</sup> <a name="ClusterIpv4CidrBlock" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterIpv4CidrBlock"></a>

```go
func ClusterIpv4CidrBlock() *string
```

- *Type:* *string

---

##### `ClusterSecondaryRangeName`<sup>Required</sup> <a name="ClusterSecondaryRangeName" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterSecondaryRangeName"></a>

```go
func ClusterSecondaryRangeName() *string
```

- *Type:* *string

---

##### `ServicesIpv4CidrBlock`<sup>Required</sup> <a name="ServicesIpv4CidrBlock" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesIpv4CidrBlock"></a>

```go
func ServicesIpv4CidrBlock() *string
```

- *Type:* *string

---

##### `ServicesSecondaryRangeName`<sup>Required</sup> <a name="ServicesSecondaryRangeName" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesSecondaryRangeName"></a>

```go
func ServicesSecondaryRangeName() *string
```

- *Type:* *string

---

##### `UseIpAliases`<sup>Required</sup> <a name="UseIpAliases" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.useIpAliases"></a>

```go
func UseIpAliases() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy">DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy</a>

---


### DataGoogleComposerEnvironmentConfigNodeConfigList <a name="DataGoogleComposerEnvironmentConfigNodeConfigList" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigNodeConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComposerEnvironmentConfigNodeConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.get"></a>

```go
func Get(index *f64) DataGoogleComposerEnvironmentConfigNodeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComposerEnvironmentConfigNodeConfigOutputReference <a name="DataGoogleComposerEnvironmentConfigNodeConfigOutputReference" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigNodeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComposerEnvironmentConfigNodeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.composerInternalIpv4CidrBlock">ComposerInternalIpv4CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.composerNetworkAttachment">ComposerNetworkAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.enableIpMasqAgent">EnableIpMasqAgent</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.ipAllocationPolicy">IpAllocationPolicy</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList">DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.oauthScopes">OauthScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfig">DataGoogleComposerEnvironmentConfigNodeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComposerInternalIpv4CidrBlock`<sup>Required</sup> <a name="ComposerInternalIpv4CidrBlock" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.composerInternalIpv4CidrBlock"></a>

```go
func ComposerInternalIpv4CidrBlock() *string
```

- *Type:* *string

---

##### `ComposerNetworkAttachment`<sup>Required</sup> <a name="ComposerNetworkAttachment" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.composerNetworkAttachment"></a>

```go
func ComposerNetworkAttachment() *string
```

- *Type:* *string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.diskSizeGb"></a>

```go
func DiskSizeGb() *f64
```

- *Type:* *f64

---

##### `EnableIpMasqAgent`<sup>Required</sup> <a name="EnableIpMasqAgent" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.enableIpMasqAgent"></a>

```go
func EnableIpMasqAgent() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IpAllocationPolicy`<sup>Required</sup> <a name="IpAllocationPolicy" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.ipAllocationPolicy"></a>

```go
func IpAllocationPolicy() DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList">DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList</a>

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `OauthScopes`<sup>Required</sup> <a name="OauthScopes" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.oauthScopes"></a>

```go
func OauthScopes() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComposerEnvironmentConfigNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfig">DataGoogleComposerEnvironmentConfigNodeConfig</a>

---


### DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList <a name="DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.get"></a>

```go
func Get(index *f64) DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference <a name="DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerConnectionSubnetwork">CloudComposerConnectionSubnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerNetworkIpv4CidrBlock">CloudComposerNetworkIpv4CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudSqlIpv4CidrBlock">CloudSqlIpv4CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.connectionType">ConnectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivateEndpoint">EnablePrivateEndpoint</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivatelyUsedPublicIps">EnablePrivatelyUsedPublicIps</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.masterIpv4CidrBlock">MasterIpv4CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.webServerIpv4CidrBlock">WebServerIpv4CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfig">DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudComposerConnectionSubnetwork`<sup>Required</sup> <a name="CloudComposerConnectionSubnetwork" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerConnectionSubnetwork"></a>

```go
func CloudComposerConnectionSubnetwork() *string
```

- *Type:* *string

---

##### `CloudComposerNetworkIpv4CidrBlock`<sup>Required</sup> <a name="CloudComposerNetworkIpv4CidrBlock" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerNetworkIpv4CidrBlock"></a>

```go
func CloudComposerNetworkIpv4CidrBlock() *string
```

- *Type:* *string

---

##### `CloudSqlIpv4CidrBlock`<sup>Required</sup> <a name="CloudSqlIpv4CidrBlock" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudSqlIpv4CidrBlock"></a>

```go
func CloudSqlIpv4CidrBlock() *string
```

- *Type:* *string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.connectionType"></a>

```go
func ConnectionType() *string
```

- *Type:* *string

---

##### `EnablePrivateEndpoint`<sup>Required</sup> <a name="EnablePrivateEndpoint" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivateEndpoint"></a>

```go
func EnablePrivateEndpoint() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EnablePrivatelyUsedPublicIps`<sup>Required</sup> <a name="EnablePrivatelyUsedPublicIps" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivatelyUsedPublicIps"></a>

```go
func EnablePrivatelyUsedPublicIps() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MasterIpv4CidrBlock`<sup>Required</sup> <a name="MasterIpv4CidrBlock" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.masterIpv4CidrBlock"></a>

```go
func MasterIpv4CidrBlock() *string
```

- *Type:* *string

---

##### `WebServerIpv4CidrBlock`<sup>Required</sup> <a name="WebServerIpv4CidrBlock" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.webServerIpv4CidrBlock"></a>

```go
func WebServerIpv4CidrBlock() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfig">DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfig</a>

---


### DataGoogleComposerEnvironmentConfigRecoveryConfigList <a name="DataGoogleComposerEnvironmentConfigRecoveryConfigList" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigRecoveryConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComposerEnvironmentConfigRecoveryConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.get"></a>

```go
func Get(index *f64) DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference <a name="DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.scheduledSnapshotsConfig">ScheduledSnapshotsConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList">DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfig">DataGoogleComposerEnvironmentConfigRecoveryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScheduledSnapshotsConfig`<sup>Required</sup> <a name="ScheduledSnapshotsConfig" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.scheduledSnapshotsConfig"></a>

```go
func ScheduledSnapshotsConfig() DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList">DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComposerEnvironmentConfigRecoveryConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfig">DataGoogleComposerEnvironmentConfigRecoveryConfig</a>

---


### DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList <a name="DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.get"></a>

```go
func Get(index *f64) DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference <a name="DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotCreationSchedule">SnapshotCreationSchedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotLocation">SnapshotLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SnapshotCreationSchedule`<sup>Required</sup> <a name="SnapshotCreationSchedule" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotCreationSchedule"></a>

```go
func SnapshotCreationSchedule() *string
```

- *Type:* *string

---

##### `SnapshotLocation`<sup>Required</sup> <a name="SnapshotLocation" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotLocation"></a>

```go
func SnapshotLocation() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a>

---


### DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList <a name="DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.get"></a>

```go
func Get(index *f64) DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference <a name="DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration">DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration">DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration</a>

---


### DataGoogleComposerEnvironmentConfigSoftwareConfigList <a name="DataGoogleComposerEnvironmentConfigSoftwareConfigList" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigSoftwareConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComposerEnvironmentConfigSoftwareConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.get"></a>

```go
func Get(index *f64) DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference <a name="DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.airflowConfigOverrides">AirflowConfigOverrides</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.cloudDataLineageIntegration">CloudDataLineageIntegration</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList">DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.envVariables">EnvVariables</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.imageVersion">ImageVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.pypiPackages">PypiPackages</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.pythonVersion">PythonVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.schedulerCount">SchedulerCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.webServerPluginsMode">WebServerPluginsMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfig">DataGoogleComposerEnvironmentConfigSoftwareConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AirflowConfigOverrides`<sup>Required</sup> <a name="AirflowConfigOverrides" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.airflowConfigOverrides"></a>

```go
func AirflowConfigOverrides() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `CloudDataLineageIntegration`<sup>Required</sup> <a name="CloudDataLineageIntegration" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.cloudDataLineageIntegration"></a>

```go
func CloudDataLineageIntegration() DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList">DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList</a>

---

##### `EnvVariables`<sup>Required</sup> <a name="EnvVariables" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.envVariables"></a>

```go
func EnvVariables() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `ImageVersion`<sup>Required</sup> <a name="ImageVersion" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.imageVersion"></a>

```go
func ImageVersion() *string
```

- *Type:* *string

---

##### `PypiPackages`<sup>Required</sup> <a name="PypiPackages" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.pypiPackages"></a>

```go
func PypiPackages() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `PythonVersion`<sup>Required</sup> <a name="PythonVersion" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.pythonVersion"></a>

```go
func PythonVersion() *string
```

- *Type:* *string

---

##### `SchedulerCount`<sup>Required</sup> <a name="SchedulerCount" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.schedulerCount"></a>

```go
func SchedulerCount() *f64
```

- *Type:* *f64

---

##### `WebServerPluginsMode`<sup>Required</sup> <a name="WebServerPluginsMode" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.webServerPluginsMode"></a>

```go
func WebServerPluginsMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComposerEnvironmentConfigSoftwareConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfig">DataGoogleComposerEnvironmentConfigSoftwareConfig</a>

---


### DataGoogleComposerEnvironmentConfigWebServerConfigList <a name="DataGoogleComposerEnvironmentConfigWebServerConfigList" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigWebServerConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComposerEnvironmentConfigWebServerConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.get"></a>

```go
func Get(index *f64) DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference <a name="DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigWebServerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfig">DataGoogleComposerEnvironmentConfigWebServerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComposerEnvironmentConfigWebServerConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfig">DataGoogleComposerEnvironmentConfigWebServerConfig</a>

---


### DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList <a name="DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.get"></a>

```go
func Get(index *f64) DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference <a name="DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange">DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange">DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange</a>

---


### DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList <a name="DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.get"></a>

```go
func Get(index *f64) DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference <a name="DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.allowedIpRange">AllowedIpRange</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList">DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControl">DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedIpRange`<sup>Required</sup> <a name="AllowedIpRange" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.allowedIpRange"></a>

```go
func AllowedIpRange() DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList">DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControl
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControl">DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControl</a>

---


### DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorList <a name="DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorList" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorList.get"></a>

```go
func Get(index *f64) DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference <a name="DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.cpu">Cpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.memoryGb">MemoryGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.storageGb">StorageGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor">DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.cpu"></a>

```go
func Cpu() *f64
```

- *Type:* *f64

---

##### `MemoryGb`<sup>Required</sup> <a name="MemoryGb" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.memoryGb"></a>

```go
func MemoryGb() *f64
```

- *Type:* *f64

---

##### `StorageGb`<sup>Required</sup> <a name="StorageGb" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.storageGb"></a>

```go
func StorageGb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor">DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor</a>

---


### DataGoogleComposerEnvironmentConfigWorkloadsConfigList <a name="DataGoogleComposerEnvironmentConfigWorkloadsConfigList" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigWorkloadsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComposerEnvironmentConfigWorkloadsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.get"></a>

```go
func Get(index *f64) DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference <a name="DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.dagProcessor">DagProcessor</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorList">DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.scheduler">Scheduler</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList">DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.triggerer">Triggerer</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList">DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.webServer">WebServer</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList">DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.worker">Worker</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList">DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfig">DataGoogleComposerEnvironmentConfigWorkloadsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DagProcessor`<sup>Required</sup> <a name="DagProcessor" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.dagProcessor"></a>

```go
func DagProcessor() DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorList">DataGoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorList</a>

---

##### `Scheduler`<sup>Required</sup> <a name="Scheduler" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.scheduler"></a>

```go
func Scheduler() DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList">DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList</a>

---

##### `Triggerer`<sup>Required</sup> <a name="Triggerer" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.triggerer"></a>

```go
func Triggerer() DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList">DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList</a>

---

##### `WebServer`<sup>Required</sup> <a name="WebServer" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.webServer"></a>

```go
func WebServer() DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList">DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList</a>

---

##### `Worker`<sup>Required</sup> <a name="Worker" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.worker"></a>

```go
func Worker() DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList">DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComposerEnvironmentConfigWorkloadsConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfig">DataGoogleComposerEnvironmentConfigWorkloadsConfig</a>

---


### DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList <a name="DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.get"></a>

```go
func Get(index *f64) DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference <a name="DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.cpu">Cpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.memoryGb">MemoryGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.storageGb">StorageGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigScheduler">DataGoogleComposerEnvironmentConfigWorkloadsConfigScheduler</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.cpu"></a>

```go
func Cpu() *f64
```

- *Type:* *f64

---

##### `MemoryGb`<sup>Required</sup> <a name="MemoryGb" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.memoryGb"></a>

```go
func MemoryGb() *f64
```

- *Type:* *f64

---

##### `StorageGb`<sup>Required</sup> <a name="StorageGb" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.storageGb"></a>

```go
func StorageGb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComposerEnvironmentConfigWorkloadsConfigScheduler
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigScheduler">DataGoogleComposerEnvironmentConfigWorkloadsConfigScheduler</a>

---


### DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList <a name="DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.get"></a>

```go
func Get(index *f64) DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference <a name="DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.cpu">Cpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.memoryGb">MemoryGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggerer">DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggerer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.cpu"></a>

```go
func Cpu() *f64
```

- *Type:* *f64

---

##### `MemoryGb`<sup>Required</sup> <a name="MemoryGb" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.memoryGb"></a>

```go
func MemoryGb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggerer
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggerer">DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggerer</a>

---


### DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList <a name="DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.get"></a>

```go
func Get(index *f64) DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference <a name="DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.cpu">Cpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.memoryGb">MemoryGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.storageGb">StorageGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServer">DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.cpu"></a>

```go
func Cpu() *f64
```

- *Type:* *f64

---

##### `MemoryGb`<sup>Required</sup> <a name="MemoryGb" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.memoryGb"></a>

```go
func MemoryGb() *f64
```

- *Type:* *f64

---

##### `StorageGb`<sup>Required</sup> <a name="StorageGb" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.storageGb"></a>

```go
func StorageGb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServer
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServer">DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServer</a>

---


### DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList <a name="DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.get"></a>

```go
func Get(index *f64) DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference <a name="DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.cpu">Cpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.maxCount">MaxCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.memoryGb">MemoryGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.minCount">MinCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.storageGb">StorageGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorker">DataGoogleComposerEnvironmentConfigWorkloadsConfigWorker</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.cpu"></a>

```go
func Cpu() *f64
```

- *Type:* *f64

---

##### `MaxCount`<sup>Required</sup> <a name="MaxCount" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.maxCount"></a>

```go
func MaxCount() *f64
```

- *Type:* *f64

---

##### `MemoryGb`<sup>Required</sup> <a name="MemoryGb" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.memoryGb"></a>

```go
func MemoryGb() *f64
```

- *Type:* *f64

---

##### `MinCount`<sup>Required</sup> <a name="MinCount" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.minCount"></a>

```go
func MinCount() *f64
```

- *Type:* *f64

---

##### `StorageGb`<sup>Required</sup> <a name="StorageGb" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.storageGb"></a>

```go
func StorageGb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComposerEnvironmentConfigWorkloadsConfigWorker
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorker">DataGoogleComposerEnvironmentConfigWorkloadsConfigWorker</a>

---


### DataGoogleComposerEnvironmentStorageConfigList <a name="DataGoogleComposerEnvironmentStorageConfigList" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentStorageConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComposerEnvironmentStorageConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigList.get"></a>

```go
func Get(index *f64) DataGoogleComposerEnvironmentStorageConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComposerEnvironmentStorageConfigOutputReference <a name="DataGoogleComposerEnvironmentStorageConfigOutputReference" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagooglecomposerenvironment"

datagooglecomposerenvironment.NewDataGoogleComposerEnvironmentStorageConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComposerEnvironmentStorageConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfig">DataGoogleComposerEnvironmentStorageConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComposerEnvironmentStorageConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentStorageConfig">DataGoogleComposerEnvironmentStorageConfig</a>

---



