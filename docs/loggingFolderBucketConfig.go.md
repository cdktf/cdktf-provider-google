# `loggingFolderBucketConfig` Submodule <a name="`loggingFolderBucketConfig` Submodule" id="@cdktf/provider-google.loggingFolderBucketConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoggingFolderBucketConfig <a name="LoggingFolderBucketConfig" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/logging_folder_bucket_config google_logging_folder_bucket_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/loggingfolderbucketconfig"

loggingfolderbucketconfig.NewLoggingFolderBucketConfig(scope Construct, id *string, config LoggingFolderBucketConfigConfig) LoggingFolderBucketConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig">LoggingFolderBucketConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig">LoggingFolderBucketConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.putCmekSettings">PutCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.putIndexConfigs">PutIndexConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.resetCmekSettings">ResetCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.resetIndexConfigs">ResetIndexConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.resetRetentionDays">ResetRetentionDays</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCmekSettings` <a name="PutCmekSettings" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.putCmekSettings"></a>

```go
func PutCmekSettings(value LoggingFolderBucketConfigCmekSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.putCmekSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettings">LoggingFolderBucketConfigCmekSettings</a>

---

##### `PutIndexConfigs` <a name="PutIndexConfigs" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.putIndexConfigs"></a>

```go
func PutIndexConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.putIndexConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCmekSettings` <a name="ResetCmekSettings" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.resetCmekSettings"></a>

```go
func ResetCmekSettings()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetIndexConfigs` <a name="ResetIndexConfigs" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.resetIndexConfigs"></a>

```go
func ResetIndexConfigs()
```

##### `ResetRetentionDays` <a name="ResetRetentionDays" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.resetRetentionDays"></a>

```go
func ResetRetentionDays()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LoggingFolderBucketConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/loggingfolderbucketconfig"

loggingfolderbucketconfig.LoggingFolderBucketConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/loggingfolderbucketconfig"

loggingfolderbucketconfig.LoggingFolderBucketConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/loggingfolderbucketconfig"

loggingfolderbucketconfig.LoggingFolderBucketConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/loggingfolderbucketconfig"

loggingfolderbucketconfig.LoggingFolderBucketConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LoggingFolderBucketConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LoggingFolderBucketConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LoggingFolderBucketConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/logging_folder_bucket_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LoggingFolderBucketConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.cmekSettings">CmekSettings</a></code> | <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference">LoggingFolderBucketConfigCmekSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.indexConfigs">IndexConfigs</a></code> | <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList">LoggingFolderBucketConfigIndexConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.lifecycleState">LifecycleState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.bucketIdInput">BucketIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.cmekSettingsInput">CmekSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettings">LoggingFolderBucketConfigCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.folderInput">FolderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.indexConfigsInput">IndexConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.retentionDaysInput">RetentionDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.bucketId">BucketId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.folder">Folder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.retentionDays">RetentionDays</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CmekSettings`<sup>Required</sup> <a name="CmekSettings" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.cmekSettings"></a>

```go
func CmekSettings() LoggingFolderBucketConfigCmekSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference">LoggingFolderBucketConfigCmekSettingsOutputReference</a>

---

##### `IndexConfigs`<sup>Required</sup> <a name="IndexConfigs" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.indexConfigs"></a>

```go
func IndexConfigs() LoggingFolderBucketConfigIndexConfigsList
```

- *Type:* <a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList">LoggingFolderBucketConfigIndexConfigsList</a>

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.lifecycleState"></a>

```go
func LifecycleState() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `BucketIdInput`<sup>Optional</sup> <a name="BucketIdInput" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.bucketIdInput"></a>

```go
func BucketIdInput() *string
```

- *Type:* *string

---

##### `CmekSettingsInput`<sup>Optional</sup> <a name="CmekSettingsInput" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.cmekSettingsInput"></a>

```go
func CmekSettingsInput() LoggingFolderBucketConfigCmekSettings
```

- *Type:* <a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettings">LoggingFolderBucketConfigCmekSettings</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.folderInput"></a>

```go
func FolderInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IndexConfigsInput`<sup>Optional</sup> <a name="IndexConfigsInput" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.indexConfigsInput"></a>

```go
func IndexConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `RetentionDaysInput`<sup>Optional</sup> <a name="RetentionDaysInput" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.retentionDaysInput"></a>

