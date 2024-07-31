# `apphubWorkload` Submodule <a name="`apphubWorkload` Submodule" id="@cdktf/provider-google.apphubWorkload"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApphubWorkload <a name="ApphubWorkload" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/apphub_workload google_apphub_workload}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/apphubworkload"

apphubworkload.NewApphubWorkload(scope Construct, id *string, config ApphubWorkloadConfig) ApphubWorkload
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig">ApphubWorkloadConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig">ApphubWorkloadConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.putAttributes">PutAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAttributes` <a name="PutAttributes" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.putAttributes"></a>

```go
func PutAttributes(value ApphubWorkloadAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributes">ApphubWorkloadAttributes</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.putTimeouts"></a>

```go
func PutTimeouts(value ApphubWorkloadTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeouts">ApphubWorkloadTimeouts</a>

---

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.resetAttributes"></a>

```go
func ResetAttributes()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApphubWorkload resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/apphubworkload"

apphubworkload.ApphubWorkload_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/apphubworkload"

apphubworkload.ApphubWorkload_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/apphubworkload"

apphubworkload.ApphubWorkload_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/apphubworkload"

apphubworkload.ApphubWorkload_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApphubWorkload resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApphubWorkload to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApphubWorkload that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/apphub_workload#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApphubWorkload to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.attributes">Attributes</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference">ApphubWorkloadAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference">ApphubWorkloadTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.workloadProperties">WorkloadProperties</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList">ApphubWorkloadWorkloadPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.workloadReference">WorkloadReference</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList">ApphubWorkloadWorkloadReferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.applicationIdInput">ApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.attributesInput">AttributesInput</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributes">ApphubWorkloadAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.discoveredWorkloadInput">DiscoveredWorkloadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.workloadIdInput">WorkloadIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.discoveredWorkload">DiscoveredWorkload</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.workloadId">WorkloadId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.attributes"></a>

```go
func Attributes() ApphubWorkloadAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference">ApphubWorkloadAttributesOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.timeouts"></a>

```go
func Timeouts() ApphubWorkloadTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference">ApphubWorkloadTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `WorkloadProperties`<sup>Required</sup> <a name="WorkloadProperties" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.workloadProperties"></a>

```go
func WorkloadProperties() ApphubWorkloadWorkloadPropertiesList
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList">ApphubWorkloadWorkloadPropertiesList</a>

---

##### `WorkloadReference`<sup>Required</sup> <a name="WorkloadReference" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.workloadReference"></a>

```go
func WorkloadReference() ApphubWorkloadWorkloadReferenceList
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList">ApphubWorkloadWorkloadReferenceList</a>

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.applicationIdInput"></a>

```go
func ApplicationIdInput() *string
```

- *Type:* *string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.attributesInput"></a>

```go
func AttributesInput() ApphubWorkloadAttributes
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributes">ApphubWorkloadAttributes</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DiscoveredWorkloadInput`<sup>Optional</sup> <a name="DiscoveredWorkloadInput" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.discoveredWorkloadInput"></a>

```go
func DiscoveredWorkloadInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkloadIdInput`<sup>Optional</sup> <a name="WorkloadIdInput" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.workloadIdInput"></a>

```go
func WorkloadIdInput() *string
```

- *Type:* *string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DiscoveredWorkload`<sup>Required</sup> <a name="DiscoveredWorkload" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.discoveredWorkload"></a>

```go
func DiscoveredWorkload() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `WorkloadId`<sup>Required</sup> <a name="WorkloadId" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.workloadId"></a>

```go
func WorkloadId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.apphubWorkload.ApphubWorkload.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApphubWorkloadAttributes <a name="ApphubWorkloadAttributes" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/apphubworkload"

&apphubworkload.ApphubWorkloadAttributes {
	BusinessOwners: interface{},
	Criticality: github.com/cdktf/cdktf-provider-google-go/google/v13.apphubWorkload.ApphubWorkloadAttributesCriticality,
	DeveloperOwners: interface{},
	Environment: github.com/cdktf/cdktf-provider-google-go/google/v13.apphubWorkload.ApphubWorkloadAttributesEnvironment,
	OperatorOwners: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributes.property.businessOwners">BusinessOwners</a></code> | <code>interface{}</code> | business_owners block. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributes.property.criticality">Criticality</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticality">ApphubWorkloadAttributesCriticality</a></code> | criticality block. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributes.property.developerOwners">DeveloperOwners</a></code> | <code>interface{}</code> | developer_owners block. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributes.property.environment">Environment</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironment">ApphubWorkloadAttributesEnvironment</a></code> | environment block. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributes.property.operatorOwners">OperatorOwners</a></code> | <code>interface{}</code> | operator_owners block. |

---

##### `BusinessOwners`<sup>Optional</sup> <a name="BusinessOwners" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributes.property.businessOwners"></a>

```go
BusinessOwners interface{}
```

- *Type:* interface{}

business_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/apphub_workload#business_owners ApphubWorkload#business_owners}

---

##### `Criticality`<sup>Optional</sup> <a name="Criticality" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributes.property.criticality"></a>

```go
Criticality ApphubWorkloadAttributesCriticality
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticality">ApphubWorkloadAttributesCriticality</a>

criticality block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/apphub_workload#criticality ApphubWorkload#criticality}

---

##### `DeveloperOwners`<sup>Optional</sup> <a name="DeveloperOwners" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributes.property.developerOwners"></a>

```go
DeveloperOwners interface{}
```

- *Type:* interface{}

developer_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/apphub_workload#developer_owners ApphubWorkload#developer_owners}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributes.property.environment"></a>

```go
Environment ApphubWorkloadAttributesEnvironment
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironment">ApphubWorkloadAttributesEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/apphub_workload#environment ApphubWorkload#environment}

---

##### `OperatorOwners`<sup>Optional</sup> <a name="OperatorOwners" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributes.property.operatorOwners"></a>

```go
OperatorOwners interface{}
```

- *Type:* interface{}

operator_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/apphub_workload#operator_owners ApphubWorkload#operator_owners}

---

### ApphubWorkloadAttributesBusinessOwners <a name="ApphubWorkloadAttributesBusinessOwners" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwners"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwners.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/apphubworkload"

&apphubworkload.ApphubWorkloadAttributesBusinessOwners {
	Email: *string,
	DisplayName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwners.property.email">Email</a></code> | <code>*string</code> | Email address of the contacts. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwners.property.displayName">DisplayName</a></code> | <code>*string</code> | Contact's name. |

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwners.property.email"></a>

```go
Email *string
```

- *Type:* *string

Email address of the contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/apphub_workload#email ApphubWorkload#email}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwners.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/apphub_workload#display_name ApphubWorkload#display_name}

---

### ApphubWorkloadAttributesCriticality <a name="ApphubWorkloadAttributesCriticality" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticality"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticality.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/apphubworkload"

&apphubworkload.ApphubWorkloadAttributesCriticality {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticality.property.type">Type</a></code> | <code>*string</code> | Criticality type. Possible values: ["MISSION_CRITICAL", "HIGH", "MEDIUM", "LOW"]. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticality.property.type"></a>

```go
Type *string
```

- *Type:* *string

Criticality type. Possible values: ["MISSION_CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/apphub_workload#type ApphubWorkload#type}

---

### ApphubWorkloadAttributesDeveloperOwners <a name="ApphubWorkloadAttributesDeveloperOwners" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwners"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwners.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/apphubworkload"

&apphubworkload.ApphubWorkloadAttributesDeveloperOwners {
	Email: *string,
	DisplayName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwners.property.email">Email</a></code> | <code>*string</code> | Email address of the contacts. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwners.property.displayName">DisplayName</a></code> | <code>*string</code> | Contact's name. |

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwners.property.email"></a>

```go
Email *string
```

- *Type:* *string

Email address of the contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/apphub_workload#email ApphubWorkload#email}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwners.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/apphub_workload#display_name ApphubWorkload#display_name}

---

### ApphubWorkloadAttributesEnvironment <a name="ApphubWorkloadAttributesEnvironment" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/apphubworkload"

&apphubworkload.ApphubWorkloadAttributesEnvironment {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironment.property.type">Type</a></code> | <code>*string</code> | Environment type. Possible values: ["PRODUCTION", "STAGING", "TEST", "DEVELOPMENT"]. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironment.property.type"></a>

```go
Type *string
```

- *Type:* *string

Environment type. Possible values: ["PRODUCTION", "STAGING", "TEST", "DEVELOPMENT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/apphub_workload#type ApphubWorkload#type}

---

### ApphubWorkloadAttributesOperatorOwners <a name="ApphubWorkloadAttributesOperatorOwners" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwners"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwners.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/apphubworkload"

&apphubworkload.ApphubWorkloadAttributesOperatorOwners {
	Email: *string,
	DisplayName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwners.property.email">Email</a></code> | <code>*string</code> | Email address of the contacts. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwners.property.displayName">DisplayName</a></code> | <code>*string</code> | Contact's name. |

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwners.property.email"></a>

```go
Email *string
```

- *Type:* *string

Email address of the contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/apphub_workload#email ApphubWorkload#email}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwners.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/apphub_workload#display_name ApphubWorkload#display_name}

---

### ApphubWorkloadConfig <a name="ApphubWorkloadConfig" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/apphubworkload"

&apphubworkload.ApphubWorkloadConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationId: *string,
	DiscoveredWorkload: *string,
	Location: *string,
	WorkloadId: *string,
	Attributes: github.com/cdktf/cdktf-provider-google-go/google/v13.apphubWorkload.ApphubWorkloadAttributes,
	Description: *string,
	DisplayName: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v13.apphubWorkload.ApphubWorkloadTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.applicationId">ApplicationId</a></code> | <code>*string</code> | Part of 'parent'.  Full resource name of a parent Application. Example: projects/{HOST_PROJECT_ID}/locations/{LOCATION}/applications/{APPLICATION_ID}. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.discoveredWorkload">DiscoveredWorkload</a></code> | <code>*string</code> | Immutable. The resource name of the original discovered workload. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.location">Location</a></code> | <code>*string</code> | Part of 'parent'.  Full resource name of a parent Application. Example: projects/{HOST_PROJECT_ID}/locations/{LOCATION}/applications/{APPLICATION_ID}. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.workloadId">WorkloadId</a></code> | <code>*string</code> | The Workload identifier. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.attributes">Attributes</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributes">ApphubWorkloadAttributes</a></code> | attributes block. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.description">Description</a></code> | <code>*string</code> | User-defined description of a Workload. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | User-defined name for the Workload. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/apphub_workload#id ApphubWorkload#id}. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/apphub_workload#project ApphubWorkload#project}. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeouts">ApphubWorkloadTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.applicationId"></a>

```go
ApplicationId *string
```

- *Type:* *string

Part of 'parent'.  Full resource name of a parent Application. Example: projects/{HOST_PROJECT_ID}/locations/{LOCATION}/applications/{APPLICATION_ID}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/apphub_workload#application_id ApphubWorkload#application_id}

---

##### `DiscoveredWorkload`<sup>Required</sup> <a name="DiscoveredWorkload" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.discoveredWorkload"></a>

```go
DiscoveredWorkload *string
```

- *Type:* *string

Immutable. The resource name of the original discovered workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/apphub_workload#discovered_workload ApphubWorkload#discovered_workload}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Part of 'parent'.  Full resource name of a parent Application. Example: projects/{HOST_PROJECT_ID}/locations/{LOCATION}/applications/{APPLICATION_ID}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/apphub_workload#location ApphubWorkload#location}

---

##### `WorkloadId`<sup>Required</sup> <a name="WorkloadId" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.workloadId"></a>

```go
WorkloadId *string
```

- *Type:* *string

The Workload identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/apphub_workload#workload_id ApphubWorkload#workload_id}

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.attributes"></a>

```go
Attributes ApphubWorkloadAttributes
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributes">ApphubWorkloadAttributes</a>

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/apphub_workload#attributes ApphubWorkload#attributes}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

User-defined description of a Workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/apphub_workload#description ApphubWorkload#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

User-defined name for the Workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/apphub_workload#display_name ApphubWorkload#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/apphub_workload#id ApphubWorkload#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/apphub_workload#project ApphubWorkload#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadConfig.property.timeouts"></a>

```go
Timeouts ApphubWorkloadTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeouts">ApphubWorkloadTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/apphub_workload#timeouts ApphubWorkload#timeouts}

---

### ApphubWorkloadTimeouts <a name="ApphubWorkloadTimeouts" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/apphubworkload"

&apphubworkload.ApphubWorkloadTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/apphub_workload#create ApphubWorkload#create}. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/apphub_workload#delete ApphubWorkload#delete}. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/apphub_workload#update ApphubWorkload#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/apphub_workload#create ApphubWorkload#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/apphub_workload#delete ApphubWorkload#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/apphub_workload#update ApphubWorkload#update}.

---

### ApphubWorkloadWorkloadProperties <a name="ApphubWorkloadWorkloadProperties" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/apphubworkload"

&apphubworkload.ApphubWorkloadWorkloadProperties {

}
```


### ApphubWorkloadWorkloadReference <a name="ApphubWorkloadWorkloadReference" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/apphubworkload"

&apphubworkload.ApphubWorkloadWorkloadReference {

}
```


## Classes <a name="Classes" id="Classes"></a>

### ApphubWorkloadAttributesBusinessOwnersList <a name="ApphubWorkloadAttributesBusinessOwnersList" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/apphubworkload"

apphubworkload.NewApphubWorkloadAttributesBusinessOwnersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApphubWorkloadAttributesBusinessOwnersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.get"></a>

```go
func Get(index *f64) ApphubWorkloadAttributesBusinessOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApphubWorkloadAttributesBusinessOwnersOutputReference <a name="ApphubWorkloadAttributesBusinessOwnersOutputReference" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/apphubworkload"

apphubworkload.NewApphubWorkloadAttributesBusinessOwnersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApphubWorkloadAttributesBusinessOwnersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApphubWorkloadAttributesCriticalityOutputReference <a name="ApphubWorkloadAttributesCriticalityOutputReference" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/apphubworkload"

apphubworkload.NewApphubWorkloadAttributesCriticalityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApphubWorkloadAttributesCriticalityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticality">ApphubWorkloadAttributesCriticality</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference.property.internalValue"></a>

```go
func InternalValue() ApphubWorkloadAttributesCriticality
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticality">ApphubWorkloadAttributesCriticality</a>

---


### ApphubWorkloadAttributesDeveloperOwnersList <a name="ApphubWorkloadAttributesDeveloperOwnersList" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/apphubworkload"

apphubworkload.NewApphubWorkloadAttributesDeveloperOwnersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApphubWorkloadAttributesDeveloperOwnersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.get"></a>

```go
func Get(index *f64) ApphubWorkloadAttributesDeveloperOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApphubWorkloadAttributesDeveloperOwnersOutputReference <a name="ApphubWorkloadAttributesDeveloperOwnersOutputReference" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/apphubworkload"

apphubworkload.NewApphubWorkloadAttributesDeveloperOwnersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApphubWorkloadAttributesDeveloperOwnersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApphubWorkloadAttributesEnvironmentOutputReference <a name="ApphubWorkloadAttributesEnvironmentOutputReference" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/apphubworkload"

apphubworkload.NewApphubWorkloadAttributesEnvironmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApphubWorkloadAttributesEnvironmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironment">ApphubWorkloadAttributesEnvironment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference.property.internalValue"></a>

```go
func InternalValue() ApphubWorkloadAttributesEnvironment
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironment">ApphubWorkloadAttributesEnvironment</a>

---


### ApphubWorkloadAttributesOperatorOwnersList <a name="ApphubWorkloadAttributesOperatorOwnersList" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/apphubworkload"

apphubworkload.NewApphubWorkloadAttributesOperatorOwnersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApphubWorkloadAttributesOperatorOwnersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.get"></a>

```go
func Get(index *f64) ApphubWorkloadAttributesOperatorOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApphubWorkloadAttributesOperatorOwnersOutputReference <a name="ApphubWorkloadAttributesOperatorOwnersOutputReference" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/apphubworkload"

apphubworkload.NewApphubWorkloadAttributesOperatorOwnersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApphubWorkloadAttributesOperatorOwnersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApphubWorkloadAttributesOutputReference <a name="ApphubWorkloadAttributesOutputReference" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/apphubworkload"

apphubworkload.NewApphubWorkloadAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApphubWorkloadAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putBusinessOwners">PutBusinessOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putCriticality">PutCriticality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putDeveloperOwners">PutDeveloperOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putEnvironment">PutEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putOperatorOwners">PutOperatorOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.resetBusinessOwners">ResetBusinessOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.resetCriticality">ResetCriticality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.resetDeveloperOwners">ResetDeveloperOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.resetOperatorOwners">ResetOperatorOwners</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBusinessOwners` <a name="PutBusinessOwners" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putBusinessOwners"></a>

```go
func PutBusinessOwners(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putBusinessOwners.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCriticality` <a name="PutCriticality" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putCriticality"></a>

```go
func PutCriticality(value ApphubWorkloadAttributesCriticality)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putCriticality.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticality">ApphubWorkloadAttributesCriticality</a>

---

##### `PutDeveloperOwners` <a name="PutDeveloperOwners" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putDeveloperOwners"></a>

```go
func PutDeveloperOwners(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putDeveloperOwners.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEnvironment` <a name="PutEnvironment" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putEnvironment"></a>

```go
func PutEnvironment(value ApphubWorkloadAttributesEnvironment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putEnvironment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironment">ApphubWorkloadAttributesEnvironment</a>

---

##### `PutOperatorOwners` <a name="PutOperatorOwners" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putOperatorOwners"></a>

```go
func PutOperatorOwners(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.putOperatorOwners.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBusinessOwners` <a name="ResetBusinessOwners" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.resetBusinessOwners"></a>

```go
func ResetBusinessOwners()
```

##### `ResetCriticality` <a name="ResetCriticality" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.resetCriticality"></a>

```go
func ResetCriticality()
```

##### `ResetDeveloperOwners` <a name="ResetDeveloperOwners" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.resetDeveloperOwners"></a>

```go
func ResetDeveloperOwners()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetOperatorOwners` <a name="ResetOperatorOwners" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.resetOperatorOwners"></a>

```go
func ResetOperatorOwners()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.businessOwners">BusinessOwners</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList">ApphubWorkloadAttributesBusinessOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.criticality">Criticality</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference">ApphubWorkloadAttributesCriticalityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.developerOwners">DeveloperOwners</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList">ApphubWorkloadAttributesDeveloperOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.environment">Environment</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference">ApphubWorkloadAttributesEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.operatorOwners">OperatorOwners</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList">ApphubWorkloadAttributesOperatorOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.businessOwnersInput">BusinessOwnersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.criticalityInput">CriticalityInput</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticality">ApphubWorkloadAttributesCriticality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.developerOwnersInput">DeveloperOwnersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironment">ApphubWorkloadAttributesEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.operatorOwnersInput">OperatorOwnersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributes">ApphubWorkloadAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BusinessOwners`<sup>Required</sup> <a name="BusinessOwners" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.businessOwners"></a>

```go
func BusinessOwners() ApphubWorkloadAttributesBusinessOwnersList
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesBusinessOwnersList">ApphubWorkloadAttributesBusinessOwnersList</a>

---

##### `Criticality`<sup>Required</sup> <a name="Criticality" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.criticality"></a>

```go
func Criticality() ApphubWorkloadAttributesCriticalityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticalityOutputReference">ApphubWorkloadAttributesCriticalityOutputReference</a>

---

##### `DeveloperOwners`<sup>Required</sup> <a name="DeveloperOwners" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.developerOwners"></a>

```go
func DeveloperOwners() ApphubWorkloadAttributesDeveloperOwnersList
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesDeveloperOwnersList">ApphubWorkloadAttributesDeveloperOwnersList</a>

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.environment"></a>

```go
func Environment() ApphubWorkloadAttributesEnvironmentOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironmentOutputReference">ApphubWorkloadAttributesEnvironmentOutputReference</a>

---

##### `OperatorOwners`<sup>Required</sup> <a name="OperatorOwners" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.operatorOwners"></a>

```go
func OperatorOwners() ApphubWorkloadAttributesOperatorOwnersList
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOperatorOwnersList">ApphubWorkloadAttributesOperatorOwnersList</a>

---

##### `BusinessOwnersInput`<sup>Optional</sup> <a name="BusinessOwnersInput" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.businessOwnersInput"></a>

```go
func BusinessOwnersInput() interface{}
```

- *Type:* interface{}

---

##### `CriticalityInput`<sup>Optional</sup> <a name="CriticalityInput" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.criticalityInput"></a>

```go
func CriticalityInput() ApphubWorkloadAttributesCriticality
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesCriticality">ApphubWorkloadAttributesCriticality</a>

---

##### `DeveloperOwnersInput`<sup>Optional</sup> <a name="DeveloperOwnersInput" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.developerOwnersInput"></a>

```go
func DeveloperOwnersInput() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.environmentInput"></a>

```go
func EnvironmentInput() ApphubWorkloadAttributesEnvironment
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesEnvironment">ApphubWorkloadAttributesEnvironment</a>

---

##### `OperatorOwnersInput`<sup>Optional</sup> <a name="OperatorOwnersInput" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.operatorOwnersInput"></a>

```go
func OperatorOwnersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() ApphubWorkloadAttributes
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadAttributes">ApphubWorkloadAttributes</a>

---


### ApphubWorkloadTimeoutsOutputReference <a name="ApphubWorkloadTimeoutsOutputReference" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/apphubworkload"

apphubworkload.NewApphubWorkloadTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApphubWorkloadTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApphubWorkloadWorkloadPropertiesList <a name="ApphubWorkloadWorkloadPropertiesList" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/apphubworkload"

apphubworkload.NewApphubWorkloadWorkloadPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApphubWorkloadWorkloadPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.get"></a>

```go
func Get(index *f64) ApphubWorkloadWorkloadPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ApphubWorkloadWorkloadPropertiesOutputReference <a name="ApphubWorkloadWorkloadPropertiesOutputReference" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/apphubworkload"

apphubworkload.NewApphubWorkloadWorkloadPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApphubWorkloadWorkloadPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.gcpProject">GcpProject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadProperties">ApphubWorkloadWorkloadProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GcpProject`<sup>Required</sup> <a name="GcpProject" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.gcpProject"></a>

```go
func GcpProject() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() ApphubWorkloadWorkloadProperties
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadProperties">ApphubWorkloadWorkloadProperties</a>

---


### ApphubWorkloadWorkloadReferenceList <a name="ApphubWorkloadWorkloadReferenceList" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/apphubworkload"

apphubworkload.NewApphubWorkloadWorkloadReferenceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApphubWorkloadWorkloadReferenceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.get"></a>

```go
func Get(index *f64) ApphubWorkloadWorkloadReferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ApphubWorkloadWorkloadReferenceOutputReference <a name="ApphubWorkloadWorkloadReferenceOutputReference" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/apphubworkload"

apphubworkload.NewApphubWorkloadWorkloadReferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApphubWorkloadWorkloadReferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReference">ApphubWorkloadWorkloadReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() ApphubWorkloadWorkloadReference
```

- *Type:* <a href="#@cdktf/provider-google.apphubWorkload.ApphubWorkloadWorkloadReference">ApphubWorkloadWorkloadReference</a>

---



