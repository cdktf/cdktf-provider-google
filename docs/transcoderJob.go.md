# `transcoderJob` Submodule <a name="`transcoderJob` Submodule" id="@cdktf/provider-google.transcoderJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TranscoderJob <a name="TranscoderJob" id="@cdktf/provider-google.transcoderJob.TranscoderJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job google_transcoder_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.NewTranscoderJob(scope Construct, id *string, config TranscoderJobConfig) TranscoderJob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig">TranscoderJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig">TranscoderJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.resetTemplateId">ResetTemplateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.transcoderJob.TranscoderJob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.transcoderJob.TranscoderJob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.transcoderJob.TranscoderJob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.transcoderJob.TranscoderJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.transcoderJob.TranscoderJob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.transcoderJob.TranscoderJob.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.transcoderJob.TranscoderJob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.transcoderJob.TranscoderJob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.transcoderJob.TranscoderJob.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.transcoderJob.TranscoderJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.transcoderJob.TranscoderJob.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.transcoderJob.TranscoderJob.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.transcoderJob.TranscoderJob.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.transcoderJob.TranscoderJob.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.transcoderJob.TranscoderJob.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.transcoderJob.TranscoderJob.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.transcoderJob.TranscoderJob.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.transcoderJob.TranscoderJob.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.transcoderJob.TranscoderJob.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.transcoderJob.TranscoderJob.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.transcoderJob.TranscoderJob.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-google.transcoderJob.TranscoderJob.putConfig"></a>