```go
func RetentionDaysInput() *f64
```

- *Type:* *f64

---

##### `BucketId`<sup>Required</sup> <a name="BucketId" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.bucketId"></a>

```go
func BucketId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.folder"></a>

```go
func Folder() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.retentionDays"></a>

```go
func RetentionDays() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LoggingFolderBucketConfigCmekSettings <a name="LoggingFolderBucketConfigCmekSettings" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/loggingfolderbucketconfig"

&loggingfolderbucketconfig.LoggingFolderBucketConfigCmekSettings {
	KmsKeyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettings.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | The resource name for the configured Cloud KMS key. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettings.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

The resource name for the configured Cloud KMS key.

KMS key name format:
"projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]"
To enable CMEK for the bucket, set this field to a valid kmsKeyName for which the associated service account has the required cloudkms.cryptoKeyEncrypterDecrypter roles assigned for the key.
The Cloud KMS key used by the bucket can be updated by changing the kmsKeyName to a new valid key name. Encryption operations that are in progress will be completed with the key that was in use when they started. Decryption operations will be completed using the key that was used at the time of encryption unless access to that key has been revoked.
See [Enabling CMEK for Logging Buckets](https://cloud.google.com/logging/docs/routing/managed-encryption-storage) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/logging_folder_bucket_config#kms_key_name LoggingFolderBucketConfig#kms_key_name}

---

### LoggingFolderBucketConfigConfig <a name="LoggingFolderBucketConfigConfig" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/loggingfolderbucketconfig"

&loggingfolderbucketconfig.LoggingFolderBucketConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BucketId: *string,
	Folder: *string,
	Location: *string,
	CmekSettings: github.com/cdktf/cdktf-provider-google-go/google/v16.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettings,
	Description: *string,
	Id: *string,
	IndexConfigs: interface{},
	RetentionDays: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.bucketId">BucketId</a></code> | <code>*string</code> | The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.folder">Folder</a></code> | <code>*string</code> | The parent resource that contains the logging bucket. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.location">Location</a></code> | <code>*string</code> | The location of the bucket. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.cmekSettings">CmekSettings</a></code> | <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettings">LoggingFolderBucketConfigCmekSettings</a></code> | cmek_settings block. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.description">Description</a></code> | <code>*string</code> | An optional description for this bucket. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/logging_folder_bucket_config#id LoggingFolderBucketConfig#id}. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.indexConfigs">IndexConfigs</a></code> | <code>interface{}</code> | index_configs block. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.retentionDays">RetentionDays</a></code> | <code>*f64</code> | Logs will be retained by default for this amount of time, after which they will automatically be deleted. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BucketId`<sup>Required</sup> <a name="BucketId" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.bucketId"></a>

```go
BucketId *string
```

- *Type:* *string

The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/logging_folder_bucket_config#bucket_id LoggingFolderBucketConfig#bucket_id}

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.folder"></a>

```go
Folder *string
```

- *Type:* *string

The parent resource that contains the logging bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/logging_folder_bucket_config#folder LoggingFolderBucketConfig#folder}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/logging_folder_bucket_config#location LoggingFolderBucketConfig#location}

---

##### `CmekSettings`<sup>Optional</sup> <a name="CmekSettings" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.cmekSettings"></a>

```go
CmekSettings LoggingFolderBucketConfigCmekSettings
```

- *Type:* <a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettings">LoggingFolderBucketConfigCmekSettings</a>

