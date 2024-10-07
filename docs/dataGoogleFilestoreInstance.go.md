# `dataGoogleFilestoreInstance` Submodule <a name="`dataGoogleFilestoreInstance` Submodule" id="@cdktf/provider-google.dataGoogleFilestoreInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleFilestoreInstance <a name="DataGoogleFilestoreInstance" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/data-sources/filestore_instance google_filestore_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglefilestoreinstance"

datagooglefilestoreinstance.NewDataGoogleFilestoreInstance(scope Construct, id *string, config DataGoogleFilestoreInstanceConfig) DataGoogleFilestoreInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig">DataGoogleFilestoreInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig">DataGoogleFilestoreInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleFilestoreInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglefilestoreinstance"

datagooglefilestoreinstance.DataGoogleFilestoreInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglefilestoreinstance"

datagooglefilestoreinstance.DataGoogleFilestoreInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglefilestoreinstance"

datagooglefilestoreinstance.DataGoogleFilestoreInstance_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglefilestoreinstance"

datagooglefilestoreinstance.DataGoogleFilestoreInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleFilestoreInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleFilestoreInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleFilestoreInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/data-sources/filestore_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleFilestoreInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.deletionProtectionReason">DeletionProtectionReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.fileShares">FileShares</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList">DataGoogleFilestoreInstanceFileSharesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.labels">Labels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.networks">Networks</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList">DataGoogleFilestoreInstanceNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.tier">Tier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DeletionProtectionEnabled`<sup>Required</sup> <a name="DeletionProtectionEnabled" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.deletionProtectionEnabled"></a>

```go
func DeletionProtectionEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DeletionProtectionReason`<sup>Required</sup> <a name="DeletionProtectionReason" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.deletionProtectionReason"></a>

```go
func DeletionProtectionReason() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `FileShares`<sup>Required</sup> <a name="FileShares" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.fileShares"></a>

```go
func FileShares() DataGoogleFilestoreInstanceFileSharesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList">DataGoogleFilestoreInstanceFileSharesList</a>

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.networks"></a>

```go
func Networks() DataGoogleFilestoreInstanceNetworksList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList">DataGoogleFilestoreInstanceNetworksList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.tier"></a>

```go
func Tier() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleFilestoreInstanceConfig <a name="DataGoogleFilestoreInstanceConfig" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglefilestoreinstance"

&datagooglefilestoreinstance.DataGoogleFilestoreInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	Location: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.name">Name</a></code> | <code>*string</code> | The resource name of the instance. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/data-sources/filestore_instance#id DataGoogleFilestoreInstance#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.location">Location</a></code> | <code>*string</code> | The name of the location of the instance. This can be a region for ENTERPRISE tier instances. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/data-sources/filestore_instance#project DataGoogleFilestoreInstance#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The resource name of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/data-sources/filestore_instance#name DataGoogleFilestoreInstance#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/data-sources/filestore_instance#id DataGoogleFilestoreInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The name of the location of the instance. This can be a region for ENTERPRISE tier instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/data-sources/filestore_instance#location DataGoogleFilestoreInstance#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/data-sources/filestore_instance#project DataGoogleFilestoreInstance#project}.

---

### DataGoogleFilestoreInstanceFileShares <a name="DataGoogleFilestoreInstanceFileShares" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileShares"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileShares.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglefilestoreinstance"

&datagooglefilestoreinstance.DataGoogleFilestoreInstanceFileShares {

}
```


### DataGoogleFilestoreInstanceFileSharesNfsExportOptions <a name="DataGoogleFilestoreInstanceFileSharesNfsExportOptions" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglefilestoreinstance"

&datagooglefilestoreinstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptions {

}
```


### DataGoogleFilestoreInstanceNetworks <a name="DataGoogleFilestoreInstanceNetworks" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglefilestoreinstance"

