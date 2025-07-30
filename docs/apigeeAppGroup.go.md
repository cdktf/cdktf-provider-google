# `apigeeAppGroup` Submodule <a name="`apigeeAppGroup` Submodule" id="@cdktf/provider-google.apigeeAppGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeAppGroup <a name="ApigeeAppGroup" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apigee_app_group google_apigee_app_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeeappgroup"

apigeeappgroup.NewApigeeAppGroup(scope Construct, id *string, config ApigeeAppGroupConfig) ApigeeAppGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig">ApigeeAppGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig">ApigeeAppGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.putAttributes">PutAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.resetChannelId">ResetChannelId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.resetChannelUri">ResetChannelUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAttributes` <a name="PutAttributes" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.putAttributes"></a>

```go
func PutAttributes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.putAttributes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.putTimeouts"></a>

```go
func PutTimeouts(value ApigeeAppGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeouts">ApigeeAppGroupTimeouts</a>

---

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.resetAttributes"></a>

```go
func ResetAttributes()
```

##### `ResetChannelId` <a name="ResetChannelId" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.resetChannelId"></a>

```go
func ResetChannelId()
```

##### `ResetChannelUri` <a name="ResetChannelUri" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.resetChannelUri"></a>

```go
func ResetChannelUri()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApigeeAppGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeeappgroup"

apigeeappgroup.ApigeeAppGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeeappgroup"

apigeeappgroup.ApigeeAppGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeeappgroup"

apigeeappgroup.ApigeeAppGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeeappgroup"

apigeeappgroup.ApigeeAppGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApigeeAppGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApigeeAppGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApigeeAppGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apigee_app_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeAppGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.appGroupId">AppGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.attributes">Attributes</a></code> | <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList">ApigeeAppGroupAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.lastModifiedAt">LastModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference">ApigeeAppGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.attributesInput">AttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.channelIdInput">ChannelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.channelUriInput">ChannelUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.orgIdInput">OrgIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.channelId">ChannelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.channelUri">ChannelUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.orgId">OrgId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.status">Status</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppGroupId`<sup>Required</sup> <a name="AppGroupId" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.appGroupId"></a>

```go
func AppGroupId() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.attributes"></a>

```go
func Attributes() ApigeeAppGroupAttributesList
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList">ApigeeAppGroupAttributesList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `LastModifiedAt`<sup>Required</sup> <a name="LastModifiedAt" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.lastModifiedAt"></a>

```go
func LastModifiedAt() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.timeouts"></a>

```go
func Timeouts() ApigeeAppGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference">ApigeeAppGroupTimeoutsOutputReference</a>

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.attributesInput"></a>

```go
func AttributesInput() interface{}
```

- *Type:* interface{}

---

##### `ChannelIdInput`<sup>Optional</sup> <a name="ChannelIdInput" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.channelIdInput"></a>

```go
func ChannelIdInput() *string
```

- *Type:* *string

---

##### `ChannelUriInput`<sup>Optional</sup> <a name="ChannelUriInput" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.channelUriInput"></a>

```go
func ChannelUriInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.orgIdInput"></a>

```go
func OrgIdInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ChannelId`<sup>Required</sup> <a name="ChannelId" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.channelId"></a>

```go
func ChannelId() *string
```

- *Type:* *string

---

##### `ChannelUri`<sup>Required</sup> <a name="ChannelUri" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.channelUri"></a>

```go
func ChannelUri() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.orgId"></a>

```go
func OrgId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeAppGroupAttributes <a name="ApigeeAppGroupAttributes" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeeappgroup"

&apigeeappgroup.ApigeeAppGroupAttributes {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributes.property.name">Name</a></code> | <code>*string</code> | Key of the attribute. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributes.property.value">Value</a></code> | <code>*string</code> | Value of the attribute. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributes.property.name"></a>

```go
Name *string
```

- *Type:* *string

Key of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apigee_app_group#name ApigeeAppGroup#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributes.property.value"></a>

```go
Value *string
```

- *Type:* *string

Value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apigee_app_group#value ApigeeAppGroup#value}

---

### ApigeeAppGroupConfig <a name="ApigeeAppGroupConfig" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeeappgroup"

&apigeeappgroup.ApigeeAppGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	OrgId: *string,
	Attributes: interface{},
	ChannelId: *string,
	ChannelUri: *string,
	DisplayName: *string,
	Id: *string,
	Status: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.apigeeAppGroup.ApigeeAppGroupTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.name">Name</a></code> | <code>*string</code> | Name of the AppGroup. Characters you can use in the name are restricted to: A-Z0-9._-$ %. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.orgId">OrgId</a></code> | <code>*string</code> | The Apigee Organization associated with the Apigee app group, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.attributes">Attributes</a></code> | <code>interface{}</code> | attributes block. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.channelId">ChannelId</a></code> | <code>*string</code> | Channel identifier identifies the owner maintaining this grouping. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.channelUri">ChannelUri</a></code> | <code>*string</code> | A reference to the associated storefront/marketplace. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | App group name displayed in the UI. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apigee_app_group#id ApigeeAppGroup#id}. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.status">Status</a></code> | <code>*string</code> | Valid values are active or inactive. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeouts">ApigeeAppGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the AppGroup. Characters you can use in the name are restricted to: A-Z0-9._-$ %.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apigee_app_group#name ApigeeAppGroup#name}

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.orgId"></a>

```go
OrgId *string
```

- *Type:* *string

The Apigee Organization associated with the Apigee app group, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apigee_app_group#org_id ApigeeAppGroup#org_id}

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.attributes"></a>

```go
Attributes interface{}
```

- *Type:* interface{}

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apigee_app_group#attributes ApigeeAppGroup#attributes}

---

##### `ChannelId`<sup>Optional</sup> <a name="ChannelId" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.channelId"></a>

```go
ChannelId *string
```

- *Type:* *string

Channel identifier identifies the owner maintaining this grouping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apigee_app_group#channel_id ApigeeAppGroup#channel_id}

---

##### `ChannelUri`<sup>Optional</sup> <a name="ChannelUri" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.channelUri"></a>

```go
ChannelUri *string
```

- *Type:* *string

A reference to the associated storefront/marketplace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apigee_app_group#channel_uri ApigeeAppGroup#channel_uri}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

App group name displayed in the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apigee_app_group#display_name ApigeeAppGroup#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apigee_app_group#id ApigeeAppGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Valid values are active or inactive.

Note that the status of the AppGroup should be updated via UpdateAppGroupRequest by setting the action as active or inactive. Possible values: ["active", "inactive"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apigee_app_group#status ApigeeAppGroup#status}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupConfig.property.timeouts"></a>

```go
Timeouts ApigeeAppGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeouts">ApigeeAppGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apigee_app_group#timeouts ApigeeAppGroup#timeouts}

---

### ApigeeAppGroupTimeouts <a name="ApigeeAppGroupTimeouts" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeeappgroup"

&apigeeappgroup.ApigeeAppGroupTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apigee_app_group#create ApigeeAppGroup#create}. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apigee_app_group#delete ApigeeAppGroup#delete}. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apigee_app_group#update ApigeeAppGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apigee_app_group#create ApigeeAppGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apigee_app_group#delete ApigeeAppGroup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apigee_app_group#update ApigeeAppGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeAppGroupAttributesList <a name="ApigeeAppGroupAttributesList" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeeappgroup"

apigeeappgroup.NewApigeeAppGroupAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApigeeAppGroupAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.get"></a>

```go
func Get(index *f64) ApigeeAppGroupAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigeeAppGroupAttributesOutputReference <a name="ApigeeAppGroupAttributesOutputReference" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeeappgroup"

apigeeappgroup.NewApigeeAppGroupAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApigeeAppGroupAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigeeAppGroupTimeoutsOutputReference <a name="ApigeeAppGroupTimeoutsOutputReference" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeeappgroup"

apigeeappgroup.NewApigeeAppGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigeeAppGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeAppGroup.ApigeeAppGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