cmek_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/logging_folder_bucket_config#cmek_settings LoggingFolderBucketConfig#cmek_settings}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description for this bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/logging_folder_bucket_config#description LoggingFolderBucketConfig#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/logging_folder_bucket_config#id LoggingFolderBucketConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IndexConfigs`<sup>Optional</sup> <a name="IndexConfigs" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.indexConfigs"></a>

```go
IndexConfigs interface{}
```

- *Type:* interface{}

index_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/logging_folder_bucket_config#index_configs LoggingFolderBucketConfig#index_configs}

---

##### `RetentionDays`<sup>Optional</sup> <a name="RetentionDays" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.retentionDays"></a>

```go
RetentionDays *f64
```

- *Type:* *f64

Logs will be retained by default for this amount of time, after which they will automatically be deleted.

The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/logging_folder_bucket_config#retention_days LoggingFolderBucketConfig#retention_days}

---

### LoggingFolderBucketConfigIndexConfigs <a name="LoggingFolderBucketConfigIndexConfigs" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/loggingfolderbucketconfig"

&loggingfolderbucketconfig.LoggingFolderBucketConfigIndexConfigs {
	FieldPath: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigs.property.fieldPath">FieldPath</a></code> | <code>*string</code> | The LogEntry field path to index. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigs.property.type">Type</a></code> | <code>*string</code> | The type of data in this index Note that some paths are automatically indexed, and other paths are not eligible for indexing. |

---

##### `FieldPath`<sup>Required</sup> <a name="FieldPath" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigs.property.fieldPath"></a>

```go
FieldPath *string
```

- *Type:* *string

The LogEntry field path to index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/logging_folder_bucket_config#field_path LoggingFolderBucketConfig#field_path}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigs.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of data in this index Note that some paths are automatically indexed, and other paths are not eligible for indexing.

See [indexing documentation](https://cloud.google.com/logging/docs/view/advanced-queries#indexed-fields) for details.
For example: jsonPayload.request.status

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/logging_folder_bucket_config#type LoggingFolderBucketConfig#type}

---

## Classes <a name="Classes" id="Classes"></a>

### LoggingFolderBucketConfigCmekSettingsOutputReference <a name="LoggingFolderBucketConfigCmekSettingsOutputReference" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/loggingfolderbucketconfig"

loggingfolderbucketconfig.NewLoggingFolderBucketConfigCmekSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LoggingFolderBucketConfigCmekSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.kmsKeyVersionName">KmsKeyVersionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.serviceAccountId">ServiceAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettings">LoggingFolderBucketConfigCmekSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyVersionName`<sup>Required</sup> <a name="KmsKeyVersionName" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.kmsKeyVersionName"></a>

```go
func KmsKeyVersionName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ServiceAccountId`<sup>Required</sup> <a name="ServiceAccountId" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.serviceAccountId"></a>

```go
func ServiceAccountId() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() LoggingFolderBucketConfigCmekSettings
```

- *Type:* <a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettings">LoggingFolderBucketConfigCmekSettings</a>

---


### LoggingFolderBucketConfigIndexConfigsList <a name="LoggingFolderBucketConfigIndexConfigsList" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/loggingfolderbucketconfig"

loggingfolderbucketconfig.NewLoggingFolderBucketConfigIndexConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LoggingFolderBucketConfigIndexConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.get"></a>

```go
func Get(index *f64) LoggingFolderBucketConfigIndexConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LoggingFolderBucketConfigIndexConfigsOutputReference <a name="LoggingFolderBucketConfigIndexConfigsOutputReference" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/loggingfolderbucketconfig"

loggingfolderbucketconfig.NewLoggingFolderBucketConfigIndexConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LoggingFolderBucketConfigIndexConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.property.fieldPathInput">FieldPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.property.fieldPath">FieldPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldPathInput`<sup>Optional</sup> <a name="FieldPathInput" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.property.fieldPathInput"></a>

```go
func FieldPathInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `FieldPath`<sup>Required</sup> <a name="FieldPath" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.property.fieldPath"></a>

```go
func FieldPath() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigIndexConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



