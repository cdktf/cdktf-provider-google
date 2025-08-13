# `dialogflowCxWebhook` Submodule <a name="`dialogflowCxWebhook` Submodule" id="@cdktf/provider-google.dialogflowCxWebhook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowCxWebhook <a name="DialogflowCxWebhook" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook google_dialogflow_cx_webhook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxwebhook"

dialogflowcxwebhook.NewDialogflowCxWebhook(scope Construct, id *string, config DialogflowCxWebhookConfig) DialogflowCxWebhook
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig">DialogflowCxWebhookConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig">DialogflowCxWebhookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.putGenericWebService">PutGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.putServiceDirectory">PutServiceDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetEnableSpellCorrection">ResetEnableSpellCorrection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetEnableStackdriverLogging">ResetEnableStackdriverLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetGenericWebService">ResetGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetParent">ResetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetSecuritySettings">ResetSecuritySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetServiceDirectory">ResetServiceDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGenericWebService` <a name="PutGenericWebService" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.putGenericWebService"></a>

```go
func PutGenericWebService(value DialogflowCxWebhookGenericWebService)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.putGenericWebService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService">DialogflowCxWebhookGenericWebService</a>

---

##### `PutServiceDirectory` <a name="PutServiceDirectory" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.putServiceDirectory"></a>

