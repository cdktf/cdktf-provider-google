# `dialogflowCxPlaybook` Submodule <a name="`dialogflowCxPlaybook` Submodule" id="@cdktf/provider-google.dialogflowCxPlaybook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowCxPlaybook <a name="DialogflowCxPlaybook" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook google_dialogflow_cx_playbook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxplaybook"

dialogflowcxplaybook.NewDialogflowCxPlaybook(scope Construct, id *string, config DialogflowCxPlaybookConfig) DialogflowCxPlaybook
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig">DialogflowCxPlaybookConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig">DialogflowCxPlaybookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.putInstruction">PutInstruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.putLlmModelSettings">PutLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetInstruction">ResetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetLlmModelSettings">ResetLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetParent">ResetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetPlaybookType">ResetPlaybookType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetReferencedTools">ResetReferencedTools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInstruction` <a name="PutInstruction" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.putInstruction"></a>

```go
func PutInstruction(value DialogflowCxPlaybookInstruction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.putInstruction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstruction">DialogflowCxPlaybookInstruction</a>

---

##### `PutLlmModelSettings` <a name="PutLlmModelSettings" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.putLlmModelSettings"></a>

```go
func PutLlmModelSettings(value DialogflowCxPlaybookLlmModelSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.putLlmModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings">DialogflowCxPlaybookLlmModelSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.putTimeouts"></a>

```go
func PutTimeouts(value DialogflowCxPlaybookTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts">DialogflowCxPlaybookTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetId"></a>

```go
func ResetId()
```

##### `ResetInstruction` <a name="ResetInstruction" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetInstruction"></a>

```go
func ResetInstruction()
```

##### `ResetLlmModelSettings` <a name="ResetLlmModelSettings" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetLlmModelSettings"></a>

```go
func ResetLlmModelSettings()
```

##### `ResetParent` <a name="ResetParent" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetParent"></a>

```go
func ResetParent()
```

##### `ResetPlaybookType` <a name="ResetPlaybookType" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetPlaybookType"></a>

```go
func ResetPlaybookType()
```

##### `ResetReferencedTools` <a name="ResetReferencedTools" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetReferencedTools"></a>

```go
func ResetReferencedTools()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DialogflowCxPlaybook resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxplaybook"

dialogflowcxplaybook.DialogflowCxPlaybook_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxplaybook"

dialogflowcxplaybook.DialogflowCxPlaybook_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxplaybook"

dialogflowcxplaybook.DialogflowCxPlaybook_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxplaybook"

dialogflowcxplaybook.DialogflowCxPlaybook_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DialogflowCxPlaybook resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DialogflowCxPlaybook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DialogflowCxPlaybook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DialogflowCxPlaybook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.instruction">Instruction</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference">DialogflowCxPlaybookInstructionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.llmModelSettings">LlmModelSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference">DialogflowCxPlaybookLlmModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.referencedFlows">ReferencedFlows</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.referencedPlaybooks">ReferencedPlaybooks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference">DialogflowCxPlaybookTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.tokenCount">TokenCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.goalInput">GoalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.instructionInput">InstructionInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstruction">DialogflowCxPlaybookInstruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.llmModelSettingsInput">LlmModelSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings">DialogflowCxPlaybookLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.playbookTypeInput">PlaybookTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.referencedToolsInput">ReferencedToolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.goal">Goal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.playbookType">PlaybookType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.referencedTools">ReferencedTools</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Instruction`<sup>Required</sup> <a name="Instruction" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.instruction"></a>

```go
func Instruction() DialogflowCxPlaybookInstructionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference">DialogflowCxPlaybookInstructionOutputReference</a>

---

##### `LlmModelSettings`<sup>Required</sup> <a name="LlmModelSettings" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.llmModelSettings"></a>

```go
func LlmModelSettings() DialogflowCxPlaybookLlmModelSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference">DialogflowCxPlaybookLlmModelSettingsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ReferencedFlows`<sup>Required</sup> <a name="ReferencedFlows" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.referencedFlows"></a>

```go
func ReferencedFlows() *[]*string
```

- *Type:* *[]*string

---

##### `ReferencedPlaybooks`<sup>Required</sup> <a name="ReferencedPlaybooks" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.referencedPlaybooks"></a>

```go
func ReferencedPlaybooks() *[]*string
```

- *Type:* *[]*string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.timeouts"></a>

```go
func Timeouts() DialogflowCxPlaybookTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference">DialogflowCxPlaybookTimeoutsOutputReference</a>

---

##### `TokenCount`<sup>Required</sup> <a name="TokenCount" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.tokenCount"></a>

```go
func TokenCount() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `GoalInput`<sup>Optional</sup> <a name="GoalInput" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.goalInput"></a>

```go
func GoalInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstructionInput`<sup>Optional</sup> <a name="InstructionInput" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.instructionInput"></a>

```go
func InstructionInput() DialogflowCxPlaybookInstruction
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstruction">DialogflowCxPlaybookInstruction</a>

---

##### `LlmModelSettingsInput`<sup>Optional</sup> <a name="LlmModelSettingsInput" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.llmModelSettingsInput"></a>

```go
func LlmModelSettingsInput() DialogflowCxPlaybookLlmModelSettings
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings">DialogflowCxPlaybookLlmModelSettings</a>

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `PlaybookTypeInput`<sup>Optional</sup> <a name="PlaybookTypeInput" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.playbookTypeInput"></a>

```go
func PlaybookTypeInput() *string
```

- *Type:* *string

---

##### `ReferencedToolsInput`<sup>Optional</sup> <a name="ReferencedToolsInput" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.referencedToolsInput"></a>

```go
func ReferencedToolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Goal`<sup>Required</sup> <a name="Goal" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.goal"></a>

```go
func Goal() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `PlaybookType`<sup>Required</sup> <a name="PlaybookType" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.playbookType"></a>

```go
func PlaybookType() *string
```

- *Type:* *string

---

##### `ReferencedTools`<sup>Required</sup> <a name="ReferencedTools" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.referencedTools"></a>

```go
func ReferencedTools() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowCxPlaybookConfig <a name="DialogflowCxPlaybookConfig" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxplaybook"

&dialogflowcxplaybook.DialogflowCxPlaybookConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Goal: *string,
	Id: *string,
	Instruction: github.com/cdktf/cdktf-provider-google-go/google/v16.dialogflowCxPlaybook.DialogflowCxPlaybookInstruction,
	LlmModelSettings: github.com/cdktf/cdktf-provider-google-go/google/v16.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings,
	Parent: *string,
	PlaybookType: *string,
	ReferencedTools: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The human-readable name of the playbook, unique within an agent. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.goal">Goal</a></code> | <code>*string</code> | High level description of the goal the playbook intend to accomplish. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#id DialogflowCxPlaybook#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.instruction">Instruction</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstruction">DialogflowCxPlaybookInstruction</a></code> | instruction block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.llmModelSettings">LlmModelSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings">DialogflowCxPlaybookLlmModelSettings</a></code> | llm_model_settings block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.parent">Parent</a></code> | <code>*string</code> | The agent to create a Playbook for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.playbookType">PlaybookType</a></code> | <code>*string</code> | Type of the playbook. Possible values: ["PLAYBOOK_TYPE_UNSPECIFIED", "TASK", "ROUTINE"]. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.referencedTools">ReferencedTools</a></code> | <code>*[]*string</code> | The resource name of tools referenced by the current playbook in the instructions. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts">DialogflowCxPlaybookTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The human-readable name of the playbook, unique within an agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#display_name DialogflowCxPlaybook#display_name}

---

##### `Goal`<sup>Required</sup> <a name="Goal" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.goal"></a>

```go
Goal *string
```

- *Type:* *string

High level description of the goal the playbook intend to accomplish.

A goal should be concise since it's visible to other playbooks that may reference this playbook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#goal DialogflowCxPlaybook#goal}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#id DialogflowCxPlaybook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Instruction`<sup>Optional</sup> <a name="Instruction" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.instruction"></a>

```go
Instruction DialogflowCxPlaybookInstruction
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstruction">DialogflowCxPlaybookInstruction</a>

instruction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#instruction DialogflowCxPlaybook#instruction}

---

##### `LlmModelSettings`<sup>Optional</sup> <a name="LlmModelSettings" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.llmModelSettings"></a>

```go
LlmModelSettings DialogflowCxPlaybookLlmModelSettings
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings">DialogflowCxPlaybookLlmModelSettings</a>

llm_model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#llm_model_settings DialogflowCxPlaybook#llm_model_settings}

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The agent to create a Playbook for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#parent DialogflowCxPlaybook#parent}

---

##### `PlaybookType`<sup>Optional</sup> <a name="PlaybookType" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.playbookType"></a>

```go
PlaybookType *string
```

- *Type:* *string

Type of the playbook. Possible values: ["PLAYBOOK_TYPE_UNSPECIFIED", "TASK", "ROUTINE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#playbook_type DialogflowCxPlaybook#playbook_type}

---

##### `ReferencedTools`<sup>Optional</sup> <a name="ReferencedTools" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.referencedTools"></a>

```go
ReferencedTools *[]*string
```

- *Type:* *[]*string

The resource name of tools referenced by the current playbook in the instructions.

If not provided explicitly, they are will be implied using the tool being referenced in goal and steps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#referenced_tools DialogflowCxPlaybook#referenced_tools}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.timeouts"></a>

```go
Timeouts DialogflowCxPlaybookTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts">DialogflowCxPlaybookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#timeouts DialogflowCxPlaybook#timeouts}

---

### DialogflowCxPlaybookInstruction <a name="DialogflowCxPlaybookInstruction" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstruction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstruction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxplaybook"

&dialogflowcxplaybook.DialogflowCxPlaybookInstruction {
	Guidelines: *string,
	Steps: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstruction.property.guidelines">Guidelines</a></code> | <code>*string</code> | General guidelines for the playbook. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstruction.property.steps">Steps</a></code> | <code>interface{}</code> | steps block. |

---

##### `Guidelines`<sup>Optional</sup> <a name="Guidelines" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstruction.property.guidelines"></a>

```go
Guidelines *string
```

- *Type:* *string

General guidelines for the playbook.

These are unstructured instructions that are not directly part of the goal, e.g. "Always be polite". It's valid for this text to be long and used instead of steps altogether.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#guidelines DialogflowCxPlaybook#guidelines}

---

##### `Steps`<sup>Optional</sup> <a name="Steps" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstruction.property.steps"></a>

```go
Steps interface{}
```

- *Type:* interface{}

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#steps DialogflowCxPlaybook#steps}

---

### DialogflowCxPlaybookInstructionSteps <a name="DialogflowCxPlaybookInstructionSteps" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionSteps.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxplaybook"

&dialogflowcxplaybook.DialogflowCxPlaybookInstructionSteps {
	Steps: *string,
	Text: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionSteps.property.steps">Steps</a></code> | <code>*string</code> | Sub-processing needed to execute the current step. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionSteps.property.text">Text</a></code> | <code>*string</code> | Step instruction in text format. |

---

##### `Steps`<sup>Optional</sup> <a name="Steps" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionSteps.property.steps"></a>

```go
Steps *string
```

- *Type:* *string

Sub-processing needed to execute the current step.

This field uses JSON data as a string. The value provided must be a valid JSON representation documented in [Step](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.playbooks#step).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#steps DialogflowCxPlaybook#steps}

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionSteps.property.text"></a>

```go
Text *string
```

- *Type:* *string

Step instruction in text format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#text DialogflowCxPlaybook#text}

---

### DialogflowCxPlaybookLlmModelSettings <a name="DialogflowCxPlaybookLlmModelSettings" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxplaybook"

&dialogflowcxplaybook.DialogflowCxPlaybookLlmModelSettings {
	Model: *string,
	PromptText: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings.property.model">Model</a></code> | <code>*string</code> | The selected LLM model. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings.property.promptText">PromptText</a></code> | <code>*string</code> | The custom prompt to use. |

---

##### `Model`<sup>Optional</sup> <a name="Model" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings.property.model"></a>

```go
Model *string
```

- *Type:* *string

The selected LLM model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#model DialogflowCxPlaybook#model}

---

##### `PromptText`<sup>Optional</sup> <a name="PromptText" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings.property.promptText"></a>

```go
PromptText *string
```

- *Type:* *string

The custom prompt to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#prompt_text DialogflowCxPlaybook#prompt_text}

---

### DialogflowCxPlaybookTimeouts <a name="DialogflowCxPlaybookTimeouts" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxplaybook"

&dialogflowcxplaybook.DialogflowCxPlaybookTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#create DialogflowCxPlaybook#create}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#delete DialogflowCxPlaybook#delete}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#update DialogflowCxPlaybook#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#create DialogflowCxPlaybook#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#delete DialogflowCxPlaybook#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#update DialogflowCxPlaybook#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowCxPlaybookInstructionOutputReference <a name="DialogflowCxPlaybookInstructionOutputReference" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxplaybook"

dialogflowcxplaybook.NewDialogflowCxPlaybookInstructionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowCxPlaybookInstructionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.putSteps">PutSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.resetGuidelines">ResetGuidelines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.resetSteps">ResetSteps</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSteps` <a name="PutSteps" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.putSteps"></a>

```go
func PutSteps(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.putSteps.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetGuidelines` <a name="ResetGuidelines" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.resetGuidelines"></a>

```go
func ResetGuidelines()
```

##### `ResetSteps` <a name="ResetSteps" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.resetSteps"></a>

```go
func ResetSteps()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.steps">Steps</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList">DialogflowCxPlaybookInstructionStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.guidelinesInput">GuidelinesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.stepsInput">StepsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.guidelines">Guidelines</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstruction">DialogflowCxPlaybookInstruction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.steps"></a>

```go
func Steps() DialogflowCxPlaybookInstructionStepsList
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList">DialogflowCxPlaybookInstructionStepsList</a>

---

##### `GuidelinesInput`<sup>Optional</sup> <a name="GuidelinesInput" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.guidelinesInput"></a>

```go
func GuidelinesInput() *string
```

- *Type:* *string

---

##### `StepsInput`<sup>Optional</sup> <a name="StepsInput" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.stepsInput"></a>

```go
func StepsInput() interface{}
```

- *Type:* interface{}

---

##### `Guidelines`<sup>Required</sup> <a name="Guidelines" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.guidelines"></a>

```go
func Guidelines() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.internalValue"></a>

```go
func InternalValue() DialogflowCxPlaybookInstruction
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstruction">DialogflowCxPlaybookInstruction</a>

---


### DialogflowCxPlaybookInstructionStepsList <a name="DialogflowCxPlaybookInstructionStepsList" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxplaybook"

dialogflowcxplaybook.NewDialogflowCxPlaybookInstructionStepsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DialogflowCxPlaybookInstructionStepsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.get"></a>

```go
func Get(index *f64) DialogflowCxPlaybookInstructionStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowCxPlaybookInstructionStepsOutputReference <a name="DialogflowCxPlaybookInstructionStepsOutputReference" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxplaybook"

dialogflowcxplaybook.NewDialogflowCxPlaybookInstructionStepsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DialogflowCxPlaybookInstructionStepsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.resetSteps">ResetSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSteps` <a name="ResetSteps" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.resetSteps"></a>

```go
func ResetSteps()
```

##### `ResetText` <a name="ResetText" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.resetText"></a>

```go
func ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.stepsInput">StepsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.textInput">TextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.steps">Steps</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StepsInput`<sup>Optional</sup> <a name="StepsInput" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.stepsInput"></a>

```go
func StepsInput() *string
```

- *Type:* *string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.textInput"></a>

```go
func TextInput() *string
```

- *Type:* *string

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.steps"></a>

```go
func Steps() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowCxPlaybookLlmModelSettingsOutputReference <a name="DialogflowCxPlaybookLlmModelSettingsOutputReference" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxplaybook"

dialogflowcxplaybook.NewDialogflowCxPlaybookLlmModelSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowCxPlaybookLlmModelSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.resetModel">ResetModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.resetPromptText">ResetPromptText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetModel` <a name="ResetModel" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.resetModel"></a>

```go
func ResetModel()
```

##### `ResetPromptText` <a name="ResetPromptText" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.resetPromptText"></a>

```go
func ResetPromptText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.modelInput">ModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.promptTextInput">PromptTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.model">Model</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.promptText">PromptText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings">DialogflowCxPlaybookLlmModelSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.modelInput"></a>

```go
func ModelInput() *string
```

- *Type:* *string

---

##### `PromptTextInput`<sup>Optional</sup> <a name="PromptTextInput" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.promptTextInput"></a>

```go
func PromptTextInput() *string
```

- *Type:* *string

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.model"></a>

```go
func Model() *string
```

- *Type:* *string

---

##### `PromptText`<sup>Required</sup> <a name="PromptText" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.promptText"></a>

```go
func PromptText() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DialogflowCxPlaybookLlmModelSettings
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings">DialogflowCxPlaybookLlmModelSettings</a>

---


### DialogflowCxPlaybookTimeoutsOutputReference <a name="DialogflowCxPlaybookTimeoutsOutputReference" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxplaybook"

dialogflowcxplaybook.NewDialogflowCxPlaybookTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowCxPlaybookTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



