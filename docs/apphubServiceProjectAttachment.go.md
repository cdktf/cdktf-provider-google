# `apphubServiceProjectAttachment` Submodule <a name="`apphubServiceProjectAttachment` Submodule" id="@cdktf/provider-google.apphubServiceProjectAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApphubServiceProjectAttachment <a name="ApphubServiceProjectAttachment" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/apphub_service_project_attachment google_apphub_service_project_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apphubserviceprojectattachment"

apphubserviceprojectattachment.NewApphubServiceProjectAttachment(scope Construct, id *string, config ApphubServiceProjectAttachmentConfig) ApphubServiceProjectAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentConfig">ApphubServiceProjectAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentConfig">ApphubServiceProjectAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.resetServiceProject">ResetServiceProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.putTimeouts"></a>

```go
func PutTimeouts(value ApphubServiceProjectAttachmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeouts">ApphubServiceProjectAttachmentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.resetProject"></a>

```go
func ResetProject()
```

##### `ResetServiceProject` <a name="ResetServiceProject" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.resetServiceProject"></a>

```go
func ResetServiceProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApphubServiceProjectAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apphubserviceprojectattachment"

apphubserviceprojectattachment.ApphubServiceProjectAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apphubserviceprojectattachment"

apphubserviceprojectattachment.ApphubServiceProjectAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apphubserviceprojectattachment"

apphubserviceprojectattachment.ApphubServiceProjectAttachment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apphubserviceprojectattachment"

apphubserviceprojectattachment.ApphubServiceProjectAttachment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApphubServiceProjectAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApphubServiceProjectAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApphubServiceProjectAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/apphub_service_project_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApphubServiceProjectAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference">ApphubServiceProjectAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.serviceProjectAttachmentIdInput">ServiceProjectAttachmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.serviceProjectInput">ServiceProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.serviceProject">ServiceProject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.serviceProjectAttachmentId">ServiceProjectAttachmentId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.timeouts"></a>

```go
func Timeouts() ApphubServiceProjectAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference">ApphubServiceProjectAttachmentTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ServiceProjectAttachmentIdInput`<sup>Optional</sup> <a name="ServiceProjectAttachmentIdInput" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.serviceProjectAttachmentIdInput"></a>

```go
func ServiceProjectAttachmentIdInput() *string
```

- *Type:* *string

---

##### `ServiceProjectInput`<sup>Optional</sup> <a name="ServiceProjectInput" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.serviceProjectInput"></a>

```go
func ServiceProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ServiceProject`<sup>Required</sup> <a name="ServiceProject" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.serviceProject"></a>

```go
func ServiceProject() *string
```

- *Type:* *string

---

##### `ServiceProjectAttachmentId`<sup>Required</sup> <a name="ServiceProjectAttachmentId" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.serviceProjectAttachmentId"></a>

```go
func ServiceProjectAttachmentId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApphubServiceProjectAttachmentConfig <a name="ApphubServiceProjectAttachmentConfig" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apphubserviceprojectattachment"

&apphubserviceprojectattachment.ApphubServiceProjectAttachmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ServiceProjectAttachmentId: *string,
	Id: *string,
	Project: *string,
	ServiceProject: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentConfig.property.serviceProjectAttachmentId">ServiceProjectAttachmentId</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/apphub_service_project_attachment#id ApphubServiceProjectAttachment#id}. |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/apphub_service_project_attachment#project ApphubServiceProjectAttachment#project}. |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentConfig.property.serviceProject">ServiceProject</a></code> | <code>*string</code> | "Immutable. |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeouts">ApphubServiceProjectAttachmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ServiceProjectAttachmentId`<sup>Required</sup> <a name="ServiceProjectAttachmentId" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentConfig.property.serviceProjectAttachmentId"></a>

```go
ServiceProjectAttachmentId *string
```

- *Type:* *string

Required.

The service project attachment identifier must contain the project_id of the service project specified in the service_project_attachment.service_project field. Hint: "projects/{project_id}"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/apphub_service_project_attachment#service_project_attachment_id ApphubServiceProjectAttachment#service_project_attachment_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/apphub_service_project_attachment#id ApphubServiceProjectAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/apphub_service_project_attachment#project ApphubServiceProjectAttachment#project}.

---

##### `ServiceProject`<sup>Optional</sup> <a name="ServiceProject" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentConfig.property.serviceProject"></a>

```go
ServiceProject *string
```

- *Type:* *string

"Immutable.

Service project name in the format: "projects/abc"
or "projects/123". As input, project name with either project id or number
are accepted. As output, this field will contain project number. "

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/apphub_service_project_attachment#service_project ApphubServiceProjectAttachment#service_project}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentConfig.property.timeouts"></a>

```go
Timeouts ApphubServiceProjectAttachmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeouts">ApphubServiceProjectAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/apphub_service_project_attachment#timeouts ApphubServiceProjectAttachment#timeouts}

---

### ApphubServiceProjectAttachmentTimeouts <a name="ApphubServiceProjectAttachmentTimeouts" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apphubserviceprojectattachment"

&apphubserviceprojectattachment.ApphubServiceProjectAttachmentTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/apphub_service_project_attachment#create ApphubServiceProjectAttachment#create}. |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/apphub_service_project_attachment#delete ApphubServiceProjectAttachment#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/apphub_service_project_attachment#create ApphubServiceProjectAttachment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/apphub_service_project_attachment#delete ApphubServiceProjectAttachment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApphubServiceProjectAttachmentTimeoutsOutputReference <a name="ApphubServiceProjectAttachmentTimeoutsOutputReference" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apphubserviceprojectattachment"

apphubserviceprojectattachment.NewApphubServiceProjectAttachmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApphubServiceProjectAttachmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apphubServiceProjectAttachment.ApphubServiceProjectAttachmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



