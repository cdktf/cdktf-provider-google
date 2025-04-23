# `dataGoogleParameterManagerRegionalParameterVersionRender` Submodule <a name="`dataGoogleParameterManagerRegionalParameterVersionRender` Submodule" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleParameterManagerRegionalParameterVersionRender <a name="DataGoogleParameterManagerRegionalParameterVersionRender" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/parameter_manager_regional_parameter_version_render google_parameter_manager_regional_parameter_version_render}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleparametermanagerregionalparameterversionrender"

datagoogleparametermanagerregionalparameterversionrender.NewDataGoogleParameterManagerRegionalParameterVersionRender(scope Construct, id *string, config DataGoogleParameterManagerRegionalParameterVersionRenderConfig) DataGoogleParameterManagerRegionalParameterVersionRender
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig">DataGoogleParameterManagerRegionalParameterVersionRenderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig">DataGoogleParameterManagerRegionalParameterVersionRenderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleParameterManagerRegionalParameterVersionRender resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleparametermanagerregionalparameterversionrender"

datagoogleparametermanagerregionalparameterversionrender.DataGoogleParameterManagerRegionalParameterVersionRender_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleparametermanagerregionalparameterversionrender"

datagoogleparametermanagerregionalparameterversionrender.DataGoogleParameterManagerRegionalParameterVersionRender_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleparametermanagerregionalparameterversionrender"

datagoogleparametermanagerregionalparameterversionrender.DataGoogleParameterManagerRegionalParameterVersionRender_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleparametermanagerregionalparameterversionrender"

datagoogleparametermanagerregionalparameterversionrender.DataGoogleParameterManagerRegionalParameterVersionRender_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleParameterManagerRegionalParameterVersionRender resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleParameterManagerRegionalParameterVersionRender to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleParameterManagerRegionalParameterVersionRender that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/parameter_manager_regional_parameter_version_render#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleParameterManagerRegionalParameterVersionRender to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.disabled">Disabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.parameterData">ParameterData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.renderedParameterData">RenderedParameterData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.parameterInput">ParameterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.parameterVersionIdInput">ParameterVersionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.parameter">Parameter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.parameterVersionId">ParameterVersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.disabled"></a>

```go
func Disabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ParameterData`<sup>Required</sup> <a name="ParameterData" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.parameterData"></a>

```go
func ParameterData() *string
```

- *Type:* *string

---

##### `RenderedParameterData`<sup>Required</sup> <a name="RenderedParameterData" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.renderedParameterData"></a>

```go
func RenderedParameterData() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ParameterInput`<sup>Optional</sup> <a name="ParameterInput" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.parameterInput"></a>

```go
func ParameterInput() *string
```

- *Type:* *string

---

##### `ParameterVersionIdInput`<sup>Optional</sup> <a name="ParameterVersionIdInput" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.parameterVersionIdInput"></a>

```go
func ParameterVersionIdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.parameter"></a>

```go
func Parameter() *string
```

- *Type:* *string

---

##### `ParameterVersionId`<sup>Required</sup> <a name="ParameterVersionId" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.parameterVersionId"></a>

```go
func ParameterVersionId() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleParameterManagerRegionalParameterVersionRenderConfig <a name="DataGoogleParameterManagerRegionalParameterVersionRenderConfig" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleparametermanagerregionalparameterversionrender"

&datagoogleparametermanagerregionalparameterversionrender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig {
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
	Location: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.parameter">Parameter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/parameter_manager_regional_parameter_version_render#parameter DataGoogleParameterManagerRegionalParameterVersionRender#parameter}. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.parameterVersionId">ParameterVersionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/parameter_manager_regional_parameter_version_render#parameter_version_id DataGoogleParameterManagerRegionalParameterVersionRender#parameter_version_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/parameter_manager_regional_parameter_version_render#id DataGoogleParameterManagerRegionalParameterVersionRender#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/parameter_manager_regional_parameter_version_render#location DataGoogleParameterManagerRegionalParameterVersionRender#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/parameter_manager_regional_parameter_version_render#project DataGoogleParameterManagerRegionalParameterVersionRender#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.parameter"></a>

```go
Parameter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/parameter_manager_regional_parameter_version_render#parameter DataGoogleParameterManagerRegionalParameterVersionRender#parameter}.

---

##### `ParameterVersionId`<sup>Required</sup> <a name="ParameterVersionId" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.parameterVersionId"></a>

```go
ParameterVersionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/parameter_manager_regional_parameter_version_render#parameter_version_id DataGoogleParameterManagerRegionalParameterVersionRender#parameter_version_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/parameter_manager_regional_parameter_version_render#id DataGoogleParameterManagerRegionalParameterVersionRender#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/parameter_manager_regional_parameter_version_render#location DataGoogleParameterManagerRegionalParameterVersionRender#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/parameter_manager_regional_parameter_version_render#project DataGoogleParameterManagerRegionalParameterVersionRender#project}.

---



