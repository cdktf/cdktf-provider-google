# `folderIamAuditConfig` Submodule <a name="`folderIamAuditConfig` Submodule" id="@cdktf/provider-google.folderIamAuditConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FolderIamAuditConfig <a name="FolderIamAuditConfig" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/folder_iam_audit_config google_folder_iam_audit_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/folderiamauditconfig"

folderiamauditconfig.NewFolderIamAuditConfig(scope Construct, id *string, config FolderIamAuditConfigConfig) FolderIamAuditConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig">FolderIamAuditConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig">FolderIamAuditConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.putAuditLogConfig">PutAuditLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAuditLogConfig` <a name="PutAuditLogConfig" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.putAuditLogConfig"></a>

```go
func PutAuditLogConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.putAuditLogConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/folderiamauditconfig"

folderiamauditconfig.FolderIamAuditConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/folderiamauditconfig"

folderiamauditconfig.FolderIamAuditConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/folderiamauditconfig"

folderiamauditconfig.FolderIamAuditConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.auditLogConfig">AuditLogConfig</a></code> | <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList">FolderIamAuditConfigAuditLogConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.auditLogConfigInput">AuditLogConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.folderInput">FolderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.folder">Folder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.service">Service</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuditLogConfig`<sup>Required</sup> <a name="AuditLogConfig" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.auditLogConfig"></a>

```go
func AuditLogConfig() FolderIamAuditConfigAuditLogConfigList
```

- *Type:* <a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList">FolderIamAuditConfigAuditLogConfigList</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `AuditLogConfigInput`<sup>Optional</sup> <a name="AuditLogConfigInput" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.auditLogConfigInput"></a>

```go
func AuditLogConfigInput() interface{}
```

- *Type:* interface{}

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.folderInput"></a>

```go
func FolderInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.folder"></a>

```go
func Folder() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FolderIamAuditConfigAuditLogConfig <a name="FolderIamAuditConfigAuditLogConfig" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/folderiamauditconfig"

&folderiamauditconfig.FolderIamAuditConfigAuditLogConfig {
	LogType: *string,
	ExemptedMembers: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfig.property.logType">LogType</a></code> | <code>*string</code> | Permission type for which logging is to be configured. Must be one of DATA_READ, DATA_WRITE, or ADMIN_READ. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfig.property.exemptedMembers">ExemptedMembers</a></code> | <code>*[]*string</code> | Identities that do not cause logging for this type of permission. |

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfig.property.logType"></a>

```go
LogType *string
```

- *Type:* *string

Permission type for which logging is to be configured. Must be one of DATA_READ, DATA_WRITE, or ADMIN_READ.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_iam_audit_config#log_type FolderIamAuditConfig#log_type}

---

##### `ExemptedMembers`<sup>Optional</sup> <a name="ExemptedMembers" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfig.property.exemptedMembers"></a>

```go
ExemptedMembers *[]*string
```

- *Type:* *[]*string

Identities that do not cause logging for this type of permission.

Each entry can have one of the following values:user:{emailid}: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com. serviceAccount:{emailid}: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com. group:{emailid}: An email address that represents a Google group. For example, admins@example.com. domain:{domain}: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_iam_audit_config#exempted_members FolderIamAuditConfig#exempted_members}

---

### FolderIamAuditConfigConfig <a name="FolderIamAuditConfigConfig" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/folderiamauditconfig"

&folderiamauditconfig.FolderIamAuditConfigConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AuditLogConfig: interface{},
	Folder: *string,
	Service: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.auditLogConfig">AuditLogConfig</a></code> | <code>interface{}</code> | audit_log_config block. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.folder">Folder</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_iam_audit_config#folder FolderIamAuditConfig#folder}. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.service">Service</a></code> | <code>*string</code> | Service which will be enabled for audit logging. The special value allServices covers all services. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_iam_audit_config#id FolderIamAuditConfig#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuditLogConfig`<sup>Required</sup> <a name="AuditLogConfig" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.auditLogConfig"></a>

```go
AuditLogConfig interface{}
```

- *Type:* interface{}

audit_log_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_iam_audit_config#audit_log_config FolderIamAuditConfig#audit_log_config}

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.folder"></a>

```go
Folder *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_iam_audit_config#folder FolderIamAuditConfig#folder}.

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

Service which will be enabled for audit logging. The special value allServices covers all services.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_iam_audit_config#service FolderIamAuditConfig#service}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_iam_audit_config#id FolderIamAuditConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### FolderIamAuditConfigAuditLogConfigList <a name="FolderIamAuditConfigAuditLogConfigList" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/folderiamauditconfig"

folderiamauditconfig.NewFolderIamAuditConfigAuditLogConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FolderIamAuditConfigAuditLogConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.get"></a>

```go
func Get(index *f64) FolderIamAuditConfigAuditLogConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FolderIamAuditConfigAuditLogConfigOutputReference <a name="FolderIamAuditConfigAuditLogConfigOutputReference" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/folderiamauditconfig"

folderiamauditconfig.NewFolderIamAuditConfigAuditLogConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FolderIamAuditConfigAuditLogConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.resetExemptedMembers">ResetExemptedMembers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExemptedMembers` <a name="ResetExemptedMembers" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.resetExemptedMembers"></a>

```go
func ResetExemptedMembers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.exemptedMembersInput">ExemptedMembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.logTypeInput">LogTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.exemptedMembers">ExemptedMembers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.logType">LogType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExemptedMembersInput`<sup>Optional</sup> <a name="ExemptedMembersInput" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.exemptedMembersInput"></a>

```go
func ExemptedMembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `LogTypeInput`<sup>Optional</sup> <a name="LogTypeInput" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.logTypeInput"></a>

```go
func LogTypeInput() *string
```

- *Type:* *string

---

##### `ExemptedMembers`<sup>Required</sup> <a name="ExemptedMembers" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.exemptedMembers"></a>

```go
func ExemptedMembers() *[]*string
```

- *Type:* *[]*string

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.logType"></a>

```go
func LogType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



