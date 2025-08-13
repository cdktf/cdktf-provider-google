# `dataGoogleArtifactRegistryRepositories` Submodule <a name="`dataGoogleArtifactRegistryRepositories` Submodule" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleArtifactRegistryRepositories <a name="DataGoogleArtifactRegistryRepositories" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/artifact_registry_repositories google_artifact_registry_repositories}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleartifactregistryrepositories"

datagoogleartifactregistryrepositories.NewDataGoogleArtifactRegistryRepositories(scope Construct, id *string, config DataGoogleArtifactRegistryRepositoriesConfig) DataGoogleArtifactRegistryRepositories
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig">DataGoogleArtifactRegistryRepositoriesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig">DataGoogleArtifactRegistryRepositoriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.resetNameFilter">ResetNameFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.resetId"></a>

```go
func ResetId()
```

##### `ResetNameFilter` <a name="ResetNameFilter" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.resetNameFilter"></a>

```go
func ResetNameFilter()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleArtifactRegistryRepositories resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleartifactregistryrepositories"

datagoogleartifactregistryrepositories.DataGoogleArtifactRegistryRepositories_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleartifactregistryrepositories"

datagoogleartifactregistryrepositories.DataGoogleArtifactRegistryRepositories_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleartifactregistryrepositories"

datagoogleartifactregistryrepositories.DataGoogleArtifactRegistryRepositories_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleartifactregistryrepositories"

datagoogleartifactregistryrepositories.DataGoogleArtifactRegistryRepositories_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleArtifactRegistryRepositories resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleArtifactRegistryRepositories to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleArtifactRegistryRepositories that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/artifact_registry_repositories#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleArtifactRegistryRepositories to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.repositories">Repositories</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList">DataGoogleArtifactRegistryRepositoriesRepositoriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.nameFilterInput">NameFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.nameFilter">NameFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Repositories`<sup>Required</sup> <a name="Repositories" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.repositories"></a>

```go
func Repositories() DataGoogleArtifactRegistryRepositoriesRepositoriesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList">DataGoogleArtifactRegistryRepositoriesRepositoriesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameFilterInput`<sup>Optional</sup> <a name="NameFilterInput" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.nameFilterInput"></a>

```go
func NameFilterInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `NameFilter`<sup>Required</sup> <a name="NameFilter" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.nameFilter"></a>

```go
func NameFilter() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleArtifactRegistryRepositoriesConfig <a name="DataGoogleArtifactRegistryRepositoriesConfig" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleartifactregistryrepositories"

&datagoogleartifactregistryrepositories.DataGoogleArtifactRegistryRepositoriesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Id: *string,
	NameFilter: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/artifact_registry_repositories#location DataGoogleArtifactRegistryRepositories#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/artifact_registry_repositories#id DataGoogleArtifactRegistryRepositories#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.nameFilter">NameFilter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/artifact_registry_repositories#name_filter DataGoogleArtifactRegistryRepositories#name_filter}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/artifact_registry_repositories#project DataGoogleArtifactRegistryRepositories#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/artifact_registry_repositories#location DataGoogleArtifactRegistryRepositories#location}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/artifact_registry_repositories#id DataGoogleArtifactRegistryRepositories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NameFilter`<sup>Optional</sup> <a name="NameFilter" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.nameFilter"></a>

```go
NameFilter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/artifact_registry_repositories#name_filter DataGoogleArtifactRegistryRepositories#name_filter}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/artifact_registry_repositories#project DataGoogleArtifactRegistryRepositories#project}.

---

### DataGoogleArtifactRegistryRepositoriesRepositories <a name="DataGoogleArtifactRegistryRepositoriesRepositories" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositories"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositories.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleartifactregistryrepositories"

&datagoogleartifactregistryrepositories.DataGoogleArtifactRegistryRepositoriesRepositories {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleArtifactRegistryRepositoriesRepositoriesList <a name="DataGoogleArtifactRegistryRepositoriesRepositoriesList" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleartifactregistryrepositories"

datagoogleartifactregistryrepositories.NewDataGoogleArtifactRegistryRepositoriesRepositoriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleArtifactRegistryRepositoriesRepositoriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.get"></a>

```go
func Get(index *f64) DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference <a name="DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/datagoogleartifactregistryrepositories"

datagoogleartifactregistryrepositories.NewDataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.property.repositoryId">RepositoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositories">DataGoogleArtifactRegistryRepositoriesRepositories</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.property.repositoryId"></a>

```go
func RepositoryId() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleArtifactRegistryRepositoriesRepositories
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositories">DataGoogleArtifactRegistryRepositoriesRepositories</a>

---



