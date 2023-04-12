# `mlEngineModel` Submodule <a name="`mlEngineModel` Submodule" id="@cdktf/provider-google.mlEngineModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MlEngineModel <a name="MlEngineModel" id="@cdktf/provider-google.mlEngineModel.MlEngineModel"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model google_ml_engine_model}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/mlenginemodel"

mlenginemodel.NewMlEngineModel(scope Construct, id *string, config MlEngineModelConfig) MlEngineModel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig">MlEngineModelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig">MlEngineModelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.putDefaultVersion">PutDefaultVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.resetDefaultVersion">ResetDefaultVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.resetOnlinePredictionConsoleLogging">ResetOnlinePredictionConsoleLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.resetOnlinePredictionLogging">ResetOnlinePredictionLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.resetRegions">ResetRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutDefaultVersion` <a name="PutDefaultVersion" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.putDefaultVersion"></a>

```go
func PutDefaultVersion(value MlEngineModelDefaultVersion)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.putDefaultVersion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion">MlEngineModelDefaultVersion</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.putTimeouts"></a>

```go
func PutTimeouts(value MlEngineModelTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts">MlEngineModelTimeouts</a>

---

##### `ResetDefaultVersion` <a name="ResetDefaultVersion" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.resetDefaultVersion"></a>

```go
func ResetDefaultVersion()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetOnlinePredictionConsoleLogging` <a name="ResetOnlinePredictionConsoleLogging" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.resetOnlinePredictionConsoleLogging"></a>

```go
func ResetOnlinePredictionConsoleLogging()
```

##### `ResetOnlinePredictionLogging` <a name="ResetOnlinePredictionLogging" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.resetOnlinePredictionLogging"></a>

```go
func ResetOnlinePredictionLogging()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegions` <a name="ResetRegions" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.resetRegions"></a>

```go
func ResetRegions()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/mlenginemodel"

mlenginemodel.MlEngineModel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/mlenginemodel"

mlenginemodel.MlEngineModel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/mlenginemodel"

mlenginemodel.MlEngineModel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.defaultVersion">DefaultVersion</a></code> | <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference">MlEngineModelDefaultVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference">MlEngineModelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.defaultVersionInput">DefaultVersionInput</a></code> | <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion">MlEngineModelDefaultVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.onlinePredictionConsoleLoggingInput">OnlinePredictionConsoleLoggingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.onlinePredictionLoggingInput">OnlinePredictionLoggingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.regionsInput">RegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.onlinePredictionConsoleLogging">OnlinePredictionConsoleLogging</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.onlinePredictionLogging">OnlinePredictionLogging</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.regions">Regions</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefaultVersion`<sup>Required</sup> <a name="DefaultVersion" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.defaultVersion"></a>

```go
func DefaultVersion() MlEngineModelDefaultVersionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference">MlEngineModelDefaultVersionOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.timeouts"></a>

```go
func Timeouts() MlEngineModelTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference">MlEngineModelTimeoutsOutputReference</a>

---

##### `DefaultVersionInput`<sup>Optional</sup> <a name="DefaultVersionInput" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.defaultVersionInput"></a>

```go
func DefaultVersionInput() MlEngineModelDefaultVersion
```

- *Type:* <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion">MlEngineModelDefaultVersion</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OnlinePredictionConsoleLoggingInput`<sup>Optional</sup> <a name="OnlinePredictionConsoleLoggingInput" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.onlinePredictionConsoleLoggingInput"></a>

```go
func OnlinePredictionConsoleLoggingInput() interface{}
```

- *Type:* interface{}

---

##### `OnlinePredictionLoggingInput`<sup>Optional</sup> <a name="OnlinePredictionLoggingInput" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.onlinePredictionLoggingInput"></a>

```go
func OnlinePredictionLoggingInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.regionsInput"></a>

```go
func RegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OnlinePredictionConsoleLogging`<sup>Required</sup> <a name="OnlinePredictionConsoleLogging" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.onlinePredictionConsoleLogging"></a>

```go
func OnlinePredictionConsoleLogging() interface{}
```

- *Type:* interface{}

---

##### `OnlinePredictionLogging`<sup>Required</sup> <a name="OnlinePredictionLogging" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.onlinePredictionLogging"></a>

```go
func OnlinePredictionLogging() interface{}
```

- *Type:* interface{}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.regions"></a>

```go
func Regions() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MlEngineModelConfig <a name="MlEngineModelConfig" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/mlenginemodel"

&mlenginemodel.MlEngineModelConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	DefaultVersion: github.com/cdktf/cdktf-provider-google-go/google.mlEngineModel.MlEngineModelDefaultVersion,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	OnlinePredictionConsoleLogging: interface{},
	OnlinePredictionLogging: interface{},
	Project: *string,
	Regions: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.mlEngineModel.MlEngineModelTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.name">Name</a></code> | <code>*string</code> | The name specified for the model. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.defaultVersion">DefaultVersion</a></code> | <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion">MlEngineModelDefaultVersion</a></code> | default_version block. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.description">Description</a></code> | <code>*string</code> | The description specified for the model when it was created. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model#id MlEngineModel#id}. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | One or more labels that you can add, to organize your models. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.onlinePredictionConsoleLogging">OnlinePredictionConsoleLogging</a></code> | <code>interface{}</code> | If true, online prediction nodes send stderr and stdout streams to Stackdriver Logging. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.onlinePredictionLogging">OnlinePredictionLogging</a></code> | <code>interface{}</code> | If true, online prediction access logs are sent to StackDriver Logging. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model#project MlEngineModel#project}. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.regions">Regions</a></code> | <code>*[]*string</code> | The list of regions where the model is going to be deployed. Currently only one region per model is supported. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts">MlEngineModelTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name specified for the model.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model#name MlEngineModel#name}

---

##### `DefaultVersion`<sup>Optional</sup> <a name="DefaultVersion" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.defaultVersion"></a>

```go
DefaultVersion MlEngineModelDefaultVersion
```

- *Type:* <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion">MlEngineModelDefaultVersion</a>

default_version block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model#default_version MlEngineModel#default_version}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description specified for the model when it was created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model#description MlEngineModel#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model#id MlEngineModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

One or more labels that you can add, to organize your models.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model#labels MlEngineModel#labels}

---

##### `OnlinePredictionConsoleLogging`<sup>Optional</sup> <a name="OnlinePredictionConsoleLogging" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.onlinePredictionConsoleLogging"></a>

```go
OnlinePredictionConsoleLogging interface{}
```

- *Type:* interface{}

If true, online prediction nodes send stderr and stdout streams to Stackdriver Logging.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model#online_prediction_console_logging MlEngineModel#online_prediction_console_logging}

---

##### `OnlinePredictionLogging`<sup>Optional</sup> <a name="OnlinePredictionLogging" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.onlinePredictionLogging"></a>

```go
OnlinePredictionLogging interface{}
```

- *Type:* interface{}

If true, online prediction access logs are sent to StackDriver Logging.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model#online_prediction_logging MlEngineModel#online_prediction_logging}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model#project MlEngineModel#project}.

---

##### `Regions`<sup>Optional</sup> <a name="Regions" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.regions"></a>

```go
Regions *[]*string
```

- *Type:* *[]*string

The list of regions where the model is going to be deployed. Currently only one region per model is supported.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model#regions MlEngineModel#regions}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.timeouts"></a>

```go
Timeouts MlEngineModelTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts">MlEngineModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model#timeouts MlEngineModel#timeouts}

---

### MlEngineModelDefaultVersion <a name="MlEngineModelDefaultVersion" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/mlenginemodel"

&mlenginemodel.MlEngineModelDefaultVersion {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion.property.name">Name</a></code> | <code>*string</code> | The name specified for the version when it was created. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name specified for the version when it was created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model#name MlEngineModel#name}

---

### MlEngineModelTimeouts <a name="MlEngineModelTimeouts" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/mlenginemodel"

&mlenginemodel.MlEngineModelTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model#create MlEngineModel#create}. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model#delete MlEngineModel#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model#create MlEngineModel#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/ml_engine_model#delete MlEngineModel#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### MlEngineModelDefaultVersionOutputReference <a name="MlEngineModelDefaultVersionOutputReference" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/mlenginemodel"

mlenginemodel.NewMlEngineModelDefaultVersionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MlEngineModelDefaultVersionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion">MlEngineModelDefaultVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.property.internalValue"></a>

```go
func InternalValue() MlEngineModelDefaultVersion
```

- *Type:* <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion">MlEngineModelDefaultVersion</a>

---


### MlEngineModelTimeoutsOutputReference <a name="MlEngineModelTimeoutsOutputReference" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/mlenginemodel"

mlenginemodel.NewMlEngineModelTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MlEngineModelTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



