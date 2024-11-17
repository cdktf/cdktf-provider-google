# `dataGooglePrivilegedAccessManagerEntitlement` Submodule <a name="`dataGooglePrivilegedAccessManagerEntitlement` Submodule" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGooglePrivilegedAccessManagerEntitlement <a name="DataGooglePrivilegedAccessManagerEntitlement" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/data-sources/privileged_access_manager_entitlement google_privileged_access_manager_entitlement}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

datagoogleprivilegedaccessmanagerentitlement.NewDataGooglePrivilegedAccessManagerEntitlement(scope Construct, id *string, config DataGooglePrivilegedAccessManagerEntitlementConfig) DataGooglePrivilegedAccessManagerEntitlement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig">DataGooglePrivilegedAccessManagerEntitlementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig">DataGooglePrivilegedAccessManagerEntitlementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.resetEntitlementId">ResetEntitlementId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.resetParent">ResetParent</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetEntitlementId` <a name="ResetEntitlementId" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.resetEntitlementId"></a>

```go
func ResetEntitlementId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetParent` <a name="ResetParent" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.resetParent"></a>

```go
func ResetParent()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGooglePrivilegedAccessManagerEntitlement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

datagoogleprivilegedaccessmanagerentitlement.DataGooglePrivilegedAccessManagerEntitlement_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

datagoogleprivilegedaccessmanagerentitlement.DataGooglePrivilegedAccessManagerEntitlement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

datagoogleprivilegedaccessmanagerentitlement.DataGooglePrivilegedAccessManagerEntitlement_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

datagoogleprivilegedaccessmanagerentitlement.DataGooglePrivilegedAccessManagerEntitlement_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGooglePrivilegedAccessManagerEntitlement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGooglePrivilegedAccessManagerEntitlement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGooglePrivilegedAccessManagerEntitlement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/data-sources/privileged_access_manager_entitlement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGooglePrivilegedAccessManagerEntitlement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.additionalNotificationTargets">AdditionalNotificationTargets</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList">DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.approvalWorkflow">ApprovalWorkflow</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.eligibleUsers">EligibleUsers</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList">DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.maxRequestDuration">MaxRequestDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.privilegedAccess">PrivilegedAccess</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList">DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.requesterJustificationConfig">RequesterJustificationConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList">DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.entitlementIdInput">EntitlementIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.entitlementId">EntitlementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AdditionalNotificationTargets`<sup>Required</sup> <a name="AdditionalNotificationTargets" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.additionalNotificationTargets"></a>

```go
func AdditionalNotificationTargets() DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList">DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList</a>

---

##### `ApprovalWorkflow`<sup>Required</sup> <a name="ApprovalWorkflow" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.approvalWorkflow"></a>

```go
func ApprovalWorkflow() DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EligibleUsers`<sup>Required</sup> <a name="EligibleUsers" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.eligibleUsers"></a>

```go
func EligibleUsers() DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList">DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `MaxRequestDuration`<sup>Required</sup> <a name="MaxRequestDuration" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.maxRequestDuration"></a>

```go
func MaxRequestDuration() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrivilegedAccess`<sup>Required</sup> <a name="PrivilegedAccess" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.privilegedAccess"></a>

```go
func PrivilegedAccess() DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList">DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList</a>

---

##### `RequesterJustificationConfig`<sup>Required</sup> <a name="RequesterJustificationConfig" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.requesterJustificationConfig"></a>

```go
func RequesterJustificationConfig() DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList">DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `EntitlementIdInput`<sup>Optional</sup> <a name="EntitlementIdInput" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.entitlementIdInput"></a>

```go
func EntitlementIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `EntitlementId`<sup>Required</sup> <a name="EntitlementId" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.entitlementId"></a>

```go
func EntitlementId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets <a name="DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

&datagoogleprivilegedaccessmanagerentitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets {

}
```


### DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflow <a name="DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflow" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

&datagoogleprivilegedaccessmanagerentitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflow {

}
```


### DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals <a name="DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

&datagoogleprivilegedaccessmanagerentitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals {

}
```


### DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps <a name="DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

&datagoogleprivilegedaccessmanagerentitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps {

}
```


### DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers <a name="DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

&datagoogleprivilegedaccessmanagerentitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers {

}
```


### DataGooglePrivilegedAccessManagerEntitlementConfig <a name="DataGooglePrivilegedAccessManagerEntitlementConfig" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

