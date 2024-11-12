# `dataGoogleComputeInstanceGuestAttributes` Submodule <a name="`dataGoogleComputeInstanceGuestAttributes` Submodule" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeInstanceGuestAttributes <a name="DataGoogleComputeInstanceGuestAttributes" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/compute_instance_guest_attributes google_compute_instance_guest_attributes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGuestAttributes } from '@cdktf/provider-google'

new dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes(scope: Construct, id: string, config: DataGoogleComputeInstanceGuestAttributesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig">DataGoogleComputeInstanceGuestAttributesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig">DataGoogleComputeInstanceGuestAttributesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetQueryPath">resetQueryPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetVariableKey">resetVariableKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetQueryPath` <a name="resetQueryPath" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetQueryPath"></a>

```typescript
public resetQueryPath(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetVariableKey` <a name="resetVariableKey" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetVariableKey"></a>

```typescript
public resetVariableKey(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleComputeInstanceGuestAttributes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.isConstruct"></a>

```typescript
import { dataGoogleComputeInstanceGuestAttributes } from '@cdktf/provider-google'

dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.isTerraformElement"></a>

```typescript
import { dataGoogleComputeInstanceGuestAttributes } from '@cdktf/provider-google'

dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.isTerraformDataSource"></a>

```typescript
import { dataGoogleComputeInstanceGuestAttributes } from '@cdktf/provider-google'

dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.generateConfigForImport"></a>

```typescript
import { dataGoogleComputeInstanceGuestAttributes } from '@cdktf/provider-google'

dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleComputeInstanceGuestAttributes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleComputeInstanceGuestAttributes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleComputeInstanceGuestAttributes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/compute_instance_guest_attributes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeInstanceGuestAttributes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.queryValue">queryValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList">DataGoogleComputeInstanceGuestAttributesQueryValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.variableValue">variableValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.queryPathInput">queryPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.variableKeyInput">variableKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.queryPath">queryPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.variableKey">variableKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `queryValue`<sup>Required</sup> <a name="queryValue" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.queryValue"></a>

```typescript
public readonly queryValue: DataGoogleComputeInstanceGuestAttributesQueryValueList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList">DataGoogleComputeInstanceGuestAttributesQueryValueList</a>

---

##### `variableValue`<sup>Required</sup> <a name="variableValue" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.variableValue"></a>

```typescript
public readonly variableValue: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `queryPathInput`<sup>Optional</sup> <a name="queryPathInput" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.queryPathInput"></a>

```typescript
public readonly queryPathInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `variableKeyInput`<sup>Optional</sup> <a name="variableKeyInput" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.variableKeyInput"></a>

```typescript
public readonly variableKeyInput: string;
```

- *Type:* string

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `queryPath`<sup>Required</sup> <a name="queryPath" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.queryPath"></a>

```typescript
public readonly queryPath: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `variableKey`<sup>Required</sup> <a name="variableKey" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.variableKey"></a>

```typescript
public readonly variableKey: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeInstanceGuestAttributesConfig <a name="DataGoogleComputeInstanceGuestAttributesConfig" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGuestAttributes } from '@cdktf/provider-google'

const dataGoogleComputeInstanceGuestAttributesConfig: dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/compute_instance_guest_attributes#name DataGoogleComputeInstanceGuestAttributes#name}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/compute_instance_guest_attributes#id DataGoogleComputeInstanceGuestAttributes#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/compute_instance_guest_attributes#project DataGoogleComputeInstanceGuestAttributes#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.queryPath">queryPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/compute_instance_guest_attributes#query_path DataGoogleComputeInstanceGuestAttributes#query_path}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/compute_instance_guest_attributes#region DataGoogleComputeInstanceGuestAttributes#region}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.variableKey">variableKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/compute_instance_guest_attributes#variable_key DataGoogleComputeInstanceGuestAttributes#variable_key}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.zone">zone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/compute_instance_guest_attributes#zone DataGoogleComputeInstanceGuestAttributes#zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/compute_instance_guest_attributes#name DataGoogleComputeInstanceGuestAttributes#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/compute_instance_guest_attributes#id DataGoogleComputeInstanceGuestAttributes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/compute_instance_guest_attributes#project DataGoogleComputeInstanceGuestAttributes#project}.

---

##### `queryPath`<sup>Optional</sup> <a name="queryPath" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.queryPath"></a>

```typescript
public readonly queryPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/compute_instance_guest_attributes#query_path DataGoogleComputeInstanceGuestAttributes#query_path}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/compute_instance_guest_attributes#region DataGoogleComputeInstanceGuestAttributes#region}.

---

##### `variableKey`<sup>Optional</sup> <a name="variableKey" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.variableKey"></a>

```typescript
public readonly variableKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/compute_instance_guest_attributes#variable_key DataGoogleComputeInstanceGuestAttributes#variable_key}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/compute_instance_guest_attributes#zone DataGoogleComputeInstanceGuestAttributes#zone}.

---

### DataGoogleComputeInstanceGuestAttributesQueryValue <a name="DataGoogleComputeInstanceGuestAttributesQueryValue" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValue.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGuestAttributes } from '@cdktf/provider-google'

const dataGoogleComputeInstanceGuestAttributesQueryValue: dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValue = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeInstanceGuestAttributesQueryValueList <a name="DataGoogleComputeInstanceGuestAttributesQueryValueList" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGuestAttributes } from '@cdktf/provider-google'

new dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.get"></a>

```typescript
public get(index: number): DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference <a name="DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGuestAttributes } from '@cdktf/provider-google'

new dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValue">DataGoogleComputeInstanceGuestAttributesQueryValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeInstanceGuestAttributesQueryValue;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValue">DataGoogleComputeInstanceGuestAttributesQueryValue</a>

---



