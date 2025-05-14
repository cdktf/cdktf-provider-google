# `geminiCodeToolsSetting` Submodule <a name="`geminiCodeToolsSetting` Submodule" id="@cdktf/provider-google.geminiCodeToolsSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiCodeToolsSetting <a name="GeminiCodeToolsSetting" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_code_tools_setting google_gemini_code_tools_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/geminicodetoolssetting"

geminicodetoolssetting.NewGeminiCodeToolsSetting(scope Construct, id *string, config GeminiCodeToolsSettingConfig) GeminiCodeToolsSetting
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig">GeminiCodeToolsSettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig">GeminiCodeToolsSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.putEnabledTool">PutEnabledTool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEnabledTool` <a name="PutEnabledTool" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.putEnabledTool"></a>

```go
func PutEnabledTool(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.putEnabledTool.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.putTimeouts"></a>

```go
func PutTimeouts(value GeminiCodeToolsSettingTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts">GeminiCodeToolsSettingTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GeminiCodeToolsSetting resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/geminicodetoolssetting"

geminicodetoolssetting.GeminiCodeToolsSetting_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/geminicodetoolssetting"

geminicodetoolssetting.GeminiCodeToolsSetting_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/geminicodetoolssetting"

geminicodetoolssetting.GeminiCodeToolsSetting_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/geminicodetoolssetting"

geminicodetoolssetting.GeminiCodeToolsSetting_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GeminiCodeToolsSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GeminiCodeToolsSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GeminiCodeToolsSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_code_tools_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GeminiCodeToolsSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.enabledTool">EnabledTool</a></code> | <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList">GeminiCodeToolsSettingEnabledToolList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference">GeminiCodeToolsSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.codeToolsSettingIdInput">CodeToolsSettingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.enabledToolInput">EnabledToolInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.codeToolsSettingId">CodeToolsSettingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EnabledTool`<sup>Required</sup> <a name="EnabledTool" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.enabledTool"></a>

```go
func EnabledTool() GeminiCodeToolsSettingEnabledToolList
```

- *Type:* <a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList">GeminiCodeToolsSettingEnabledToolList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.timeouts"></a>

```go
func Timeouts() GeminiCodeToolsSettingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference">GeminiCodeToolsSettingTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `CodeToolsSettingIdInput`<sup>Optional</sup> <a name="CodeToolsSettingIdInput" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.codeToolsSettingIdInput"></a>

```go
func CodeToolsSettingIdInput() *string
```

- *Type:* *string

---

##### `EnabledToolInput`<sup>Optional</sup> <a name="EnabledToolInput" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.enabledToolInput"></a>

```go
func EnabledToolInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CodeToolsSettingId`<sup>Required</sup> <a name="CodeToolsSettingId" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.codeToolsSettingId"></a>

```go
func CodeToolsSettingId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiCodeToolsSettingConfig <a name="GeminiCodeToolsSettingConfig" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/geminicodetoolssetting"

&geminicodetoolssetting.GeminiCodeToolsSettingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CodeToolsSettingId: *string,
	EnabledTool: interface{},
	Id: *string,
	Labels: *map[string]*string,
	Location: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v14.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.codeToolsSettingId">CodeToolsSettingId</a></code> | <code>*string</code> | Id of the Code Tools Setting. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.enabledTool">EnabledTool</a></code> | <code>interface{}</code> | enabled_tool block. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_code_tools_setting#id GeminiCodeToolsSetting#id}. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_code_tools_setting#project GeminiCodeToolsSetting#project}. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts">GeminiCodeToolsSettingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CodeToolsSettingId`<sup>Required</sup> <a name="CodeToolsSettingId" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.codeToolsSettingId"></a>

```go
CodeToolsSettingId *string
```

- *Type:* *string

Id of the Code Tools Setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_code_tools_setting#code_tools_setting_id GeminiCodeToolsSetting#code_tools_setting_id}

---

##### `EnabledTool`<sup>Required</sup> <a name="EnabledTool" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.enabledTool"></a>

```go
EnabledTool interface{}
```

- *Type:* interface{}

enabled_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_code_tools_setting#enabled_tool GeminiCodeToolsSetting#enabled_tool}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_code_tools_setting#id GeminiCodeToolsSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_code_tools_setting#labels GeminiCodeToolsSetting#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_code_tools_setting#location GeminiCodeToolsSetting#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_code_tools_setting#project GeminiCodeToolsSetting#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.timeouts"></a>

```go
Timeouts GeminiCodeToolsSettingTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts">GeminiCodeToolsSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_code_tools_setting#timeouts GeminiCodeToolsSetting#timeouts}

---

### GeminiCodeToolsSettingEnabledTool <a name="GeminiCodeToolsSettingEnabledTool" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/geminicodetoolssetting"

&geminicodetoolssetting.GeminiCodeToolsSettingEnabledTool {
	Handle: *string,
	Tool: *string,
	AccountConnector: *string,
	Config: interface{},
	UriOverride: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool.property.handle">Handle</a></code> | <code>*string</code> | Handle used to invoke the tool. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool.property.tool">Tool</a></code> | <code>*string</code> | Link to the Tool. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool.property.accountConnector">AccountConnector</a></code> | <code>*string</code> | Link to the Dev Connect Account Connector that holds the user credentials. projects/{project}/locations/{location}/accountConnectors/{account_connector_id}. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool.property.config">Config</a></code> | <code>interface{}</code> | config block. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool.property.uriOverride">UriOverride</a></code> | <code>*string</code> | Overridden URI, if allowed by Tool. |

---

##### `Handle`<sup>Required</sup> <a name="Handle" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool.property.handle"></a>

```go
Handle *string
```

- *Type:* *string

Handle used to invoke the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_code_tools_setting#handle GeminiCodeToolsSetting#handle}

---

##### `Tool`<sup>Required</sup> <a name="Tool" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool.property.tool"></a>

```go
Tool *string
```

- *Type:* *string

Link to the Tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_code_tools_setting#tool GeminiCodeToolsSetting#tool}

---

##### `AccountConnector`<sup>Optional</sup> <a name="AccountConnector" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool.property.accountConnector"></a>

```go
AccountConnector *string
```

- *Type:* *string

Link to the Dev Connect Account Connector that holds the user credentials. projects/{project}/locations/{location}/accountConnectors/{account_connector_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_code_tools_setting#account_connector GeminiCodeToolsSetting#account_connector}

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool.property.config"></a>

```go
Config interface{}
```

- *Type:* interface{}

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_code_tools_setting#config GeminiCodeToolsSetting#config}

---

##### `UriOverride`<sup>Optional</sup> <a name="UriOverride" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool.property.uriOverride"></a>

```go
UriOverride *string
```

- *Type:* *string

Overridden URI, if allowed by Tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_code_tools_setting#uri_override GeminiCodeToolsSetting#uri_override}

---

### GeminiCodeToolsSettingEnabledToolConfig <a name="GeminiCodeToolsSettingEnabledToolConfig" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/geminicodetoolssetting"

&geminicodetoolssetting.GeminiCodeToolsSettingEnabledToolConfig {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfig.property.key">Key</a></code> | <code>*string</code> | Key of the configuration item. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfig.property.value">Value</a></code> | <code>*string</code> | Value of the configuration item. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfig.property.key"></a>

```go
Key *string
```

- *Type:* *string

Key of the configuration item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_code_tools_setting#key GeminiCodeToolsSetting#key}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfig.property.value"></a>

```go
Value *string
```

- *Type:* *string

Value of the configuration item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_code_tools_setting#value GeminiCodeToolsSetting#value}

---

### GeminiCodeToolsSettingTimeouts <a name="GeminiCodeToolsSettingTimeouts" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/geminicodetoolssetting"

&geminicodetoolssetting.GeminiCodeToolsSettingTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_code_tools_setting#create GeminiCodeToolsSetting#create}. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_code_tools_setting#delete GeminiCodeToolsSetting#delete}. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_code_tools_setting#update GeminiCodeToolsSetting#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_code_tools_setting#create GeminiCodeToolsSetting#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_code_tools_setting#delete GeminiCodeToolsSetting#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_code_tools_setting#update GeminiCodeToolsSetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiCodeToolsSettingEnabledToolConfigList <a name="GeminiCodeToolsSettingEnabledToolConfigList" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/geminicodetoolssetting"

geminicodetoolssetting.NewGeminiCodeToolsSettingEnabledToolConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GeminiCodeToolsSettingEnabledToolConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.get"></a>

```go
func Get(index *f64) GeminiCodeToolsSettingEnabledToolConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GeminiCodeToolsSettingEnabledToolConfigOutputReference <a name="GeminiCodeToolsSettingEnabledToolConfigOutputReference" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/geminicodetoolssetting"

geminicodetoolssetting.NewGeminiCodeToolsSettingEnabledToolConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GeminiCodeToolsSettingEnabledToolConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GeminiCodeToolsSettingEnabledToolList <a name="GeminiCodeToolsSettingEnabledToolList" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/geminicodetoolssetting"

geminicodetoolssetting.NewGeminiCodeToolsSettingEnabledToolList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GeminiCodeToolsSettingEnabledToolList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.get"></a>

```go
func Get(index *f64) GeminiCodeToolsSettingEnabledToolOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GeminiCodeToolsSettingEnabledToolOutputReference <a name="GeminiCodeToolsSettingEnabledToolOutputReference" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/geminicodetoolssetting"

geminicodetoolssetting.NewGeminiCodeToolsSettingEnabledToolOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GeminiCodeToolsSettingEnabledToolOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.resetAccountConnector">ResetAccountConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.resetUriOverride">ResetUriOverride</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.putConfig"></a>

```go
func PutConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.putConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccountConnector` <a name="ResetAccountConnector" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.resetAccountConnector"></a>

```go
func ResetAccountConnector()
```

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.resetConfig"></a>

```go
func ResetConfig()
```

##### `ResetUriOverride` <a name="ResetUriOverride" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.resetUriOverride"></a>

```go
func ResetUriOverride()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList">GeminiCodeToolsSettingEnabledToolConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.accountConnectorInput">AccountConnectorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.configInput">ConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.handleInput">HandleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.toolInput">ToolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.uriOverrideInput">UriOverrideInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.accountConnector">AccountConnector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.handle">Handle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.tool">Tool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.uriOverride">UriOverride</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.config"></a>

```go
func Config() GeminiCodeToolsSettingEnabledToolConfigList
```

- *Type:* <a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList">GeminiCodeToolsSettingEnabledToolConfigList</a>

---

##### `AccountConnectorInput`<sup>Optional</sup> <a name="AccountConnectorInput" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.accountConnectorInput"></a>

```go
func AccountConnectorInput() *string
```

- *Type:* *string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.configInput"></a>

```go
func ConfigInput() interface{}
```

- *Type:* interface{}

---

##### `HandleInput`<sup>Optional</sup> <a name="HandleInput" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.handleInput"></a>

```go
func HandleInput() *string
```

- *Type:* *string

---

##### `ToolInput`<sup>Optional</sup> <a name="ToolInput" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.toolInput"></a>

```go
func ToolInput() *string
```

- *Type:* *string

---

##### `UriOverrideInput`<sup>Optional</sup> <a name="UriOverrideInput" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.uriOverrideInput"></a>

```go
func UriOverrideInput() *string
```

- *Type:* *string

---

##### `AccountConnector`<sup>Required</sup> <a name="AccountConnector" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.accountConnector"></a>

```go
func AccountConnector() *string
```

- *Type:* *string

---

##### `Handle`<sup>Required</sup> <a name="Handle" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.handle"></a>

```go
func Handle() *string
```

- *Type:* *string

---

##### `Tool`<sup>Required</sup> <a name="Tool" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.tool"></a>

```go
func Tool() *string
```

- *Type:* *string

---

##### `UriOverride`<sup>Required</sup> <a name="UriOverride" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.uriOverride"></a>

```go
func UriOverride() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GeminiCodeToolsSettingTimeoutsOutputReference <a name="GeminiCodeToolsSettingTimeoutsOutputReference" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/geminicodetoolssetting"

geminicodetoolssetting.NewGeminiCodeToolsSettingTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GeminiCodeToolsSettingTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



