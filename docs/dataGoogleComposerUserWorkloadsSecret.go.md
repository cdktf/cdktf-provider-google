# `dataGoogleComposerUserWorkloadsSecret` Submodule <a name="`dataGoogleComposerUserWorkloadsSecret` Submodule" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComposerUserWorkloadsSecret <a name="DataGoogleComposerUserWorkloadsSecret" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/composer_user_workloads_secret google_composer_user_workloads_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglecomposeruserworkloadssecret"

datagooglecomposeruserworkloadssecret.NewDataGoogleComposerUserWorkloadsSecret(scope Construct, id *string, config DataGoogleComposerUserWorkloadsSecretConfig) DataGoogleComposerUserWorkloadsSecret
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig">DataGoogleComposerUserWorkloadsSecretConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig">DataGoogleComposerUserWorkloadsSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleComposerUserWorkloadsSecret resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglecomposeruserworkloadssecret"

datagooglecomposeruserworkloadssecret.DataGoogleComposerUserWorkloadsSecret_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglecomposeruserworkloadssecret"

datagooglecomposeruserworkloadssecret.DataGoogleComposerUserWorkloadsSecret_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglecomposeruserworkloadssecret"

datagooglecomposeruserworkloadssecret.DataGoogleComposerUserWorkloadsSecret_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglecomposeruserworkloadssecret"

datagooglecomposeruserworkloadssecret.DataGoogleComposerUserWorkloadsSecret_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleComposerUserWorkloadsSecret resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleComposerUserWorkloadsSecret to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleComposerUserWorkloadsSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/composer_user_workloads_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComposerUserWorkloadsSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.data">Data</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.data"></a>

```go
func Data() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComposerUserWorkloadsSecretConfig <a name="DataGoogleComposerUserWorkloadsSecretConfig" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglecomposeruserworkloadssecret"

&datagooglecomposeruserworkloadssecret.DataGoogleComposerUserWorkloadsSecretConfig {
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
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.environment">Environment</a></code> | <code>*string</code> | Name of the environment. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.name">Name</a></code> | <code>*string</code> | Name of the secret. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/composer_user_workloads_secret#id DataGoogleComposerUserWorkloadsSecret#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.project">Project</a></code> | <code>*string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.region">Region</a></code> | <code>*string</code> | The location or Compute Engine region for the environment. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

Name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/composer_user_workloads_secret#environment DataGoogleComposerUserWorkloadsSecret#environment}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/composer_user_workloads_secret#name DataGoogleComposerUserWorkloadsSecret#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/composer_user_workloads_secret#id DataGoogleComposerUserWorkloadsSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/composer_user_workloads_secret#project DataGoogleComposerUserWorkloadsSecret#project}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The location or Compute Engine region for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/composer_user_workloads_secret#region DataGoogleComposerUserWorkloadsSecret#region}

---



