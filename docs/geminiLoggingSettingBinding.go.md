# `geminiLoggingSettingBinding` Submodule <a name="`geminiLoggingSettingBinding` Submodule" id="@cdktf/provider-google.geminiLoggingSettingBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiLoggingSettingBinding <a name="GeminiLoggingSettingBinding" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gemini_logging_setting_binding google_gemini_logging_setting_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/geminiloggingsettingbinding"

geminiloggingsettingbinding.NewGeminiLoggingSettingBinding(scope Construct, id *string, config GeminiLoggingSettingBindingConfig) GeminiLoggingSettingBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig">GeminiLoggingSettingBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig">GeminiLoggingSettingBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.resetProduct">ResetProduct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.putTimeouts"></a>

```go
func PutTimeouts(value GeminiLoggingSettingBindingTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeouts">GeminiLoggingSettingBindingTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProduct` <a name="ResetProduct" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.resetProduct"></a>

```go
func ResetProduct()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GeminiLoggingSettingBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/geminiloggingsettingbinding"

geminiloggingsettingbinding.GeminiLoggingSettingBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/geminiloggingsettingbinding"

geminiloggingsettingbinding.GeminiLoggingSettingBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/geminiloggingsettingbinding"

geminiloggingsettingbinding.GeminiLoggingSettingBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/geminiloggingsettingbinding"

geminiloggingsettingbinding.GeminiLoggingSettingBinding_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GeminiLoggingSettingBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GeminiLoggingSettingBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GeminiLoggingSettingBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gemini_logging_setting_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GeminiLoggingSettingBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference">GeminiLoggingSettingBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.loggingSettingIdInput">LoggingSettingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.productInput">ProductInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.settingBindingIdInput">SettingBindingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.loggingSettingId">LoggingSettingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.product">Product</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.settingBindingId">SettingBindingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.target">Target</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.timeouts"></a>

```go
func Timeouts() GeminiLoggingSettingBindingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference">GeminiLoggingSettingBindingTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `LoggingSettingIdInput`<sup>Optional</sup> <a name="LoggingSettingIdInput" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.loggingSettingIdInput"></a>

```go
func LoggingSettingIdInput() *string
```

- *Type:* *string

---

##### `ProductInput`<sup>Optional</sup> <a name="ProductInput" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.productInput"></a>

```go
func ProductInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SettingBindingIdInput`<sup>Optional</sup> <a name="SettingBindingIdInput" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.settingBindingIdInput"></a>

```go
func SettingBindingIdInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `LoggingSettingId`<sup>Required</sup> <a name="LoggingSettingId" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.loggingSettingId"></a>

```go
func LoggingSettingId() *string
```

- *Type:* *string

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.product"></a>

```go
func Product() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SettingBindingId`<sup>Required</sup> <a name="SettingBindingId" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.settingBindingId"></a>

```go
func SettingBindingId() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiLoggingSettingBindingConfig <a name="GeminiLoggingSettingBindingConfig" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/geminiloggingsettingbinding"

&geminiloggingsettingbinding.GeminiLoggingSettingBindingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	LoggingSettingId: *string,
	SettingBindingId: *string,
	Target: *string,
	Id: *string,
	Labels: *map[string]*string,
	Location: *string,
	Product: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v14.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.loggingSettingId">LoggingSettingId</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.settingBindingId">SettingBindingId</a></code> | <code>*string</code> | Id of the setting binding. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.target">Target</a></code> | <code>*string</code> | Target of the binding. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gemini_logging_setting_binding#id GeminiLoggingSettingBinding#id}. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.product">Product</a></code> | <code>*string</code> | Product type of the setting binding. Possible values: ["GEMINI_CODE_ASSIST"]. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gemini_logging_setting_binding#project GeminiLoggingSettingBinding#project}. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeouts">GeminiLoggingSettingBindingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LoggingSettingId`<sup>Required</sup> <a name="LoggingSettingId" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.loggingSettingId"></a>

```go
LoggingSettingId *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gemini_logging_setting_binding#logging_setting_id GeminiLoggingSettingBinding#logging_setting_id}

---

##### `SettingBindingId`<sup>Required</sup> <a name="SettingBindingId" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.settingBindingId"></a>

```go
SettingBindingId *string
```

- *Type:* *string

Id of the setting binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gemini_logging_setting_binding#setting_binding_id GeminiLoggingSettingBinding#setting_binding_id}

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.target"></a>

```go
Target *string
```

- *Type:* *string

Target of the binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gemini_logging_setting_binding#target GeminiLoggingSettingBinding#target}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gemini_logging_setting_binding#id GeminiLoggingSettingBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gemini_logging_setting_binding#labels GeminiLoggingSettingBinding#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gemini_logging_setting_binding#location GeminiLoggingSettingBinding#location}

---

##### `Product`<sup>Optional</sup> <a name="Product" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.product"></a>

```go
Product *string
```

- *Type:* *string

Product type of the setting binding. Possible values: ["GEMINI_CODE_ASSIST"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gemini_logging_setting_binding#product GeminiLoggingSettingBinding#product}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gemini_logging_setting_binding#project GeminiLoggingSettingBinding#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.timeouts"></a>

```go
Timeouts GeminiLoggingSettingBindingTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeouts">GeminiLoggingSettingBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gemini_logging_setting_binding#timeouts GeminiLoggingSettingBinding#timeouts}

---

### GeminiLoggingSettingBindingTimeouts <a name="GeminiLoggingSettingBindingTimeouts" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/geminiloggingsettingbinding"

&geminiloggingsettingbinding.GeminiLoggingSettingBindingTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gemini_logging_setting_binding#create GeminiLoggingSettingBinding#create}. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gemini_logging_setting_binding#delete GeminiLoggingSettingBinding#delete}. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gemini_logging_setting_binding#update GeminiLoggingSettingBinding#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gemini_logging_setting_binding#create GeminiLoggingSettingBinding#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gemini_logging_setting_binding#delete GeminiLoggingSettingBinding#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gemini_logging_setting_binding#update GeminiLoggingSettingBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiLoggingSettingBindingTimeoutsOutputReference <a name="GeminiLoggingSettingBindingTimeoutsOutputReference" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/geminiloggingsettingbinding"

geminiloggingsettingbinding.NewGeminiLoggingSettingBindingTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GeminiLoggingSettingBindingTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



