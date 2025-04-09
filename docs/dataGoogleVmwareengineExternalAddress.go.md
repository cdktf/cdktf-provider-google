# `dataGoogleVmwareengineExternalAddress` Submodule <a name="`dataGoogleVmwareengineExternalAddress` Submodule" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleVmwareengineExternalAddress <a name="DataGoogleVmwareengineExternalAddress" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/vmwareengine_external_address google_vmwareengine_external_address}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglevmwareengineexternaladdress"

datagooglevmwareengineexternaladdress.NewDataGoogleVmwareengineExternalAddress(scope Construct, id *string, config DataGoogleVmwareengineExternalAddressConfig) DataGoogleVmwareengineExternalAddress
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig">DataGoogleVmwareengineExternalAddressConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig">DataGoogleVmwareengineExternalAddressConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleVmwareengineExternalAddress resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglevmwareengineexternaladdress"

datagooglevmwareengineexternaladdress.DataGoogleVmwareengineExternalAddress_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglevmwareengineexternaladdress"

datagooglevmwareengineexternaladdress.DataGoogleVmwareengineExternalAddress_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglevmwareengineexternaladdress"

datagooglevmwareengineexternaladdress.DataGoogleVmwareengineExternalAddress_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglevmwareengineexternaladdress"

datagooglevmwareengineexternaladdress.DataGoogleVmwareengineExternalAddress_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleVmwareengineExternalAddress resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleVmwareengineExternalAddress to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleVmwareengineExternalAddress that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/vmwareengine_external_address#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleVmwareengineExternalAddress to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.externalIp">ExternalIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.internalIp">InternalIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExternalIp`<sup>Required</sup> <a name="ExternalIp" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.externalIp"></a>

```go
func ExternalIp() *string
```

- *Type:* *string

---

##### `InternalIp`<sup>Required</sup> <a name="InternalIp" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.internalIp"></a>

```go
func InternalIp() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleVmwareengineExternalAddressConfig <a name="DataGoogleVmwareengineExternalAddressConfig" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglevmwareengineexternaladdress"

&datagooglevmwareengineexternaladdress.DataGoogleVmwareengineExternalAddressConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Parent: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.property.name">Name</a></code> | <code>*string</code> | The ID of the external IP Address. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.property.parent">Parent</a></code> | <code>*string</code> | The resource name of the private cloud to create a new external address in. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/vmwareengine_external_address#id DataGoogleVmwareengineExternalAddress#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The ID of the external IP Address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/vmwareengine_external_address#name DataGoogleVmwareengineExternalAddress#name}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The resource name of the private cloud to create a new external address in.

Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/vmwareengine_external_address#parent DataGoogleVmwareengineExternalAddress#parent}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/vmwareengine_external_address#id DataGoogleVmwareengineExternalAddress#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