&datagoogleprivilegedaccessmanagerentitlement.DataGooglePrivilegedAccessManagerEntitlementConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EntitlementId: *string,
	Id: *string,
	Location: *string,
	Parent: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.entitlementId">EntitlementId</a></code> | <code>*string</code> | The ID to use for this Entitlement. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/data-sources/privileged_access_manager_entitlement#id DataGooglePrivilegedAccessManagerEntitlement#id}. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.location">Location</a></code> | <code>*string</code> | The region of the Entitlement resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.parent">Parent</a></code> | <code>*string</code> | Format: projects/{project-id\|project-number} or organizations/{organization-number} or folders/{folder-number}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EntitlementId`<sup>Optional</sup> <a name="EntitlementId" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.entitlementId"></a>

```go
EntitlementId *string
```

- *Type:* *string

The ID to use for this Entitlement.

This will become the last part of the resource name.
This value should be 4-63 characters, and valid characters are "[a-z]", "[0-9]", and "-". The first character should be from [a-z].
This value should be unique among all other Entitlements under the specified 'parent'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/data-sources/privileged_access_manager_entitlement#entitlement_id DataGooglePrivilegedAccessManagerEntitlement#entitlement_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/data-sources/privileged_access_manager_entitlement#id DataGooglePrivilegedAccessManagerEntitlement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The region of the Entitlement resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/data-sources/privileged_access_manager_entitlement#location DataGooglePrivilegedAccessManagerEntitlement#location}

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

