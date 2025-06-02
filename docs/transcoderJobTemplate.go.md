# `transcoderJobTemplate` Submodule <a name="`transcoderJobTemplate` Submodule" id="@cdktf/provider-google.transcoderJobTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TranscoderJobTemplate <a name="TranscoderJobTemplate" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template google_transcoder_job_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.NewTranscoderJobTemplate(scope Construct, id *string, config TranscoderJobTemplateConfig) TranscoderJobTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig">TranscoderJobTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig">TranscoderJobTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.putConfig"></a>

```go
func PutConfig(value TranscoderJobTemplateConfigA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA">TranscoderJobTemplateConfigA</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.putTimeouts"></a>

```go
func PutTimeouts(value TranscoderJobTemplateTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts">TranscoderJobTemplateTimeouts</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetConfig"></a>

```go
func ResetConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a TranscoderJobTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.TranscoderJobTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.TranscoderJobTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.TranscoderJobTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.TranscoderJobTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a TranscoderJobTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the TranscoderJobTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing TranscoderJobTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the TranscoderJobTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference">TranscoderJobTemplateConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference">TranscoderJobTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA">TranscoderJobTemplateConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.jobTemplateIdInput">JobTemplateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.jobTemplateId">JobTemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.config"></a>

```go
func Config() TranscoderJobTemplateConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference">TranscoderJobTemplateConfigAOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.timeouts"></a>

```go
func Timeouts() TranscoderJobTemplateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference">TranscoderJobTemplateTimeoutsOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.configInput"></a>

```go
func ConfigInput() TranscoderJobTemplateConfigA
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA">TranscoderJobTemplateConfigA</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `JobTemplateIdInput`<sup>Optional</sup> <a name="JobTemplateIdInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.jobTemplateIdInput"></a>

```go
func JobTemplateIdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `JobTemplateId`<sup>Required</sup> <a name="JobTemplateId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.jobTemplateId"></a>

```go
func JobTemplateId() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TranscoderJobTemplateConfig <a name="TranscoderJobTemplateConfig" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

&transcoderjobtemplate.TranscoderJobTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	JobTemplateId: *string,
	Location: *string,
	Config: github.com/cdktf/cdktf-provider-google-go/google/v15.transcoderJobTemplate.TranscoderJobTemplateConfigA,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v15.transcoderJobTemplate.TranscoderJobTemplateTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.jobTemplateId">JobTemplateId</a></code> | <code>*string</code> | ID to use for the Transcoding job template. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.location">Location</a></code> | <code>*string</code> | The location of the transcoding job template resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA">TranscoderJobTemplateConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#id TranscoderJobTemplate#id}. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels associated with this job template. You can use these to organize and group your job templates. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#project TranscoderJobTemplate#project}. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts">TranscoderJobTemplateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `JobTemplateId`<sup>Required</sup> <a name="JobTemplateId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.jobTemplateId"></a>

```go
JobTemplateId *string
```

- *Type:* *string

ID to use for the Transcoding job template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#job_template_id TranscoderJobTemplate#job_template_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the transcoding job template resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#location TranscoderJobTemplate#location}

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.config"></a>

```go
Config TranscoderJobTemplateConfigA
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA">TranscoderJobTemplateConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#config TranscoderJobTemplate#config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#id TranscoderJobTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels associated with this job template. You can use these to organize and group your job templates.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#labels TranscoderJobTemplate#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#project TranscoderJobTemplate#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.timeouts"></a>

```go
Timeouts TranscoderJobTemplateTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts">TranscoderJobTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#timeouts TranscoderJobTemplate#timeouts}

---

### TranscoderJobTemplateConfigA <a name="TranscoderJobTemplateConfigA" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

&transcoderjobtemplate.TranscoderJobTemplateConfigA {
	AdBreaks: interface{},
	EditList: interface{},
	ElementaryStreams: interface{},
	Encryptions: interface{},
	Inputs: interface{},
	Manifests: interface{},
	MuxStreams: interface{},
	Output: github.com/cdktf/cdktf-provider-google-go/google/v15.transcoderJobTemplate.TranscoderJobTemplateConfigOutput,
	Overlays: interface{},
	PubsubDestination: github.com/cdktf/cdktf-provider-google-go/google/v15.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.adBreaks">AdBreaks</a></code> | <code>interface{}</code> | ad_breaks block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.editList">EditList</a></code> | <code>interface{}</code> | edit_list block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.elementaryStreams">ElementaryStreams</a></code> | <code>interface{}</code> | elementary_streams block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.encryptions">Encryptions</a></code> | <code>interface{}</code> | encryptions block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.inputs">Inputs</a></code> | <code>interface{}</code> | inputs block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.manifests">Manifests</a></code> | <code>interface{}</code> | manifests block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.muxStreams">MuxStreams</a></code> | <code>interface{}</code> | mux_streams block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.output">Output</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput">TranscoderJobTemplateConfigOutput</a></code> | output block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.overlays">Overlays</a></code> | <code>interface{}</code> | overlays block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.pubsubDestination">PubsubDestination</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination">TranscoderJobTemplateConfigPubsubDestination</a></code> | pubsub_destination block. |

---

##### `AdBreaks`<sup>Optional</sup> <a name="AdBreaks" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.adBreaks"></a>

```go
AdBreaks interface{}
```

- *Type:* interface{}

ad_breaks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#ad_breaks TranscoderJobTemplate#ad_breaks}

---

##### `EditList`<sup>Optional</sup> <a name="EditList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.editList"></a>

```go
EditList interface{}
```

- *Type:* interface{}

edit_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#edit_list TranscoderJobTemplate#edit_list}

---

##### `ElementaryStreams`<sup>Optional</sup> <a name="ElementaryStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.elementaryStreams"></a>

```go
ElementaryStreams interface{}
```

- *Type:* interface{}

elementary_streams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#elementary_streams TranscoderJobTemplate#elementary_streams}

---

##### `Encryptions`<sup>Optional</sup> <a name="Encryptions" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.encryptions"></a>

```go
Encryptions interface{}
```

- *Type:* interface{}

encryptions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#encryptions TranscoderJobTemplate#encryptions}

---

##### `Inputs`<sup>Optional</sup> <a name="Inputs" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.inputs"></a>

```go
Inputs interface{}
```

- *Type:* interface{}

inputs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#inputs TranscoderJobTemplate#inputs}

---

##### `Manifests`<sup>Optional</sup> <a name="Manifests" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.manifests"></a>

```go
Manifests interface{}
```

- *Type:* interface{}

manifests block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#manifests TranscoderJobTemplate#manifests}

---

##### `MuxStreams`<sup>Optional</sup> <a name="MuxStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.muxStreams"></a>

```go
MuxStreams interface{}
```

- *Type:* interface{}

mux_streams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#mux_streams TranscoderJobTemplate#mux_streams}

---

##### `Output`<sup>Optional</sup> <a name="Output" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.output"></a>

```go
Output TranscoderJobTemplateConfigOutput
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput">TranscoderJobTemplateConfigOutput</a>

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#output TranscoderJobTemplate#output}

---

##### `Overlays`<sup>Optional</sup> <a name="Overlays" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.overlays"></a>

```go
Overlays interface{}
```

- *Type:* interface{}

overlays block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#overlays TranscoderJobTemplate#overlays}

---

##### `PubsubDestination`<sup>Optional</sup> <a name="PubsubDestination" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.pubsubDestination"></a>

```go
PubsubDestination TranscoderJobTemplateConfigPubsubDestination
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination">TranscoderJobTemplateConfigPubsubDestination</a>

pubsub_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#pubsub_destination TranscoderJobTemplate#pubsub_destination}

---

### TranscoderJobTemplateConfigAdBreaks <a name="TranscoderJobTemplateConfigAdBreaks" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

&transcoderjobtemplate.TranscoderJobTemplateConfigAdBreaks {
	StartTimeOffset: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaks.property.startTimeOffset">StartTimeOffset</a></code> | <code>*string</code> | Start time in seconds for the ad break, relative to the output file timeline. |

---

##### `StartTimeOffset`<sup>Optional</sup> <a name="StartTimeOffset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaks.property.startTimeOffset"></a>

```go
StartTimeOffset *string
```

- *Type:* *string

Start time in seconds for the ad break, relative to the output file timeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#start_time_offset TranscoderJobTemplate#start_time_offset}

---

### TranscoderJobTemplateConfigEditListStruct <a name="TranscoderJobTemplateConfigEditListStruct" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

&transcoderjobtemplate.TranscoderJobTemplateConfigEditListStruct {
	Inputs: *[]*string,
	Key: *string,
	StartTimeOffset: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct.property.inputs">Inputs</a></code> | <code>*[]*string</code> | List of values identifying files that should be used in this atom. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct.property.key">Key</a></code> | <code>*string</code> | A unique key for this atom. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct.property.startTimeOffset">StartTimeOffset</a></code> | <code>*string</code> | Start time in seconds for the atom, relative to the input file timeline.  The default is '0s'. |

---

##### `Inputs`<sup>Optional</sup> <a name="Inputs" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct.property.inputs"></a>

```go
Inputs *[]*string
```

- *Type:* *[]*string

List of values identifying files that should be used in this atom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#inputs TranscoderJobTemplate#inputs}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct.property.key"></a>

```go
Key *string
```

- *Type:* *string

A unique key for this atom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#key TranscoderJobTemplate#key}

---

##### `StartTimeOffset`<sup>Optional</sup> <a name="StartTimeOffset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct.property.startTimeOffset"></a>

```go
StartTimeOffset *string
```

- *Type:* *string

Start time in seconds for the atom, relative to the input file timeline.  The default is '0s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#start_time_offset TranscoderJobTemplate#start_time_offset}

---

### TranscoderJobTemplateConfigElementaryStreams <a name="TranscoderJobTemplateConfigElementaryStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

&transcoderjobtemplate.TranscoderJobTemplateConfigElementaryStreams {
	AudioStream: github.com/cdktf/cdktf-provider-google-go/google/v15.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream,
	Key: *string,
	VideoStream: github.com/cdktf/cdktf-provider-google-go/google/v15.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams.property.audioStream">AudioStream</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream">TranscoderJobTemplateConfigElementaryStreamsAudioStream</a></code> | audio_stream block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams.property.key">Key</a></code> | <code>*string</code> | A unique key for this atom. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams.property.videoStream">VideoStream</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream">TranscoderJobTemplateConfigElementaryStreamsVideoStream</a></code> | video_stream block. |

---

##### `AudioStream`<sup>Optional</sup> <a name="AudioStream" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams.property.audioStream"></a>

```go
AudioStream TranscoderJobTemplateConfigElementaryStreamsAudioStream
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream">TranscoderJobTemplateConfigElementaryStreamsAudioStream</a>

audio_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#audio_stream TranscoderJobTemplate#audio_stream}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams.property.key"></a>

```go
Key *string
```

- *Type:* *string

A unique key for this atom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#key TranscoderJobTemplate#key}

---

##### `VideoStream`<sup>Optional</sup> <a name="VideoStream" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams.property.videoStream"></a>

```go
VideoStream TranscoderJobTemplateConfigElementaryStreamsVideoStream
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream">TranscoderJobTemplateConfigElementaryStreamsVideoStream</a>

video_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#video_stream TranscoderJobTemplate#video_stream}

---

### TranscoderJobTemplateConfigElementaryStreamsAudioStream <a name="TranscoderJobTemplateConfigElementaryStreamsAudioStream" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

&transcoderjobtemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream {
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
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.property.bitrateBps">BitrateBps</a></code> | <code>*f64</code> | Audio bitrate in bits per second. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.property.channelCount">ChannelCount</a></code> | <code>*f64</code> | Number of audio channels. The default is '2'. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.property.channelLayout">ChannelLayout</a></code> | <code>*[]*string</code> | A list of channel names specifying layout of the audio channels.  The default is ["fl", "fr"]. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.property.codec">Codec</a></code> | <code>*string</code> | The codec for this audio stream. The default is 'aac'. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.property.sampleRateHertz">SampleRateHertz</a></code> | <code>*f64</code> | The audio sample rate in Hertz. The default is '48000'. |

---

##### `BitrateBps`<sup>Required</sup> <a name="BitrateBps" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.property.bitrateBps"></a>

```go
BitrateBps *f64
```

- *Type:* *f64

Audio bitrate in bits per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#bitrate_bps TranscoderJobTemplate#bitrate_bps}

---

##### `ChannelCount`<sup>Optional</sup> <a name="ChannelCount" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.property.channelCount"></a>

```go
ChannelCount *f64
```

- *Type:* *f64

Number of audio channels. The default is '2'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#channel_count TranscoderJobTemplate#channel_count}

---

##### `ChannelLayout`<sup>Optional</sup> <a name="ChannelLayout" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.property.channelLayout"></a>

```go
ChannelLayout *[]*string
```

- *Type:* *[]*string

A list of channel names specifying layout of the audio channels.  The default is ["fl", "fr"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#channel_layout TranscoderJobTemplate#channel_layout}

---

##### `Codec`<sup>Optional</sup> <a name="Codec" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.property.codec"></a>

```go
Codec *string
```

- *Type:* *string

The codec for this audio stream. The default is 'aac'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#codec TranscoderJobTemplate#codec}

---

##### `SampleRateHertz`<sup>Optional</sup> <a name="SampleRateHertz" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.property.sampleRateHertz"></a>

```go
SampleRateHertz *f64
```

- *Type:* *f64

The audio sample rate in Hertz. The default is '48000'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#sample_rate_hertz TranscoderJobTemplate#sample_rate_hertz}

---

### TranscoderJobTemplateConfigElementaryStreamsVideoStream <a name="TranscoderJobTemplateConfigElementaryStreamsVideoStream" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

&transcoderjobtemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream {
	H264: github.com/cdktf/cdktf-provider-google-go/google/v15.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream.property.h264">H264</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a></code> | h264 block. |

---

##### `H264`<sup>Optional</sup> <a name="H264" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream.property.h264"></a>

```go
H264 TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a>

h264 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#h264 TranscoderJobTemplate#h264}

---

### TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264 <a name="TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

&transcoderjobtemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264 {
	BitrateBps: *f64,
	FrameRate: *f64,
	CrfLevel: *f64,
	EntropyCoder: *string,
	GopDuration: *string,
	HeightPixels: *f64,
	Hlg: github.com/cdktf/cdktf-provider-google-go/google/v15.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg,
	PixelFormat: *string,
	Preset: *string,
	Profile: *string,
	RateControlMode: *string,
	Sdr: github.com/cdktf/cdktf-provider-google-go/google/v15.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr,
	VbvFullnessBits: *f64,
	VbvSizeBits: *f64,
	WidthPixels: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.bitrateBps">BitrateBps</a></code> | <code>*f64</code> | The video bitrate in bits per second. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.frameRate">FrameRate</a></code> | <code>*f64</code> | The target video frame rate in frames per second (FPS). |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.crfLevel">CrfLevel</a></code> | <code>*f64</code> | Target CRF level. The default is '21'. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.entropyCoder">EntropyCoder</a></code> | <code>*string</code> | The entropy coder to use. The default is 'cabac'. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.gopDuration">GopDuration</a></code> | <code>*string</code> | Select the GOP size based on the specified duration. The default is '3s'. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.heightPixels">HeightPixels</a></code> | <code>*f64</code> | The height of the video in pixels. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.hlg">Hlg</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a></code> | hlg block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.pixelFormat">PixelFormat</a></code> | <code>*string</code> | Pixel format to use. The default is 'yuv420p'. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.preset">Preset</a></code> | <code>*string</code> | Enforces the specified codec preset. The default is 'veryfast'. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.profile">Profile</a></code> | <code>*string</code> | Enforces the specified codec profile. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.rateControlMode">RateControlMode</a></code> | <code>*string</code> | Specify the mode. The default is 'vbr'. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.sdr">Sdr</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a></code> | sdr block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.vbvFullnessBits">VbvFullnessBits</a></code> | <code>*f64</code> | Initial fullness of the Video Buffering Verifier (VBV) buffer in bits. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.vbvSizeBits">VbvSizeBits</a></code> | <code>*f64</code> | Size of the Video Buffering Verifier (VBV) buffer in bits. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.widthPixels">WidthPixels</a></code> | <code>*f64</code> | The width of the video in pixels. |

---

##### `BitrateBps`<sup>Required</sup> <a name="BitrateBps" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.bitrateBps"></a>

```go
BitrateBps *f64
```

- *Type:* *f64

The video bitrate in bits per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#bitrate_bps TranscoderJobTemplate#bitrate_bps}

---

##### `FrameRate`<sup>Required</sup> <a name="FrameRate" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.frameRate"></a>

```go
FrameRate *f64
```

- *Type:* *f64

The target video frame rate in frames per second (FPS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#frame_rate TranscoderJobTemplate#frame_rate}

---

##### `CrfLevel`<sup>Optional</sup> <a name="CrfLevel" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.crfLevel"></a>

```go
CrfLevel *f64
```

- *Type:* *f64

Target CRF level. The default is '21'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#crf_level TranscoderJobTemplate#crf_level}

---

##### `EntropyCoder`<sup>Optional</sup> <a name="EntropyCoder" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.entropyCoder"></a>

```go
EntropyCoder *string
```

- *Type:* *string

The entropy coder to use. The default is 'cabac'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#entropy_coder TranscoderJobTemplate#entropy_coder}

---

##### `GopDuration`<sup>Optional</sup> <a name="GopDuration" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.gopDuration"></a>

```go
GopDuration *string
```

- *Type:* *string

Select the GOP size based on the specified duration. The default is '3s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#gop_duration TranscoderJobTemplate#gop_duration}

---

##### `HeightPixels`<sup>Optional</sup> <a name="HeightPixels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.heightPixels"></a>

```go
HeightPixels *f64
```

- *Type:* *f64

The height of the video in pixels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#height_pixels TranscoderJobTemplate#height_pixels}

---

##### `Hlg`<sup>Optional</sup> <a name="Hlg" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.hlg"></a>

```go
Hlg TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a>

hlg block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#hlg TranscoderJobTemplate#hlg}

---

##### `PixelFormat`<sup>Optional</sup> <a name="PixelFormat" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.pixelFormat"></a>

```go
PixelFormat *string
```

- *Type:* *string

Pixel format to use. The default is 'yuv420p'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#pixel_format TranscoderJobTemplate#pixel_format}

---

##### `Preset`<sup>Optional</sup> <a name="Preset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.preset"></a>

```go
Preset *string
```

- *Type:* *string

Enforces the specified codec preset. The default is 'veryfast'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#preset TranscoderJobTemplate#preset}

---

##### `Profile`<sup>Optional</sup> <a name="Profile" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.profile"></a>

```go
Profile *string
```

- *Type:* *string

Enforces the specified codec profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#profile TranscoderJobTemplate#profile}

---

##### `RateControlMode`<sup>Optional</sup> <a name="RateControlMode" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.rateControlMode"></a>

```go
RateControlMode *string
```

- *Type:* *string

Specify the mode. The default is 'vbr'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#rate_control_mode TranscoderJobTemplate#rate_control_mode}

---

##### `Sdr`<sup>Optional</sup> <a name="Sdr" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.sdr"></a>

```go
Sdr TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a>

sdr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#sdr TranscoderJobTemplate#sdr}

---

##### `VbvFullnessBits`<sup>Optional</sup> <a name="VbvFullnessBits" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.vbvFullnessBits"></a>

```go
VbvFullnessBits *f64
```

- *Type:* *f64

Initial fullness of the Video Buffering Verifier (VBV) buffer in bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#vbv_fullness_bits TranscoderJobTemplate#vbv_fullness_bits}

---

##### `VbvSizeBits`<sup>Optional</sup> <a name="VbvSizeBits" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.vbvSizeBits"></a>

```go
VbvSizeBits *f64
```

- *Type:* *f64

Size of the Video Buffering Verifier (VBV) buffer in bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#vbv_size_bits TranscoderJobTemplate#vbv_size_bits}

---

##### `WidthPixels`<sup>Optional</sup> <a name="WidthPixels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.widthPixels"></a>

```go
WidthPixels *f64
```

- *Type:* *f64

The width of the video in pixels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#width_pixels TranscoderJobTemplate#width_pixels}

---

### TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg <a name="TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

&transcoderjobtemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg {

}
```


### TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr <a name="TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

&transcoderjobtemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr {

}
```


### TranscoderJobTemplateConfigEncryptions <a name="TranscoderJobTemplateConfigEncryptions" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

&transcoderjobtemplate.TranscoderJobTemplateConfigEncryptions {
	Id: *string,
	Aes128: github.com/cdktf/cdktf-provider-google-go/google/v15.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128,
	DrmSystems: github.com/cdktf/cdktf-provider-google-go/google/v15.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems,
	MpegCenc: github.com/cdktf/cdktf-provider-google-go/google/v15.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc,
	SampleAes: github.com/cdktf/cdktf-provider-google-go/google/v15.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAes,
	SecretManagerKeySource: github.com/cdktf/cdktf-provider-google-go/google/v15.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.id">Id</a></code> | <code>*string</code> | Identifier for this set of encryption options. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.aes128">Aes128</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128">TranscoderJobTemplateConfigEncryptionsAes128</a></code> | aes128 block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.drmSystems">DrmSystems</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems">TranscoderJobTemplateConfigEncryptionsDrmSystems</a></code> | drm_systems block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.mpegCenc">MpegCenc</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc">TranscoderJobTemplateConfigEncryptionsMpegCenc</a></code> | mpeg_cenc block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.sampleAes">SampleAes</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAes">TranscoderJobTemplateConfigEncryptionsSampleAes</a></code> | sample_aes block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.secretManagerKeySource">SecretManagerKeySource</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource">TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource</a></code> | secret_manager_key_source block. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.id"></a>

```go
Id *string
```

- *Type:* *string

Identifier for this set of encryption options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#id TranscoderJobTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Aes128`<sup>Optional</sup> <a name="Aes128" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.aes128"></a>

```go
Aes128 TranscoderJobTemplateConfigEncryptionsAes128
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128">TranscoderJobTemplateConfigEncryptionsAes128</a>

aes128 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#aes128 TranscoderJobTemplate#aes128}

---

##### `DrmSystems`<sup>Optional</sup> <a name="DrmSystems" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.drmSystems"></a>

```go
DrmSystems TranscoderJobTemplateConfigEncryptionsDrmSystems
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems">TranscoderJobTemplateConfigEncryptionsDrmSystems</a>

drm_systems block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#drm_systems TranscoderJobTemplate#drm_systems}

---

##### `MpegCenc`<sup>Optional</sup> <a name="MpegCenc" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.mpegCenc"></a>

```go
MpegCenc TranscoderJobTemplateConfigEncryptionsMpegCenc
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc">TranscoderJobTemplateConfigEncryptionsMpegCenc</a>

mpeg_cenc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#mpeg_cenc TranscoderJobTemplate#mpeg_cenc}

---

##### `SampleAes`<sup>Optional</sup> <a name="SampleAes" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.sampleAes"></a>

```go
SampleAes TranscoderJobTemplateConfigEncryptionsSampleAes
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAes">TranscoderJobTemplateConfigEncryptionsSampleAes</a>

sample_aes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#sample_aes TranscoderJobTemplate#sample_aes}

---

##### `SecretManagerKeySource`<sup>Optional</sup> <a name="SecretManagerKeySource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.secretManagerKeySource"></a>

```go
SecretManagerKeySource TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource">TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource</a>

secret_manager_key_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#secret_manager_key_source TranscoderJobTemplate#secret_manager_key_source}

---

### TranscoderJobTemplateConfigEncryptionsAes128 <a name="TranscoderJobTemplateConfigEncryptionsAes128" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

&transcoderjobtemplate.TranscoderJobTemplateConfigEncryptionsAes128 {

}
```


### TranscoderJobTemplateConfigEncryptionsDrmSystems <a name="TranscoderJobTemplateConfigEncryptionsDrmSystems" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

&transcoderjobtemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems {
	Clearkey: github.com/cdktf/cdktf-provider-google-go/google/v15.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey,
	Fairplay: github.com/cdktf/cdktf-provider-google-go/google/v15.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay,
	Playready: github.com/cdktf/cdktf-provider-google-go/google/v15.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready,
	Widevine: github.com/cdktf/cdktf-provider-google-go/google/v15.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems.property.clearkey">Clearkey</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a></code> | clearkey block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems.property.fairplay">Fairplay</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a></code> | fairplay block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems.property.playready">Playready</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a></code> | playready block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems.property.widevine">Widevine</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a></code> | widevine block. |

---

##### `Clearkey`<sup>Optional</sup> <a name="Clearkey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems.property.clearkey"></a>

```go
Clearkey TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a>

clearkey block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#clearkey TranscoderJobTemplate#clearkey}

---

##### `Fairplay`<sup>Optional</sup> <a name="Fairplay" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems.property.fairplay"></a>

```go
Fairplay TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a>

fairplay block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#fairplay TranscoderJobTemplate#fairplay}

---

##### `Playready`<sup>Optional</sup> <a name="Playready" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems.property.playready"></a>

```go
Playready TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a>

playready block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#playready TranscoderJobTemplate#playready}

---

##### `Widevine`<sup>Optional</sup> <a name="Widevine" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems.property.widevine"></a>

```go
Widevine TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a>

widevine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#widevine TranscoderJobTemplate#widevine}

---

### TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey <a name="TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

&transcoderjobtemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey {

}
```


### TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay <a name="TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

&transcoderjobtemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay {

}
```


### TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready <a name="TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

&transcoderjobtemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready {

}
```


### TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine <a name="TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

&transcoderjobtemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine {

}
```


### TranscoderJobTemplateConfigEncryptionsMpegCenc <a name="TranscoderJobTemplateConfigEncryptionsMpegCenc" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

&transcoderjobtemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc {
	Scheme: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc.property.scheme">Scheme</a></code> | <code>*string</code> | Specify the encryption scheme. |

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc.property.scheme"></a>

```go
Scheme *string
```

- *Type:* *string

Specify the encryption scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#scheme TranscoderJobTemplate#scheme}

---

### TranscoderJobTemplateConfigEncryptionsSampleAes <a name="TranscoderJobTemplateConfigEncryptionsSampleAes" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

&transcoderjobtemplate.TranscoderJobTemplateConfigEncryptionsSampleAes {

}
```


### TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource <a name="TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

&transcoderjobtemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource {
	SecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource.property.secretVersion">SecretVersion</a></code> | <code>*string</code> | The name of the Secret Version containing the encryption key in the following format: projects/{project}/secrets/{secret_id}/versions/{version_number}. |

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource.property.secretVersion"></a>

```go
SecretVersion *string
```

- *Type:* *string

The name of the Secret Version containing the encryption key in the following format: projects/{project}/secrets/{secret_id}/versions/{version_number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#secret_version TranscoderJobTemplate#secret_version}

---

### TranscoderJobTemplateConfigInputs <a name="TranscoderJobTemplateConfigInputs" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

&transcoderjobtemplate.TranscoderJobTemplateConfigInputs {
	Key: *string,
	Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs.property.key">Key</a></code> | <code>*string</code> | A unique key for this input. Must be specified when using advanced mapping and edit lists. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs.property.uri">Uri</a></code> | <code>*string</code> | URI of the media. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs.property.key"></a>

```go
Key *string
```

- *Type:* *string

A unique key for this input. Must be specified when using advanced mapping and edit lists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#key TranscoderJobTemplate#key}

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

URI of the media.

Input files must be at least 5 seconds in duration and stored in Cloud Storage (for example, gs://bucket/inputs/file.mp4).
If empty, the value is populated from Job.input_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#uri TranscoderJobTemplate#uri}

---

### TranscoderJobTemplateConfigManifests <a name="TranscoderJobTemplateConfigManifests" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

&transcoderjobtemplate.TranscoderJobTemplateConfigManifests {
	FileName: *string,
	MuxStreams: *[]*string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests.property.fileName">FileName</a></code> | <code>*string</code> | The name of the generated file. The default is 'manifest'. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests.property.muxStreams">MuxStreams</a></code> | <code>*[]*string</code> | List of user supplied MuxStream.key values that should appear in this manifest. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests.property.type">Type</a></code> | <code>*string</code> | Type of the manifest. Possible values: ["MANIFEST_TYPE_UNSPECIFIED", "HLS", "DASH"]. |

---

##### `FileName`<sup>Optional</sup> <a name="FileName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests.property.fileName"></a>

```go
FileName *string
```

- *Type:* *string

The name of the generated file. The default is 'manifest'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#file_name TranscoderJobTemplate#file_name}

---

##### `MuxStreams`<sup>Optional</sup> <a name="MuxStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests.property.muxStreams"></a>

```go
MuxStreams *[]*string
```

- *Type:* *[]*string

List of user supplied MuxStream.key values that should appear in this manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#mux_streams TranscoderJobTemplate#mux_streams}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of the manifest. Possible values: ["MANIFEST_TYPE_UNSPECIFIED", "HLS", "DASH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#type TranscoderJobTemplate#type}

---

### TranscoderJobTemplateConfigMuxStreams <a name="TranscoderJobTemplateConfigMuxStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

&transcoderjobtemplate.TranscoderJobTemplateConfigMuxStreams {
	Container: *string,
	ElementaryStreams: *[]*string,
	EncryptionId: *string,
	FileName: *string,
	Key: *string,
	SegmentSettings: github.com/cdktf/cdktf-provider-google-go/google/v15.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.container">Container</a></code> | <code>*string</code> | The container format. The default is 'mp4'. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.elementaryStreams">ElementaryStreams</a></code> | <code>*[]*string</code> | List of ElementaryStream.key values multiplexed in this stream. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.encryptionId">EncryptionId</a></code> | <code>*string</code> | Identifier of the encryption configuration to use. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.fileName">FileName</a></code> | <code>*string</code> | The name of the generated file. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.key">Key</a></code> | <code>*string</code> | A unique key for this multiplexed stream. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.segmentSettings">SegmentSettings</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings">TranscoderJobTemplateConfigMuxStreamsSegmentSettings</a></code> | segment_settings block. |

---

##### `Container`<sup>Optional</sup> <a name="Container" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.container"></a>

```go
Container *string
```

- *Type:* *string

The container format. The default is 'mp4'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#container TranscoderJobTemplate#container}

---

##### `ElementaryStreams`<sup>Optional</sup> <a name="ElementaryStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.elementaryStreams"></a>

```go
ElementaryStreams *[]*string
```

- *Type:* *[]*string

List of ElementaryStream.key values multiplexed in this stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#elementary_streams TranscoderJobTemplate#elementary_streams}

---

##### `EncryptionId`<sup>Optional</sup> <a name="EncryptionId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.encryptionId"></a>

```go
EncryptionId *string
```

- *Type:* *string

Identifier of the encryption configuration to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#encryption_id TranscoderJobTemplate#encryption_id}

---

##### `FileName`<sup>Optional</sup> <a name="FileName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.fileName"></a>

```go
FileName *string
```

- *Type:* *string

The name of the generated file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#file_name TranscoderJobTemplate#file_name}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.key"></a>

```go
Key *string
```

- *Type:* *string

A unique key for this multiplexed stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#key TranscoderJobTemplate#key}

---

##### `SegmentSettings`<sup>Optional</sup> <a name="SegmentSettings" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.segmentSettings"></a>

```go
SegmentSettings TranscoderJobTemplateConfigMuxStreamsSegmentSettings
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings">TranscoderJobTemplateConfigMuxStreamsSegmentSettings</a>

segment_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#segment_settings TranscoderJobTemplate#segment_settings}

---

### TranscoderJobTemplateConfigMuxStreamsSegmentSettings <a name="TranscoderJobTemplateConfigMuxStreamsSegmentSettings" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

&transcoderjobtemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings {
	SegmentDuration: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings.property.segmentDuration">SegmentDuration</a></code> | <code>*string</code> | Duration of the segments in seconds. The default is '6.0s'. |

---

##### `SegmentDuration`<sup>Optional</sup> <a name="SegmentDuration" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings.property.segmentDuration"></a>

```go
SegmentDuration *string
```

- *Type:* *string

Duration of the segments in seconds. The default is '6.0s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#segment_duration TranscoderJobTemplate#segment_duration}

---

### TranscoderJobTemplateConfigOutput <a name="TranscoderJobTemplateConfigOutput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

&transcoderjobtemplate.TranscoderJobTemplateConfigOutput {
	Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput.property.uri">Uri</a></code> | <code>*string</code> | URI for the output file(s). For example, gs://my-bucket/outputs/. |

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

URI for the output file(s). For example, gs://my-bucket/outputs/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#uri TranscoderJobTemplate#uri}

---

### TranscoderJobTemplateConfigOverlays <a name="TranscoderJobTemplateConfigOverlays" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

&transcoderjobtemplate.TranscoderJobTemplateConfigOverlays {
	Animations: interface{},
	Image: github.com/cdktf/cdktf-provider-google-go/google/v15.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays.property.animations">Animations</a></code> | <code>interface{}</code> | animations block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays.property.image">Image</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage">TranscoderJobTemplateConfigOverlaysImage</a></code> | image block. |

---

##### `Animations`<sup>Optional</sup> <a name="Animations" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays.property.animations"></a>

```go
Animations interface{}
```

- *Type:* interface{}

animations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#animations TranscoderJobTemplate#animations}

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays.property.image"></a>

```go
Image TranscoderJobTemplateConfigOverlaysImage
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage">TranscoderJobTemplateConfigOverlaysImage</a>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#image TranscoderJobTemplate#image}

---

### TranscoderJobTemplateConfigOverlaysAnimations <a name="TranscoderJobTemplateConfigOverlaysAnimations" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

&transcoderjobtemplate.TranscoderJobTemplateConfigOverlaysAnimations {
	AnimationFade: github.com/cdktf/cdktf-provider-google-go/google/v15.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimations.property.animationFade">AnimationFade</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade</a></code> | animation_fade block. |

---

##### `AnimationFade`<sup>Optional</sup> <a name="AnimationFade" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimations.property.animationFade"></a>

```go
AnimationFade TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade</a>

animation_fade block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#animation_fade TranscoderJobTemplate#animation_fade}

---

### TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade <a name="TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

&transcoderjobtemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade {
	FadeType: *string,
	EndTimeOffset: *string,
	StartTimeOffset: *string,
	Xy: github.com/cdktf/cdktf-provider-google-go/google/v15.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.fadeType">FadeType</a></code> | <code>*string</code> | Required. Type of fade animation: 'FADE_IN' or 'FADE_OUT'. The possible values are:. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.endTimeOffset">EndTimeOffset</a></code> | <code>*string</code> | The time to end the fade animation, in seconds. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.startTimeOffset">StartTimeOffset</a></code> | <code>*string</code> | The time to start the fade animation, in seconds. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.xy">Xy</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a></code> | xy block. |

---

##### `FadeType`<sup>Required</sup> <a name="FadeType" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.fadeType"></a>

```go
FadeType *string
```

- *Type:* *string

Required. Type of fade animation: 'FADE_IN' or 'FADE_OUT'. The possible values are:.

* 'FADE_TYPE_UNSPECIFIED': The fade type is not specified.
* 'FADE_IN': Fade the overlay object into view.
* 'FADE_OUT': Fade the overlay object out of view. Possible values: ["FADE_TYPE_UNSPECIFIED", "FADE_IN", "FADE_OUT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#fade_type TranscoderJobTemplate#fade_type}

---

##### `EndTimeOffset`<sup>Optional</sup> <a name="EndTimeOffset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.endTimeOffset"></a>

```go
EndTimeOffset *string
```

- *Type:* *string

The time to end the fade animation, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#end_time_offset TranscoderJobTemplate#end_time_offset}

---

##### `StartTimeOffset`<sup>Optional</sup> <a name="StartTimeOffset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.startTimeOffset"></a>

```go
StartTimeOffset *string
```

- *Type:* *string

The time to start the fade animation, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#start_time_offset TranscoderJobTemplate#start_time_offset}

---

##### `Xy`<sup>Optional</sup> <a name="Xy" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.xy"></a>

```go
Xy TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a>

xy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#xy TranscoderJobTemplate#xy}

---

### TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy <a name="TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

&transcoderjobtemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy {
	X: *f64,
	Y: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy.property.x">X</a></code> | <code>*f64</code> | Normalized x coordinate. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy.property.y">Y</a></code> | <code>*f64</code> | Normalized y coordinate. |

---

##### `X`<sup>Optional</sup> <a name="X" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy.property.x"></a>

```go
X *f64
```

- *Type:* *f64

Normalized x coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#x TranscoderJobTemplate#x}

---

##### `Y`<sup>Optional</sup> <a name="Y" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy.property.y"></a>

```go
Y *f64
```

- *Type:* *f64

Normalized y coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#y TranscoderJobTemplate#y}

---

### TranscoderJobTemplateConfigOverlaysImage <a name="TranscoderJobTemplateConfigOverlaysImage" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

&transcoderjobtemplate.TranscoderJobTemplateConfigOverlaysImage {
	Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage.property.uri">Uri</a></code> | <code>*string</code> | URI of the image in Cloud Storage. For example, gs://bucket/inputs/image.png. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

URI of the image in Cloud Storage. For example, gs://bucket/inputs/image.png.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#uri TranscoderJobTemplate#uri}

---

### TranscoderJobTemplateConfigPubsubDestination <a name="TranscoderJobTemplateConfigPubsubDestination" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

&transcoderjobtemplate.TranscoderJobTemplateConfigPubsubDestination {
	Topic: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination.property.topic">Topic</a></code> | <code>*string</code> | The name of the Pub/Sub topic to publish job completion notification to. For example: projects/{project}/topics/{topic}. |

---

##### `Topic`<sup>Optional</sup> <a name="Topic" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination.property.topic"></a>

```go
Topic *string
```

- *Type:* *string

The name of the Pub/Sub topic to publish job completion notification to. For example: projects/{project}/topics/{topic}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#topic TranscoderJobTemplate#topic}

---

### TranscoderJobTemplateTimeouts <a name="TranscoderJobTemplateTimeouts" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

&transcoderjobtemplate.TranscoderJobTemplateTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#create TranscoderJobTemplate#create}. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#delete TranscoderJobTemplate#delete}. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#update TranscoderJobTemplate#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#create TranscoderJobTemplate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#delete TranscoderJobTemplate#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/transcoder_job_template#update TranscoderJobTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TranscoderJobTemplateConfigAdBreaksList <a name="TranscoderJobTemplateConfigAdBreaksList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.NewTranscoderJobTemplateConfigAdBreaksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TranscoderJobTemplateConfigAdBreaksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.get"></a>

```go
func Get(index *f64) TranscoderJobTemplateConfigAdBreaksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscoderJobTemplateConfigAdBreaksOutputReference <a name="TranscoderJobTemplateConfigAdBreaksOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.NewTranscoderJobTemplateConfigAdBreaksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TranscoderJobTemplateConfigAdBreaksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.resetStartTimeOffset">ResetStartTimeOffset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStartTimeOffset` <a name="ResetStartTimeOffset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.resetStartTimeOffset"></a>

```go
func ResetStartTimeOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.property.startTimeOffsetInput">StartTimeOffsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.property.startTimeOffset">StartTimeOffset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StartTimeOffsetInput`<sup>Optional</sup> <a name="StartTimeOffsetInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.property.startTimeOffsetInput"></a>

```go
func StartTimeOffsetInput() *string
```

- *Type:* *string

---

##### `StartTimeOffset`<sup>Required</sup> <a name="StartTimeOffset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.property.startTimeOffset"></a>

```go
func StartTimeOffset() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscoderJobTemplateConfigAOutputReference <a name="TranscoderJobTemplateConfigAOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.NewTranscoderJobTemplateConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobTemplateConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putAdBreaks">PutAdBreaks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putEditList">PutEditList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putElementaryStreams">PutElementaryStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putEncryptions">PutEncryptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putInputs">PutInputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putManifests">PutManifests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putMuxStreams">PutMuxStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putOutput">PutOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putOverlays">PutOverlays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putPubsubDestination">PutPubsubDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetAdBreaks">ResetAdBreaks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetEditList">ResetEditList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetElementaryStreams">ResetElementaryStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetEncryptions">ResetEncryptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetInputs">ResetInputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetManifests">ResetManifests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetMuxStreams">ResetMuxStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetOutput">ResetOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetOverlays">ResetOverlays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetPubsubDestination">ResetPubsubDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdBreaks` <a name="PutAdBreaks" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putAdBreaks"></a>

```go
func PutAdBreaks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putAdBreaks.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEditList` <a name="PutEditList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putEditList"></a>

```go
func PutEditList(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putEditList.parameter.value"></a>

- *Type:* interface{}

---

##### `PutElementaryStreams` <a name="PutElementaryStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putElementaryStreams"></a>

```go
func PutElementaryStreams(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putElementaryStreams.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEncryptions` <a name="PutEncryptions" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putEncryptions"></a>

```go
func PutEncryptions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putEncryptions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutInputs` <a name="PutInputs" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putInputs"></a>

```go
func PutInputs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putInputs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutManifests` <a name="PutManifests" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putManifests"></a>

```go
func PutManifests(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putManifests.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMuxStreams` <a name="PutMuxStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putMuxStreams"></a>

```go
func PutMuxStreams(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putMuxStreams.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOutput` <a name="PutOutput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putOutput"></a>

```go
func PutOutput(value TranscoderJobTemplateConfigOutput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putOutput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput">TranscoderJobTemplateConfigOutput</a>

---

##### `PutOverlays` <a name="PutOverlays" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putOverlays"></a>

```go
func PutOverlays(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putOverlays.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPubsubDestination` <a name="PutPubsubDestination" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putPubsubDestination"></a>

```go
func PutPubsubDestination(value TranscoderJobTemplateConfigPubsubDestination)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putPubsubDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination">TranscoderJobTemplateConfigPubsubDestination</a>

---

##### `ResetAdBreaks` <a name="ResetAdBreaks" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetAdBreaks"></a>

```go
func ResetAdBreaks()
```

##### `ResetEditList` <a name="ResetEditList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetEditList"></a>

```go
func ResetEditList()
```

##### `ResetElementaryStreams` <a name="ResetElementaryStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetElementaryStreams"></a>

```go
func ResetElementaryStreams()
```

##### `ResetEncryptions` <a name="ResetEncryptions" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetEncryptions"></a>

```go
func ResetEncryptions()
```

##### `ResetInputs` <a name="ResetInputs" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetInputs"></a>

```go
func ResetInputs()
```

##### `ResetManifests` <a name="ResetManifests" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetManifests"></a>

```go
func ResetManifests()
```

##### `ResetMuxStreams` <a name="ResetMuxStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetMuxStreams"></a>

```go
func ResetMuxStreams()
```

##### `ResetOutput` <a name="ResetOutput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetOutput"></a>

```go
func ResetOutput()
```

##### `ResetOverlays` <a name="ResetOverlays" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetOverlays"></a>

```go
func ResetOverlays()
```

##### `ResetPubsubDestination` <a name="ResetPubsubDestination" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetPubsubDestination"></a>

```go
func ResetPubsubDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.adBreaks">AdBreaks</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList">TranscoderJobTemplateConfigAdBreaksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.editList">EditList</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList">TranscoderJobTemplateConfigEditListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.elementaryStreams">ElementaryStreams</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList">TranscoderJobTemplateConfigElementaryStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.encryptions">Encryptions</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList">TranscoderJobTemplateConfigEncryptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.inputs">Inputs</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList">TranscoderJobTemplateConfigInputsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.manifests">Manifests</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList">TranscoderJobTemplateConfigManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.muxStreams">MuxStreams</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList">TranscoderJobTemplateConfigMuxStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.output">Output</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference">TranscoderJobTemplateConfigOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.overlays">Overlays</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList">TranscoderJobTemplateConfigOverlaysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.pubsubDestination">PubsubDestination</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference">TranscoderJobTemplateConfigPubsubDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.adBreaksInput">AdBreaksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.editListInput">EditListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.elementaryStreamsInput">ElementaryStreamsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.encryptionsInput">EncryptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.inputsInput">InputsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.manifestsInput">ManifestsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.muxStreamsInput">MuxStreamsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.outputInput">OutputInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput">TranscoderJobTemplateConfigOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.overlaysInput">OverlaysInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.pubsubDestinationInput">PubsubDestinationInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination">TranscoderJobTemplateConfigPubsubDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA">TranscoderJobTemplateConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdBreaks`<sup>Required</sup> <a name="AdBreaks" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.adBreaks"></a>

```go
func AdBreaks() TranscoderJobTemplateConfigAdBreaksList
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList">TranscoderJobTemplateConfigAdBreaksList</a>

---

##### `EditList`<sup>Required</sup> <a name="EditList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.editList"></a>

```go
func EditList() TranscoderJobTemplateConfigEditListStructList
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList">TranscoderJobTemplateConfigEditListStructList</a>

---

##### `ElementaryStreams`<sup>Required</sup> <a name="ElementaryStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.elementaryStreams"></a>

```go
func ElementaryStreams() TranscoderJobTemplateConfigElementaryStreamsList
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList">TranscoderJobTemplateConfigElementaryStreamsList</a>

---

##### `Encryptions`<sup>Required</sup> <a name="Encryptions" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.encryptions"></a>

```go
func Encryptions() TranscoderJobTemplateConfigEncryptionsList
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList">TranscoderJobTemplateConfigEncryptionsList</a>

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.inputs"></a>

```go
func Inputs() TranscoderJobTemplateConfigInputsList
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList">TranscoderJobTemplateConfigInputsList</a>

---

##### `Manifests`<sup>Required</sup> <a name="Manifests" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.manifests"></a>

```go
func Manifests() TranscoderJobTemplateConfigManifestsList
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList">TranscoderJobTemplateConfigManifestsList</a>

---

##### `MuxStreams`<sup>Required</sup> <a name="MuxStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.muxStreams"></a>

```go
func MuxStreams() TranscoderJobTemplateConfigMuxStreamsList
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList">TranscoderJobTemplateConfigMuxStreamsList</a>

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.output"></a>

```go
func Output() TranscoderJobTemplateConfigOutputOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference">TranscoderJobTemplateConfigOutputOutputReference</a>

---

##### `Overlays`<sup>Required</sup> <a name="Overlays" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.overlays"></a>

```go
func Overlays() TranscoderJobTemplateConfigOverlaysList
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList">TranscoderJobTemplateConfigOverlaysList</a>

---

##### `PubsubDestination`<sup>Required</sup> <a name="PubsubDestination" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.pubsubDestination"></a>

```go
func PubsubDestination() TranscoderJobTemplateConfigPubsubDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference">TranscoderJobTemplateConfigPubsubDestinationOutputReference</a>

---

##### `AdBreaksInput`<sup>Optional</sup> <a name="AdBreaksInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.adBreaksInput"></a>

```go
func AdBreaksInput() interface{}
```

- *Type:* interface{}

---

##### `EditListInput`<sup>Optional</sup> <a name="EditListInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.editListInput"></a>

```go
func EditListInput() interface{}
```

- *Type:* interface{}

---

##### `ElementaryStreamsInput`<sup>Optional</sup> <a name="ElementaryStreamsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.elementaryStreamsInput"></a>

```go
func ElementaryStreamsInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptionsInput`<sup>Optional</sup> <a name="EncryptionsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.encryptionsInput"></a>

```go
func EncryptionsInput() interface{}
```

- *Type:* interface{}

---

##### `InputsInput`<sup>Optional</sup> <a name="InputsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.inputsInput"></a>

```go
func InputsInput() interface{}
```

- *Type:* interface{}

---

##### `ManifestsInput`<sup>Optional</sup> <a name="ManifestsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.manifestsInput"></a>

```go
func ManifestsInput() interface{}
```

- *Type:* interface{}

---

##### `MuxStreamsInput`<sup>Optional</sup> <a name="MuxStreamsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.muxStreamsInput"></a>

```go
func MuxStreamsInput() interface{}
```

- *Type:* interface{}

---

##### `OutputInput`<sup>Optional</sup> <a name="OutputInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.outputInput"></a>

```go
func OutputInput() TranscoderJobTemplateConfigOutput
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput">TranscoderJobTemplateConfigOutput</a>

---

##### `OverlaysInput`<sup>Optional</sup> <a name="OverlaysInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.overlaysInput"></a>

```go
func OverlaysInput() interface{}
```

- *Type:* interface{}

---

##### `PubsubDestinationInput`<sup>Optional</sup> <a name="PubsubDestinationInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.pubsubDestinationInput"></a>

```go
func PubsubDestinationInput() TranscoderJobTemplateConfigPubsubDestination
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination">TranscoderJobTemplateConfigPubsubDestination</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobTemplateConfigA
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA">TranscoderJobTemplateConfigA</a>

---


### TranscoderJobTemplateConfigEditListStructList <a name="TranscoderJobTemplateConfigEditListStructList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.NewTranscoderJobTemplateConfigEditListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TranscoderJobTemplateConfigEditListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.get"></a>

```go
func Get(index *f64) TranscoderJobTemplateConfigEditListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscoderJobTemplateConfigEditListStructOutputReference <a name="TranscoderJobTemplateConfigEditListStructOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.NewTranscoderJobTemplateConfigEditListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TranscoderJobTemplateConfigEditListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.resetInputs">ResetInputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.resetStartTimeOffset">ResetStartTimeOffset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInputs` <a name="ResetInputs" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.resetInputs"></a>

```go
func ResetInputs()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetStartTimeOffset` <a name="ResetStartTimeOffset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.resetStartTimeOffset"></a>

```go
func ResetStartTimeOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.inputsInput">InputsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.startTimeOffsetInput">StartTimeOffsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.inputs">Inputs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.startTimeOffset">StartTimeOffset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputsInput`<sup>Optional</sup> <a name="InputsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.inputsInput"></a>

```go
func InputsInput() *[]*string
```

- *Type:* *[]*string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `StartTimeOffsetInput`<sup>Optional</sup> <a name="StartTimeOffsetInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.startTimeOffsetInput"></a>

```go
func StartTimeOffsetInput() *string
```

- *Type:* *string

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.inputs"></a>

```go
func Inputs() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `StartTimeOffset`<sup>Required</sup> <a name="StartTimeOffset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.startTimeOffset"></a>

```go
func StartTimeOffset() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference <a name="TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.NewTranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetChannelCount">ResetChannelCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetChannelLayout">ResetChannelLayout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetCodec">ResetCodec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetSampleRateHertz">ResetSampleRateHertz</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChannelCount` <a name="ResetChannelCount" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetChannelCount"></a>

```go
func ResetChannelCount()
```

##### `ResetChannelLayout` <a name="ResetChannelLayout" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetChannelLayout"></a>

```go
func ResetChannelLayout()
```

##### `ResetCodec` <a name="ResetCodec" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetCodec"></a>

```go
func ResetCodec()
```

##### `ResetSampleRateHertz` <a name="ResetSampleRateHertz" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetSampleRateHertz"></a>

```go
func ResetSampleRateHertz()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBpsInput">BitrateBpsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelCountInput">ChannelCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelLayoutInput">ChannelLayoutInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.codecInput">CodecInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertzInput">SampleRateHertzInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBps">BitrateBps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelCount">ChannelCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelLayout">ChannelLayout</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.codec">Codec</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertz">SampleRateHertz</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream">TranscoderJobTemplateConfigElementaryStreamsAudioStream</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BitrateBpsInput`<sup>Optional</sup> <a name="BitrateBpsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBpsInput"></a>

```go
func BitrateBpsInput() *f64
```

- *Type:* *f64

---

##### `ChannelCountInput`<sup>Optional</sup> <a name="ChannelCountInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelCountInput"></a>

```go
func ChannelCountInput() *f64
```

- *Type:* *f64

---

##### `ChannelLayoutInput`<sup>Optional</sup> <a name="ChannelLayoutInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelLayoutInput"></a>

```go
func ChannelLayoutInput() *[]*string
```

- *Type:* *[]*string

---

##### `CodecInput`<sup>Optional</sup> <a name="CodecInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.codecInput"></a>

```go
func CodecInput() *string
```

- *Type:* *string

---

##### `SampleRateHertzInput`<sup>Optional</sup> <a name="SampleRateHertzInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertzInput"></a>

```go
func SampleRateHertzInput() *f64
```

- *Type:* *f64

---

##### `BitrateBps`<sup>Required</sup> <a name="BitrateBps" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBps"></a>

```go
func BitrateBps() *f64
```

- *Type:* *f64

---

##### `ChannelCount`<sup>Required</sup> <a name="ChannelCount" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelCount"></a>

```go
func ChannelCount() *f64
```

- *Type:* *f64

---

##### `ChannelLayout`<sup>Required</sup> <a name="ChannelLayout" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelLayout"></a>

```go
func ChannelLayout() *[]*string
```

- *Type:* *[]*string

---

##### `Codec`<sup>Required</sup> <a name="Codec" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.codec"></a>

```go
func Codec() *string
```

- *Type:* *string

---

##### `SampleRateHertz`<sup>Required</sup> <a name="SampleRateHertz" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertz"></a>

```go
func SampleRateHertz() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobTemplateConfigElementaryStreamsAudioStream
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream">TranscoderJobTemplateConfigElementaryStreamsAudioStream</a>

---


### TranscoderJobTemplateConfigElementaryStreamsList <a name="TranscoderJobTemplateConfigElementaryStreamsList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.NewTranscoderJobTemplateConfigElementaryStreamsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TranscoderJobTemplateConfigElementaryStreamsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.get"></a>

```go
func Get(index *f64) TranscoderJobTemplateConfigElementaryStreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscoderJobTemplateConfigElementaryStreamsOutputReference <a name="TranscoderJobTemplateConfigElementaryStreamsOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.NewTranscoderJobTemplateConfigElementaryStreamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TranscoderJobTemplateConfigElementaryStreamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.putAudioStream">PutAudioStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.putVideoStream">PutVideoStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.resetAudioStream">ResetAudioStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.resetVideoStream">ResetVideoStream</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAudioStream` <a name="PutAudioStream" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.putAudioStream"></a>

```go
func PutAudioStream(value TranscoderJobTemplateConfigElementaryStreamsAudioStream)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.putAudioStream.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream">TranscoderJobTemplateConfigElementaryStreamsAudioStream</a>

---

##### `PutVideoStream` <a name="PutVideoStream" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.putVideoStream"></a>

```go
func PutVideoStream(value TranscoderJobTemplateConfigElementaryStreamsVideoStream)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.putVideoStream.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream">TranscoderJobTemplateConfigElementaryStreamsVideoStream</a>

---

##### `ResetAudioStream` <a name="ResetAudioStream" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.resetAudioStream"></a>

```go
func ResetAudioStream()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetVideoStream` <a name="ResetVideoStream" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.resetVideoStream"></a>

```go
func ResetVideoStream()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.audioStream">AudioStream</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference">TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.videoStream">VideoStream</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference">TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.audioStreamInput">AudioStreamInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream">TranscoderJobTemplateConfigElementaryStreamsAudioStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.videoStreamInput">VideoStreamInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream">TranscoderJobTemplateConfigElementaryStreamsVideoStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AudioStream`<sup>Required</sup> <a name="AudioStream" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.audioStream"></a>

```go
func AudioStream() TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference">TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference</a>

---

##### `VideoStream`<sup>Required</sup> <a name="VideoStream" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.videoStream"></a>

```go
func VideoStream() TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference">TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference</a>

---

##### `AudioStreamInput`<sup>Optional</sup> <a name="AudioStreamInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.audioStreamInput"></a>

```go
func AudioStreamInput() TranscoderJobTemplateConfigElementaryStreamsAudioStream
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream">TranscoderJobTemplateConfigElementaryStreamsAudioStream</a>

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `VideoStreamInput`<sup>Optional</sup> <a name="VideoStreamInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.videoStreamInput"></a>

```go
func VideoStreamInput() TranscoderJobTemplateConfigElementaryStreamsVideoStream
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream">TranscoderJobTemplateConfigElementaryStreamsVideoStream</a>

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference <a name="TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.NewTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a>

---


### TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference <a name="TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.NewTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.putHlg">PutHlg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.putSdr">PutSdr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetCrfLevel">ResetCrfLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetEntropyCoder">ResetEntropyCoder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetGopDuration">ResetGopDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetHeightPixels">ResetHeightPixels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetHlg">ResetHlg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetPixelFormat">ResetPixelFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetPreset">ResetPreset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetProfile">ResetProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetRateControlMode">ResetRateControlMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetSdr">ResetSdr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvFullnessBits">ResetVbvFullnessBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvSizeBits">ResetVbvSizeBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetWidthPixels">ResetWidthPixels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHlg` <a name="PutHlg" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.putHlg"></a>

```go
func PutHlg(value TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.putHlg.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a>

---

##### `PutSdr` <a name="PutSdr" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.putSdr"></a>

```go
func PutSdr(value TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.putSdr.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a>

---

##### `ResetCrfLevel` <a name="ResetCrfLevel" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetCrfLevel"></a>

```go
func ResetCrfLevel()
```

##### `ResetEntropyCoder` <a name="ResetEntropyCoder" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetEntropyCoder"></a>

```go
func ResetEntropyCoder()
```

##### `ResetGopDuration` <a name="ResetGopDuration" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetGopDuration"></a>

```go
func ResetGopDuration()
```

##### `ResetHeightPixels` <a name="ResetHeightPixels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetHeightPixels"></a>

```go
func ResetHeightPixels()
```

##### `ResetHlg` <a name="ResetHlg" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetHlg"></a>

```go
func ResetHlg()
```

##### `ResetPixelFormat` <a name="ResetPixelFormat" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetPixelFormat"></a>

```go
func ResetPixelFormat()
```

##### `ResetPreset` <a name="ResetPreset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetPreset"></a>

```go
func ResetPreset()
```

##### `ResetProfile` <a name="ResetProfile" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetProfile"></a>

```go
func ResetProfile()
```

##### `ResetRateControlMode` <a name="ResetRateControlMode" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetRateControlMode"></a>

```go
func ResetRateControlMode()
```

##### `ResetSdr` <a name="ResetSdr" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetSdr"></a>

```go
func ResetSdr()
```

##### `ResetVbvFullnessBits` <a name="ResetVbvFullnessBits" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvFullnessBits"></a>

```go
func ResetVbvFullnessBits()
```

##### `ResetVbvSizeBits` <a name="ResetVbvSizeBits" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvSizeBits"></a>

```go
func ResetVbvSizeBits()
```

##### `ResetWidthPixels` <a name="ResetWidthPixels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetWidthPixels"></a>

```go
func ResetWidthPixels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.hlg">Hlg</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.sdr">Sdr</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBpsInput">BitrateBpsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevelInput">CrfLevelInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoderInput">EntropyCoderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRateInput">FrameRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDurationInput">GopDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixelsInput">HeightPixelsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.hlgInput">HlgInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormatInput">PixelFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.presetInput">PresetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.profileInput">ProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlModeInput">RateControlModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.sdrInput">SdrInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBitsInput">VbvFullnessBitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBitsInput">VbvSizeBitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixelsInput">WidthPixelsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBps">BitrateBps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevel">CrfLevel</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoder">EntropyCoder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRate">FrameRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDuration">GopDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixels">HeightPixels</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormat">PixelFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.preset">Preset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.profile">Profile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlMode">RateControlMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBits">VbvFullnessBits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBits">VbvSizeBits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixels">WidthPixels</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hlg`<sup>Required</sup> <a name="Hlg" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.hlg"></a>

```go
func Hlg() TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference</a>

---

##### `Sdr`<sup>Required</sup> <a name="Sdr" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.sdr"></a>

```go
func Sdr() TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference</a>

---

##### `BitrateBpsInput`<sup>Optional</sup> <a name="BitrateBpsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBpsInput"></a>

```go
func BitrateBpsInput() *f64
```

- *Type:* *f64

---

##### `CrfLevelInput`<sup>Optional</sup> <a name="CrfLevelInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevelInput"></a>

```go
func CrfLevelInput() *f64
```

- *Type:* *f64

---

##### `EntropyCoderInput`<sup>Optional</sup> <a name="EntropyCoderInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoderInput"></a>

```go
func EntropyCoderInput() *string
```

- *Type:* *string

---

##### `FrameRateInput`<sup>Optional</sup> <a name="FrameRateInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRateInput"></a>

```go
func FrameRateInput() *f64
```

- *Type:* *f64

---

##### `GopDurationInput`<sup>Optional</sup> <a name="GopDurationInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDurationInput"></a>

```go
func GopDurationInput() *string
```

- *Type:* *string

---

##### `HeightPixelsInput`<sup>Optional</sup> <a name="HeightPixelsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixelsInput"></a>

```go
func HeightPixelsInput() *f64
```

- *Type:* *f64

---

##### `HlgInput`<sup>Optional</sup> <a name="HlgInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.hlgInput"></a>

```go
func HlgInput() TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a>

---

##### `PixelFormatInput`<sup>Optional</sup> <a name="PixelFormatInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormatInput"></a>

```go
func PixelFormatInput() *string
```

- *Type:* *string

---

##### `PresetInput`<sup>Optional</sup> <a name="PresetInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.presetInput"></a>

```go
func PresetInput() *string
```

- *Type:* *string

---

##### `ProfileInput`<sup>Optional</sup> <a name="ProfileInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.profileInput"></a>

```go
func ProfileInput() *string
```

- *Type:* *string

---

##### `RateControlModeInput`<sup>Optional</sup> <a name="RateControlModeInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlModeInput"></a>

```go
func RateControlModeInput() *string
```

- *Type:* *string

---

##### `SdrInput`<sup>Optional</sup> <a name="SdrInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.sdrInput"></a>

```go
func SdrInput() TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a>

---

##### `VbvFullnessBitsInput`<sup>Optional</sup> <a name="VbvFullnessBitsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBitsInput"></a>

```go
func VbvFullnessBitsInput() *f64
```

- *Type:* *f64

---

##### `VbvSizeBitsInput`<sup>Optional</sup> <a name="VbvSizeBitsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBitsInput"></a>

```go
func VbvSizeBitsInput() *f64
```

- *Type:* *f64

---

##### `WidthPixelsInput`<sup>Optional</sup> <a name="WidthPixelsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixelsInput"></a>

```go
func WidthPixelsInput() *f64
```

- *Type:* *f64

---

##### `BitrateBps`<sup>Required</sup> <a name="BitrateBps" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBps"></a>

```go
func BitrateBps() *f64
```

- *Type:* *f64

---

##### `CrfLevel`<sup>Required</sup> <a name="CrfLevel" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevel"></a>

```go
func CrfLevel() *f64
```

- *Type:* *f64

---

##### `EntropyCoder`<sup>Required</sup> <a name="EntropyCoder" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoder"></a>

```go
func EntropyCoder() *string
```

- *Type:* *string

---

##### `FrameRate`<sup>Required</sup> <a name="FrameRate" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRate"></a>

```go
func FrameRate() *f64
```

- *Type:* *f64

---

##### `GopDuration`<sup>Required</sup> <a name="GopDuration" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDuration"></a>

```go
func GopDuration() *string
```

- *Type:* *string

---

##### `HeightPixels`<sup>Required</sup> <a name="HeightPixels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixels"></a>

```go
func HeightPixels() *f64
```

- *Type:* *f64

---

##### `PixelFormat`<sup>Required</sup> <a name="PixelFormat" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormat"></a>

```go
func PixelFormat() *string
```

- *Type:* *string

---

##### `Preset`<sup>Required</sup> <a name="Preset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.preset"></a>

```go
func Preset() *string
```

- *Type:* *string

---

##### `Profile`<sup>Required</sup> <a name="Profile" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.profile"></a>

```go
func Profile() *string
```

- *Type:* *string

---

##### `RateControlMode`<sup>Required</sup> <a name="RateControlMode" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlMode"></a>

```go
func RateControlMode() *string
```

- *Type:* *string

---

##### `VbvFullnessBits`<sup>Required</sup> <a name="VbvFullnessBits" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBits"></a>

```go
func VbvFullnessBits() *f64
```

- *Type:* *f64

---

##### `VbvSizeBits`<sup>Required</sup> <a name="VbvSizeBits" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBits"></a>

```go
func VbvSizeBits() *f64
```

- *Type:* *f64

---

##### `WidthPixels`<sup>Required</sup> <a name="WidthPixels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixels"></a>

```go
func WidthPixels() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a>

---


### TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference <a name="TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.NewTranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a>

---


### TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference <a name="TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.NewTranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.putH264">PutH264</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.resetH264">ResetH264</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutH264` <a name="PutH264" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.putH264"></a>

```go
func PutH264(value TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a>

---

##### `ResetH264` <a name="ResetH264" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.resetH264"></a>

```go
func ResetH264()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.h264">H264</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.h264Input">H264Input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream">TranscoderJobTemplateConfigElementaryStreamsVideoStream</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `H264`<sup>Required</sup> <a name="H264" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.h264"></a>

```go
func H264() TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference</a>

---

##### `H264Input`<sup>Optional</sup> <a name="H264Input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.h264Input"></a>

```go
func H264Input() TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobTemplateConfigElementaryStreamsVideoStream
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream">TranscoderJobTemplateConfigElementaryStreamsVideoStream</a>

---


### TranscoderJobTemplateConfigEncryptionsAes128OutputReference <a name="TranscoderJobTemplateConfigEncryptionsAes128OutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.NewTranscoderJobTemplateConfigEncryptionsAes128OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobTemplateConfigEncryptionsAes128OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128">TranscoderJobTemplateConfigEncryptionsAes128</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobTemplateConfigEncryptionsAes128
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128">TranscoderJobTemplateConfigEncryptionsAes128</a>

---


### TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference <a name="TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.NewTranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a>

---


### TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference <a name="TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.NewTranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a>

---


### TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference <a name="TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.NewTranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putClearkey">PutClearkey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putFairplay">PutFairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putPlayready">PutPlayready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putWidevine">PutWidevine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetClearkey">ResetClearkey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetFairplay">ResetFairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetPlayready">ResetPlayready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetWidevine">ResetWidevine</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClearkey` <a name="PutClearkey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putClearkey"></a>

```go
func PutClearkey(value TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putClearkey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a>

---

##### `PutFairplay` <a name="PutFairplay" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putFairplay"></a>

```go
func PutFairplay(value TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putFairplay.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a>

---

##### `PutPlayready` <a name="PutPlayready" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putPlayready"></a>

```go
func PutPlayready(value TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putPlayready.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a>

---

##### `PutWidevine` <a name="PutWidevine" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putWidevine"></a>

```go
func PutWidevine(value TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putWidevine.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a>

---

##### `ResetClearkey` <a name="ResetClearkey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetClearkey"></a>

```go
func ResetClearkey()
```

##### `ResetFairplay` <a name="ResetFairplay" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetFairplay"></a>

```go
func ResetFairplay()
```

##### `ResetPlayready` <a name="ResetPlayready" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetPlayready"></a>

```go
func ResetPlayready()
```

##### `ResetWidevine` <a name="ResetWidevine" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetWidevine"></a>

```go
func ResetWidevine()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.clearkey">Clearkey</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference">TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.fairplay">Fairplay</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference">TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.playready">Playready</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference">TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.widevine">Widevine</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference">TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.clearkeyInput">ClearkeyInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.fairplayInput">FairplayInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.playreadyInput">PlayreadyInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.widevineInput">WidevineInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems">TranscoderJobTemplateConfigEncryptionsDrmSystems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Clearkey`<sup>Required</sup> <a name="Clearkey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.clearkey"></a>

```go
func Clearkey() TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference">TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference</a>

---

##### `Fairplay`<sup>Required</sup> <a name="Fairplay" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.fairplay"></a>

```go
func Fairplay() TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference">TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference</a>

---

##### `Playready`<sup>Required</sup> <a name="Playready" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.playready"></a>

```go
func Playready() TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference">TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference</a>

---

##### `Widevine`<sup>Required</sup> <a name="Widevine" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.widevine"></a>

```go
func Widevine() TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference">TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference</a>

---

##### `ClearkeyInput`<sup>Optional</sup> <a name="ClearkeyInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.clearkeyInput"></a>

```go
func ClearkeyInput() TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a>

---

##### `FairplayInput`<sup>Optional</sup> <a name="FairplayInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.fairplayInput"></a>

```go
func FairplayInput() TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a>

---

##### `PlayreadyInput`<sup>Optional</sup> <a name="PlayreadyInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.playreadyInput"></a>

```go
func PlayreadyInput() TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a>

---

##### `WidevineInput`<sup>Optional</sup> <a name="WidevineInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.widevineInput"></a>

```go
func WidevineInput() TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobTemplateConfigEncryptionsDrmSystems
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems">TranscoderJobTemplateConfigEncryptionsDrmSystems</a>

---


### TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference <a name="TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.NewTranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a>

---


### TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference <a name="TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.NewTranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a>

---


### TranscoderJobTemplateConfigEncryptionsList <a name="TranscoderJobTemplateConfigEncryptionsList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.NewTranscoderJobTemplateConfigEncryptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TranscoderJobTemplateConfigEncryptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.get"></a>

```go
func Get(index *f64) TranscoderJobTemplateConfigEncryptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference <a name="TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.NewTranscoderJobTemplateConfigEncryptionsMpegCencOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.schemeInput">SchemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.scheme">Scheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc">TranscoderJobTemplateConfigEncryptionsMpegCenc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.schemeInput"></a>

```go
func SchemeInput() *string
```

- *Type:* *string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.scheme"></a>

```go
func Scheme() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobTemplateConfigEncryptionsMpegCenc
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc">TranscoderJobTemplateConfigEncryptionsMpegCenc</a>

---


### TranscoderJobTemplateConfigEncryptionsOutputReference <a name="TranscoderJobTemplateConfigEncryptionsOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.NewTranscoderJobTemplateConfigEncryptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TranscoderJobTemplateConfigEncryptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putAes128">PutAes128</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putDrmSystems">PutDrmSystems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putMpegCenc">PutMpegCenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putSampleAes">PutSampleAes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putSecretManagerKeySource">PutSecretManagerKeySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resetAes128">ResetAes128</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resetDrmSystems">ResetDrmSystems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resetMpegCenc">ResetMpegCenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resetSampleAes">ResetSampleAes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resetSecretManagerKeySource">ResetSecretManagerKeySource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAes128` <a name="PutAes128" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putAes128"></a>

```go
func PutAes128(value TranscoderJobTemplateConfigEncryptionsAes128)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putAes128.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128">TranscoderJobTemplateConfigEncryptionsAes128</a>

---

##### `PutDrmSystems` <a name="PutDrmSystems" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putDrmSystems"></a>

```go
func PutDrmSystems(value TranscoderJobTemplateConfigEncryptionsDrmSystems)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putDrmSystems.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems">TranscoderJobTemplateConfigEncryptionsDrmSystems</a>

---

##### `PutMpegCenc` <a name="PutMpegCenc" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putMpegCenc"></a>

```go
func PutMpegCenc(value TranscoderJobTemplateConfigEncryptionsMpegCenc)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putMpegCenc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc">TranscoderJobTemplateConfigEncryptionsMpegCenc</a>

---

##### `PutSampleAes` <a name="PutSampleAes" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putSampleAes"></a>

```go
func PutSampleAes(value TranscoderJobTemplateConfigEncryptionsSampleAes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putSampleAes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAes">TranscoderJobTemplateConfigEncryptionsSampleAes</a>

---

##### `PutSecretManagerKeySource` <a name="PutSecretManagerKeySource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putSecretManagerKeySource"></a>

```go
func PutSecretManagerKeySource(value TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putSecretManagerKeySource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource">TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource</a>

---

##### `ResetAes128` <a name="ResetAes128" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resetAes128"></a>

```go
func ResetAes128()
```

##### `ResetDrmSystems` <a name="ResetDrmSystems" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resetDrmSystems"></a>

```go
func ResetDrmSystems()
```

##### `ResetMpegCenc` <a name="ResetMpegCenc" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resetMpegCenc"></a>

```go
func ResetMpegCenc()
```

##### `ResetSampleAes` <a name="ResetSampleAes" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resetSampleAes"></a>

```go
func ResetSampleAes()
```

##### `ResetSecretManagerKeySource` <a name="ResetSecretManagerKeySource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resetSecretManagerKeySource"></a>

```go
func ResetSecretManagerKeySource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.aes128">Aes128</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference">TranscoderJobTemplateConfigEncryptionsAes128OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.drmSystems">DrmSystems</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference">TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.mpegCenc">MpegCenc</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference">TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.sampleAes">SampleAes</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference">TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.secretManagerKeySource">SecretManagerKeySource</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference">TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.aes128Input">Aes128Input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128">TranscoderJobTemplateConfigEncryptionsAes128</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.drmSystemsInput">DrmSystemsInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems">TranscoderJobTemplateConfigEncryptionsDrmSystems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.mpegCencInput">MpegCencInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc">TranscoderJobTemplateConfigEncryptionsMpegCenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.sampleAesInput">SampleAesInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAes">TranscoderJobTemplateConfigEncryptionsSampleAes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.secretManagerKeySourceInput">SecretManagerKeySourceInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource">TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Aes128`<sup>Required</sup> <a name="Aes128" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.aes128"></a>

```go
func Aes128() TranscoderJobTemplateConfigEncryptionsAes128OutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference">TranscoderJobTemplateConfigEncryptionsAes128OutputReference</a>

---

##### `DrmSystems`<sup>Required</sup> <a name="DrmSystems" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.drmSystems"></a>

```go
func DrmSystems() TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference">TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference</a>

---

##### `MpegCenc`<sup>Required</sup> <a name="MpegCenc" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.mpegCenc"></a>

```go
func MpegCenc() TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference">TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference</a>

---

##### `SampleAes`<sup>Required</sup> <a name="SampleAes" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.sampleAes"></a>

```go
func SampleAes() TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference">TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference</a>

---

##### `SecretManagerKeySource`<sup>Required</sup> <a name="SecretManagerKeySource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.secretManagerKeySource"></a>

```go
func SecretManagerKeySource() TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference">TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference</a>

---

##### `Aes128Input`<sup>Optional</sup> <a name="Aes128Input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.aes128Input"></a>

```go
func Aes128Input() TranscoderJobTemplateConfigEncryptionsAes128
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128">TranscoderJobTemplateConfigEncryptionsAes128</a>

---

##### `DrmSystemsInput`<sup>Optional</sup> <a name="DrmSystemsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.drmSystemsInput"></a>

```go
func DrmSystemsInput() TranscoderJobTemplateConfigEncryptionsDrmSystems
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems">TranscoderJobTemplateConfigEncryptionsDrmSystems</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MpegCencInput`<sup>Optional</sup> <a name="MpegCencInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.mpegCencInput"></a>

```go
func MpegCencInput() TranscoderJobTemplateConfigEncryptionsMpegCenc
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc">TranscoderJobTemplateConfigEncryptionsMpegCenc</a>

---

##### `SampleAesInput`<sup>Optional</sup> <a name="SampleAesInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.sampleAesInput"></a>

```go
func SampleAesInput() TranscoderJobTemplateConfigEncryptionsSampleAes
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAes">TranscoderJobTemplateConfigEncryptionsSampleAes</a>

---

##### `SecretManagerKeySourceInput`<sup>Optional</sup> <a name="SecretManagerKeySourceInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.secretManagerKeySourceInput"></a>

```go
func SecretManagerKeySourceInput() TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource">TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference <a name="TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.NewTranscoderJobTemplateConfigEncryptionsSampleAesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAes">TranscoderJobTemplateConfigEncryptionsSampleAes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobTemplateConfigEncryptionsSampleAes
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAes">TranscoderJobTemplateConfigEncryptionsSampleAes</a>

---


### TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference <a name="TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.NewTranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersionInput">SecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersion">SecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource">TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretVersionInput`<sup>Optional</sup> <a name="SecretVersionInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersionInput"></a>

```go
func SecretVersionInput() *string
```

- *Type:* *string

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersion"></a>

```go
func SecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource">TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource</a>

---


### TranscoderJobTemplateConfigInputsList <a name="TranscoderJobTemplateConfigInputsList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.NewTranscoderJobTemplateConfigInputsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TranscoderJobTemplateConfigInputsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.get"></a>

```go
func Get(index *f64) TranscoderJobTemplateConfigInputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscoderJobTemplateConfigInputsOutputReference <a name="TranscoderJobTemplateConfigInputsOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.NewTranscoderJobTemplateConfigInputsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TranscoderJobTemplateConfigInputsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.resetUri"></a>

```go
func ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscoderJobTemplateConfigManifestsList <a name="TranscoderJobTemplateConfigManifestsList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.NewTranscoderJobTemplateConfigManifestsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TranscoderJobTemplateConfigManifestsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.get"></a>

```go
func Get(index *f64) TranscoderJobTemplateConfigManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscoderJobTemplateConfigManifestsOutputReference <a name="TranscoderJobTemplateConfigManifestsOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.NewTranscoderJobTemplateConfigManifestsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TranscoderJobTemplateConfigManifestsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.resetFileName">ResetFileName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.resetMuxStreams">ResetMuxStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFileName` <a name="ResetFileName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.resetFileName"></a>

```go
func ResetFileName()
```

##### `ResetMuxStreams` <a name="ResetMuxStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.resetMuxStreams"></a>

```go
func ResetMuxStreams()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.fileNameInput">FileNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.muxStreamsInput">MuxStreamsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.fileName">FileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.muxStreams">MuxStreams</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileNameInput`<sup>Optional</sup> <a name="FileNameInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.fileNameInput"></a>

```go
func FileNameInput() *string
```

- *Type:* *string

---

##### `MuxStreamsInput`<sup>Optional</sup> <a name="MuxStreamsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.muxStreamsInput"></a>

```go
func MuxStreamsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.fileName"></a>

```go
func FileName() *string
```

- *Type:* *string

---

##### `MuxStreams`<sup>Required</sup> <a name="MuxStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.muxStreams"></a>

```go
func MuxStreams() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscoderJobTemplateConfigMuxStreamsList <a name="TranscoderJobTemplateConfigMuxStreamsList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.NewTranscoderJobTemplateConfigMuxStreamsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TranscoderJobTemplateConfigMuxStreamsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.get"></a>

```go
func Get(index *f64) TranscoderJobTemplateConfigMuxStreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscoderJobTemplateConfigMuxStreamsOutputReference <a name="TranscoderJobTemplateConfigMuxStreamsOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.NewTranscoderJobTemplateConfigMuxStreamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TranscoderJobTemplateConfigMuxStreamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.putSegmentSettings">PutSegmentSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetContainer">ResetContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetElementaryStreams">ResetElementaryStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetEncryptionId">ResetEncryptionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetFileName">ResetFileName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetSegmentSettings">ResetSegmentSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSegmentSettings` <a name="PutSegmentSettings" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.putSegmentSettings"></a>

```go
func PutSegmentSettings(value TranscoderJobTemplateConfigMuxStreamsSegmentSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.putSegmentSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings">TranscoderJobTemplateConfigMuxStreamsSegmentSettings</a>

---

##### `ResetContainer` <a name="ResetContainer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetContainer"></a>

```go
func ResetContainer()
```

##### `ResetElementaryStreams` <a name="ResetElementaryStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetElementaryStreams"></a>

```go
func ResetElementaryStreams()
```

##### `ResetEncryptionId` <a name="ResetEncryptionId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetEncryptionId"></a>

```go
func ResetEncryptionId()
```

##### `ResetFileName` <a name="ResetFileName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetFileName"></a>

```go
func ResetFileName()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetSegmentSettings` <a name="ResetSegmentSettings" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetSegmentSettings"></a>

```go
func ResetSegmentSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.segmentSettings">SegmentSettings</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference">TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.containerInput">ContainerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.elementaryStreamsInput">ElementaryStreamsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.encryptionIdInput">EncryptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.fileNameInput">FileNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.segmentSettingsInput">SegmentSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings">TranscoderJobTemplateConfigMuxStreamsSegmentSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.container">Container</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.elementaryStreams">ElementaryStreams</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.encryptionId">EncryptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.fileName">FileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SegmentSettings`<sup>Required</sup> <a name="SegmentSettings" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.segmentSettings"></a>

```go
func SegmentSettings() TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference">TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference</a>

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.containerInput"></a>

```go
func ContainerInput() *string
```

- *Type:* *string

---

##### `ElementaryStreamsInput`<sup>Optional</sup> <a name="ElementaryStreamsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.elementaryStreamsInput"></a>

```go
func ElementaryStreamsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EncryptionIdInput`<sup>Optional</sup> <a name="EncryptionIdInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.encryptionIdInput"></a>

```go
func EncryptionIdInput() *string
```

- *Type:* *string

---

##### `FileNameInput`<sup>Optional</sup> <a name="FileNameInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.fileNameInput"></a>

```go
func FileNameInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `SegmentSettingsInput`<sup>Optional</sup> <a name="SegmentSettingsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.segmentSettingsInput"></a>

```go
func SegmentSettingsInput() TranscoderJobTemplateConfigMuxStreamsSegmentSettings
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings">TranscoderJobTemplateConfigMuxStreamsSegmentSettings</a>

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.container"></a>

```go
func Container() *string
```

- *Type:* *string

---

##### `ElementaryStreams`<sup>Required</sup> <a name="ElementaryStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.elementaryStreams"></a>

```go
func ElementaryStreams() *[]*string
```

- *Type:* *[]*string

---

##### `EncryptionId`<sup>Required</sup> <a name="EncryptionId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.encryptionId"></a>

```go
func EncryptionId() *string
```

- *Type:* *string

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.fileName"></a>

```go
func FileName() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference <a name="TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.NewTranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.resetSegmentDuration">ResetSegmentDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSegmentDuration` <a name="ResetSegmentDuration" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.resetSegmentDuration"></a>

```go
func ResetSegmentDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDurationInput">SegmentDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDuration">SegmentDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings">TranscoderJobTemplateConfigMuxStreamsSegmentSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SegmentDurationInput`<sup>Optional</sup> <a name="SegmentDurationInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDurationInput"></a>

```go
func SegmentDurationInput() *string
```

- *Type:* *string

---

##### `SegmentDuration`<sup>Required</sup> <a name="SegmentDuration" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDuration"></a>

```go
func SegmentDuration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobTemplateConfigMuxStreamsSegmentSettings
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings">TranscoderJobTemplateConfigMuxStreamsSegmentSettings</a>

---


### TranscoderJobTemplateConfigOutputOutputReference <a name="TranscoderJobTemplateConfigOutputOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.NewTranscoderJobTemplateConfigOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobTemplateConfigOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.resetUri"></a>

```go
func ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput">TranscoderJobTemplateConfigOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobTemplateConfigOutput
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput">TranscoderJobTemplateConfigOutput</a>

---


### TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference <a name="TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.NewTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.putXy">PutXy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resetEndTimeOffset">ResetEndTimeOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resetStartTimeOffset">ResetStartTimeOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resetXy">ResetXy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutXy` <a name="PutXy" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.putXy"></a>

```go
func PutXy(value TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.putXy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a>

---

##### `ResetEndTimeOffset` <a name="ResetEndTimeOffset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resetEndTimeOffset"></a>

```go
func ResetEndTimeOffset()
```

##### `ResetStartTimeOffset` <a name="ResetStartTimeOffset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resetStartTimeOffset"></a>

```go
func ResetStartTimeOffset()
```

##### `ResetXy` <a name="ResetXy" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resetXy"></a>

```go
func ResetXy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.xy">Xy</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffsetInput">EndTimeOffsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeTypeInput">FadeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffsetInput">StartTimeOffsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.xyInput">XyInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffset">EndTimeOffset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeType">FadeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffset">StartTimeOffset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Xy`<sup>Required</sup> <a name="Xy" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.xy"></a>

```go
func Xy() TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference</a>

---

##### `EndTimeOffsetInput`<sup>Optional</sup> <a name="EndTimeOffsetInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffsetInput"></a>

```go
func EndTimeOffsetInput() *string
```

- *Type:* *string

---

##### `FadeTypeInput`<sup>Optional</sup> <a name="FadeTypeInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeTypeInput"></a>

```go
func FadeTypeInput() *string
```

- *Type:* *string

---

##### `StartTimeOffsetInput`<sup>Optional</sup> <a name="StartTimeOffsetInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffsetInput"></a>

```go
func StartTimeOffsetInput() *string
```

- *Type:* *string

---

##### `XyInput`<sup>Optional</sup> <a name="XyInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.xyInput"></a>

```go
func XyInput() TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a>

---

##### `EndTimeOffset`<sup>Required</sup> <a name="EndTimeOffset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffset"></a>

```go
func EndTimeOffset() *string
```

- *Type:* *string

---

##### `FadeType`<sup>Required</sup> <a name="FadeType" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeType"></a>

```go
func FadeType() *string
```

- *Type:* *string

---

##### `StartTimeOffset`<sup>Required</sup> <a name="StartTimeOffset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffset"></a>

```go
func StartTimeOffset() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade</a>

---


### TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference <a name="TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.NewTranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetX">ResetX</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetY">ResetY</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetX` <a name="ResetX" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetX"></a>

```go
func ResetX()
```

##### `ResetY` <a name="ResetY" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetY"></a>

```go
func ResetY()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.xInput">XInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.yInput">YInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.x">X</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.y">Y</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `XInput`<sup>Optional</sup> <a name="XInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.xInput"></a>

```go
func XInput() *f64
```

- *Type:* *f64

---

##### `YInput`<sup>Optional</sup> <a name="YInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.yInput"></a>

```go
func YInput() *f64
```

- *Type:* *f64

---

##### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.x"></a>

```go
func X() *f64
```

- *Type:* *f64

---

##### `Y`<sup>Required</sup> <a name="Y" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.y"></a>

```go
func Y() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a>

---


### TranscoderJobTemplateConfigOverlaysAnimationsList <a name="TranscoderJobTemplateConfigOverlaysAnimationsList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.NewTranscoderJobTemplateConfigOverlaysAnimationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TranscoderJobTemplateConfigOverlaysAnimationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.get"></a>

```go
func Get(index *f64) TranscoderJobTemplateConfigOverlaysAnimationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscoderJobTemplateConfigOverlaysAnimationsOutputReference <a name="TranscoderJobTemplateConfigOverlaysAnimationsOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.NewTranscoderJobTemplateConfigOverlaysAnimationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TranscoderJobTemplateConfigOverlaysAnimationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.putAnimationFade">PutAnimationFade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.resetAnimationFade">ResetAnimationFade</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnimationFade` <a name="PutAnimationFade" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.putAnimationFade"></a>

```go
func PutAnimationFade(value TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.putAnimationFade.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade</a>

---

##### `ResetAnimationFade` <a name="ResetAnimationFade" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.resetAnimationFade"></a>

```go
func ResetAnimationFade()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.animationFade">AnimationFade</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.animationFadeInput">AnimationFadeInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AnimationFade`<sup>Required</sup> <a name="AnimationFade" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.animationFade"></a>

```go
func AnimationFade() TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference</a>

---

##### `AnimationFadeInput`<sup>Optional</sup> <a name="AnimationFadeInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.animationFadeInput"></a>

```go
func AnimationFadeInput() TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscoderJobTemplateConfigOverlaysImageOutputReference <a name="TranscoderJobTemplateConfigOverlaysImageOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.NewTranscoderJobTemplateConfigOverlaysImageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobTemplateConfigOverlaysImageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage">TranscoderJobTemplateConfigOverlaysImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobTemplateConfigOverlaysImage
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage">TranscoderJobTemplateConfigOverlaysImage</a>

---


### TranscoderJobTemplateConfigOverlaysList <a name="TranscoderJobTemplateConfigOverlaysList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.NewTranscoderJobTemplateConfigOverlaysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TranscoderJobTemplateConfigOverlaysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.get"></a>

```go
func Get(index *f64) TranscoderJobTemplateConfigOverlaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscoderJobTemplateConfigOverlaysOutputReference <a name="TranscoderJobTemplateConfigOverlaysOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.NewTranscoderJobTemplateConfigOverlaysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TranscoderJobTemplateConfigOverlaysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.putAnimations">PutAnimations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.putImage">PutImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.resetAnimations">ResetAnimations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.resetImage">ResetImage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnimations` <a name="PutAnimations" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.putAnimations"></a>

```go
func PutAnimations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.putAnimations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutImage` <a name="PutImage" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.putImage"></a>

```go
func PutImage(value TranscoderJobTemplateConfigOverlaysImage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.putImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage">TranscoderJobTemplateConfigOverlaysImage</a>

---

##### `ResetAnimations` <a name="ResetAnimations" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.resetAnimations"></a>

```go
func ResetAnimations()
```

##### `ResetImage` <a name="ResetImage" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.resetImage"></a>

```go
func ResetImage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.animations">Animations</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList">TranscoderJobTemplateConfigOverlaysAnimationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.image">Image</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference">TranscoderJobTemplateConfigOverlaysImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.animationsInput">AnimationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.imageInput">ImageInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage">TranscoderJobTemplateConfigOverlaysImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Animations`<sup>Required</sup> <a name="Animations" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.animations"></a>

```go
func Animations() TranscoderJobTemplateConfigOverlaysAnimationsList
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList">TranscoderJobTemplateConfigOverlaysAnimationsList</a>

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.image"></a>

```go
func Image() TranscoderJobTemplateConfigOverlaysImageOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference">TranscoderJobTemplateConfigOverlaysImageOutputReference</a>

---

##### `AnimationsInput`<sup>Optional</sup> <a name="AnimationsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.animationsInput"></a>

```go
func AnimationsInput() interface{}
```

- *Type:* interface{}

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.imageInput"></a>

```go
func ImageInput() TranscoderJobTemplateConfigOverlaysImage
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage">TranscoderJobTemplateConfigOverlaysImage</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TranscoderJobTemplateConfigPubsubDestinationOutputReference <a name="TranscoderJobTemplateConfigPubsubDestinationOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.NewTranscoderJobTemplateConfigPubsubDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobTemplateConfigPubsubDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.resetTopic">ResetTopic</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTopic` <a name="ResetTopic" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.resetTopic"></a>

```go
func ResetTopic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.property.topicInput">TopicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.property.topic">Topic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination">TranscoderJobTemplateConfigPubsubDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.property.topicInput"></a>

```go
func TopicInput() *string
```

- *Type:* *string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.property.topic"></a>

```go
func Topic() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() TranscoderJobTemplateConfigPubsubDestination
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination">TranscoderJobTemplateConfigPubsubDestination</a>

---


### TranscoderJobTemplateTimeoutsOutputReference <a name="TranscoderJobTemplateTimeoutsOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/transcoderjobtemplate"

transcoderjobtemplate.NewTranscoderJobTemplateTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscoderJobTemplateTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



