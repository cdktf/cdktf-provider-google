# `dataGoogleNetworkManagementConnectivityTestRun` Submodule <a name="`dataGoogleNetworkManagementConnectivityTestRun` Submodule" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleNetworkManagementConnectivityTestRun <a name="DataGoogleNetworkManagementConnectivityTestRun" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/network_management_connectivity_test_run google_network_management_connectivity_test_run}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.Initializer"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTestRun } from '@cdktf/provider-google'

new dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun(scope: Construct, id: string, config: DataGoogleNetworkManagementConnectivityTestRunConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig">DataGoogleNetworkManagementConnectivityTestRunConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig">DataGoogleNetworkManagementConnectivityTestRunConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleNetworkManagementConnectivityTestRun resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.isConstruct"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTestRun } from '@cdktf/provider-google'

dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.isTerraformElement"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTestRun } from '@cdktf/provider-google'

dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.isTerraformDataSource"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTestRun } from '@cdktf/provider-google'

dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.generateConfigForImport"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTestRun } from '@cdktf/provider-google'

dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleNetworkManagementConnectivityTestRun resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleNetworkManagementConnectivityTestRun to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleNetworkManagementConnectivityTestRun that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/network_management_connectivity_test_run#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleNetworkManagementConnectivityTestRun to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.reachabilityDetails">reachabilityDetails</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `reachabilityDetails`<sup>Required</sup> <a name="reachabilityDetails" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.reachabilityDetails"></a>

```typescript
public readonly reachabilityDetails: DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleNetworkManagementConnectivityTestRunConfig <a name="DataGoogleNetworkManagementConnectivityTestRunConfig" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.Initializer"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTestRun } from '@cdktf/provider-google'

const dataGoogleNetworkManagementConnectivityTestRunConfig: dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.name">name</a></code> | <code>string</code> | Unique name for the connectivity test. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/network_management_connectivity_test_run#id DataGoogleNetworkManagementConnectivityTestRun#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/network_management_connectivity_test_run#project DataGoogleNetworkManagementConnectivityTestRun#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Unique name for the connectivity test.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/network_management_connectivity_test_run#name DataGoogleNetworkManagementConnectivityTestRun#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/network_management_connectivity_test_run#id DataGoogleNetworkManagementConnectivityTestRun#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/network_management_connectivity_test_run#project DataGoogleNetworkManagementConnectivityTestRun#project}.

---

### DataGoogleNetworkManagementConnectivityTestRunReachabilityDetails <a name="DataGoogleNetworkManagementConnectivityTestRunReachabilityDetails" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetails.Initializer"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTestRun } from '@cdktf/provider-google'

const dataGoogleNetworkManagementConnectivityTestRunReachabilityDetails: dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetails = { ... }
```


### DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTraces <a name="DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTraces" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTraces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTraces.Initializer"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTestRun } from '@cdktf/provider-google'

const dataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTraces: dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTraces = { ... }
```


### DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfo <a name="DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfo" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfo.Initializer"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTestRun } from '@cdktf/provider-google'

const dataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfo: dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfo = { ... }
```


### DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesSteps <a name="DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesSteps" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesSteps.Initializer"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTestRun } from '@cdktf/provider-google'

const dataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesSteps: dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesSteps = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList <a name="DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.Initializer"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTestRun } from '@cdktf/provider-google'

new dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.get"></a>

```typescript
public get(index: number): DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference <a name="DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.Initializer"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTestRun } from '@cdktf/provider-google'

new dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.property.result">result</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.property.traces">traces</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.property.verifyTime">verifyTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetails">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.property.result"></a>

```typescript
public readonly result: string;
```

- *Type:* string

---

##### `traces`<sup>Required</sup> <a name="traces" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.property.traces"></a>

```typescript
public readonly traces: DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList</a>

---

##### `verifyTime`<sup>Required</sup> <a name="verifyTime" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.property.verifyTime"></a>

```typescript
public readonly verifyTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleNetworkManagementConnectivityTestRunReachabilityDetails;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetails">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetails</a>

---


### DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList <a name="DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.Initializer"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTestRun } from '@cdktf/provider-google'

new dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.get"></a>

```typescript
public get(index: number): DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference <a name="DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.Initializer"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTestRun } from '@cdktf/provider-google'

new dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.destinationIp">destinationIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.destinationNetworkUri">destinationNetworkUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.destinationPort">destinationPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.sourceAgentUri">sourceAgentUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.sourceIp">sourceIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.sourceNetworkUri">sourceNetworkUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.sourcePort">sourcePort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfo">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationIp`<sup>Required</sup> <a name="destinationIp" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.destinationIp"></a>

```typescript
public readonly destinationIp: string;
```

- *Type:* string

---

##### `destinationNetworkUri`<sup>Required</sup> <a name="destinationNetworkUri" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.destinationNetworkUri"></a>

```typescript
public readonly destinationNetworkUri: string;
```

- *Type:* string

---

##### `destinationPort`<sup>Required</sup> <a name="destinationPort" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.destinationPort"></a>

```typescript
public readonly destinationPort: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `sourceAgentUri`<sup>Required</sup> <a name="sourceAgentUri" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.sourceAgentUri"></a>

```typescript
public readonly sourceAgentUri: string;
```

- *Type:* string

---

##### `sourceIp`<sup>Required</sup> <a name="sourceIp" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.sourceIp"></a>

```typescript
public readonly sourceIp: string;
```

- *Type:* string

---

##### `sourceNetworkUri`<sup>Required</sup> <a name="sourceNetworkUri" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.sourceNetworkUri"></a>

```typescript
public readonly sourceNetworkUri: string;
```

- *Type:* string

---

##### `sourcePort`<sup>Required</sup> <a name="sourcePort" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.sourcePort"></a>

```typescript
public readonly sourcePort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfo;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfo">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfo</a>

---


### DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList <a name="DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.Initializer"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTestRun } from '@cdktf/provider-google'

new dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.get"></a>

```typescript
public get(index: number): DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference <a name="DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.Initializer"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTestRun } from '@cdktf/provider-google'

new dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.property.endpointInfo">endpointInfo</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.property.forwardTraceId">forwardTraceId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.property.steps">steps</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTraces">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTraces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointInfo`<sup>Required</sup> <a name="endpointInfo" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.property.endpointInfo"></a>

```typescript
public readonly endpointInfo: DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList</a>

---

##### `forwardTraceId`<sup>Required</sup> <a name="forwardTraceId" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.property.forwardTraceId"></a>

```typescript
public readonly forwardTraceId: number;
```

- *Type:* number

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.property.steps"></a>

```typescript
public readonly steps: DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTraces;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTraces">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTraces</a>

---


### DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList <a name="DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.Initializer"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTestRun } from '@cdktf/provider-google'

new dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.get"></a>

```typescript
public get(index: number): DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference <a name="DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.Initializer"></a>

```typescript
import { dataGoogleNetworkManagementConnectivityTestRun } from '@cdktf/provider-google'

new dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.causesDrop">causesDrop</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesSteps">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesSteps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `causesDrop`<sup>Required</sup> <a name="causesDrop" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.causesDrop"></a>

```typescript
public readonly causesDrop: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesSteps;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesSteps">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesSteps</a>

---