```go
func PutServiceDirectory(value DialogflowCxWebhookServiceDirectory)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.putServiceDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory">DialogflowCxWebhookServiceDirectory</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.putTimeouts"></a>

```go
func PutTimeouts(value DialogflowCxWebhookTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeouts">DialogflowCxWebhookTimeouts</a>

---

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetEnableSpellCorrection` <a name="ResetEnableSpellCorrection" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetEnableSpellCorrection"></a>

```go
func ResetEnableSpellCorrection()
```

##### `ResetEnableStackdriverLogging` <a name="ResetEnableStackdriverLogging" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetEnableStackdriverLogging"></a>

```go
func ResetEnableStackdriverLogging()
```

##### `ResetGenericWebService` <a name="ResetGenericWebService" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetGenericWebService"></a>

```go
func ResetGenericWebService()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetId"></a>

```go
func ResetId()
```

##### `ResetParent` <a name="ResetParent" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetParent"></a>

```go
func ResetParent()
```

##### `ResetSecuritySettings` <a name="ResetSecuritySettings" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetSecuritySettings"></a>

```go
func ResetSecuritySettings()
```

##### `ResetServiceDirectory` <a name="ResetServiceDirectory" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetServiceDirectory"></a>

```go
func ResetServiceDirectory()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetTimeout"></a>

```go
func ResetTimeout()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DialogflowCxWebhook resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxwebhook"

dialogflowcxwebhook.DialogflowCxWebhook_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxwebhook"

dialogflowcxwebhook.DialogflowCxWebhook_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxwebhook"

dialogflowcxwebhook.DialogflowCxWebhook_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxwebhook"

dialogflowcxwebhook.DialogflowCxWebhook_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DialogflowCxWebhook resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DialogflowCxWebhook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DialogflowCxWebhook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DialogflowCxWebhook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.genericWebService">GenericWebService</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference">DialogflowCxWebhookGenericWebServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.serviceDirectory">ServiceDirectory</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference">DialogflowCxWebhookServiceDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.startFlow">StartFlow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference">DialogflowCxWebhookTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.enableSpellCorrectionInput">EnableSpellCorrectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.enableStackdriverLoggingInput">EnableStackdriverLoggingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.genericWebServiceInput">GenericWebServiceInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService">DialogflowCxWebhookGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.securitySettingsInput">SecuritySettingsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.serviceDirectoryInput">ServiceDirectoryInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory">DialogflowCxWebhookServiceDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.timeoutInput">TimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.enableSpellCorrection">EnableSpellCorrection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.enableStackdriverLogging">EnableStackdriverLogging</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.securitySettings">SecuritySettings</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.timeout">Timeout</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GenericWebService`<sup>Required</sup> <a name="GenericWebService" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.genericWebService"></a>

```go
func GenericWebService() DialogflowCxWebhookGenericWebServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference">DialogflowCxWebhookGenericWebServiceOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ServiceDirectory`<sup>Required</sup> <a name="ServiceDirectory" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.serviceDirectory"></a>

```go
func ServiceDirectory() DialogflowCxWebhookServiceDirectoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference">DialogflowCxWebhookServiceDirectoryOutputReference</a>

---

##### `StartFlow`<sup>Required</sup> <a name="StartFlow" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.startFlow"></a>

```go
func StartFlow() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.timeouts"></a>

```go
func Timeouts() DialogflowCxWebhookTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference">DialogflowCxWebhookTimeoutsOutputReference</a>

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnableSpellCorrectionInput`<sup>Optional</sup> <a name="EnableSpellCorrectionInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.enableSpellCorrectionInput"></a>

```go
func EnableSpellCorrectionInput() interface{}
```

- *Type:* interface{}

---

##### `EnableStackdriverLoggingInput`<sup>Optional</sup> <a name="EnableStackdriverLoggingInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.enableStackdriverLoggingInput"></a>

```go
func EnableStackdriverLoggingInput() interface{}
```

- *Type:* interface{}

---

##### `GenericWebServiceInput`<sup>Optional</sup> <a name="GenericWebServiceInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.genericWebServiceInput"></a>

```go
func GenericWebServiceInput() DialogflowCxWebhookGenericWebService
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService">DialogflowCxWebhookGenericWebService</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `SecuritySettingsInput`<sup>Optional</sup> <a name="SecuritySettingsInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.securitySettingsInput"></a>

```go
func SecuritySettingsInput() *string
```

- *Type:* *string

---

##### `ServiceDirectoryInput`<sup>Optional</sup> <a name="ServiceDirectoryInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.serviceDirectoryInput"></a>

```go
func ServiceDirectoryInput() DialogflowCxWebhookServiceDirectory
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory">DialogflowCxWebhookServiceDirectory</a>

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.timeoutInput"></a>

```go
func TimeoutInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EnableSpellCorrection`<sup>Required</sup> <a name="EnableSpellCorrection" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.enableSpellCorrection"></a>

```go
func EnableSpellCorrection() interface{}
```

- *Type:* interface{}

---

##### `EnableStackdriverLogging`<sup>Required</sup> <a name="EnableStackdriverLogging" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.enableStackdriverLogging"></a>

```go
func EnableStackdriverLogging() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `SecuritySettings`<sup>Required</sup> <a name="SecuritySettings" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.securitySettings"></a>

```go
func SecuritySettings() *string
```

- *Type:* *string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.timeout"></a>

```go
func Timeout() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowCxWebhookConfig <a name="DialogflowCxWebhookConfig" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxwebhook"

&dialogflowcxwebhook.DialogflowCxWebhookConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Disabled: interface{},
	EnableSpellCorrection: interface{},
	EnableStackdriverLogging: interface{},
	GenericWebService: github.com/cdktf/cdktf-provider-google-go/google/v16.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService,
	Id: *string,
	Parent: *string,
	SecuritySettings: *string,
	ServiceDirectory: github.com/cdktf/cdktf-provider-google-go/google/v16.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory,
	Timeout: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.dialogflowCxWebhook.DialogflowCxWebhookTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The human-readable name of the webhook, unique within the agent. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.disabled">Disabled</a></code> | <code>interface{}</code> | Indicates whether the webhook is disabled. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.enableSpellCorrection">EnableSpellCorrection</a></code> | <code>interface{}</code> | Deprecated. Indicates if automatic spell correction is enabled in detect intent requests. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.enableStackdriverLogging">EnableStackdriverLogging</a></code> | <code>interface{}</code> | Deprecated. Determines whether this agent should log conversation queries. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.genericWebService">GenericWebService</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService">DialogflowCxWebhookGenericWebService</a></code> | generic_web_service block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#id DialogflowCxWebhook#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.parent">Parent</a></code> | <code>*string</code> | The agent to create a webhook for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.securitySettings">SecuritySettings</a></code> | <code>*string</code> | Deprecated. Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.serviceDirectory">ServiceDirectory</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory">DialogflowCxWebhookServiceDirectory</a></code> | service_directory block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.timeout">Timeout</a></code> | <code>*string</code> | Webhook execution timeout. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeouts">DialogflowCxWebhookTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The human-readable name of the webhook, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#display_name DialogflowCxWebhook#display_name}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Indicates whether the webhook is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#disabled DialogflowCxWebhook#disabled}

---

##### `EnableSpellCorrection`<sup>Optional</sup> <a name="EnableSpellCorrection" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.enableSpellCorrection"></a>

```go
EnableSpellCorrection interface{}
```

- *Type:* interface{}

Deprecated. Indicates if automatic spell correction is enabled in detect intent requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#enable_spell_correction DialogflowCxWebhook#enable_spell_correction}

---

##### `EnableStackdriverLogging`<sup>Optional</sup> <a name="EnableStackdriverLogging" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.enableStackdriverLogging"></a>

```go
EnableStackdriverLogging interface{}
```

- *Type:* interface{}

Deprecated. Determines whether this agent should log conversation queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#enable_stackdriver_logging DialogflowCxWebhook#enable_stackdriver_logging}

---

##### `GenericWebService`<sup>Optional</sup> <a name="GenericWebService" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.genericWebService"></a>

```go
GenericWebService DialogflowCxWebhookGenericWebService
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService">DialogflowCxWebhookGenericWebService</a>

generic_web_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#generic_web_service DialogflowCxWebhook#generic_web_service}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#id DialogflowCxWebhook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The agent to create a webhook for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#parent DialogflowCxWebhook#parent}

---

##### `SecuritySettings`<sup>Optional</sup> <a name="SecuritySettings" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.securitySettings"></a>

```go
SecuritySettings *string
```

- *Type:* *string

Deprecated. Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#security_settings DialogflowCxWebhook#security_settings}

---

##### `ServiceDirectory`<sup>Optional</sup> <a name="ServiceDirectory" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.serviceDirectory"></a>

```go
ServiceDirectory DialogflowCxWebhookServiceDirectory
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory">DialogflowCxWebhookServiceDirectory</a>

service_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#service_directory DialogflowCxWebhook#service_directory}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.timeout"></a>

```go
Timeout *string
```

- *Type:* *string

Webhook execution timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#timeout DialogflowCxWebhook#timeout}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.timeouts"></a>

```go
Timeouts DialogflowCxWebhookTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeouts">DialogflowCxWebhookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#timeouts DialogflowCxWebhook#timeouts}

---

### DialogflowCxWebhookGenericWebService <a name="DialogflowCxWebhookGenericWebService" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxwebhook"

&dialogflowcxwebhook.DialogflowCxWebhookGenericWebService {
	Uri: *string,
	AllowedCaCerts: *[]*string,
	HttpMethod: *string,
	OauthConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig,
	ParameterMapping: *map[string]*string,
	RequestBody: *string,
	RequestHeaders: *map[string]*string,
	SecretVersionForUsernamePassword: *string,
	SecretVersionsForRequestHeaders: interface{},
	ServiceAgentAuth: *string,
	WebhookType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.uri">Uri</a></code> | <code>*string</code> | The webhook URI for receiving POST requests. It must use https protocol. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.allowedCaCerts">AllowedCaCerts</a></code> | <code>*[]*string</code> | Specifies a list of allowed custom CA certificates (in DER format) for HTTPS verification. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.httpMethod">HttpMethod</a></code> | <code>*string</code> | HTTP method for the flexible webhook calls. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.oauthConfig">OauthConfig</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig">DialogflowCxWebhookGenericWebServiceOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.parameterMapping">ParameterMapping</a></code> | <code>*map[string]*string</code> | Maps the values extracted from specific fields of the flexible webhook response into session parameters. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.requestBody">RequestBody</a></code> | <code>*string</code> | Defines a custom JSON object as request body to send to flexible webhook. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.requestHeaders">RequestHeaders</a></code> | <code>*map[string]*string</code> | The HTTP request headers to send together with webhook requests. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.secretVersionForUsernamePassword">SecretVersionForUsernamePassword</a></code> | <code>*string</code> | The SecretManager secret version resource storing the username:password pair for HTTP Basic authentication. Format: 'projects/{project}/secrets/{secret}/versions/{version}'. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.secretVersionsForRequestHeaders">SecretVersionsForRequestHeaders</a></code> | <code>interface{}</code> | secret_versions_for_request_headers block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.serviceAgentAuth">ServiceAgentAuth</a></code> | <code>*string</code> | Indicate the auth token type generated from the [Diglogflow service agent](https://cloud.google.com/iam/docs/service-agents#dialogflow-service-agent). The generated token is sent in the Authorization header. Possible values: ["NONE", "ID_TOKEN", "ACCESS_TOKEN"]. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.webhookType">WebhookType</a></code> | <code>*string</code> | Type of the webhook. Possible values: ["STANDARD", "FLEXIBLE"]. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

The webhook URI for receiving POST requests. It must use https protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#uri DialogflowCxWebhook#uri}

---

##### `AllowedCaCerts`<sup>Optional</sup> <a name="AllowedCaCerts" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.allowedCaCerts"></a>

```go
AllowedCaCerts *[]*string
```

- *Type:* *[]*string

Specifies a list of allowed custom CA certificates (in DER format) for HTTPS verification.

This overrides the default SSL trust store. If this
is empty or unspecified, Dialogflow will use Google's default trust store
to verify certificates.
N.B. Make sure the HTTPS server certificates are signed with "subject alt
name". For instance a certificate can be self-signed using the following
command,
openssl x509 -req -days 200 -in example.com.csr \
-signkey example.com.key \
-out example.com.crt \
-extfile <(printf "\nsubjectAltName='DNS:www.example.com'")

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#allowed_ca_certs DialogflowCxWebhook#allowed_ca_certs}

---

##### `HttpMethod`<sup>Optional</sup> <a name="HttpMethod" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.httpMethod"></a>

```go
HttpMethod *string
```

- *Type:* *string

HTTP method for the flexible webhook calls.

Standard webhook always uses
POST. Possible values: ["POST", "GET", "HEAD", "PUT", "DELETE", "PATCH", "OPTIONS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#http_method DialogflowCxWebhook#http_method}

---

##### `OauthConfig`<sup>Optional</sup> <a name="OauthConfig" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.oauthConfig"></a>

```go
OauthConfig DialogflowCxWebhookGenericWebServiceOauthConfig
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig">DialogflowCxWebhookGenericWebServiceOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#oauth_config DialogflowCxWebhook#oauth_config}

---

##### `ParameterMapping`<sup>Optional</sup> <a name="ParameterMapping" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.parameterMapping"></a>

```go
ParameterMapping *map[string]*string
```

- *Type:* *map[string]*string

Maps the values extracted from specific fields of the flexible webhook response into session parameters.

* Key: session parameter name
* Value: field path in the webhook response

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#parameter_mapping DialogflowCxWebhook#parameter_mapping}

---

##### `RequestBody`<sup>Optional</sup> <a name="RequestBody" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.requestBody"></a>

```go
RequestBody *string
```

- *Type:* *string

Defines a custom JSON object as request body to send to flexible webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#request_body DialogflowCxWebhook#request_body}

---

##### `RequestHeaders`<sup>Optional</sup> <a name="RequestHeaders" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.requestHeaders"></a>

```go
RequestHeaders *map[string]*string
```

- *Type:* *map[string]*string

The HTTP request headers to send together with webhook requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#request_headers DialogflowCxWebhook#request_headers}

---

##### `SecretVersionForUsernamePassword`<sup>Optional</sup> <a name="SecretVersionForUsernamePassword" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.secretVersionForUsernamePassword"></a>

```go
SecretVersionForUsernamePassword *string
```

- *Type:* *string

The SecretManager secret version resource storing the username:password pair for HTTP Basic authentication. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#secret_version_for_username_password DialogflowCxWebhook#secret_version_for_username_password}

---

##### `SecretVersionsForRequestHeaders`<sup>Optional</sup> <a name="SecretVersionsForRequestHeaders" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.secretVersionsForRequestHeaders"></a>

```go
SecretVersionsForRequestHeaders interface{}
```

- *Type:* interface{}

secret_versions_for_request_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#secret_versions_for_request_headers DialogflowCxWebhook#secret_versions_for_request_headers}

---

##### `ServiceAgentAuth`<sup>Optional</sup> <a name="ServiceAgentAuth" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.serviceAgentAuth"></a>

```go
ServiceAgentAuth *string
```

- *Type:* *string

Indicate the auth token type generated from the [Diglogflow service agent](https://cloud.google.com/iam/docs/service-agents#dialogflow-service-agent). The generated token is sent in the Authorization header. Possible values: ["NONE", "ID_TOKEN", "ACCESS_TOKEN"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#service_agent_auth DialogflowCxWebhook#service_agent_auth}

---

##### `WebhookType`<sup>Optional</sup> <a name="WebhookType" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.webhookType"></a>

```go
WebhookType *string
```

- *Type:* *string

Type of the webhook. Possible values: ["STANDARD", "FLEXIBLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#webhook_type DialogflowCxWebhook#webhook_type}

---

### DialogflowCxWebhookGenericWebServiceOauthConfig <a name="DialogflowCxWebhookGenericWebServiceOauthConfig" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxwebhook"

&dialogflowcxwebhook.DialogflowCxWebhookGenericWebServiceOauthConfig {
	ClientId: *string,
	TokenEndpoint: *string,
	ClientSecret: *string,
	Scopes: *[]*string,
	SecretVersionForClientSecret: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig.property.clientId">ClientId</a></code> | <code>*string</code> | The client ID provided by the 3rd party platform. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | The token endpoint provided by the 3rd party platform to exchange an access token. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | The client secret provided by the 3rd party platform.  If the 'secret_version_for_client_secret' field is set, this field will be ignored. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig.property.scopes">Scopes</a></code> | <code>*[]*string</code> | The OAuth scopes to grant. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig.property.secretVersionForClientSecret">SecretVersionForClientSecret</a></code> | <code>*string</code> | The name of the SecretManager secret version resource storing the client secret. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The client ID provided by the 3rd party platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#client_id DialogflowCxWebhook#client_id}

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig.property.tokenEndpoint"></a>

```go
TokenEndpoint *string
```

- *Type:* *string

The token endpoint provided by the 3rd party platform to exchange an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#token_endpoint DialogflowCxWebhook#token_endpoint}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

The client secret provided by the 3rd party platform.  If the 'secret_version_for_client_secret' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#client_secret DialogflowCxWebhook#client_secret}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#scopes DialogflowCxWebhook#scopes}

---

##### `SecretVersionForClientSecret`<sup>Optional</sup> <a name="SecretVersionForClientSecret" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig.property.secretVersionForClientSecret"></a>

```go
SecretVersionForClientSecret *string
```

- *Type:* *string

The name of the SecretManager secret version resource storing the client secret.

If this field is set, the 'client_secret' field will be
ignored.
Format: 'projects/{project}/secrets/{secret}/versions/{version}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#secret_version_for_client_secret DialogflowCxWebhook#secret_version_for_client_secret}

---

### DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders <a name="DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxwebhook"

&dialogflowcxwebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders {
	Key: *string,
	SecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#key DialogflowCxWebhook#key}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders.property.secretVersion">SecretVersion</a></code> | <code>*string</code> | The SecretManager secret version resource storing the header value. Format: 'projects/{project}/secrets/{secret}/versions/{version}'. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#key DialogflowCxWebhook#key}.

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders.property.secretVersion"></a>

```go
SecretVersion *string
```

- *Type:* *string

The SecretManager secret version resource storing the header value. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#secret_version DialogflowCxWebhook#secret_version}

---

### DialogflowCxWebhookServiceDirectory <a name="DialogflowCxWebhookServiceDirectory" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxwebhook"

&dialogflowcxwebhook.DialogflowCxWebhookServiceDirectory {
	Service: *string,
	GenericWebService: github.com/cdktf/cdktf-provider-google-go/google/v16.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory.property.service">Service</a></code> | <code>*string</code> | The name of Service Directory service. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory.property.genericWebService">GenericWebService</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService">DialogflowCxWebhookServiceDirectoryGenericWebService</a></code> | generic_web_service block. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory.property.service"></a>

```go
Service *string
```

- *Type:* *string

The name of Service Directory service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#service DialogflowCxWebhook#service}

---

##### `GenericWebService`<sup>Optional</sup> <a name="GenericWebService" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory.property.genericWebService"></a>

```go
GenericWebService DialogflowCxWebhookServiceDirectoryGenericWebService
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService">DialogflowCxWebhookServiceDirectoryGenericWebService</a>

generic_web_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#generic_web_service DialogflowCxWebhook#generic_web_service}

---

### DialogflowCxWebhookServiceDirectoryGenericWebService <a name="DialogflowCxWebhookServiceDirectoryGenericWebService" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxwebhook"

&dialogflowcxwebhook.DialogflowCxWebhookServiceDirectoryGenericWebService {
	Uri: *string,
	AllowedCaCerts: *[]*string,
	HttpMethod: *string,
	OauthConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig,
	ParameterMapping: *map[string]*string,
	RequestBody: *string,
	RequestHeaders: *map[string]*string,
	SecretVersionForUsernamePassword: *string,
	SecretVersionsForRequestHeaders: interface{},
	ServiceAgentAuth: *string,
	WebhookType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.uri">Uri</a></code> | <code>*string</code> | The webhook URI for receiving POST requests. It must use https protocol. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.allowedCaCerts">AllowedCaCerts</a></code> | <code>*[]*string</code> | Specifies a list of allowed custom CA certificates (in DER format) for HTTPS verification. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.httpMethod">HttpMethod</a></code> | <code>*string</code> | HTTP method for the flexible webhook calls. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.oauthConfig">OauthConfig</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig">DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.parameterMapping">ParameterMapping</a></code> | <code>*map[string]*string</code> | Maps the values extracted from specific fields of the flexible webhook response into session parameters. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.requestBody">RequestBody</a></code> | <code>*string</code> | Defines a custom JSON object as request body to send to flexible webhook. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.requestHeaders">RequestHeaders</a></code> | <code>*map[string]*string</code> | The HTTP request headers to send together with webhook requests. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.secretVersionForUsernamePassword">SecretVersionForUsernamePassword</a></code> | <code>*string</code> | The SecretManager secret version resource storing the username:password pair for HTTP Basic authentication. Format: 'projects/{project}/secrets/{secret}/versions/{version}'. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.secretVersionsForRequestHeaders">SecretVersionsForRequestHeaders</a></code> | <code>interface{}</code> | secret_versions_for_request_headers block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.serviceAgentAuth">ServiceAgentAuth</a></code> | <code>*string</code> | Indicate the auth token type generated from the [Diglogflow service agent](https://cloud.google.com/iam/docs/service-agents#dialogflow-service-agent). The generated token is sent in the Authorization header. Possible values: ["NONE", "ID_TOKEN", "ACCESS_TOKEN"]. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.webhookType">WebhookType</a></code> | <code>*string</code> | Type of the webhook. Possible values: ["STANDARD", "FLEXIBLE"]. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

The webhook URI for receiving POST requests. It must use https protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#uri DialogflowCxWebhook#uri}

---

##### `AllowedCaCerts`<sup>Optional</sup> <a name="AllowedCaCerts" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.allowedCaCerts"></a>

```go
AllowedCaCerts *[]*string
```

- *Type:* *[]*string

Specifies a list of allowed custom CA certificates (in DER format) for HTTPS verification.

This overrides the default SSL trust store. If this
is empty or unspecified, Dialogflow will use Google's default trust store
to verify certificates.
N.B. Make sure the HTTPS server certificates are signed with "subject alt
name". For instance a certificate can be self-signed using the following
command,
openssl x509 -req -days 200 -in example.com.csr \
-signkey example.com.key \
-out example.com.crt \
-extfile <(printf "\nsubjectAltName='DNS:www.example.com'")

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#allowed_ca_certs DialogflowCxWebhook#allowed_ca_certs}

---

##### `HttpMethod`<sup>Optional</sup> <a name="HttpMethod" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.httpMethod"></a>

```go
HttpMethod *string
```

- *Type:* *string

HTTP method for the flexible webhook calls.

Standard webhook always uses
POST. Possible values: ["POST", "GET", "HEAD", "PUT", "DELETE", "PATCH", "OPTIONS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#http_method DialogflowCxWebhook#http_method}

---

##### `OauthConfig`<sup>Optional</sup> <a name="OauthConfig" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.oauthConfig"></a>

```go
OauthConfig DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig">DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#oauth_config DialogflowCxWebhook#oauth_config}

---

##### `ParameterMapping`<sup>Optional</sup> <a name="ParameterMapping" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.parameterMapping"></a>

```go
ParameterMapping *map[string]*string
```

- *Type:* *map[string]*string

Maps the values extracted from specific fields of the flexible webhook response into session parameters.

* Key: session parameter name
* Value: field path in the webhook response

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#parameter_mapping DialogflowCxWebhook#parameter_mapping}

---

##### `RequestBody`<sup>Optional</sup> <a name="RequestBody" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.requestBody"></a>

```go
RequestBody *string
```

- *Type:* *string

Defines a custom JSON object as request body to send to flexible webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#request_body DialogflowCxWebhook#request_body}

---

##### `RequestHeaders`<sup>Optional</sup> <a name="RequestHeaders" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.requestHeaders"></a>

```go
RequestHeaders *map[string]*string
```

- *Type:* *map[string]*string

The HTTP request headers to send together with webhook requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#request_headers DialogflowCxWebhook#request_headers}

---

##### `SecretVersionForUsernamePassword`<sup>Optional</sup> <a name="SecretVersionForUsernamePassword" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.secretVersionForUsernamePassword"></a>

```go
SecretVersionForUsernamePassword *string
```

- *Type:* *string

The SecretManager secret version resource storing the username:password pair for HTTP Basic authentication. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#secret_version_for_username_password DialogflowCxWebhook#secret_version_for_username_password}

---

##### `SecretVersionsForRequestHeaders`<sup>Optional</sup> <a name="SecretVersionsForRequestHeaders" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.secretVersionsForRequestHeaders"></a>

```go
SecretVersionsForRequestHeaders interface{}
```

- *Type:* interface{}

secret_versions_for_request_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#secret_versions_for_request_headers DialogflowCxWebhook#secret_versions_for_request_headers}

---

##### `ServiceAgentAuth`<sup>Optional</sup> <a name="ServiceAgentAuth" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.serviceAgentAuth"></a>

```go
ServiceAgentAuth *string
```

- *Type:* *string

Indicate the auth token type generated from the [Diglogflow service agent](https://cloud.google.com/iam/docs/service-agents#dialogflow-service-agent). The generated token is sent in the Authorization header. Possible values: ["NONE", "ID_TOKEN", "ACCESS_TOKEN"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#service_agent_auth DialogflowCxWebhook#service_agent_auth}

---

##### `WebhookType`<sup>Optional</sup> <a name="WebhookType" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.webhookType"></a>

```go
WebhookType *string
```

- *Type:* *string

Type of the webhook. Possible values: ["STANDARD", "FLEXIBLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#webhook_type DialogflowCxWebhook#webhook_type}

---

### DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig <a name="DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxwebhook"

&dialogflowcxwebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig {
	ClientId: *string,
	TokenEndpoint: *string,
	ClientSecret: *string,
	Scopes: *[]*string,
	SecretVersionForClientSecret: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.property.clientId">ClientId</a></code> | <code>*string</code> | The client ID provided by the 3rd party platform. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | The token endpoint provided by the 3rd party platform to exchange an access token. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | The client secret provided by the 3rd party platform.  If the 'secret_version_for_client_secret' field is set, this field will be ignored. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.property.scopes">Scopes</a></code> | <code>*[]*string</code> | The OAuth scopes to grant. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.property.secretVersionForClientSecret">SecretVersionForClientSecret</a></code> | <code>*string</code> | The name of the SecretManager secret version resource storing the client secret. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The client ID provided by the 3rd party platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#client_id DialogflowCxWebhook#client_id}

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.property.tokenEndpoint"></a>

```go
TokenEndpoint *string
```

- *Type:* *string

The token endpoint provided by the 3rd party platform to exchange an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#token_endpoint DialogflowCxWebhook#token_endpoint}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

The client secret provided by the 3rd party platform.  If the 'secret_version_for_client_secret' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#client_secret DialogflowCxWebhook#client_secret}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#scopes DialogflowCxWebhook#scopes}

---

##### `SecretVersionForClientSecret`<sup>Optional</sup> <a name="SecretVersionForClientSecret" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.property.secretVersionForClientSecret"></a>

```go
SecretVersionForClientSecret *string
```

- *Type:* *string

The name of the SecretManager secret version resource storing the client secret.

If this field is set, the 'client_secret' field will be
ignored.
Format: 'projects/{project}/secrets/{secret}/versions/{version}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#secret_version_for_client_secret DialogflowCxWebhook#secret_version_for_client_secret}

---

### DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders <a name="DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxwebhook"

&dialogflowcxwebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders {
	Key: *string,
	SecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#key DialogflowCxWebhook#key}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders.property.secretVersion">SecretVersion</a></code> | <code>*string</code> | The SecretManager secret version resource storing the header value. Format: 'projects/{project}/secrets/{secret}/versions/{version}'. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#key DialogflowCxWebhook#key}.

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders.property.secretVersion"></a>

```go
SecretVersion *string
```

- *Type:* *string

The SecretManager secret version resource storing the header value. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#secret_version DialogflowCxWebhook#secret_version}

---

### DialogflowCxWebhookTimeouts <a name="DialogflowCxWebhookTimeouts" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxwebhook"

&dialogflowcxwebhook.DialogflowCxWebhookTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#create DialogflowCxWebhook#create}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#delete DialogflowCxWebhook#delete}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#update DialogflowCxWebhook#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#create DialogflowCxWebhook#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#delete DialogflowCxWebhook#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#update DialogflowCxWebhook#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference <a name="DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxwebhook"

dialogflowcxwebhook.NewDialogflowCxWebhookGenericWebServiceOauthConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.resetScopes">ResetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.resetSecretVersionForClientSecret">ResetSecretVersionForClientSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.resetScopes"></a>

```go
func ResetScopes()
```

##### `ResetSecretVersionForClientSecret` <a name="ResetSecretVersionForClientSecret" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.resetSecretVersionForClientSecret"></a>

```go
func ResetSecretVersionForClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.secretVersionForClientSecretInput">SecretVersionForClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.tokenEndpointInput">TokenEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.secretVersionForClientSecret">SecretVersionForClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig">DialogflowCxWebhookGenericWebServiceOauthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecretVersionForClientSecretInput`<sup>Optional</sup> <a name="SecretVersionForClientSecretInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.secretVersionForClientSecretInput"></a>

```go
func SecretVersionForClientSecretInput() *string
```

- *Type:* *string

---

##### `TokenEndpointInput`<sup>Optional</sup> <a name="TokenEndpointInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.tokenEndpointInput"></a>

```go
func TokenEndpointInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `SecretVersionForClientSecret`<sup>Required</sup> <a name="SecretVersionForClientSecret" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.secretVersionForClientSecret"></a>

```go
func SecretVersionForClientSecret() *string
```

- *Type:* *string

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.tokenEndpoint"></a>

```go
func TokenEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DialogflowCxWebhookGenericWebServiceOauthConfig
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig">DialogflowCxWebhookGenericWebServiceOauthConfig</a>

---


### DialogflowCxWebhookGenericWebServiceOutputReference <a name="DialogflowCxWebhookGenericWebServiceOutputReference" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxwebhook"

dialogflowcxwebhook.NewDialogflowCxWebhookGenericWebServiceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowCxWebhookGenericWebServiceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.putOauthConfig">PutOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.putSecretVersionsForRequestHeaders">PutSecretVersionsForRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetAllowedCaCerts">ResetAllowedCaCerts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetHttpMethod">ResetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetOauthConfig">ResetOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetParameterMapping">ResetParameterMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetRequestBody">ResetRequestBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetRequestHeaders">ResetRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetSecretVersionForUsernamePassword">ResetSecretVersionForUsernamePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetSecretVersionsForRequestHeaders">ResetSecretVersionsForRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetServiceAgentAuth">ResetServiceAgentAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetWebhookType">ResetWebhookType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOauthConfig` <a name="PutOauthConfig" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.putOauthConfig"></a>

```go
func PutOauthConfig(value DialogflowCxWebhookGenericWebServiceOauthConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.putOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig">DialogflowCxWebhookGenericWebServiceOauthConfig</a>

---

##### `PutSecretVersionsForRequestHeaders` <a name="PutSecretVersionsForRequestHeaders" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.putSecretVersionsForRequestHeaders"></a>

```go
func PutSecretVersionsForRequestHeaders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.putSecretVersionsForRequestHeaders.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllowedCaCerts` <a name="ResetAllowedCaCerts" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetAllowedCaCerts"></a>

```go
func ResetAllowedCaCerts()
```

##### `ResetHttpMethod` <a name="ResetHttpMethod" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetHttpMethod"></a>

```go
func ResetHttpMethod()
```

##### `ResetOauthConfig` <a name="ResetOauthConfig" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetOauthConfig"></a>

```go
func ResetOauthConfig()
```

##### `ResetParameterMapping` <a name="ResetParameterMapping" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetParameterMapping"></a>

```go
func ResetParameterMapping()
```

##### `ResetRequestBody` <a name="ResetRequestBody" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetRequestBody"></a>

```go
func ResetRequestBody()
```

##### `ResetRequestHeaders` <a name="ResetRequestHeaders" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetRequestHeaders"></a>

```go
func ResetRequestHeaders()
```

##### `ResetSecretVersionForUsernamePassword` <a name="ResetSecretVersionForUsernamePassword" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetSecretVersionForUsernamePassword"></a>

```go
func ResetSecretVersionForUsernamePassword()
```

##### `ResetSecretVersionsForRequestHeaders` <a name="ResetSecretVersionsForRequestHeaders" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetSecretVersionsForRequestHeaders"></a>

```go
func ResetSecretVersionsForRequestHeaders()
```

##### `ResetServiceAgentAuth` <a name="ResetServiceAgentAuth" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetServiceAgentAuth"></a>

```go
func ResetServiceAgentAuth()
```

##### `ResetWebhookType` <a name="ResetWebhookType" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetWebhookType"></a>

```go
func ResetWebhookType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.oauthConfig">OauthConfig</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference">DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.secretVersionsForRequestHeaders">SecretVersionsForRequestHeaders</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList">DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.allowedCaCertsInput">AllowedCaCertsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.httpMethodInput">HttpMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.oauthConfigInput">OauthConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig">DialogflowCxWebhookGenericWebServiceOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.parameterMappingInput">ParameterMappingInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.requestBodyInput">RequestBodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.requestHeadersInput">RequestHeadersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.secretVersionForUsernamePasswordInput">SecretVersionForUsernamePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.secretVersionsForRequestHeadersInput">SecretVersionsForRequestHeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.serviceAgentAuthInput">ServiceAgentAuthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.webhookTypeInput">WebhookTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.allowedCaCerts">AllowedCaCerts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.httpMethod">HttpMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.parameterMapping">ParameterMapping</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.requestBody">RequestBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.requestHeaders">RequestHeaders</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.secretVersionForUsernamePassword">SecretVersionForUsernamePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.serviceAgentAuth">ServiceAgentAuth</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.webhookType">WebhookType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService">DialogflowCxWebhookGenericWebService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OauthConfig`<sup>Required</sup> <a name="OauthConfig" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.oauthConfig"></a>

```go
func OauthConfig() DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference">DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference</a>

---

##### `SecretVersionsForRequestHeaders`<sup>Required</sup> <a name="SecretVersionsForRequestHeaders" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.secretVersionsForRequestHeaders"></a>

```go
func SecretVersionsForRequestHeaders() DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList">DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList</a>

---

##### `AllowedCaCertsInput`<sup>Optional</sup> <a name="AllowedCaCertsInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.allowedCaCertsInput"></a>

```go
func AllowedCaCertsInput() *[]*string
```

- *Type:* *[]*string

---

##### `HttpMethodInput`<sup>Optional</sup> <a name="HttpMethodInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.httpMethodInput"></a>

```go
func HttpMethodInput() *string
```

- *Type:* *string

---

##### `OauthConfigInput`<sup>Optional</sup> <a name="OauthConfigInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.oauthConfigInput"></a>

```go
func OauthConfigInput() DialogflowCxWebhookGenericWebServiceOauthConfig
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig">DialogflowCxWebhookGenericWebServiceOauthConfig</a>

---

##### `ParameterMappingInput`<sup>Optional</sup> <a name="ParameterMappingInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.parameterMappingInput"></a>

```go
func ParameterMappingInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RequestBodyInput`<sup>Optional</sup> <a name="RequestBodyInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.requestBodyInput"></a>

```go
func RequestBodyInput() *string
```

- *Type:* *string

---

##### `RequestHeadersInput`<sup>Optional</sup> <a name="RequestHeadersInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.requestHeadersInput"></a>

```go
func RequestHeadersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SecretVersionForUsernamePasswordInput`<sup>Optional</sup> <a name="SecretVersionForUsernamePasswordInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.secretVersionForUsernamePasswordInput"></a>

```go
func SecretVersionForUsernamePasswordInput() *string
```

- *Type:* *string

---

##### `SecretVersionsForRequestHeadersInput`<sup>Optional</sup> <a name="SecretVersionsForRequestHeadersInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.secretVersionsForRequestHeadersInput"></a>

```go
func SecretVersionsForRequestHeadersInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceAgentAuthInput`<sup>Optional</sup> <a name="ServiceAgentAuthInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.serviceAgentAuthInput"></a>

```go
func ServiceAgentAuthInput() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `WebhookTypeInput`<sup>Optional</sup> <a name="WebhookTypeInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.webhookTypeInput"></a>

```go
func WebhookTypeInput() *string
```

- *Type:* *string

---

##### `AllowedCaCerts`<sup>Required</sup> <a name="AllowedCaCerts" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.allowedCaCerts"></a>

```go
func AllowedCaCerts() *[]*string
```

- *Type:* *[]*string

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.httpMethod"></a>

```go
func HttpMethod() *string
```

- *Type:* *string

---

##### `ParameterMapping`<sup>Required</sup> <a name="ParameterMapping" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.parameterMapping"></a>

```go
func ParameterMapping() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RequestBody`<sup>Required</sup> <a name="RequestBody" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.requestBody"></a>

```go
func RequestBody() *string
```

- *Type:* *string

---

##### `RequestHeaders`<sup>Required</sup> <a name="RequestHeaders" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.requestHeaders"></a>

```go
func RequestHeaders() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SecretVersionForUsernamePassword`<sup>Required</sup> <a name="SecretVersionForUsernamePassword" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.secretVersionForUsernamePassword"></a>

```go
func SecretVersionForUsernamePassword() *string
```

- *Type:* *string

---

##### `ServiceAgentAuth`<sup>Required</sup> <a name="ServiceAgentAuth" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.serviceAgentAuth"></a>

```go
func ServiceAgentAuth() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `WebhookType`<sup>Required</sup> <a name="WebhookType" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.webhookType"></a>

```go
func WebhookType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.internalValue"></a>

```go
func InternalValue() DialogflowCxWebhookGenericWebService
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService">DialogflowCxWebhookGenericWebService</a>

---


### DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList <a name="DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxwebhook"

dialogflowcxwebhook.NewDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.get"></a>

```go
func Get(index *f64) DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference <a name="DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxwebhook"

dialogflowcxwebhook.NewDialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.secretVersionInput">SecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.secretVersion">SecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `SecretVersionInput`<sup>Optional</sup> <a name="SecretVersionInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.secretVersionInput"></a>

```go
func SecretVersionInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.secretVersion"></a>

```go
func SecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference <a name="DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxwebhook"

dialogflowcxwebhook.NewDialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.resetScopes">ResetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.resetSecretVersionForClientSecret">ResetSecretVersionForClientSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.resetScopes"></a>

```go
func ResetScopes()
```

##### `ResetSecretVersionForClientSecret` <a name="ResetSecretVersionForClientSecret" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.resetSecretVersionForClientSecret"></a>

```go
func ResetSecretVersionForClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.secretVersionForClientSecretInput">SecretVersionForClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.tokenEndpointInput">TokenEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.secretVersionForClientSecret">SecretVersionForClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig">DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecretVersionForClientSecretInput`<sup>Optional</sup> <a name="SecretVersionForClientSecretInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.secretVersionForClientSecretInput"></a>

```go
func SecretVersionForClientSecretInput() *string
```

- *Type:* *string

---

##### `TokenEndpointInput`<sup>Optional</sup> <a name="TokenEndpointInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.tokenEndpointInput"></a>

```go
func TokenEndpointInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `SecretVersionForClientSecret`<sup>Required</sup> <a name="SecretVersionForClientSecret" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.secretVersionForClientSecret"></a>

```go
func SecretVersionForClientSecret() *string
```

- *Type:* *string

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.tokenEndpoint"></a>

```go
func TokenEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig">DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig</a>

---


### DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference <a name="DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxwebhook"

dialogflowcxwebhook.NewDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.putOauthConfig">PutOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.putSecretVersionsForRequestHeaders">PutSecretVersionsForRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetAllowedCaCerts">ResetAllowedCaCerts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetHttpMethod">ResetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetOauthConfig">ResetOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetParameterMapping">ResetParameterMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetRequestBody">ResetRequestBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetRequestHeaders">ResetRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetSecretVersionForUsernamePassword">ResetSecretVersionForUsernamePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetSecretVersionsForRequestHeaders">ResetSecretVersionsForRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetServiceAgentAuth">ResetServiceAgentAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetWebhookType">ResetWebhookType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOauthConfig` <a name="PutOauthConfig" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.putOauthConfig"></a>

```go
func PutOauthConfig(value DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.putOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig">DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig</a>

---

##### `PutSecretVersionsForRequestHeaders` <a name="PutSecretVersionsForRequestHeaders" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.putSecretVersionsForRequestHeaders"></a>

```go
func PutSecretVersionsForRequestHeaders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.putSecretVersionsForRequestHeaders.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllowedCaCerts` <a name="ResetAllowedCaCerts" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetAllowedCaCerts"></a>

```go
func ResetAllowedCaCerts()
```

##### `ResetHttpMethod` <a name="ResetHttpMethod" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetHttpMethod"></a>

```go
func ResetHttpMethod()
```

##### `ResetOauthConfig` <a name="ResetOauthConfig" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetOauthConfig"></a>

```go
func ResetOauthConfig()
```

##### `ResetParameterMapping` <a name="ResetParameterMapping" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetParameterMapping"></a>

```go
func ResetParameterMapping()
```

##### `ResetRequestBody` <a name="ResetRequestBody" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetRequestBody"></a>

```go
func ResetRequestBody()
```

##### `ResetRequestHeaders` <a name="ResetRequestHeaders" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetRequestHeaders"></a>

```go
func ResetRequestHeaders()
```

##### `ResetSecretVersionForUsernamePassword` <a name="ResetSecretVersionForUsernamePassword" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetSecretVersionForUsernamePassword"></a>

```go
func ResetSecretVersionForUsernamePassword()
```

##### `ResetSecretVersionsForRequestHeaders` <a name="ResetSecretVersionsForRequestHeaders" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetSecretVersionsForRequestHeaders"></a>

```go
func ResetSecretVersionsForRequestHeaders()
```

##### `ResetServiceAgentAuth` <a name="ResetServiceAgentAuth" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetServiceAgentAuth"></a>

```go
func ResetServiceAgentAuth()
```

##### `ResetWebhookType` <a name="ResetWebhookType" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetWebhookType"></a>

```go
func ResetWebhookType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.oauthConfig">OauthConfig</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference">DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.secretVersionsForRequestHeaders">SecretVersionsForRequestHeaders</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList">DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.allowedCaCertsInput">AllowedCaCertsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.httpMethodInput">HttpMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.oauthConfigInput">OauthConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig">DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.parameterMappingInput">ParameterMappingInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.requestBodyInput">RequestBodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.requestHeadersInput">RequestHeadersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.secretVersionForUsernamePasswordInput">SecretVersionForUsernamePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.secretVersionsForRequestHeadersInput">SecretVersionsForRequestHeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.serviceAgentAuthInput">ServiceAgentAuthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.webhookTypeInput">WebhookTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.allowedCaCerts">AllowedCaCerts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.httpMethod">HttpMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.parameterMapping">ParameterMapping</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.requestBody">RequestBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.requestHeaders">RequestHeaders</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.secretVersionForUsernamePassword">SecretVersionForUsernamePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.serviceAgentAuth">ServiceAgentAuth</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.webhookType">WebhookType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService">DialogflowCxWebhookServiceDirectoryGenericWebService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OauthConfig`<sup>Required</sup> <a name="OauthConfig" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.oauthConfig"></a>

```go
func OauthConfig() DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference">DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference</a>

---

##### `SecretVersionsForRequestHeaders`<sup>Required</sup> <a name="SecretVersionsForRequestHeaders" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.secretVersionsForRequestHeaders"></a>

```go
func SecretVersionsForRequestHeaders() DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList">DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList</a>

---

##### `AllowedCaCertsInput`<sup>Optional</sup> <a name="AllowedCaCertsInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.allowedCaCertsInput"></a>

```go
func AllowedCaCertsInput() *[]*string
```

- *Type:* *[]*string

---

##### `HttpMethodInput`<sup>Optional</sup> <a name="HttpMethodInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.httpMethodInput"></a>

```go
func HttpMethodInput() *string
```

- *Type:* *string

---

##### `OauthConfigInput`<sup>Optional</sup> <a name="OauthConfigInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.oauthConfigInput"></a>

```go
func OauthConfigInput() DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig">DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig</a>

---

##### `ParameterMappingInput`<sup>Optional</sup> <a name="ParameterMappingInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.parameterMappingInput"></a>

```go
func ParameterMappingInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RequestBodyInput`<sup>Optional</sup> <a name="RequestBodyInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.requestBodyInput"></a>

```go
func RequestBodyInput() *string
```

- *Type:* *string

---

##### `RequestHeadersInput`<sup>Optional</sup> <a name="RequestHeadersInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.requestHeadersInput"></a>

```go
func RequestHeadersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SecretVersionForUsernamePasswordInput`<sup>Optional</sup> <a name="SecretVersionForUsernamePasswordInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.secretVersionForUsernamePasswordInput"></a>

```go
func SecretVersionForUsernamePasswordInput() *string
```

- *Type:* *string

---

##### `SecretVersionsForRequestHeadersInput`<sup>Optional</sup> <a name="SecretVersionsForRequestHeadersInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.secretVersionsForRequestHeadersInput"></a>

```go
func SecretVersionsForRequestHeadersInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceAgentAuthInput`<sup>Optional</sup> <a name="ServiceAgentAuthInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.serviceAgentAuthInput"></a>

```go
func ServiceAgentAuthInput() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `WebhookTypeInput`<sup>Optional</sup> <a name="WebhookTypeInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.webhookTypeInput"></a>

```go
func WebhookTypeInput() *string
```

- *Type:* *string

---

##### `AllowedCaCerts`<sup>Required</sup> <a name="AllowedCaCerts" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.allowedCaCerts"></a>

```go
func AllowedCaCerts() *[]*string
```

- *Type:* *[]*string

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.httpMethod"></a>

```go
func HttpMethod() *string
```

- *Type:* *string

---

##### `ParameterMapping`<sup>Required</sup> <a name="ParameterMapping" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.parameterMapping"></a>

```go
func ParameterMapping() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RequestBody`<sup>Required</sup> <a name="RequestBody" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.requestBody"></a>

```go
func RequestBody() *string
```

- *Type:* *string

---

##### `RequestHeaders`<sup>Required</sup> <a name="RequestHeaders" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.requestHeaders"></a>

```go
func RequestHeaders() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SecretVersionForUsernamePassword`<sup>Required</sup> <a name="SecretVersionForUsernamePassword" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.secretVersionForUsernamePassword"></a>

```go
func SecretVersionForUsernamePassword() *string
```

- *Type:* *string

---

##### `ServiceAgentAuth`<sup>Required</sup> <a name="ServiceAgentAuth" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.serviceAgentAuth"></a>

```go
func ServiceAgentAuth() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `WebhookType`<sup>Required</sup> <a name="WebhookType" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.webhookType"></a>

```go
func WebhookType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.internalValue"></a>

```go
func InternalValue() DialogflowCxWebhookServiceDirectoryGenericWebService
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService">DialogflowCxWebhookServiceDirectoryGenericWebService</a>

---


### DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList <a name="DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxwebhook"

dialogflowcxwebhook.NewDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.get"></a>

```go
func Get(index *f64) DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference <a name="DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxwebhook"

dialogflowcxwebhook.NewDialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.secretVersionInput">SecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.secretVersion">SecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `SecretVersionInput`<sup>Optional</sup> <a name="SecretVersionInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.secretVersionInput"></a>

```go
func SecretVersionInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.secretVersion"></a>

```go
func SecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowCxWebhookServiceDirectoryOutputReference <a name="DialogflowCxWebhookServiceDirectoryOutputReference" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxwebhook"

dialogflowcxwebhook.NewDialogflowCxWebhookServiceDirectoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowCxWebhookServiceDirectoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.putGenericWebService">PutGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.resetGenericWebService">ResetGenericWebService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGenericWebService` <a name="PutGenericWebService" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.putGenericWebService"></a>

```go
func PutGenericWebService(value DialogflowCxWebhookServiceDirectoryGenericWebService)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.putGenericWebService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService">DialogflowCxWebhookServiceDirectoryGenericWebService</a>

---

##### `ResetGenericWebService` <a name="ResetGenericWebService" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.resetGenericWebService"></a>

```go
func ResetGenericWebService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.genericWebService">GenericWebService</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference">DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.genericWebServiceInput">GenericWebServiceInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService">DialogflowCxWebhookServiceDirectoryGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory">DialogflowCxWebhookServiceDirectory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GenericWebService`<sup>Required</sup> <a name="GenericWebService" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.genericWebService"></a>

```go
func GenericWebService() DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference">DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference</a>

---

##### `GenericWebServiceInput`<sup>Optional</sup> <a name="GenericWebServiceInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.genericWebServiceInput"></a>

```go
func GenericWebServiceInput() DialogflowCxWebhookServiceDirectoryGenericWebService
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService">DialogflowCxWebhookServiceDirectoryGenericWebService</a>

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.internalValue"></a>

```go
func InternalValue() DialogflowCxWebhookServiceDirectory
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory">DialogflowCxWebhookServiceDirectory</a>

---


### DialogflowCxWebhookTimeoutsOutputReference <a name="DialogflowCxWebhookTimeoutsOutputReference" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxwebhook"

dialogflowcxwebhook.NewDialogflowCxWebhookTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowCxWebhookTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