Format: projects/{project-id|project-number} or organizations/{organization-number} or folders/{folder-number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/data-sources/privileged_access_manager_entitlement#parent DataGooglePrivilegedAccessManagerEntitlement#parent}

---

### DataGooglePrivilegedAccessManagerEntitlementEligibleUsers <a name="DataGooglePrivilegedAccessManagerEntitlementEligibleUsers" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

&datagoogleprivilegedaccessmanagerentitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsers {

}
```


### DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccess <a name="DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccess" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

&datagoogleprivilegedaccessmanagerentitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccess {

}
```


### DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess <a name="DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

&datagoogleprivilegedaccessmanagerentitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess {

}
```


### DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings <a name="DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

&datagoogleprivilegedaccessmanagerentitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings {

}
```


### DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig <a name="DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

&datagoogleprivilegedaccessmanagerentitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig {

}
```


### DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory <a name="DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

&datagoogleprivilegedaccessmanagerentitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory {

}
```


### DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured <a name="DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

&datagoogleprivilegedaccessmanagerentitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList <a name="DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

datagoogleprivilegedaccessmanagerentitlement.NewDataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.get"></a>

```go
func Get(index *f64) DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference <a name="DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

datagoogleprivilegedaccessmanagerentitlement.NewDataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.adminEmailRecipients">AdminEmailRecipients</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.requesterEmailRecipients">RequesterEmailRecipients</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets">DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminEmailRecipients`<sup>Required</sup> <a name="AdminEmailRecipients" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.adminEmailRecipients"></a>

```go
func AdminEmailRecipients() *[]*string
```

- *Type:* *[]*string

---

##### `RequesterEmailRecipients`<sup>Required</sup> <a name="RequesterEmailRecipients" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.requesterEmailRecipients"></a>

```go
func RequesterEmailRecipients() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets">DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a>

---


### DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList <a name="DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

datagoogleprivilegedaccessmanagerentitlement.NewDataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.get"></a>

```go
func Get(index *f64) DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList <a name="DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

datagoogleprivilegedaccessmanagerentitlement.NewDataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.get"></a>

```go
func Get(index *f64) DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference <a name="DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

datagoogleprivilegedaccessmanagerentitlement.NewDataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.requireApproverJustification">RequireApproverJustification</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.steps">Steps</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RequireApproverJustification`<sup>Required</sup> <a name="RequireApproverJustification" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.requireApproverJustification"></a>

```go
func RequireApproverJustification() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.steps"></a>

```go
func Steps() DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals</a>

---


### DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList <a name="DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

datagoogleprivilegedaccessmanagerentitlement.NewDataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.get"></a>

```go
func Get(index *f64) DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference <a name="DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

datagoogleprivilegedaccessmanagerentitlement.NewDataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.principals">Principals</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.principals"></a>

```go
func Principals() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers</a>

---


### DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList <a name="DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

datagoogleprivilegedaccessmanagerentitlement.NewDataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.get"></a>

```go
func Get(index *f64) DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference <a name="DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

datagoogleprivilegedaccessmanagerentitlement.NewDataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvalsNeeded">ApprovalsNeeded</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approverEmailRecipients">ApproverEmailRecipients</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvers">Approvers</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApprovalsNeeded`<sup>Required</sup> <a name="ApprovalsNeeded" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvalsNeeded"></a>

```go
func ApprovalsNeeded() *f64
```

- *Type:* *f64

---

##### `ApproverEmailRecipients`<sup>Required</sup> <a name="ApproverEmailRecipients" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approverEmailRecipients"></a>

```go
func ApproverEmailRecipients() *[]*string
```

- *Type:* *[]*string

---

##### `Approvers`<sup>Required</sup> <a name="Approvers" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvers"></a>

```go
func Approvers() DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps</a>

---


### DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference <a name="DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

datagoogleprivilegedaccessmanagerentitlement.NewDataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.manualApprovals">ManualApprovals</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflow">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ManualApprovals`<sup>Required</sup> <a name="ManualApprovals" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.manualApprovals"></a>

```go
func ManualApprovals() DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflow
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflow">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflow</a>

---


### DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList <a name="DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

datagoogleprivilegedaccessmanagerentitlement.NewDataGooglePrivilegedAccessManagerEntitlementEligibleUsersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.get"></a>

```go
func Get(index *f64) DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference <a name="DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

datagoogleprivilegedaccessmanagerentitlement.NewDataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.principals">Principals</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsers">DataGooglePrivilegedAccessManagerEntitlementEligibleUsers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.principals"></a>

```go
func Principals() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGooglePrivilegedAccessManagerEntitlementEligibleUsers
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsers">DataGooglePrivilegedAccessManagerEntitlementEligibleUsers</a>

---


### DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList <a name="DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

datagoogleprivilegedaccessmanagerentitlement.NewDataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.get"></a>

```go
func Get(index *f64) DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference <a name="DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

datagoogleprivilegedaccessmanagerentitlement.NewDataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resource">Resource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.roleBindings">RoleBindings</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList">DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess">DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resource"></a>

```go
func Resource() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `RoleBindings`<sup>Required</sup> <a name="RoleBindings" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.roleBindings"></a>

```go
func RoleBindings() DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList">DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess">DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess</a>

---


### DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList <a name="DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

datagoogleprivilegedaccessmanagerentitlement.NewDataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.get"></a>

```go
func Get(index *f64) DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference <a name="DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

datagoogleprivilegedaccessmanagerentitlement.NewDataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.conditionExpression">ConditionExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings">DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionExpression`<sup>Required</sup> <a name="ConditionExpression" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.conditionExpression"></a>

```go
func ConditionExpression() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings">DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings</a>

---


### DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList <a name="DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

datagoogleprivilegedaccessmanagerentitlement.NewDataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.get"></a>

```go
func Get(index *f64) DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference <a name="DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

datagoogleprivilegedaccessmanagerentitlement.NewDataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.gcpIamAccess">GcpIamAccess</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList">DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccess">DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GcpIamAccess`<sup>Required</sup> <a name="GcpIamAccess" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.gcpIamAccess"></a>

```go
func GcpIamAccess() DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList">DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccess
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccess">DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccess</a>

---


### DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList <a name="DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

datagoogleprivilegedaccessmanagerentitlement.NewDataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.get"></a>

```go
func Get(index *f64) DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList <a name="DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

datagoogleprivilegedaccessmanagerentitlement.NewDataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.get"></a>

```go
func Get(index *f64) DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference <a name="DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

datagoogleprivilegedaccessmanagerentitlement.NewDataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory">DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory">DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory</a>

---


### DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference <a name="DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

datagoogleprivilegedaccessmanagerentitlement.NewDataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.notMandatory">NotMandatory</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList">DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.unstructured">Unstructured</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList">DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig">DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NotMandatory`<sup>Required</sup> <a name="NotMandatory" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.notMandatory"></a>

```go
func NotMandatory() DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList">DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList</a>

---

##### `Unstructured`<sup>Required</sup> <a name="Unstructured" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.unstructured"></a>

```go
func Unstructured() DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList">DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig">DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig</a>

---


### DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList <a name="DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

datagoogleprivilegedaccessmanagerentitlement.NewDataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.get"></a>

```go
func Get(index *f64) DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference <a name="DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleprivilegedaccessmanagerentitlement"

datagoogleprivilegedaccessmanagerentitlement.NewDataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured">DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured">DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured</a>

---