&datagooglefilestoreinstance.DataGoogleFilestoreInstanceNetworks {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleFilestoreInstanceFileSharesList <a name="DataGoogleFilestoreInstanceFileSharesList" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglefilestoreinstance"

datagooglefilestoreinstance.NewDataGoogleFilestoreInstanceFileSharesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleFilestoreInstanceFileSharesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.get"></a>

```go
func Get(index *f64) DataGoogleFilestoreInstanceFileSharesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList <a name="DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglefilestoreinstance"

datagooglefilestoreinstance.NewDataGoogleFilestoreInstanceFileSharesNfsExportOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.get"></a>

```go
func Get(index *f64) DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference <a name="DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglefilestoreinstance"

datagooglefilestoreinstance.NewDataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.accessMode">AccessMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonGid">AnonGid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonUid">AnonUid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.ipRanges">IpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.squashMode">SquashMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptions">DataGoogleFilestoreInstanceFileSharesNfsExportOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessMode`<sup>Required</sup> <a name="AccessMode" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.accessMode"></a>

```go
func AccessMode() *string
```

- *Type:* *string

---

##### `AnonGid`<sup>Required</sup> <a name="AnonGid" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonGid"></a>

```go
func AnonGid() *f64
```

- *Type:* *f64

---

##### `AnonUid`<sup>Required</sup> <a name="AnonUid" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonUid"></a>

```go
func AnonUid() *f64
```

- *Type:* *f64

---

##### `IpRanges`<sup>Required</sup> <a name="IpRanges" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.ipRanges"></a>

```go
func IpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `SquashMode`<sup>Required</sup> <a name="SquashMode" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.squashMode"></a>

```go
func SquashMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleFilestoreInstanceFileSharesNfsExportOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptions">DataGoogleFilestoreInstanceFileSharesNfsExportOptions</a>

---


### DataGoogleFilestoreInstanceFileSharesOutputReference <a name="DataGoogleFilestoreInstanceFileSharesOutputReference" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglefilestoreinstance"

datagooglefilestoreinstance.NewDataGoogleFilestoreInstanceFileSharesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleFilestoreInstanceFileSharesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.property.capacityGb">CapacityGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.property.nfsExportOptions">NfsExportOptions</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList">DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.property.sourceBackup">SourceBackup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileShares">DataGoogleFilestoreInstanceFileShares</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityGb`<sup>Required</sup> <a name="CapacityGb" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.property.capacityGb"></a>

```go
func CapacityGb() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NfsExportOptions`<sup>Required</sup> <a name="NfsExportOptions" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.property.nfsExportOptions"></a>

```go
func NfsExportOptions() DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList">DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList</a>

---

##### `SourceBackup`<sup>Required</sup> <a name="SourceBackup" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.property.sourceBackup"></a>

```go
func SourceBackup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleFilestoreInstanceFileShares
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileShares">DataGoogleFilestoreInstanceFileShares</a>

---


### DataGoogleFilestoreInstanceNetworksList <a name="DataGoogleFilestoreInstanceNetworksList" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglefilestoreinstance"

datagooglefilestoreinstance.NewDataGoogleFilestoreInstanceNetworksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleFilestoreInstanceNetworksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.get"></a>

```go
func Get(index *f64) DataGoogleFilestoreInstanceNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleFilestoreInstanceNetworksOutputReference <a name="DataGoogleFilestoreInstanceNetworksOutputReference" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglefilestoreinstance"

datagooglefilestoreinstance.NewDataGoogleFilestoreInstanceNetworksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleFilestoreInstanceNetworksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.property.connectMode">ConnectMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.property.modes">Modes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.property.reservedIpRange">ReservedIpRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworks">DataGoogleFilestoreInstanceNetworks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectMode`<sup>Required</sup> <a name="ConnectMode" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.property.connectMode"></a>

```go
func ConnectMode() *string
```

- *Type:* *string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.property.ipAddresses"></a>

```go
func IpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `Modes`<sup>Required</sup> <a name="Modes" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.property.modes"></a>

```go
func Modes() *[]*string
```

- *Type:* *[]*string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `ReservedIpRange`<sup>Required</sup> <a name="ReservedIpRange" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.property.reservedIpRange"></a>

```go
func ReservedIpRange() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleFilestoreInstanceNetworks
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworks">DataGoogleFilestoreInstanceNetworks</a>

---