```go
func PutConfig(value TranscoderJobConfigA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJob.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA">TranscoderJobConfigA</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.transcoderJob.TranscoderJob.putTimeouts"></a>

```go
func PutTimeouts(value TranscoderJobTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeouts">TranscoderJobTimeouts</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-google.transcoderJob.TranscoderJob.resetConfig"></a>

```go
func ResetConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.transcoderJob.TranscoderJob.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.transcoderJob.TranscoderJob.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.transcoderJob.TranscoderJob.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTemplateId` <a name="ResetTemplateId" id="@cdktf/provider-google.transcoderJob.TranscoderJob.resetTemplateId"></a>

```go
func ResetTemplateId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.transcoderJob.TranscoderJob.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a TranscoderJob resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.transcoderJob.TranscoderJob.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.TranscoderJob_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.transcoderJob.TranscoderJob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.transcoderJob.TranscoderJob.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.TranscoderJob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.transcoderJob.TranscoderJob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJob.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.TranscoderJob_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.transcoderJob.TranscoderJob.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.transcoderJob.TranscoderJob.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.TranscoderJob_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a TranscoderJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.transcoderJob.TranscoderJob.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.transcoderJob.TranscoderJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the TranscoderJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.transcoderJob.TranscoderJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing TranscoderJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.transcoderJob.TranscoderJob.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the TranscoderJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference">TranscoderJobConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference">TranscoderJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA">TranscoderJobConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.templateIdInput">TemplateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.templateId">TemplateId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.config"></a>

```go
func Config() TranscoderJobConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference">TranscoderJobConfigAOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.timeouts"></a>

```go
func Timeouts() TranscoderJobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference">TranscoderJobTimeoutsOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.configInput"></a>

```go
func ConfigInput() TranscoderJobConfigA
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA">TranscoderJobConfigA</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TemplateIdInput`<sup>Optional</sup> <a name="TemplateIdInput" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.templateIdInput"></a>

```go
func TemplateIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `TemplateId`<sup>Required</sup> <a name="TemplateId" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.templateId"></a>

```go
func TemplateId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TranscoderJobConfig <a name="TranscoderJobConfig" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

&transcoderjob.TranscoderJobConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Config: github.com/cdktf/cdktf-provider-google-go/google/v16.transcoderJob.TranscoderJobConfigA,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	TemplateId: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.transcoderJob.TranscoderJobTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.location">Location</a></code> | <code>*string</code> | The location of the transcoding job resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA">TranscoderJobConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#id TranscoderJob#id}. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels associated with this job. You can use these to organize and group your jobs. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#project TranscoderJob#project}. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.templateId">TemplateId</a></code> | <code>*string</code> | Specify the templateId to use for populating Job.config. The default is preset/web-hd, which is the only supported preset. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeouts">TranscoderJobTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the transcoding job resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#location TranscoderJob#location}

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.config"></a>

```go
Config TranscoderJobConfigA
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA">TranscoderJobConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#config TranscoderJob#config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#id TranscoderJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels associated with this job. You can use these to organize and group your jobs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#labels TranscoderJob#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#project TranscoderJob#project}.

---

##### `TemplateId`<sup>Optional</sup> <a name="TemplateId" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.templateId"></a>

```go
TemplateId *string
```

- *Type:* *string

Specify the templateId to use for populating Job.config. The default is preset/web-hd, which is the only supported preset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#template_id TranscoderJob#template_id}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.timeouts"></a>

```go
Timeouts TranscoderJobTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeouts">TranscoderJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#timeouts TranscoderJob#timeouts}

---

### TranscoderJobConfigA <a name="TranscoderJobConfigA" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

&transcoderjob.TranscoderJobConfigA {
	AdBreaks: interface{},
	EditList: interface{},
	ElementaryStreams: interface{},
	Encryptions: interface{},
	Inputs: interface{},
	Manifests: interface{},
	MuxStreams: interface{},
	Output: github.com/cdktf/cdktf-provider-google-go/google/v16.transcoderJob.TranscoderJobConfigOutput,
	Overlays: interface{},
	PubsubDestination: github.com/cdktf/cdktf-provider-google-go/google/v16.transcoderJob.TranscoderJobConfigPubsubDestination,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.adBreaks">AdBreaks</a></code> | <code>interface{}</code> | ad_breaks block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.editList">EditList</a></code> | <code>interface{}</code> | edit_list block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.elementaryStreams">ElementaryStreams</a></code> | <code>interface{}</code> | elementary_streams block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.encryptions">Encryptions</a></code> | <code>interface{}</code> | encryptions block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.inputs">Inputs</a></code> | <code>interface{}</code> | inputs block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.manifests">Manifests</a></code> | <code>interface{}</code> | manifests block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.muxStreams">MuxStreams</a></code> | <code>interface{}</code> | mux_streams block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.output">Output</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutput">TranscoderJobConfigOutput</a></code> | output block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.overlays">Overlays</a></code> | <code>interface{}</code> | overlays block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.pubsubDestination">PubsubDestination</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestination">TranscoderJobConfigPubsubDestination</a></code> | pubsub_destination block. |

---

##### `AdBreaks`<sup>Optional</sup> <a name="AdBreaks" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.adBreaks"></a>

```go
AdBreaks interface{}
```

- *Type:* interface{}

ad_breaks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#ad_breaks TranscoderJob#ad_breaks}

---

##### `EditList`<sup>Optional</sup> <a name="EditList" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.editList"></a>

```go
EditList interface{}
```

- *Type:* interface{}

edit_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#edit_list TranscoderJob#edit_list}

---

##### `ElementaryStreams`<sup>Optional</sup> <a name="ElementaryStreams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.elementaryStreams"></a>

```go
ElementaryStreams interface{}
```

- *Type:* interface{}

elementary_streams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#elementary_streams TranscoderJob#elementary_streams}

---

##### `Encryptions`<sup>Optional</sup> <a name="Encryptions" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.encryptions"></a>

```go
Encryptions interface{}
```

- *Type:* interface{}

encryptions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#encryptions TranscoderJob#encryptions}

---

##### `Inputs`<sup>Optional</sup> <a name="Inputs" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.inputs"></a>

```go
Inputs interface{}
```

- *Type:* interface{}

inputs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#inputs TranscoderJob#inputs}

---

##### `Manifests`<sup>Optional</sup> <a name="Manifests" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.manifests"></a>

```go
Manifests interface{}
```

- *Type:* interface{}

manifests block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#manifests TranscoderJob#manifests}

---

##### `MuxStreams`<sup>Optional</sup> <a name="MuxStreams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.muxStreams"></a>

```go
MuxStreams interface{}
```

- *Type:* interface{}

mux_streams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#mux_streams TranscoderJob#mux_streams}

---

##### `Output`<sup>Optional</sup> <a name="Output" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.output"></a>

```go
Output TranscoderJobConfigOutput
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutput">TranscoderJobConfigOutput</a>

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#output TranscoderJob#output}

---

##### `Overlays`<sup>Optional</sup> <a name="Overlays" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.overlays"></a>

```go
Overlays interface{}
```

- *Type:* interface{}

overlays block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#overlays TranscoderJob#overlays}

---

##### `PubsubDestination`<sup>Optional</sup> <a name="PubsubDestination" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.pubsubDestination"></a>

```go
PubsubDestination TranscoderJobConfigPubsubDestination
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestination">TranscoderJobConfigPubsubDestination</a>

pubsub_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#pubsub_destination TranscoderJob#pubsub_destination}

---

### TranscoderJobConfigAdBreaks <a name="TranscoderJobConfigAdBreaks" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

&transcoderjob.TranscoderJobConfigAdBreaks {
	StartTimeOffset: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaks.property.startTimeOffset">StartTimeOffset</a></code> | <code>*string</code> | Start time in seconds for the ad break, relative to the output file timeline. |

---

##### `StartTimeOffset`<sup>Optional</sup> <a name="StartTimeOffset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaks.property.startTimeOffset"></a>

```go
StartTimeOffset *string
```

- *Type:* *string

Start time in seconds for the ad break, relative to the output file timeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#start_time_offset TranscoderJob#start_time_offset}

---

### TranscoderJobConfigEditListStruct <a name="TranscoderJobConfigEditListStruct" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStruct.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

&transcoderjob.TranscoderJobConfigEditListStruct {
	Inputs: *[]*string,
	Key: *string,
	StartTimeOffset: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStruct.property.inputs">Inputs</a></code> | <code>*[]*string</code> | List of values identifying files that should be used in this atom. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStruct.property.key">Key</a></code> | <code>*string</code> | A unique key for this atom. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStruct.property.startTimeOffset">StartTimeOffset</a></code> | <code>*string</code> | Start time in seconds for the atom, relative to the input file timeline. The default is '0s'. |

---

##### `Inputs`<sup>Optional</sup> <a name="Inputs" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStruct.property.inputs"></a>

```go
Inputs *[]*string
```

- *Type:* *[]*string

List of values identifying files that should be used in this atom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#inputs TranscoderJob#inputs}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStruct.property.key"></a>

```go
Key *string
```

- *Type:* *string

A unique key for this atom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#key TranscoderJob#key}

---

##### `StartTimeOffset`<sup>Optional</sup> <a name="StartTimeOffset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStruct.property.startTimeOffset"></a>

```go
StartTimeOffset *string
```

- *Type:* *string

Start time in seconds for the atom, relative to the input file timeline. The default is '0s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#start_time_offset TranscoderJob#start_time_offset}

---

### TranscoderJobConfigElementaryStreams <a name="TranscoderJobConfigElementaryStreams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreams.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

&transcoderjob.TranscoderJobConfigElementaryStreams {
	AudioStream: github.com/cdktf/cdktf-provider-google-go/google/v16.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream,
	Key: *string,
	VideoStream: github.com/cdktf/cdktf-provider-google-go/google/v16.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStream,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreams.property.audioStream">AudioStream</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream">TranscoderJobConfigElementaryStreamsAudioStream</a></code> | audio_stream block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreams.property.key">Key</a></code> | <code>*string</code> | A unique key for this atom. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreams.property.videoStream">VideoStream</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStream">TranscoderJobConfigElementaryStreamsVideoStream</a></code> | video_stream block. |

---

##### `AudioStream`<sup>Optional</sup> <a name="AudioStream" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreams.property.audioStream"></a>

```go
AudioStream TranscoderJobConfigElementaryStreamsAudioStream
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream">TranscoderJobConfigElementaryStreamsAudioStream</a>

audio_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#audio_stream TranscoderJob#audio_stream}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreams.property.key"></a>

```go
Key *string
```

- *Type:* *string

A unique key for this atom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#key TranscoderJob#key}

---

##### `VideoStream`<sup>Optional</sup> <a name="VideoStream" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreams.property.videoStream"></a>

```go
VideoStream TranscoderJobConfigElementaryStreamsVideoStream
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStream">TranscoderJobConfigElementaryStreamsVideoStream</a>

video_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#video_stream TranscoderJob#video_stream}

---

### TranscoderJobConfigElementaryStreamsAudioStream <a name="TranscoderJobConfigElementaryStreamsAudioStream" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

&transcoderjob.TranscoderJobConfigElementaryStreamsAudioStream {
	BitrateBps: *f64,
	ChannelCount: *f64,
	ChannelLayout: *[]*string,
	Codec: *string,
	SampleRateHertz: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream.property.bitrateBps">BitrateBps</a></code> | <code>*f64</code> | Audio bitrate in bits per second. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream.property.channelCount">ChannelCount</a></code> | <code>*f64</code> | Number of audio channels. The default is '2'. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream.property.channelLayout">ChannelLayout</a></code> | <code>*[]*string</code> | A list of channel names specifying layout of the audio channels. The default is ["fl", "fr"]. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream.property.codec">Codec</a></code> | <code>*string</code> | The codec for this audio stream. The default is 'aac'. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream.property.sampleRateHertz">SampleRateHertz</a></code> | <code>*f64</code> | The audio sample rate in Hertz. The default is '48000'. |

---

##### `BitrateBps`<sup>Required</sup> <a name="BitrateBps" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream.property.bitrateBps"></a>

```go
BitrateBps *f64
```

- *Type:* *f64

Audio bitrate in bits per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#bitrate_bps TranscoderJob#bitrate_bps}

---

##### `ChannelCount`<sup>Optional</sup> <a name="ChannelCount" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream.property.channelCount"></a>

```go
ChannelCount *f64
```

- *Type:* *f64

Number of audio channels. The default is '2'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#channel_count TranscoderJob#channel_count}

---

##### `ChannelLayout`<sup>Optional</sup> <a name="ChannelLayout" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream.property.channelLayout"></a>

```go
ChannelLayout *[]*string
```

- *Type:* *[]*string

A list of channel names specifying layout of the audio channels. The default is ["fl", "fr"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#channel_layout TranscoderJob#channel_layout}

---

##### `Codec`<sup>Optional</sup> <a name="Codec" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream.property.codec"></a>

```go
Codec *string
```

- *Type:* *string

The codec for this audio stream. The default is 'aac'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#codec TranscoderJob#codec}

---

##### `SampleRateHertz`<sup>Optional</sup> <a name="SampleRateHertz" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream.property.sampleRateHertz"></a>

```go
SampleRateHertz *f64
```

- *Type:* *f64

The audio sample rate in Hertz. The default is '48000'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#sample_rate_hertz TranscoderJob#sample_rate_hertz}

---

### TranscoderJobConfigElementaryStreamsVideoStream <a name="TranscoderJobConfigElementaryStreamsVideoStream" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStream.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

&transcoderjob.TranscoderJobConfigElementaryStreamsVideoStream {
	H264: github.com/cdktf/cdktf-provider-google-go/google/v16.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStream.property.h264">H264</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264">TranscoderJobConfigElementaryStreamsVideoStreamH264</a></code> | h264 block. |

---

##### `H264`<sup>Optional</sup> <a name="H264" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStream.property.h264"></a>

```go
H264 TranscoderJobConfigElementaryStreamsVideoStreamH264
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264">TranscoderJobConfigElementaryStreamsVideoStreamH264</a>

h264 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#h264 TranscoderJob#h264}

---

### TranscoderJobConfigElementaryStreamsVideoStreamH264 <a name="TranscoderJobConfigElementaryStreamsVideoStreamH264" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

&transcoderjob.TranscoderJobConfigElementaryStreamsVideoStreamH264 {
	BitrateBps: *f64,
	FrameRate: *f64,
	CrfLevel: *f64,
	EntropyCoder: *string,
	GopDuration: *string,
	HeightPixels: *f64,
	Hlg: github.com/cdktf/cdktf-provider-google-go/google/v16.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg,
	PixelFormat: *string,
	Preset: *string,
	Profile: *string,
	RateControlMode: *string,
	Sdr: github.com/cdktf/cdktf-provider-google-go/google/v16.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr,
	VbvFullnessBits: *f64,
	VbvSizeBits: *f64,
	WidthPixels: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.bitrateBps">BitrateBps</a></code> | <code>*f64</code> | The video bitrate in bits per second. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.frameRate">FrameRate</a></code> | <code>*f64</code> | The target video frame rate in frames per second (FPS). |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.crfLevel">CrfLevel</a></code> | <code>*f64</code> | Target CRF level. The default is '21'. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.entropyCoder">EntropyCoder</a></code> | <code>*string</code> | The entropy coder to use. The default is 'cabac'. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.gopDuration">GopDuration</a></code> | <code>*string</code> | Select the GOP size based on the specified duration. The default is '3s'. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.heightPixels">HeightPixels</a></code> | <code>*f64</code> | The height of the video in pixels. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.hlg">Hlg</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg</a></code> | hlg block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.pixelFormat">PixelFormat</a></code> | <code>*string</code> | Pixel format to use. The default is 'yuv420p'. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.preset">Preset</a></code> | <code>*string</code> | Enforces the specified codec preset. The default is 'veryfast'. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.profile">Profile</a></code> | <code>*string</code> | Enforces the specified codec profile. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.rateControlMode">RateControlMode</a></code> | <code>*string</code> | Specify the mode. The default is 'vbr'. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.sdr">Sdr</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr</a></code> | sdr block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.vbvFullnessBits">VbvFullnessBits</a></code> | <code>*f64</code> | Initial fullness of the Video Buffering Verifier (VBV) buffer in bits. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.vbvSizeBits">VbvSizeBits</a></code> | <code>*f64</code> | Size of the Video Buffering Verifier (VBV) buffer in bits. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.widthPixels">WidthPixels</a></code> | <code>*f64</code> | The width of the video in pixels. |

---

##### `BitrateBps`<sup>Required</sup> <a name="BitrateBps" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.bitrateBps"></a>

```go
BitrateBps *f64
```

- *Type:* *f64

The video bitrate in bits per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#bitrate_bps TranscoderJob#bitrate_bps}

---

##### `FrameRate`<sup>Required</sup> <a name="FrameRate" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.frameRate"></a>

```go
FrameRate *f64
```

- *Type:* *f64

The target video frame rate in frames per second (FPS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#frame_rate TranscoderJob#frame_rate}

---

##### `CrfLevel`<sup>Optional</sup> <a name="CrfLevel" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.crfLevel"></a>

```go
CrfLevel *f64
```

- *Type:* *f64

Target CRF level. The default is '21'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#crf_level TranscoderJob#crf_level}

---

##### `EntropyCoder`<sup>Optional</sup> <a name="EntropyCoder" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.entropyCoder"></a>

```go
EntropyCoder *string
```

- *Type:* *string

The entropy coder to use. The default is 'cabac'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#entropy_coder TranscoderJob#entropy_coder}

---

##### `GopDuration`<sup>Optional</sup> <a name="GopDuration" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.gopDuration"></a>

```go
GopDuration *string
```

- *Type:* *string

Select the GOP size based on the specified duration. The default is '3s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#gop_duration TranscoderJob#gop_duration}

---

##### `HeightPixels`<sup>Optional</sup> <a name="HeightPixels" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.heightPixels"></a>

```go
HeightPixels *f64
```

- *Type:* *f64

The height of the video in pixels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#height_pixels TranscoderJob#height_pixels}

---

##### `Hlg`<sup>Optional</sup> <a name="Hlg" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.hlg"></a>

```go
Hlg TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg</a>

hlg block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#hlg TranscoderJob#hlg}

---

##### `PixelFormat`<sup>Optional</sup> <a name="PixelFormat" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.pixelFormat"></a>

```go
PixelFormat *string
```

- *Type:* *string

Pixel format to use. The default is 'yuv420p'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#pixel_format TranscoderJob#pixel_format}

---

##### `Preset`<sup>Optional</sup> <a name="Preset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.preset"></a>

```go
Preset *string
```

- *Type:* *string

Enforces the specified codec preset. The default is 'veryfast'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#preset TranscoderJob#preset}

---

##### `Profile`<sup>Optional</sup> <a name="Profile" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.profile"></a>

```go
Profile *string
```

- *Type:* *string

Enforces the specified codec profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#profile TranscoderJob#profile}

---

##### `RateControlMode`<sup>Optional</sup> <a name="RateControlMode" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.rateControlMode"></a>

```go
RateControlMode *string
```

- *Type:* *string

Specify the mode. The default is 'vbr'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#rate_control_mode TranscoderJob#rate_control_mode}

---

##### `Sdr`<sup>Optional</sup> <a name="Sdr" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.sdr"></a>

```go
Sdr TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr</a>

sdr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#sdr TranscoderJob#sdr}

---

##### `VbvFullnessBits`<sup>Optional</sup> <a name="VbvFullnessBits" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.vbvFullnessBits"></a>

```go
VbvFullnessBits *f64
```

- *Type:* *f64

Initial fullness of the Video Buffering Verifier (VBV) buffer in bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#vbv_fullness_bits TranscoderJob#vbv_fullness_bits}

---

##### `VbvSizeBits`<sup>Optional</sup> <a name="VbvSizeBits" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.vbvSizeBits"></a>

```go
VbvSizeBits *f64
```

- *Type:* *f64

Size of the Video Buffering Verifier (VBV) buffer in bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#vbv_size_bits TranscoderJob#vbv_size_bits}

---

##### `WidthPixels`<sup>Optional</sup> <a name="WidthPixels" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.widthPixels"></a>

```go
WidthPixels *f64
```

- *Type:* *f64

The width of the video in pixels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#width_pixels TranscoderJob#width_pixels}

---

### TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg <a name="TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

&transcoderjob.TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg {

}
```


### TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr <a name="TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

&transcoderjob.TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr {

}
```


### TranscoderJobConfigEncryptions <a name="TranscoderJobConfigEncryptions" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

&transcoderjob.TranscoderJobConfigEncryptions {
	Id: *string,
	Aes128: github.com/cdktf/cdktf-provider-google-go/google/v16.transcoderJob.TranscoderJobConfigEncryptionsAes128,
	DrmSystems: github.com/cdktf/cdktf-provider-google-go/google/v16.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems,
	MpegCenc: github.com/cdktf/cdktf-provider-google-go/google/v16.transcoderJob.TranscoderJobConfigEncryptionsMpegCenc,
	SampleAes: github.com/cdktf/cdktf-provider-google-go/google/v16.transcoderJob.TranscoderJobConfigEncryptionsSampleAes,
	SecretManagerKeySource: github.com/cdktf/cdktf-provider-google-go/google/v16.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions.property.id">Id</a></code> | <code>*string</code> | Identifier for this set of encryption options. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions.property.aes128">Aes128</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128">TranscoderJobConfigEncryptionsAes128</a></code> | aes128 block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions.property.drmSystems">DrmSystems</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems">TranscoderJobConfigEncryptionsDrmSystems</a></code> | drm_systems block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions.property.mpegCenc">MpegCenc</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCenc">TranscoderJobConfigEncryptionsMpegCenc</a></code> | mpeg_cenc block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions.property.sampleAes">SampleAes</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAes">TranscoderJobConfigEncryptionsSampleAes</a></code> | sample_aes block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions.property.secretManagerKeySource">SecretManagerKeySource</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySource">TranscoderJobConfigEncryptionsSecretManagerKeySource</a></code> | secret_manager_key_source block. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions.property.id"></a>

```go
Id *string
```

- *Type:* *string

Identifier for this set of encryption options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#id TranscoderJob#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Aes128`<sup>Optional</sup> <a name="Aes128" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions.property.aes128"></a>

```go
Aes128 TranscoderJobConfigEncryptionsAes128
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128">TranscoderJobConfigEncryptionsAes128</a>

aes128 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#aes128 TranscoderJob#aes128}

---

##### `DrmSystems`<sup>Optional</sup> <a name="DrmSystems" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions.property.drmSystems"></a>

```go
DrmSystems TranscoderJobConfigEncryptionsDrmSystems
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems">TranscoderJobConfigEncryptionsDrmSystems</a>

drm_systems block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#drm_systems TranscoderJob#drm_systems}

---

##### `MpegCenc`<sup>Optional</sup> <a name="MpegCenc" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions.property.mpegCenc"></a>

```go
MpegCenc TranscoderJobConfigEncryptionsMpegCenc
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCenc">TranscoderJobConfigEncryptionsMpegCenc</a>

mpeg_cenc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#mpeg_cenc TranscoderJob#mpeg_cenc}

---

##### `SampleAes`<sup>Optional</sup> <a name="SampleAes" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions.property.sampleAes"></a>

```go
SampleAes TranscoderJobConfigEncryptionsSampleAes
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAes">TranscoderJobConfigEncryptionsSampleAes</a>

sample_aes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#sample_aes TranscoderJob#sample_aes}

---

##### `SecretManagerKeySource`<sup>Optional</sup> <a name="SecretManagerKeySource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions.property.secretManagerKeySource"></a>

```go
SecretManagerKeySource TranscoderJobConfigEncryptionsSecretManagerKeySource
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySource">TranscoderJobConfigEncryptionsSecretManagerKeySource</a>

secret_manager_key_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#secret_manager_key_source TranscoderJob#secret_manager_key_source}

---

### TranscoderJobConfigEncryptionsAes128 <a name="TranscoderJobConfigEncryptionsAes128" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

&transcoderjob.TranscoderJobConfigEncryptionsAes128 {

}
```


### TranscoderJobConfigEncryptionsDrmSystems <a name="TranscoderJobConfigEncryptionsDrmSystems" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

&transcoderjob.TranscoderJobConfigEncryptionsDrmSystems {
	Clearkey: github.com/cdktf/cdktf-provider-google-go/google/v16.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkey,
	Fairplay: github.com/cdktf/cdktf-provider-google-go/google/v16.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplay,
	Playready: github.com/cdktf/cdktf-provider-google-go/google/v16.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayready,
	Widevine: github.com/cdktf/cdktf-provider-google-go/google/v16.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevine,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems.property.clearkey">Clearkey</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkey">TranscoderJobConfigEncryptionsDrmSystemsClearkey</a></code> | clearkey block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems.property.fairplay">Fairplay</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplay">TranscoderJobConfigEncryptionsDrmSystemsFairplay</a></code> | fairplay block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems.property.playready">Playready</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayready">TranscoderJobConfigEncryptionsDrmSystemsPlayready</a></code> | playready block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems.property.widevine">Widevine</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevine">TranscoderJobConfigEncryptionsDrmSystemsWidevine</a></code> | widevine block. |

---

##### `Clearkey`<sup>Optional</sup> <a name="Clearkey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems.property.clearkey"></a>

```go
Clearkey TranscoderJobConfigEncryptionsDrmSystemsClearkey
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkey">TranscoderJobConfigEncryptionsDrmSystemsClearkey</a>

clearkey block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#clearkey TranscoderJob#clearkey}

---

##### `Fairplay`<sup>Optional</sup> <a name="Fairplay" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems.property.fairplay"></a>

```go
Fairplay TranscoderJobConfigEncryptionsDrmSystemsFairplay
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplay">TranscoderJobConfigEncryptionsDrmSystemsFairplay</a>

fairplay block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#fairplay TranscoderJob#fairplay}

---

##### `Playready`<sup>Optional</sup> <a name="Playready" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems.property.playready"></a>

```go
Playready TranscoderJobConfigEncryptionsDrmSystemsPlayready
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayready">TranscoderJobConfigEncryptionsDrmSystemsPlayready</a>

playready block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#playready TranscoderJob#playready}

---

##### `Widevine`<sup>Optional</sup> <a name="Widevine" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems.property.widevine"></a>

```go
Widevine TranscoderJobConfigEncryptionsDrmSystemsWidevine
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevine">TranscoderJobConfigEncryptionsDrmSystemsWidevine</a>

widevine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#widevine TranscoderJob#widevine}

---

### TranscoderJobConfigEncryptionsDrmSystemsClearkey <a name="TranscoderJobConfigEncryptionsDrmSystemsClearkey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

&transcoderjob.TranscoderJobConfigEncryptionsDrmSystemsClearkey {

}
```


### TranscoderJobConfigEncryptionsDrmSystemsFairplay <a name="TranscoderJobConfigEncryptionsDrmSystemsFairplay" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplay.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

&transcoderjob.TranscoderJobConfigEncryptionsDrmSystemsFairplay {

}
```


### TranscoderJobConfigEncryptionsDrmSystemsPlayready <a name="TranscoderJobConfigEncryptionsDrmSystemsPlayready" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayready"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayready.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

&transcoderjob.TranscoderJobConfigEncryptionsDrmSystemsPlayready {

}
```


### TranscoderJobConfigEncryptionsDrmSystemsWidevine <a name="TranscoderJobConfigEncryptionsDrmSystemsWidevine" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevine.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

&transcoderjob.TranscoderJobConfigEncryptionsDrmSystemsWidevine {

}
```


### TranscoderJobConfigEncryptionsMpegCenc <a name="TranscoderJobConfigEncryptionsMpegCenc" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCenc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCenc.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

&transcoderjob.TranscoderJobConfigEncryptionsMpegCenc {
	Scheme: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCenc.property.scheme">Scheme</a></code> | <code>*string</code> | Specify the encryption scheme. |

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCenc.property.scheme"></a>

```go
Scheme *string
```

- *Type:* *string

Specify the encryption scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#scheme TranscoderJob#scheme}

---

### TranscoderJobConfigEncryptionsSampleAes <a name="TranscoderJobConfigEncryptionsSampleAes" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

&transcoderjob.TranscoderJobConfigEncryptionsSampleAes {

}
```


### TranscoderJobConfigEncryptionsSecretManagerKeySource <a name="TranscoderJobConfigEncryptionsSecretManagerKeySource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

&transcoderjob.TranscoderJobConfigEncryptionsSecretManagerKeySource {
	SecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySource.property.secretVersion">SecretVersion</a></code> | <code>*string</code> | The name of the Secret Version containing the encryption key in the following format: projects/{project}/secrets/{secret_id}/versions/{version_number}. |

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySource.property.secretVersion"></a>

```go
SecretVersion *string
```

- *Type:* *string

The name of the Secret Version containing the encryption key in the following format: projects/{project}/secrets/{secret_id}/versions/{version_number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#secret_version TranscoderJob#secret_version}

---

### TranscoderJobConfigInputs <a name="TranscoderJobConfigInputs" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

&transcoderjob.TranscoderJobConfigInputs {
	Key: *string,
	Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputs.property.key">Key</a></code> | <code>*string</code> | A unique key for this input. Must be specified when using advanced mapping and edit lists. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputs.property.uri">Uri</a></code> | <code>*string</code> | URI of the media. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputs.property.key"></a>

```go
Key *string
```

- *Type:* *string

A unique key for this input. Must be specified when using advanced mapping and edit lists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#key TranscoderJob#key}

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputs.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

URI of the media.

Input files must be at least 5 seconds in duration and stored in Cloud Storage (for example, gs://bucket/inputs/file.mp4).
If empty, the value is populated from Job.input_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#uri TranscoderJob#uri}

---

### TranscoderJobConfigManifests <a name="TranscoderJobConfigManifests" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifests.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

&transcoderjob.TranscoderJobConfigManifests {
	FileName: *string,
	MuxStreams: *[]*string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifests.property.fileName">FileName</a></code> | <code>*string</code> | The name of the generated file. The default is 'manifest'. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifests.property.muxStreams">MuxStreams</a></code> | <code>*[]*string</code> | List of user supplied MuxStream.key values that should appear in this manifest. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifests.property.type">Type</a></code> | <code>*string</code> | Type of the manifest. Possible values: ["MANIFEST_TYPE_UNSPECIFIED", "HLS", "DASH"]. |

---

##### `FileName`<sup>Optional</sup> <a name="FileName" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifests.property.fileName"></a>

```go
FileName *string
```

- *Type:* *string

The name of the generated file. The default is 'manifest'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#file_name TranscoderJob#file_name}

---

##### `MuxStreams`<sup>Optional</sup> <a name="MuxStreams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifests.property.muxStreams"></a>

```go
MuxStreams *[]*string
```

- *Type:* *[]*string

List of user supplied MuxStream.key values that should appear in this manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#mux_streams TranscoderJob#mux_streams}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifests.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of the manifest. Possible values: ["MANIFEST_TYPE_UNSPECIFIED", "HLS", "DASH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#type TranscoderJob#type}

---

### TranscoderJobConfigMuxStreams <a name="TranscoderJobConfigMuxStreams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

&transcoderjob.TranscoderJobConfigMuxStreams {
	Container: *string,
	ElementaryStreams: *[]*string,
	EncryptionId: *string,
	FileName: *string,
	Key: *string,
	SegmentSettings: github.com/cdktf/cdktf-provider-google-go/google/v16.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams.property.container">Container</a></code> | <code>*string</code> | The container format. The default is 'mp4'. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams.property.elementaryStreams">ElementaryStreams</a></code> | <code>*[]*string</code> | List of ElementaryStream.key values multiplexed in this stream. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams.property.encryptionId">EncryptionId</a></code> | <code>*string</code> | Identifier of the encryption configuration to use. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams.property.fileName">FileName</a></code> | <code>*string</code> | The name of the generated file. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams.property.key">Key</a></code> | <code>*string</code> | A unique key for this multiplexed stream. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams.property.segmentSettings">SegmentSettings</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettings">TranscoderJobConfigMuxStreamsSegmentSettings</a></code> | segment_settings block. |

---

##### `Container`<sup>Optional</sup> <a name="Container" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams.property.container"></a>

```go
Container *string
```

- *Type:* *string

The container format. The default is 'mp4'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#container TranscoderJob#container}

---

##### `ElementaryStreams`<sup>Optional</sup> <a name="ElementaryStreams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams.property.elementaryStreams"></a>

```go
ElementaryStreams *[]*string
```

- *Type:* *[]*string

List of ElementaryStream.key values multiplexed in this stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#elementary_streams TranscoderJob#elementary_streams}

---

##### `EncryptionId`<sup>Optional</sup> <a name="EncryptionId" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams.property.encryptionId"></a>

```go
EncryptionId *string
```

- *Type:* *string

Identifier of the encryption configuration to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#encryption_id TranscoderJob#encryption_id}

---

##### `FileName`<sup>Optional</sup> <a name="FileName" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams.property.fileName"></a>

```go
FileName *string
```

- *Type:* *string

The name of the generated file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#file_name TranscoderJob#file_name}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams.property.key"></a>

```go
Key *string
```

- *Type:* *string

A unique key for this multiplexed stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#key TranscoderJob#key}

---

##### `SegmentSettings`<sup>Optional</sup> <a name="SegmentSettings" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams.property.segmentSettings"></a>

```go
SegmentSettings TranscoderJobConfigMuxStreamsSegmentSettings
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettings">TranscoderJobConfigMuxStreamsSegmentSettings</a>

segment_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#segment_settings TranscoderJob#segment_settings}

---

### TranscoderJobConfigMuxStreamsSegmentSettings <a name="TranscoderJobConfigMuxStreamsSegmentSettings" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

&transcoderjob.TranscoderJobConfigMuxStreamsSegmentSettings {
	SegmentDuration: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettings.property.segmentDuration">SegmentDuration</a></code> | <code>*string</code> | Duration of the segments in seconds. The default is '6.0s'. |

---

##### `SegmentDuration`<sup>Optional</sup> <a name="SegmentDuration" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettings.property.segmentDuration"></a>

```go
SegmentDuration *string
```

- *Type:* *string

Duration of the segments in seconds. The default is '6.0s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#segment_duration TranscoderJob#segment_duration}

---

### TranscoderJobConfigOutput <a name="TranscoderJobConfigOutput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

&transcoderjob.TranscoderJobConfigOutput {
	Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutput.property.uri">Uri</a></code> | <code>*string</code> | URI for the output file(s). For example, gs://my-bucket/outputs/. |

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutput.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

URI for the output file(s). For example, gs://my-bucket/outputs/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#uri TranscoderJob#uri}

---

### TranscoderJobConfigOverlays <a name="TranscoderJobConfigOverlays" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlays"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlays.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

&transcoderjob.TranscoderJobConfigOverlays {
	Animations: interface{},
	Image: github.com/cdktf/cdktf-provider-google-go/google/v16.transcoderJob.TranscoderJobConfigOverlaysImage,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlays.property.animations">Animations</a></code> | <code>interface{}</code> | animations block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlays.property.image">Image</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImage">TranscoderJobConfigOverlaysImage</a></code> | image block. |

---

##### `Animations`<sup>Optional</sup> <a name="Animations" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlays.property.animations"></a>

```go
Animations interface{}
```

- *Type:* interface{}

animations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#animations TranscoderJob#animations}

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlays.property.image"></a>

```go
Image TranscoderJobConfigOverlaysImage
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImage">TranscoderJobConfigOverlaysImage</a>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#image TranscoderJob#image}

---

### TranscoderJobConfigOverlaysAnimations <a name="TranscoderJobConfigOverlaysAnimations" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

&transcoderjob.TranscoderJobConfigOverlaysAnimations {
	AnimationFade: github.com/cdktf/cdktf-provider-google-go/google/v16.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimations.property.animationFade">AnimationFade</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade">TranscoderJobConfigOverlaysAnimationsAnimationFade</a></code> | animation_fade block. |

---

##### `AnimationFade`<sup>Optional</sup> <a name="AnimationFade" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimations.property.animationFade"></a>

```go
AnimationFade TranscoderJobConfigOverlaysAnimationsAnimationFade
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade">TranscoderJobConfigOverlaysAnimationsAnimationFade</a>

animation_fade block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#animation_fade TranscoderJob#animation_fade}

---

### TranscoderJobConfigOverlaysAnimationsAnimationFade <a name="TranscoderJobConfigOverlaysAnimationsAnimationFade" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

&transcoderjob.TranscoderJobConfigOverlaysAnimationsAnimationFade {
	FadeType: *string,
	EndTimeOffset: *string,
	StartTimeOffset: *string,
	Xy: github.com/cdktf/cdktf-provider-google-go/google/v16.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade.property.fadeType">FadeType</a></code> | <code>*string</code> | Required. Type of fade animation: 'FADE_IN' or 'FADE_OUT'. The possible values are:. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade.property.endTimeOffset">EndTimeOffset</a></code> | <code>*string</code> | The time to end the fade animation, in seconds. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade.property.startTimeOffset">StartTimeOffset</a></code> | <code>*string</code> | The time to start the fade animation, in seconds. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade.property.xy">Xy</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobConfigOverlaysAnimationsAnimationFadeXy</a></code> | xy block. |

---

##### `FadeType`<sup>Required</sup> <a name="FadeType" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade.property.fadeType"></a>

```go
FadeType *string
```

- *Type:* *string

Required. Type of fade animation: 'FADE_IN' or 'FADE_OUT'. The possible values are:.

* 'FADE_TYPE_UNSPECIFIED': The fade type is not specified.
* 'FADE_IN': Fade the overlay object into view.
* 'FADE_OUT': Fade the overlay object out of view. Possible values: ["FADE_TYPE_UNSPECIFIED", "FADE_IN", "FADE_OUT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#fade_type TranscoderJob#fade_type}

---

##### `EndTimeOffset`<sup>Optional</sup> <a name="EndTimeOffset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade.property.endTimeOffset"></a>

```go
EndTimeOffset *string
```

- *Type:* *string

The time to end the fade animation, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#end_time_offset TranscoderJob#end_time_offset}

---

##### `StartTimeOffset`<sup>Optional</sup> <a name="StartTimeOffset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade.property.startTimeOffset"></a>

```go
StartTimeOffset *string
```

- *Type:* *string

The time to start the fade animation, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#start_time_offset TranscoderJob#start_time_offset}

---

##### `Xy`<sup>Optional</sup> <a name="Xy" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade.property.xy"></a>

```go
Xy TranscoderJobConfigOverlaysAnimationsAnimationFadeXy
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobConfigOverlaysAnimationsAnimationFadeXy</a>

xy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#xy TranscoderJob#xy}

---

### TranscoderJobConfigOverlaysAnimationsAnimationFadeXy <a name="TranscoderJobConfigOverlaysAnimationsAnimationFadeXy" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

&transcoderjob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy {
	X: *f64,
	Y: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy.property.x">X</a></code> | <code>*f64</code> | Normalized x coordinate. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy.property.y">Y</a></code> | <code>*f64</code> | Normalized y coordinate. |

---

##### `X`<sup>Optional</sup> <a name="X" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy.property.x"></a>

```go
X *f64
```

- *Type:* *f64

Normalized x coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#x TranscoderJob#x}

---

##### `Y`<sup>Optional</sup> <a name="Y" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy.property.y"></a>

```go
Y *f64
```

- *Type:* *f64

Normalized y coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#y TranscoderJob#y}

---

### TranscoderJobConfigOverlaysImage <a name="TranscoderJobConfigOverlaysImage" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

&transcoderjob.TranscoderJobConfigOverlaysImage {
	Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImage.property.uri">Uri</a></code> | <code>*string</code> | URI of the image in Cloud Storage. For example, gs://bucket/inputs/image.png. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImage.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

URI of the image in Cloud Storage. For example, gs://bucket/inputs/image.png.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#uri TranscoderJob#uri}

---

### TranscoderJobConfigPubsubDestination <a name="TranscoderJobConfigPubsubDestination" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestination.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

&transcoderjob.TranscoderJobConfigPubsubDestination {
	Topic: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestination.property.topic">Topic</a></code> | <code>*string</code> | The name of the Pub/Sub topic to publish job completion notification to. For example: projects/{project}/topics/{topic}. |

---

##### `Topic`<sup>Optional</sup> <a name="Topic" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestination.property.topic"></a>

```go
Topic *string
```

- *Type:* *string

The name of the Pub/Sub topic to publish job completion notification to. For example: projects/{project}/topics/{topic}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#topic TranscoderJob#topic}

---

### TranscoderJobTimeouts <a name="TranscoderJobTimeouts" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

&transcoderjob.TranscoderJobTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#create TranscoderJob#create}. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#delete TranscoderJob#delete}. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#update TranscoderJob#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#create TranscoderJob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#delete TranscoderJob#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#update TranscoderJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TranscoderJobConfigAdBreaksList <a name="TranscoderJobConfigAdBreaksList" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.NewTranscoderJobConfigAdBreaksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TranscoderJobConfigAdBreaksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.get"></a>

```go
func Get(index *f64) TranscoderJobConfigAdBreaksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscoderJobConfigAdBreaksOutputReference <a name="TranscoderJobConfigAdBreaksOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.NewTranscoderJobConfigAdBreaksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TranscoderJobConfigAdBreaksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.resetStartTimeOffset">ResetStartTimeOffset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStartTimeOffset` <a name="ResetStartTimeOffset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.resetStartTimeOffset"></a>

```go
func ResetStartTimeOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.property.startTimeOffsetInput">StartTimeOffsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.property.startTimeOffset">StartTimeOffset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StartTimeOffsetInput`<sup>Optional</sup> <a name="StartTimeOffsetInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.property.startTimeOffsetInput"></a>

```go
func StartTimeOffsetInput() *string
```

- *Type:* *string

---

##### `StartTimeOffset`<sup>Required</sup> <a name="StartTimeOffset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.property.startTimeOffset"></a>

```go
func StartTimeOffset() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscoderJobConfigAOutputReference <a name="TranscoderJobConfigAOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.NewTranscoderJobConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putAdBreaks">PutAdBreaks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putEditList">PutEditList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putElementaryStreams">PutElementaryStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putEncryptions">PutEncryptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putInputs">PutInputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putManifests">PutManifests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putMuxStreams">PutMuxStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putOutput">PutOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putOverlays">PutOverlays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putPubsubDestination">PutPubsubDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetAdBreaks">ResetAdBreaks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetEditList">ResetEditList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetElementaryStreams">ResetElementaryStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetEncryptions">ResetEncryptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetInputs">ResetInputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetManifests">ResetManifests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetMuxStreams">ResetMuxStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetOutput">ResetOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetOverlays">ResetOverlays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetPubsubDestination">ResetPubsubDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdBreaks` <a name="PutAdBreaks" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putAdBreaks"></a>

```go
func PutAdBreaks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putAdBreaks.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEditList` <a name="PutEditList" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putEditList"></a>

```go
func PutEditList(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putEditList.parameter.value"></a>

- *Type:* interface{}

---

##### `PutElementaryStreams` <a name="PutElementaryStreams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putElementaryStreams"></a>

```go
func PutElementaryStreams(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putElementaryStreams.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEncryptions` <a name="PutEncryptions" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putEncryptions"></a>

```go
func PutEncryptions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putEncryptions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutInputs` <a name="PutInputs" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putInputs"></a>

```go
func PutInputs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putInputs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutManifests` <a name="PutManifests" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putManifests"></a>

```go
func PutManifests(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putManifests.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMuxStreams` <a name="PutMuxStreams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putMuxStreams"></a>

```go
func PutMuxStreams(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putMuxStreams.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOutput` <a name="PutOutput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putOutput"></a>

```go
func PutOutput(value TranscoderJobConfigOutput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putOutput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutput">TranscoderJobConfigOutput</a>

---

##### `PutOverlays` <a name="PutOverlays" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putOverlays"></a>

```go
func PutOverlays(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putOverlays.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPubsubDestination` <a name="PutPubsubDestination" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putPubsubDestination"></a>

```go
func PutPubsubDestination(value TranscoderJobConfigPubsubDestination)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putPubsubDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestination">TranscoderJobConfigPubsubDestination</a>

---

##### `ResetAdBreaks` <a name="ResetAdBreaks" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetAdBreaks"></a>

```go
func ResetAdBreaks()
```

##### `ResetEditList` <a name="ResetEditList" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetEditList"></a>

```go
func ResetEditList()
```

##### `ResetElementaryStreams` <a name="ResetElementaryStreams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetElementaryStreams"></a>

```go
func ResetElementaryStreams()
```

##### `ResetEncryptions` <a name="ResetEncryptions" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetEncryptions"></a>

```go
func ResetEncryptions()
```

##### `ResetInputs` <a name="ResetInputs" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetInputs"></a>

```go
func ResetInputs()
```

##### `ResetManifests` <a name="ResetManifests" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetManifests"></a>

```go
func ResetManifests()
```

##### `ResetMuxStreams` <a name="ResetMuxStreams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetMuxStreams"></a>

```go
func ResetMuxStreams()
```

##### `ResetOutput` <a name="ResetOutput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetOutput"></a>

```go
func ResetOutput()
```

##### `ResetOverlays` <a name="ResetOverlays" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetOverlays"></a>

```go
func ResetOverlays()
```

##### `ResetPubsubDestination` <a name="ResetPubsubDestination" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetPubsubDestination"></a>

```go
func ResetPubsubDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.adBreaks">AdBreaks</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList">TranscoderJobConfigAdBreaksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.editList">EditList</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList">TranscoderJobConfigEditListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.elementaryStreams">ElementaryStreams</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList">TranscoderJobConfigElementaryStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.encryptions">Encryptions</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList">TranscoderJobConfigEncryptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.inputs">Inputs</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList">TranscoderJobConfigInputsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.manifests">Manifests</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList">TranscoderJobConfigManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.muxStreams">MuxStreams</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList">TranscoderJobConfigMuxStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.output">Output</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference">TranscoderJobConfigOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.overlays">Overlays</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList">TranscoderJobConfigOverlaysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.pubsubDestination">PubsubDestination</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference">TranscoderJobConfigPubsubDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.adBreaksInput">AdBreaksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.editListInput">EditListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.elementaryStreamsInput">ElementaryStreamsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.encryptionsInput">EncryptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.inputsInput">InputsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.manifestsInput">ManifestsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.muxStreamsInput">MuxStreamsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.outputInput">OutputInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutput">TranscoderJobConfigOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.overlaysInput">OverlaysInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.pubsubDestinationInput">PubsubDestinationInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestination">TranscoderJobConfigPubsubDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA">TranscoderJobConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdBreaks`<sup>Required</sup> <a name="AdBreaks" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.adBreaks"></a>

```go
func AdBreaks() TranscoderJobConfigAdBreaksList
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList">TranscoderJobConfigAdBreaksList</a>

---

##### `EditList`<sup>Required</sup> <a name="EditList" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.editList"></a>

```go
func EditList() TranscoderJobConfigEditListStructList
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList">TranscoderJobConfigEditListStructList</a>

---

##### `ElementaryStreams`<sup>Required</sup> <a name="ElementaryStreams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.elementaryStreams"></a>

```go
func ElementaryStreams() TranscoderJobConfigElementaryStreamsList
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList">TranscoderJobConfigElementaryStreamsList</a>

---

##### `Encryptions`<sup>Required</sup> <a name="Encryptions" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.encryptions"></a>

```go
func Encryptions() TranscoderJobConfigEncryptionsList
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList">TranscoderJobConfigEncryptionsList</a>

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.inputs"></a>

```go
func Inputs() TranscoderJobConfigInputsList
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList">TranscoderJobConfigInputsList</a>

---

##### `Manifests`<sup>Required</sup> <a name="Manifests" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.manifests"></a>

```go
func Manifests() TranscoderJobConfigManifestsList
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList">TranscoderJobConfigManifestsList</a>

---

##### `MuxStreams`<sup>Required</sup> <a name="MuxStreams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.muxStreams"></a>

```go
func MuxStreams() TranscoderJobConfigMuxStreamsList
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList">TranscoderJobConfigMuxStreamsList</a>

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.output"></a>

```go
func Output() TranscoderJobConfigOutputOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference">TranscoderJobConfigOutputOutputReference</a>

---

##### `Overlays`<sup>Required</sup> <a name="Overlays" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.overlays"></a>

```go
func Overlays() TranscoderJobConfigOverlaysList
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList">TranscoderJobConfigOverlaysList</a>

---

##### `PubsubDestination`<sup>Required</sup> <a name="PubsubDestination" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.pubsubDestination"></a>

```go
func PubsubDestination() TranscoderJobConfigPubsubDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference">TranscoderJobConfigPubsubDestinationOutputReference</a>

---

##### `AdBreaksInput`<sup>Optional</sup> <a name="AdBreaksInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.adBreaksInput"></a>

```go
func AdBreaksInput() interface{}
```

- *Type:* interface{}

---

##### `EditListInput`<sup>Optional</sup> <a name="EditListInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.editListInput"></a>

```go
func EditListInput() interface{}
```

- *Type:* interface{}

---

##### `ElementaryStreamsInput`<sup>Optional</sup> <a name="ElementaryStreamsInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.elementaryStreamsInput"></a>

```go
func ElementaryStreamsInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptionsInput`<sup>Optional</sup> <a name="EncryptionsInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.encryptionsInput"></a>

```go
func EncryptionsInput() interface{}
```

- *Type:* interface{}

---

##### `InputsInput`<sup>Optional</sup> <a name="InputsInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.inputsInput"></a>

```go
func InputsInput() interface{}
```

- *Type:* interface{}

---

##### `ManifestsInput`<sup>Optional</sup> <a name="ManifestsInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.manifestsInput"></a>

```go
func ManifestsInput() interface{}
```

- *Type:* interface{}

---

##### `MuxStreamsInput`<sup>Optional</sup> <a name="MuxStreamsInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.muxStreamsInput"></a>

```go
func MuxStreamsInput() interface{}
```

- *Type:* interface{}

---

##### `OutputInput`<sup>Optional</sup> <a name="OutputInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.outputInput"></a>

```go
func OutputInput() TranscoderJobConfigOutput
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutput">TranscoderJobConfigOutput</a>

---

##### `OverlaysInput`<sup>Optional</sup> <a name="OverlaysInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.overlaysInput"></a>

```go
func OverlaysInput() interface{}
```

- *Type:* interface{}

---

##### `PubsubDestinationInput`<sup>Optional</sup> <a name="PubsubDestinationInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.pubsubDestinationInput"></a>

```go
func PubsubDestinationInput() TranscoderJobConfigPubsubDestination
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestination">TranscoderJobConfigPubsubDestination</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobConfigA
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA">TranscoderJobConfigA</a>

---


### TranscoderJobConfigEditListStructList <a name="TranscoderJobConfigEditListStructList" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.NewTranscoderJobConfigEditListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TranscoderJobConfigEditListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.get"></a>

```go
func Get(index *f64) TranscoderJobConfigEditListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscoderJobConfigEditListStructOutputReference <a name="TranscoderJobConfigEditListStructOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.NewTranscoderJobConfigEditListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TranscoderJobConfigEditListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.resetInputs">ResetInputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.resetStartTimeOffset">ResetStartTimeOffset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInputs` <a name="ResetInputs" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.resetInputs"></a>

```go
func ResetInputs()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetStartTimeOffset` <a name="ResetStartTimeOffset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.resetStartTimeOffset"></a>

```go
func ResetStartTimeOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.inputsInput">InputsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.startTimeOffsetInput">StartTimeOffsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.inputs">Inputs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.startTimeOffset">StartTimeOffset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputsInput`<sup>Optional</sup> <a name="InputsInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.inputsInput"></a>

```go
func InputsInput() *[]*string
```

- *Type:* *[]*string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `StartTimeOffsetInput`<sup>Optional</sup> <a name="StartTimeOffsetInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.startTimeOffsetInput"></a>

```go
func StartTimeOffsetInput() *string
```

- *Type:* *string

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.inputs"></a>

```go
func Inputs() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `StartTimeOffset`<sup>Required</sup> <a name="StartTimeOffset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.startTimeOffset"></a>

```go
func StartTimeOffset() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscoderJobConfigElementaryStreamsAudioStreamOutputReference <a name="TranscoderJobConfigElementaryStreamsAudioStreamOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.NewTranscoderJobConfigElementaryStreamsAudioStreamOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobConfigElementaryStreamsAudioStreamOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resetChannelCount">ResetChannelCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resetChannelLayout">ResetChannelLayout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resetCodec">ResetCodec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resetSampleRateHertz">ResetSampleRateHertz</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChannelCount` <a name="ResetChannelCount" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resetChannelCount"></a>

```go
func ResetChannelCount()
```

##### `ResetChannelLayout` <a name="ResetChannelLayout" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resetChannelLayout"></a>

```go
func ResetChannelLayout()
```

##### `ResetCodec` <a name="ResetCodec" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resetCodec"></a>

```go
func ResetCodec()
```

##### `ResetSampleRateHertz` <a name="ResetSampleRateHertz" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resetSampleRateHertz"></a>

```go
func ResetSampleRateHertz()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBpsInput">BitrateBpsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.channelCountInput">ChannelCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.channelLayoutInput">ChannelLayoutInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.codecInput">CodecInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertzInput">SampleRateHertzInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBps">BitrateBps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.channelCount">ChannelCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.channelLayout">ChannelLayout</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.codec">Codec</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertz">SampleRateHertz</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream">TranscoderJobConfigElementaryStreamsAudioStream</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BitrateBpsInput`<sup>Optional</sup> <a name="BitrateBpsInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBpsInput"></a>

```go
func BitrateBpsInput() *f64
```

- *Type:* *f64

---

##### `ChannelCountInput`<sup>Optional</sup> <a name="ChannelCountInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.channelCountInput"></a>

```go
func ChannelCountInput() *f64
```

- *Type:* *f64

---

##### `ChannelLayoutInput`<sup>Optional</sup> <a name="ChannelLayoutInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.channelLayoutInput"></a>

```go
func ChannelLayoutInput() *[]*string
```

- *Type:* *[]*string

---

##### `CodecInput`<sup>Optional</sup> <a name="CodecInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.codecInput"></a>

```go
func CodecInput() *string
```

- *Type:* *string

---

##### `SampleRateHertzInput`<sup>Optional</sup> <a name="SampleRateHertzInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertzInput"></a>

```go
func SampleRateHertzInput() *f64
```

- *Type:* *f64

---

##### `BitrateBps`<sup>Required</sup> <a name="BitrateBps" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBps"></a>

```go
func BitrateBps() *f64
```

- *Type:* *f64

---

##### `ChannelCount`<sup>Required</sup> <a name="ChannelCount" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.channelCount"></a>

```go
func ChannelCount() *f64
```

- *Type:* *f64

---

##### `ChannelLayout`<sup>Required</sup> <a name="ChannelLayout" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.channelLayout"></a>

```go
func ChannelLayout() *[]*string
```

- *Type:* *[]*string

---

##### `Codec`<sup>Required</sup> <a name="Codec" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.codec"></a>

```go
func Codec() *string
```

- *Type:* *string

---

##### `SampleRateHertz`<sup>Required</sup> <a name="SampleRateHertz" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertz"></a>

```go
func SampleRateHertz() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobConfigElementaryStreamsAudioStream
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream">TranscoderJobConfigElementaryStreamsAudioStream</a>

---


### TranscoderJobConfigElementaryStreamsList <a name="TranscoderJobConfigElementaryStreamsList" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.NewTranscoderJobConfigElementaryStreamsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TranscoderJobConfigElementaryStreamsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.get"></a>

```go
func Get(index *f64) TranscoderJobConfigElementaryStreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscoderJobConfigElementaryStreamsOutputReference <a name="TranscoderJobConfigElementaryStreamsOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.NewTranscoderJobConfigElementaryStreamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TranscoderJobConfigElementaryStreamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.putAudioStream">PutAudioStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.putVideoStream">PutVideoStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.resetAudioStream">ResetAudioStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.resetVideoStream">ResetVideoStream</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAudioStream` <a name="PutAudioStream" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.putAudioStream"></a>

```go
func PutAudioStream(value TranscoderJobConfigElementaryStreamsAudioStream)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.putAudioStream.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream">TranscoderJobConfigElementaryStreamsAudioStream</a>

---

##### `PutVideoStream` <a name="PutVideoStream" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.putVideoStream"></a>

```go
func PutVideoStream(value TranscoderJobConfigElementaryStreamsVideoStream)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.putVideoStream.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStream">TranscoderJobConfigElementaryStreamsVideoStream</a>

---

##### `ResetAudioStream` <a name="ResetAudioStream" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.resetAudioStream"></a>

```go
func ResetAudioStream()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetVideoStream` <a name="ResetVideoStream" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.resetVideoStream"></a>

```go
func ResetVideoStream()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.audioStream">AudioStream</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference">TranscoderJobConfigElementaryStreamsAudioStreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.videoStream">VideoStream</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference">TranscoderJobConfigElementaryStreamsVideoStreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.audioStreamInput">AudioStreamInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream">TranscoderJobConfigElementaryStreamsAudioStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.videoStreamInput">VideoStreamInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStream">TranscoderJobConfigElementaryStreamsVideoStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AudioStream`<sup>Required</sup> <a name="AudioStream" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.audioStream"></a>

```go
func AudioStream() TranscoderJobConfigElementaryStreamsAudioStreamOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference">TranscoderJobConfigElementaryStreamsAudioStreamOutputReference</a>

---

##### `VideoStream`<sup>Required</sup> <a name="VideoStream" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.videoStream"></a>

```go
func VideoStream() TranscoderJobConfigElementaryStreamsVideoStreamOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference">TranscoderJobConfigElementaryStreamsVideoStreamOutputReference</a>

---

##### `AudioStreamInput`<sup>Optional</sup> <a name="AudioStreamInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.audioStreamInput"></a>

```go
func AudioStreamInput() TranscoderJobConfigElementaryStreamsAudioStream
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream">TranscoderJobConfigElementaryStreamsAudioStream</a>

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `VideoStreamInput`<sup>Optional</sup> <a name="VideoStreamInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.videoStreamInput"></a>

```go
func VideoStreamInput() TranscoderJobConfigElementaryStreamsVideoStream
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStream">TranscoderJobConfigElementaryStreamsVideoStream</a>

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference <a name="TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.NewTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg</a>

---


### TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference <a name="TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.NewTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.putHlg">PutHlg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.putSdr">PutSdr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetCrfLevel">ResetCrfLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetEntropyCoder">ResetEntropyCoder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetGopDuration">ResetGopDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetHeightPixels">ResetHeightPixels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetHlg">ResetHlg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetPixelFormat">ResetPixelFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetPreset">ResetPreset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetProfile">ResetProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetRateControlMode">ResetRateControlMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetSdr">ResetSdr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvFullnessBits">ResetVbvFullnessBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvSizeBits">ResetVbvSizeBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetWidthPixels">ResetWidthPixels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHlg` <a name="PutHlg" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.putHlg"></a>

```go
func PutHlg(value TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.putHlg.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg</a>

---

##### `PutSdr` <a name="PutSdr" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.putSdr"></a>

```go
func PutSdr(value TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.putSdr.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr</a>

---

##### `ResetCrfLevel` <a name="ResetCrfLevel" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetCrfLevel"></a>

```go
func ResetCrfLevel()
```

##### `ResetEntropyCoder` <a name="ResetEntropyCoder" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetEntropyCoder"></a>

```go
func ResetEntropyCoder()
```

##### `ResetGopDuration` <a name="ResetGopDuration" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetGopDuration"></a>

```go
func ResetGopDuration()
```

##### `ResetHeightPixels` <a name="ResetHeightPixels" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetHeightPixels"></a>

```go
func ResetHeightPixels()
```

##### `ResetHlg` <a name="ResetHlg" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetHlg"></a>

```go
func ResetHlg()
```

##### `ResetPixelFormat` <a name="ResetPixelFormat" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetPixelFormat"></a>

```go
func ResetPixelFormat()
```

##### `ResetPreset` <a name="ResetPreset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetPreset"></a>

```go
func ResetPreset()
```

##### `ResetProfile` <a name="ResetProfile" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetProfile"></a>

```go
func ResetProfile()
```

##### `ResetRateControlMode` <a name="ResetRateControlMode" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetRateControlMode"></a>

```go
func ResetRateControlMode()
```

##### `ResetSdr` <a name="ResetSdr" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetSdr"></a>

```go
func ResetSdr()
```

##### `ResetVbvFullnessBits` <a name="ResetVbvFullnessBits" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvFullnessBits"></a>

```go
func ResetVbvFullnessBits()
```

##### `ResetVbvSizeBits` <a name="ResetVbvSizeBits" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvSizeBits"></a>

```go
func ResetVbvSizeBits()
```

##### `ResetWidthPixels` <a name="ResetWidthPixels" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetWidthPixels"></a>

```go
func ResetWidthPixels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.hlg">Hlg</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference">TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.sdr">Sdr</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference">TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBpsInput">BitrateBpsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevelInput">CrfLevelInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoderInput">EntropyCoderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRateInput">FrameRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDurationInput">GopDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixelsInput">HeightPixelsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.hlgInput">HlgInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormatInput">PixelFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.presetInput">PresetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.profileInput">ProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlModeInput">RateControlModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.sdrInput">SdrInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBitsInput">VbvFullnessBitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBitsInput">VbvSizeBitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixelsInput">WidthPixelsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBps">BitrateBps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevel">CrfLevel</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoder">EntropyCoder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRate">FrameRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDuration">GopDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixels">HeightPixels</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormat">PixelFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.preset">Preset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.profile">Profile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlMode">RateControlMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBits">VbvFullnessBits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBits">VbvSizeBits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixels">WidthPixels</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264">TranscoderJobConfigElementaryStreamsVideoStreamH264</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hlg`<sup>Required</sup> <a name="Hlg" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.hlg"></a>

```go
func Hlg() TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference">TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference</a>

---

##### `Sdr`<sup>Required</sup> <a name="Sdr" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.sdr"></a>

```go
func Sdr() TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference">TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference</a>

---

##### `BitrateBpsInput`<sup>Optional</sup> <a name="BitrateBpsInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBpsInput"></a>

```go
func BitrateBpsInput() *f64
```

- *Type:* *f64

---

##### `CrfLevelInput`<sup>Optional</sup> <a name="CrfLevelInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevelInput"></a>

```go
func CrfLevelInput() *f64
```

- *Type:* *f64

---

##### `EntropyCoderInput`<sup>Optional</sup> <a name="EntropyCoderInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoderInput"></a>

```go
func EntropyCoderInput() *string
```

- *Type:* *string

---

##### `FrameRateInput`<sup>Optional</sup> <a name="FrameRateInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRateInput"></a>

```go
func FrameRateInput() *f64
```

- *Type:* *f64

---

##### `GopDurationInput`<sup>Optional</sup> <a name="GopDurationInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDurationInput"></a>

```go
func GopDurationInput() *string
```

- *Type:* *string

---

##### `HeightPixelsInput`<sup>Optional</sup> <a name="HeightPixelsInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixelsInput"></a>

```go
func HeightPixelsInput() *f64
```

- *Type:* *f64

---

##### `HlgInput`<sup>Optional</sup> <a name="HlgInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.hlgInput"></a>

```go
func HlgInput() TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg</a>

---

##### `PixelFormatInput`<sup>Optional</sup> <a name="PixelFormatInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormatInput"></a>

```go
func PixelFormatInput() *string
```

- *Type:* *string

---

##### `PresetInput`<sup>Optional</sup> <a name="PresetInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.presetInput"></a>

```go
func PresetInput() *string
```

- *Type:* *string

---

##### `ProfileInput`<sup>Optional</sup> <a name="ProfileInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.profileInput"></a>

```go
func ProfileInput() *string
```

- *Type:* *string

---

##### `RateControlModeInput`<sup>Optional</sup> <a name="RateControlModeInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlModeInput"></a>

```go
func RateControlModeInput() *string
```

- *Type:* *string

---

##### `SdrInput`<sup>Optional</sup> <a name="SdrInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.sdrInput"></a>

```go
func SdrInput() TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr</a>

---

##### `VbvFullnessBitsInput`<sup>Optional</sup> <a name="VbvFullnessBitsInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBitsInput"></a>

```go
func VbvFullnessBitsInput() *f64
```

- *Type:* *f64

---

##### `VbvSizeBitsInput`<sup>Optional</sup> <a name="VbvSizeBitsInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBitsInput"></a>

```go
func VbvSizeBitsInput() *f64
```

- *Type:* *f64

---

##### `WidthPixelsInput`<sup>Optional</sup> <a name="WidthPixelsInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixelsInput"></a>

```go
func WidthPixelsInput() *f64
```

- *Type:* *f64

---

##### `BitrateBps`<sup>Required</sup> <a name="BitrateBps" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBps"></a>

```go
func BitrateBps() *f64
```

- *Type:* *f64

---

##### `CrfLevel`<sup>Required</sup> <a name="CrfLevel" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevel"></a>

```go
func CrfLevel() *f64
```

- *Type:* *f64

---

##### `EntropyCoder`<sup>Required</sup> <a name="EntropyCoder" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoder"></a>

```go
func EntropyCoder() *string
```

- *Type:* *string

---

##### `FrameRate`<sup>Required</sup> <a name="FrameRate" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRate"></a>

```go
func FrameRate() *f64
```

- *Type:* *f64

---

##### `GopDuration`<sup>Required</sup> <a name="GopDuration" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDuration"></a>

```go
func GopDuration() *string
```

- *Type:* *string

---

##### `HeightPixels`<sup>Required</sup> <a name="HeightPixels" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixels"></a>

```go
func HeightPixels() *f64
```

- *Type:* *f64

---

##### `PixelFormat`<sup>Required</sup> <a name="PixelFormat" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormat"></a>

```go
func PixelFormat() *string
```

- *Type:* *string

---

##### `Preset`<sup>Required</sup> <a name="Preset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.preset"></a>

```go
func Preset() *string
```

- *Type:* *string

---

##### `Profile`<sup>Required</sup> <a name="Profile" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.profile"></a>

```go
func Profile() *string
```

- *Type:* *string

---

##### `RateControlMode`<sup>Required</sup> <a name="RateControlMode" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlMode"></a>

```go
func RateControlMode() *string
```

- *Type:* *string

---

##### `VbvFullnessBits`<sup>Required</sup> <a name="VbvFullnessBits" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBits"></a>

```go
func VbvFullnessBits() *f64
```

- *Type:* *f64

---

##### `VbvSizeBits`<sup>Required</sup> <a name="VbvSizeBits" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBits"></a>

```go
func VbvSizeBits() *f64
```

- *Type:* *f64

---

##### `WidthPixels`<sup>Required</sup> <a name="WidthPixels" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixels"></a>

```go
func WidthPixels() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobConfigElementaryStreamsVideoStreamH264
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264">TranscoderJobConfigElementaryStreamsVideoStreamH264</a>

---


### TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference <a name="TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.NewTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr</a>

---


### TranscoderJobConfigElementaryStreamsVideoStreamOutputReference <a name="TranscoderJobConfigElementaryStreamsVideoStreamOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.NewTranscoderJobConfigElementaryStreamsVideoStreamOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobConfigElementaryStreamsVideoStreamOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264">PutH264</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.resetH264">ResetH264</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutH264` <a name="PutH264" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264"></a>

```go
func PutH264(value TranscoderJobConfigElementaryStreamsVideoStreamH264)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264">TranscoderJobConfigElementaryStreamsVideoStreamH264</a>

---

##### `ResetH264` <a name="ResetH264" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.resetH264"></a>

```go
func ResetH264()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.h264">H264</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference">TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.h264Input">H264Input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264">TranscoderJobConfigElementaryStreamsVideoStreamH264</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStream">TranscoderJobConfigElementaryStreamsVideoStream</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `H264`<sup>Required</sup> <a name="H264" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.h264"></a>

```go
func H264() TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference">TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference</a>

---

##### `H264Input`<sup>Optional</sup> <a name="H264Input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.h264Input"></a>

```go
func H264Input() TranscoderJobConfigElementaryStreamsVideoStreamH264
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264">TranscoderJobConfigElementaryStreamsVideoStreamH264</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobConfigElementaryStreamsVideoStream
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStream">TranscoderJobConfigElementaryStreamsVideoStream</a>

---


### TranscoderJobConfigEncryptionsAes128OutputReference <a name="TranscoderJobConfigEncryptionsAes128OutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.NewTranscoderJobConfigEncryptionsAes128OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobConfigEncryptionsAes128OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128">TranscoderJobConfigEncryptionsAes128</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobConfigEncryptionsAes128
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128">TranscoderJobConfigEncryptionsAes128</a>

---


### TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference <a name="TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.NewTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkey">TranscoderJobConfigEncryptionsDrmSystemsClearkey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobConfigEncryptionsDrmSystemsClearkey
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkey">TranscoderJobConfigEncryptionsDrmSystemsClearkey</a>

---


### TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference <a name="TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.NewTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplay">TranscoderJobConfigEncryptionsDrmSystemsFairplay</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobConfigEncryptionsDrmSystemsFairplay
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplay">TranscoderJobConfigEncryptionsDrmSystemsFairplay</a>

---


### TranscoderJobConfigEncryptionsDrmSystemsOutputReference <a name="TranscoderJobConfigEncryptionsDrmSystemsOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.NewTranscoderJobConfigEncryptionsDrmSystemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobConfigEncryptionsDrmSystemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.putClearkey">PutClearkey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.putFairplay">PutFairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.putPlayready">PutPlayready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.putWidevine">PutWidevine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.resetClearkey">ResetClearkey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.resetFairplay">ResetFairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.resetPlayready">ResetPlayready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.resetWidevine">ResetWidevine</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClearkey` <a name="PutClearkey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.putClearkey"></a>

```go
func PutClearkey(value TranscoderJobConfigEncryptionsDrmSystemsClearkey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.putClearkey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkey">TranscoderJobConfigEncryptionsDrmSystemsClearkey</a>

---

##### `PutFairplay` <a name="PutFairplay" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.putFairplay"></a>

```go
func PutFairplay(value TranscoderJobConfigEncryptionsDrmSystemsFairplay)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.putFairplay.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplay">TranscoderJobConfigEncryptionsDrmSystemsFairplay</a>

---

##### `PutPlayready` <a name="PutPlayready" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.putPlayready"></a>

```go
func PutPlayready(value TranscoderJobConfigEncryptionsDrmSystemsPlayready)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.putPlayready.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayready">TranscoderJobConfigEncryptionsDrmSystemsPlayready</a>

---

##### `PutWidevine` <a name="PutWidevine" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.putWidevine"></a>

```go
func PutWidevine(value TranscoderJobConfigEncryptionsDrmSystemsWidevine)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.putWidevine.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevine">TranscoderJobConfigEncryptionsDrmSystemsWidevine</a>

---

##### `ResetClearkey` <a name="ResetClearkey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.resetClearkey"></a>

```go
func ResetClearkey()
```

##### `ResetFairplay` <a name="ResetFairplay" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.resetFairplay"></a>

```go
func ResetFairplay()
```

##### `ResetPlayready` <a name="ResetPlayready" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.resetPlayready"></a>

```go
func ResetPlayready()
```

##### `ResetWidevine` <a name="ResetWidevine" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.resetWidevine"></a>

```go
func ResetWidevine()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.clearkey">Clearkey</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference">TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.fairplay">Fairplay</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference">TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.playready">Playready</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference">TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.widevine">Widevine</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference">TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.clearkeyInput">ClearkeyInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkey">TranscoderJobConfigEncryptionsDrmSystemsClearkey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.fairplayInput">FairplayInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplay">TranscoderJobConfigEncryptionsDrmSystemsFairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.playreadyInput">PlayreadyInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayready">TranscoderJobConfigEncryptionsDrmSystemsPlayready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.widevineInput">WidevineInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevine">TranscoderJobConfigEncryptionsDrmSystemsWidevine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems">TranscoderJobConfigEncryptionsDrmSystems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Clearkey`<sup>Required</sup> <a name="Clearkey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.clearkey"></a>

```go
func Clearkey() TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference">TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference</a>

---

##### `Fairplay`<sup>Required</sup> <a name="Fairplay" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.fairplay"></a>

```go
func Fairplay() TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference">TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference</a>

---

##### `Playready`<sup>Required</sup> <a name="Playready" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.playready"></a>

```go
func Playready() TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference">TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference</a>

---

##### `Widevine`<sup>Required</sup> <a name="Widevine" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.widevine"></a>

```go
func Widevine() TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference">TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference</a>

---

##### `ClearkeyInput`<sup>Optional</sup> <a name="ClearkeyInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.clearkeyInput"></a>

```go
func ClearkeyInput() TranscoderJobConfigEncryptionsDrmSystemsClearkey
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkey">TranscoderJobConfigEncryptionsDrmSystemsClearkey</a>

---

##### `FairplayInput`<sup>Optional</sup> <a name="FairplayInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.fairplayInput"></a>

```go
func FairplayInput() TranscoderJobConfigEncryptionsDrmSystemsFairplay
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplay">TranscoderJobConfigEncryptionsDrmSystemsFairplay</a>

---

##### `PlayreadyInput`<sup>Optional</sup> <a name="PlayreadyInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.playreadyInput"></a>

```go
func PlayreadyInput() TranscoderJobConfigEncryptionsDrmSystemsPlayready
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayready">TranscoderJobConfigEncryptionsDrmSystemsPlayready</a>

---

##### `WidevineInput`<sup>Optional</sup> <a name="WidevineInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.widevineInput"></a>

```go
func WidevineInput() TranscoderJobConfigEncryptionsDrmSystemsWidevine
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevine">TranscoderJobConfigEncryptionsDrmSystemsWidevine</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobConfigEncryptionsDrmSystems
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems">TranscoderJobConfigEncryptionsDrmSystems</a>

---


### TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference <a name="TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.NewTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayready">TranscoderJobConfigEncryptionsDrmSystemsPlayready</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobConfigEncryptionsDrmSystemsPlayready
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayready">TranscoderJobConfigEncryptionsDrmSystemsPlayready</a>

---


### TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference <a name="TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.NewTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevine">TranscoderJobConfigEncryptionsDrmSystemsWidevine</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobConfigEncryptionsDrmSystemsWidevine
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevine">TranscoderJobConfigEncryptionsDrmSystemsWidevine</a>

---


### TranscoderJobConfigEncryptionsList <a name="TranscoderJobConfigEncryptionsList" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.NewTranscoderJobConfigEncryptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TranscoderJobConfigEncryptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.get"></a>

```go
func Get(index *f64) TranscoderJobConfigEncryptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscoderJobConfigEncryptionsMpegCencOutputReference <a name="TranscoderJobConfigEncryptionsMpegCencOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.NewTranscoderJobConfigEncryptionsMpegCencOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobConfigEncryptionsMpegCencOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.property.schemeInput">SchemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.property.scheme">Scheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCenc">TranscoderJobConfigEncryptionsMpegCenc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.property.schemeInput"></a>

```go
func SchemeInput() *string
```

- *Type:* *string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.property.scheme"></a>

```go
func Scheme() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobConfigEncryptionsMpegCenc
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCenc">TranscoderJobConfigEncryptionsMpegCenc</a>

---


### TranscoderJobConfigEncryptionsOutputReference <a name="TranscoderJobConfigEncryptionsOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.NewTranscoderJobConfigEncryptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TranscoderJobConfigEncryptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putAes128">PutAes128</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putDrmSystems">PutDrmSystems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putMpegCenc">PutMpegCenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putSampleAes">PutSampleAes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putSecretManagerKeySource">PutSecretManagerKeySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.resetAes128">ResetAes128</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.resetDrmSystems">ResetDrmSystems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.resetMpegCenc">ResetMpegCenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.resetSampleAes">ResetSampleAes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.resetSecretManagerKeySource">ResetSecretManagerKeySource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAes128` <a name="PutAes128" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putAes128"></a>

```go
func PutAes128(value TranscoderJobConfigEncryptionsAes128)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putAes128.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128">TranscoderJobConfigEncryptionsAes128</a>

---

##### `PutDrmSystems` <a name="PutDrmSystems" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putDrmSystems"></a>

```go
func PutDrmSystems(value TranscoderJobConfigEncryptionsDrmSystems)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putDrmSystems.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems">TranscoderJobConfigEncryptionsDrmSystems</a>

---

##### `PutMpegCenc` <a name="PutMpegCenc" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putMpegCenc"></a>

```go
func PutMpegCenc(value TranscoderJobConfigEncryptionsMpegCenc)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putMpegCenc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCenc">TranscoderJobConfigEncryptionsMpegCenc</a>

---

##### `PutSampleAes` <a name="PutSampleAes" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putSampleAes"></a>

```go
func PutSampleAes(value TranscoderJobConfigEncryptionsSampleAes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putSampleAes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAes">TranscoderJobConfigEncryptionsSampleAes</a>

---

##### `PutSecretManagerKeySource` <a name="PutSecretManagerKeySource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putSecretManagerKeySource"></a>

```go
func PutSecretManagerKeySource(value TranscoderJobConfigEncryptionsSecretManagerKeySource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putSecretManagerKeySource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySource">TranscoderJobConfigEncryptionsSecretManagerKeySource</a>

---

##### `ResetAes128` <a name="ResetAes128" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.resetAes128"></a>

```go
func ResetAes128()
```

##### `ResetDrmSystems` <a name="ResetDrmSystems" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.resetDrmSystems"></a>

```go
func ResetDrmSystems()
```

##### `ResetMpegCenc` <a name="ResetMpegCenc" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.resetMpegCenc"></a>

```go
func ResetMpegCenc()
```

##### `ResetSampleAes` <a name="ResetSampleAes" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.resetSampleAes"></a>

```go
func ResetSampleAes()
```

##### `ResetSecretManagerKeySource` <a name="ResetSecretManagerKeySource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.resetSecretManagerKeySource"></a>

```go
func ResetSecretManagerKeySource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.aes128">Aes128</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference">TranscoderJobConfigEncryptionsAes128OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.drmSystems">DrmSystems</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference">TranscoderJobConfigEncryptionsDrmSystemsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.mpegCenc">MpegCenc</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference">TranscoderJobConfigEncryptionsMpegCencOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.sampleAes">SampleAes</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference">TranscoderJobConfigEncryptionsSampleAesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.secretManagerKeySource">SecretManagerKeySource</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference">TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.aes128Input">Aes128Input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128">TranscoderJobConfigEncryptionsAes128</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.drmSystemsInput">DrmSystemsInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems">TranscoderJobConfigEncryptionsDrmSystems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.mpegCencInput">MpegCencInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCenc">TranscoderJobConfigEncryptionsMpegCenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.sampleAesInput">SampleAesInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAes">TranscoderJobConfigEncryptionsSampleAes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.secretManagerKeySourceInput">SecretManagerKeySourceInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySource">TranscoderJobConfigEncryptionsSecretManagerKeySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Aes128`<sup>Required</sup> <a name="Aes128" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.aes128"></a>

```go
func Aes128() TranscoderJobConfigEncryptionsAes128OutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference">TranscoderJobConfigEncryptionsAes128OutputReference</a>

---

##### `DrmSystems`<sup>Required</sup> <a name="DrmSystems" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.drmSystems"></a>

```go
func DrmSystems() TranscoderJobConfigEncryptionsDrmSystemsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference">TranscoderJobConfigEncryptionsDrmSystemsOutputReference</a>

---

##### `MpegCenc`<sup>Required</sup> <a name="MpegCenc" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.mpegCenc"></a>

```go
func MpegCenc() TranscoderJobConfigEncryptionsMpegCencOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference">TranscoderJobConfigEncryptionsMpegCencOutputReference</a>

---

##### `SampleAes`<sup>Required</sup> <a name="SampleAes" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.sampleAes"></a>

```go
func SampleAes() TranscoderJobConfigEncryptionsSampleAesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference">TranscoderJobConfigEncryptionsSampleAesOutputReference</a>

---

##### `SecretManagerKeySource`<sup>Required</sup> <a name="SecretManagerKeySource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.secretManagerKeySource"></a>

```go
func SecretManagerKeySource() TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference">TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference</a>

---

##### `Aes128Input`<sup>Optional</sup> <a name="Aes128Input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.aes128Input"></a>

```go
func Aes128Input() TranscoderJobConfigEncryptionsAes128
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128">TranscoderJobConfigEncryptionsAes128</a>

---

##### `DrmSystemsInput`<sup>Optional</sup> <a name="DrmSystemsInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.drmSystemsInput"></a>

```go
func DrmSystemsInput() TranscoderJobConfigEncryptionsDrmSystems
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems">TranscoderJobConfigEncryptionsDrmSystems</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MpegCencInput`<sup>Optional</sup> <a name="MpegCencInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.mpegCencInput"></a>

```go
func MpegCencInput() TranscoderJobConfigEncryptionsMpegCenc
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCenc">TranscoderJobConfigEncryptionsMpegCenc</a>

---

##### `SampleAesInput`<sup>Optional</sup> <a name="SampleAesInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.sampleAesInput"></a>

```go
func SampleAesInput() TranscoderJobConfigEncryptionsSampleAes
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAes">TranscoderJobConfigEncryptionsSampleAes</a>

---

##### `SecretManagerKeySourceInput`<sup>Optional</sup> <a name="SecretManagerKeySourceInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.secretManagerKeySourceInput"></a>

```go
func SecretManagerKeySourceInput() TranscoderJobConfigEncryptionsSecretManagerKeySource
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySource">TranscoderJobConfigEncryptionsSecretManagerKeySource</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscoderJobConfigEncryptionsSampleAesOutputReference <a name="TranscoderJobConfigEncryptionsSampleAesOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.NewTranscoderJobConfigEncryptionsSampleAesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobConfigEncryptionsSampleAesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAes">TranscoderJobConfigEncryptionsSampleAes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobConfigEncryptionsSampleAes
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAes">TranscoderJobConfigEncryptionsSampleAes</a>

---


### TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference <a name="TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.NewTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersionInput">SecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersion">SecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySource">TranscoderJobConfigEncryptionsSecretManagerKeySource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretVersionInput`<sup>Optional</sup> <a name="SecretVersionInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersionInput"></a>

```go
func SecretVersionInput() *string
```

- *Type:* *string

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersion"></a>

```go
func SecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobConfigEncryptionsSecretManagerKeySource
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySource">TranscoderJobConfigEncryptionsSecretManagerKeySource</a>

---


### TranscoderJobConfigInputsList <a name="TranscoderJobConfigInputsList" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.NewTranscoderJobConfigInputsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TranscoderJobConfigInputsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.get"></a>

```go
func Get(index *f64) TranscoderJobConfigInputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscoderJobConfigInputsOutputReference <a name="TranscoderJobConfigInputsOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.NewTranscoderJobConfigInputsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TranscoderJobConfigInputsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.resetUri"></a>

```go
func ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscoderJobConfigManifestsList <a name="TranscoderJobConfigManifestsList" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.NewTranscoderJobConfigManifestsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TranscoderJobConfigManifestsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.get"></a>

```go
func Get(index *f64) TranscoderJobConfigManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscoderJobConfigManifestsOutputReference <a name="TranscoderJobConfigManifestsOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.NewTranscoderJobConfigManifestsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TranscoderJobConfigManifestsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.resetFileName">ResetFileName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.resetMuxStreams">ResetMuxStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFileName` <a name="ResetFileName" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.resetFileName"></a>

```go
func ResetFileName()
```

##### `ResetMuxStreams` <a name="ResetMuxStreams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.resetMuxStreams"></a>

```go
func ResetMuxStreams()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.fileNameInput">FileNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.muxStreamsInput">MuxStreamsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.fileName">FileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.muxStreams">MuxStreams</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileNameInput`<sup>Optional</sup> <a name="FileNameInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.fileNameInput"></a>

```go
func FileNameInput() *string
```

- *Type:* *string

---

##### `MuxStreamsInput`<sup>Optional</sup> <a name="MuxStreamsInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.muxStreamsInput"></a>

```go
func MuxStreamsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.fileName"></a>

```go
func FileName() *string
```

- *Type:* *string

---

##### `MuxStreams`<sup>Required</sup> <a name="MuxStreams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.muxStreams"></a>

```go
func MuxStreams() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscoderJobConfigMuxStreamsList <a name="TranscoderJobConfigMuxStreamsList" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.NewTranscoderJobConfigMuxStreamsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TranscoderJobConfigMuxStreamsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.get"></a>

```go
func Get(index *f64) TranscoderJobConfigMuxStreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscoderJobConfigMuxStreamsOutputReference <a name="TranscoderJobConfigMuxStreamsOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.NewTranscoderJobConfigMuxStreamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TranscoderJobConfigMuxStreamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.putSegmentSettings">PutSegmentSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resetContainer">ResetContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resetElementaryStreams">ResetElementaryStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resetEncryptionId">ResetEncryptionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resetFileName">ResetFileName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resetSegmentSettings">ResetSegmentSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSegmentSettings` <a name="PutSegmentSettings" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.putSegmentSettings"></a>

```go
func PutSegmentSettings(value TranscoderJobConfigMuxStreamsSegmentSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.putSegmentSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettings">TranscoderJobConfigMuxStreamsSegmentSettings</a>

---

##### `ResetContainer` <a name="ResetContainer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resetContainer"></a>

```go
func ResetContainer()
```

##### `ResetElementaryStreams` <a name="ResetElementaryStreams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resetElementaryStreams"></a>

```go
func ResetElementaryStreams()
```

##### `ResetEncryptionId` <a name="ResetEncryptionId" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resetEncryptionId"></a>

```go
func ResetEncryptionId()
```

##### `ResetFileName` <a name="ResetFileName" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resetFileName"></a>

```go
func ResetFileName()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetSegmentSettings` <a name="ResetSegmentSettings" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resetSegmentSettings"></a>

```go
func ResetSegmentSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.segmentSettings">SegmentSettings</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference">TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.containerInput">ContainerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.elementaryStreamsInput">ElementaryStreamsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.encryptionIdInput">EncryptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.fileNameInput">FileNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.segmentSettingsInput">SegmentSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettings">TranscoderJobConfigMuxStreamsSegmentSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.container">Container</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.elementaryStreams">ElementaryStreams</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.encryptionId">EncryptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.fileName">FileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SegmentSettings`<sup>Required</sup> <a name="SegmentSettings" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.segmentSettings"></a>

```go
func SegmentSettings() TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference">TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference</a>

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.containerInput"></a>

```go
func ContainerInput() *string
```

- *Type:* *string

---

##### `ElementaryStreamsInput`<sup>Optional</sup> <a name="ElementaryStreamsInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.elementaryStreamsInput"></a>

```go
func ElementaryStreamsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EncryptionIdInput`<sup>Optional</sup> <a name="EncryptionIdInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.encryptionIdInput"></a>

```go
func EncryptionIdInput() *string
```

- *Type:* *string

---

##### `FileNameInput`<sup>Optional</sup> <a name="FileNameInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.fileNameInput"></a>

```go
func FileNameInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `SegmentSettingsInput`<sup>Optional</sup> <a name="SegmentSettingsInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.segmentSettingsInput"></a>

```go
func SegmentSettingsInput() TranscoderJobConfigMuxStreamsSegmentSettings
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettings">TranscoderJobConfigMuxStreamsSegmentSettings</a>

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.container"></a>

```go
func Container() *string
```

- *Type:* *string

---

##### `ElementaryStreams`<sup>Required</sup> <a name="ElementaryStreams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.elementaryStreams"></a>

```go
func ElementaryStreams() *[]*string
```

- *Type:* *[]*string

---

##### `EncryptionId`<sup>Required</sup> <a name="EncryptionId" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.encryptionId"></a>

```go
func EncryptionId() *string
```

- *Type:* *string

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.fileName"></a>

```go
func FileName() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference <a name="TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.NewTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.resetSegmentDuration">ResetSegmentDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSegmentDuration` <a name="ResetSegmentDuration" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.resetSegmentDuration"></a>

```go
func ResetSegmentDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDurationInput">SegmentDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDuration">SegmentDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettings">TranscoderJobConfigMuxStreamsSegmentSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SegmentDurationInput`<sup>Optional</sup> <a name="SegmentDurationInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDurationInput"></a>

```go
func SegmentDurationInput() *string
```

- *Type:* *string

---

##### `SegmentDuration`<sup>Required</sup> <a name="SegmentDuration" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDuration"></a>

```go
func SegmentDuration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobConfigMuxStreamsSegmentSettings
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettings">TranscoderJobConfigMuxStreamsSegmentSettings</a>

---


### TranscoderJobConfigOutputOutputReference <a name="TranscoderJobConfigOutputOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.NewTranscoderJobConfigOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobConfigOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.resetUri"></a>

```go
func ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutput">TranscoderJobConfigOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobConfigOutput
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutput">TranscoderJobConfigOutput</a>

---


### TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference <a name="TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.NewTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.putXy">PutXy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resetEndTimeOffset">ResetEndTimeOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resetStartTimeOffset">ResetStartTimeOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resetXy">ResetXy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutXy` <a name="PutXy" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.putXy"></a>

```go
func PutXy(value TranscoderJobConfigOverlaysAnimationsAnimationFadeXy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.putXy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobConfigOverlaysAnimationsAnimationFadeXy</a>

---

##### `ResetEndTimeOffset` <a name="ResetEndTimeOffset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resetEndTimeOffset"></a>

```go
func ResetEndTimeOffset()
```

##### `ResetStartTimeOffset` <a name="ResetStartTimeOffset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resetStartTimeOffset"></a>

```go
func ResetStartTimeOffset()
```

##### `ResetXy` <a name="ResetXy" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resetXy"></a>

```go
func ResetXy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.xy">Xy</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference">TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffsetInput">EndTimeOffsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeTypeInput">FadeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffsetInput">StartTimeOffsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.xyInput">XyInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobConfigOverlaysAnimationsAnimationFadeXy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffset">EndTimeOffset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeType">FadeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffset">StartTimeOffset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade">TranscoderJobConfigOverlaysAnimationsAnimationFade</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Xy`<sup>Required</sup> <a name="Xy" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.xy"></a>

```go
func Xy() TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference">TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference</a>

---

##### `EndTimeOffsetInput`<sup>Optional</sup> <a name="EndTimeOffsetInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffsetInput"></a>

```go
func EndTimeOffsetInput() *string
```

- *Type:* *string

---

##### `FadeTypeInput`<sup>Optional</sup> <a name="FadeTypeInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeTypeInput"></a>

```go
func FadeTypeInput() *string
```

- *Type:* *string

---

##### `StartTimeOffsetInput`<sup>Optional</sup> <a name="StartTimeOffsetInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffsetInput"></a>

```go
func StartTimeOffsetInput() *string
```

- *Type:* *string

---

##### `XyInput`<sup>Optional</sup> <a name="XyInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.xyInput"></a>

```go
func XyInput() TranscoderJobConfigOverlaysAnimationsAnimationFadeXy
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobConfigOverlaysAnimationsAnimationFadeXy</a>

---

##### `EndTimeOffset`<sup>Required</sup> <a name="EndTimeOffset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffset"></a>

```go
func EndTimeOffset() *string
```

- *Type:* *string

---

##### `FadeType`<sup>Required</sup> <a name="FadeType" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeType"></a>

```go
func FadeType() *string
```

- *Type:* *string

---

##### `StartTimeOffset`<sup>Required</sup> <a name="StartTimeOffset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffset"></a>

```go
func StartTimeOffset() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobConfigOverlaysAnimationsAnimationFade
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade">TranscoderJobConfigOverlaysAnimationsAnimationFade</a>

---


### TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference <a name="TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.NewTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetX">ResetX</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetY">ResetY</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetX` <a name="ResetX" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetX"></a>

```go
func ResetX()
```

##### `ResetY` <a name="ResetY" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetY"></a>

```go
func ResetY()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.xInput">XInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.yInput">YInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.x">X</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.y">Y</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobConfigOverlaysAnimationsAnimationFadeXy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `XInput`<sup>Optional</sup> <a name="XInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.xInput"></a>

```go
func XInput() *f64
```

- *Type:* *f64

---

##### `YInput`<sup>Optional</sup> <a name="YInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.yInput"></a>

```go
func YInput() *f64
```

- *Type:* *f64

---

##### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.x"></a>

```go
func X() *f64
```

- *Type:* *f64

---

##### `Y`<sup>Required</sup> <a name="Y" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.y"></a>

```go
func Y() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobConfigOverlaysAnimationsAnimationFadeXy
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobConfigOverlaysAnimationsAnimationFadeXy</a>

---


### TranscoderJobConfigOverlaysAnimationsList <a name="TranscoderJobConfigOverlaysAnimationsList" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.NewTranscoderJobConfigOverlaysAnimationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TranscoderJobConfigOverlaysAnimationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.get"></a>

```go
func Get(index *f64) TranscoderJobConfigOverlaysAnimationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscoderJobConfigOverlaysAnimationsOutputReference <a name="TranscoderJobConfigOverlaysAnimationsOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.NewTranscoderJobConfigOverlaysAnimationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TranscoderJobConfigOverlaysAnimationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.putAnimationFade">PutAnimationFade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.resetAnimationFade">ResetAnimationFade</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnimationFade` <a name="PutAnimationFade" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.putAnimationFade"></a>

```go
func PutAnimationFade(value TranscoderJobConfigOverlaysAnimationsAnimationFade)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.putAnimationFade.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade">TranscoderJobConfigOverlaysAnimationsAnimationFade</a>

---

##### `ResetAnimationFade` <a name="ResetAnimationFade" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.resetAnimationFade"></a>

```go
func ResetAnimationFade()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.property.animationFade">AnimationFade</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference">TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.property.animationFadeInput">AnimationFadeInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade">TranscoderJobConfigOverlaysAnimationsAnimationFade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AnimationFade`<sup>Required</sup> <a name="AnimationFade" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.property.animationFade"></a>

```go
func AnimationFade() TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference">TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference</a>

---

##### `AnimationFadeInput`<sup>Optional</sup> <a name="AnimationFadeInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.property.animationFadeInput"></a>

```go
func AnimationFadeInput() TranscoderJobConfigOverlaysAnimationsAnimationFade
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade">TranscoderJobConfigOverlaysAnimationsAnimationFade</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscoderJobConfigOverlaysImageOutputReference <a name="TranscoderJobConfigOverlaysImageOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.NewTranscoderJobConfigOverlaysImageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobConfigOverlaysImageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImage">TranscoderJobConfigOverlaysImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobConfigOverlaysImage
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImage">TranscoderJobConfigOverlaysImage</a>

---


### TranscoderJobConfigOverlaysList <a name="TranscoderJobConfigOverlaysList" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.NewTranscoderJobConfigOverlaysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TranscoderJobConfigOverlaysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.get"></a>

```go
func Get(index *f64) TranscoderJobConfigOverlaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscoderJobConfigOverlaysOutputReference <a name="TranscoderJobConfigOverlaysOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.NewTranscoderJobConfigOverlaysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TranscoderJobConfigOverlaysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.putAnimations">PutAnimations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.putImage">PutImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.resetAnimations">ResetAnimations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.resetImage">ResetImage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnimations` <a name="PutAnimations" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.putAnimations"></a>

```go
func PutAnimations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.putAnimations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutImage` <a name="PutImage" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.putImage"></a>

```go
func PutImage(value TranscoderJobConfigOverlaysImage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.putImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImage">TranscoderJobConfigOverlaysImage</a>

---

##### `ResetAnimations` <a name="ResetAnimations" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.resetAnimations"></a>

```go
func ResetAnimations()
```

##### `ResetImage` <a name="ResetImage" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.resetImage"></a>

```go
func ResetImage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.animations">Animations</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList">TranscoderJobConfigOverlaysAnimationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.image">Image</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference">TranscoderJobConfigOverlaysImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.animationsInput">AnimationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.imageInput">ImageInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImage">TranscoderJobConfigOverlaysImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Animations`<sup>Required</sup> <a name="Animations" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.animations"></a>

```go
func Animations() TranscoderJobConfigOverlaysAnimationsList
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList">TranscoderJobConfigOverlaysAnimationsList</a>

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.image"></a>

```go
func Image() TranscoderJobConfigOverlaysImageOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference">TranscoderJobConfigOverlaysImageOutputReference</a>

---

##### `AnimationsInput`<sup>Optional</sup> <a name="AnimationsInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.animationsInput"></a>

```go
func AnimationsInput() interface{}
```

- *Type:* interface{}

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.imageInput"></a>

```go
func ImageInput() TranscoderJobConfigOverlaysImage
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImage">TranscoderJobConfigOverlaysImage</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscoderJobConfigPubsubDestinationOutputReference <a name="TranscoderJobConfigPubsubDestinationOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.NewTranscoderJobConfigPubsubDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobConfigPubsubDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.resetTopic">ResetTopic</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTopic` <a name="ResetTopic" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.resetTopic"></a>

```go
func ResetTopic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.property.topicInput">TopicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.property.topic">Topic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestination">TranscoderJobConfigPubsubDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.property.topicInput"></a>

```go
func TopicInput() *string
```

- *Type:* *string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.property.topic"></a>

```go
func Topic() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobConfigPubsubDestination
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestination">TranscoderJobConfigPubsubDestination</a>

---


### TranscoderJobTimeoutsOutputReference <a name="TranscoderJobTimeoutsOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/transcoderjob"

transcoderjob.NewTranscoderJobTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



