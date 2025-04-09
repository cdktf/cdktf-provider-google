# `dataGoogleParameterManagerParameterVersionRender` Submodule <a name="`dataGoogleParameterManagerParameterVersionRender` Submodule" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleParameterManagerParameterVersionRender <a name="DataGoogleParameterManagerParameterVersionRender" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/parameter_manager_parameter_version_render google_parameter_manager_parameter_version_render}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleparametermanagerparameterversionrender"

datagoogleparametermanagerparameterversionrender.NewDataGoogleParameterManagerParameterVersionRender(scope Construct, id *string, config DataGoogleParameterManagerParameterVersionRenderConfig) DataGoogleParameterManagerParameterVersionRender
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig">DataGoogleParameterManagerParameterVersionRenderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig">DataGoogleParameterManagerParameterVersionRenderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleParameterManagerParameterVersionRender resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleparametermanagerparameterversionrender"

datagoogleparametermanagerparameterversionrender.DataGoogleParameterManagerParameterVersionRender_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleparametermanagerparameterversionrender"

datagoogleparametermanagerparameterversionrender.DataGoogleParameterManagerParameterVersionRender_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleparametermanagerparameterversionrender"

datagoogleparametermanagerparameterversionrender.DataGoogleParameterManagerParameterVersionRender_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleparametermanagerparameterversionrender"

datagoogleparametermanagerparameterversionrender.DataGoogleParameterManagerParameterVersionRender_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleParameterManagerParameterVersionRender resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleParameterManagerParameterVersionRender to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleParameterManagerParameterVersionRender that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/parameter_manager_parameter_version_render#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleParameterManagerParameterVersionRender to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.disabled">Disabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.parameterData">ParameterData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.renderedParameterData">RenderedParameterData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.parameterInput">ParameterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.parameterVersionIdInput">ParameterVersionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.parameter">Parameter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.parameterVersionId">ParameterVersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.disabled"></a>

```go
func Disabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ParameterData`<sup>Required</sup> <a name="ParameterData" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.parameterData"></a>

```go
func ParameterData() *string
```

- *Type:* *string

---

##### `RenderedParameterData`<sup>Required</sup> <a name="RenderedParameterData" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.renderedParameterData"></a>

```go
func RenderedParameterData() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ParameterInput`<sup>Optional</sup> <a name="ParameterInput" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.parameterInput"></a>

```go
func ParameterInput() *string
```

- *Type:* *string

---

##### `ParameterVersionIdInput`<sup>Optional</sup> <a name="ParameterVersionIdInput" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.parameterVersionIdInput"></a>

```go
func ParameterVersionIdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.parameter"></a>

```go
func Parameter() *string
```

- *Type:* *string

---

##### `ParameterVersionId`<sup>Required</sup> <a name="ParameterVersionId" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.parameterVersionId"></a>

```go
func ParameterVersionId() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleParameterManagerParameterVersionRenderConfig <a name="DataGoogleParameterManagerParameterVersionRenderConfig" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleparametermanagerparameterversionrender"

&datagoogleparametermanagerparameterversionrender.DataGoogleParameterManagerParameterVersionRenderConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Parameter: *string,
	ParameterVersionId: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.parameter">Parameter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/parameter_manager_parameter_version_render#parameter DataGoogleParameterManagerParameterVersionRender#parameter}. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.parameterVersionId">ParameterVersionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/parameter_manager_parameter_version_render#parameter_version_id DataGoogleParameterManagerParameterVersionRender#parameter_version_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/parameter_manager_parameter_version_render#id DataGoogleParameterManagerParameterVersionRender#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/parameter_manager_parameter_version_render#project DataGoogleParameterManagerParameterVersionRender#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.parameter"></a>

```go
Parameter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/parameter_manager_parameter_version_render#parameter DataGoogleParameterManagerParameterVersionRender#parameter}.

---

##### `ParameterVersionId`<sup>Required</sup> <a name="ParameterVersionId" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.parameterVersionId"></a>

```go
ParameterVersionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/parameter_manager_parameter_version_render#parameter_version_id DataGoogleParameterManagerParameterVersionRender#parameter_version_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/parameter_manager_parameter_version_render#id DataGoogleParameterManagerParameterVersionRender#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/parameter_manager_parameter_version_render#project DataGoogleParameterManagerParameterVersionRender#project}.

---



